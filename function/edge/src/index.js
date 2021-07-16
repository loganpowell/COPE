const AWS = require("aws-sdk")

// https://github.com/aws-amplify/amplify-cli/issues/5239
const gqlDeleteItem = async (type, id) => {
    const query = /* GraphQL */ `
      mutation DeleteItem($id: ID = "") {
        delete${type}(input: { id: $id }) {
          id
        }
      }
    `
}

const gqlListEdgeConnections = async id => {
    const query = /* GraphQL */ `
        mutation 
    `
}
const query = /* GraphQL */ `
    query ListCompanyConnections($companyID: ID = "") {
      listAttorneyAssignments(filter: { companyID: { eq: $companyID } }) {
        items {
          id
        }
      }
      listParalegalAssignments(filter: { companyID: { eq: $companyID } }) {
        items {
          id
        }
      }
    }
`
// https://docs.amplify.aws/cli/usage/lambda-triggers#dynamodb-lambda-triggers
const cleanupConnections = async records => {
    const companyIDs = records
        .filter(record => record.old.__typename === "❓")
        .filter(record => !record.new.id)
        .map(record => record.old)
        .map(company => company.id)

    await Promise.all([
        // For each company, find all their remaining connections and delete them.
        ...companyIDs.map(async companyID => {
            let companyResponse
            try {
                companyResponse = await null // gqlListCompanyConnections(companyID)
            } catch (e) {
                console.log(e)
            }

            if (companyResponse) {
                const attorneys = companyResponse.listAttorneyAssignments.items || []
                const paralegals = companyResponse.listParalegalAssignments.items || []

                await Promise.all([
                    ...attorneys.map(async employer =>
                        gqlDeleteItem("AttorneyAssignment", employer.id),
                    ),
                    ...paralegals.map(async employer =>
                        gqlDeleteItem("ParalegalAssignment", employer.id),
                    ),
                ])
            }

            return true
        }),
    ])
}

exports.handler = async event => {
    console.log("raw event:", JSON.stringify(event, null, 2))
    /*
    record.dynamodb will contain a DynamoDB change json
    describing the item changed in DynamoDB table. Please note
    that it does not represent an original and new item as
    stored in DynamoDB table. To retrieve a original and new
    item you need to convert a DynamoDB json to original form:
    */
    const records = event.Records.map(record => ({
        new : AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage),
        old : AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage),
    }))
    //event.Records.forEach(record => {
    //    console.log(record.eventID)
    //    console.log(record.eventName)
    //    console.log("DynamoDB Record: %j", record.dynamodb)
    //})
    console.log("marshalled records:", JSON.stringify(records, null, 4))
    return Promise.resolve("Successfully processed DynamoDB record")
}

//https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
//Example DynamoDB Streams record event:
const ex = {
    Records : [
        {
            eventID        : "1",
            eventVersion   : "1.0",
            dynamodb       : {
                Keys           : {
                    Id : {
                        N : "101",
                    },
                },
                NewImage       : {
                    Message : {
                        S : "New item!",
                    },
                    Id      : {
                        N : "101",
                    },
                },
                StreamViewType : "NEW_AND_OLD_IMAGES",
                SequenceNumber : "111",
                SizeBytes      : 26,
            },
            awsRegion      : "us-west-2",
            eventName      : "INSERT",
            eventSourceARN : "<eventsourcearn>",
            eventSource    : "aws:dynamodb",
        },
        {
            eventID        : "2",
            eventVersion   : "1.0",
            dynamodb       : {
                OldImage       : {
                    Message : {
                        S : "New item!",
                    },
                    Id      : {
                        N : "101",
                    },
                },
                SequenceNumber : "222",
                Keys           : {
                    Id : {
                        N : "101",
                    },
                },
                SizeBytes      : 59,
                NewImage       : {
                    Message : {
                        S : "This item has changed",
                    },
                    Id      : {
                        N : "101",
                    },
                },
                StreamViewType : "NEW_AND_OLD_IMAGES",
            },
            awsRegion      : "us-west-2",
            eventName      : "MODIFY",
            eventSourceARN : "<sourcearn>",
            eventSource    : "aws:dynamodb",
        },
    ],
}
