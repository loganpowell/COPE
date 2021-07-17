const AWS = require("aws-sdk")
const { Amplify } = require("@aws-amplify/core")
const { Auth } = require("@aws-amplify/auth")
const { config } = require("./aws-exports.js")
const { API, GRAPHQL_AUTH_MODE } = require("@aws-amplify/api")

Amplify.configure(config)

const logIn = async ({ user, pass }) => {
    // https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#signin
    const userSignedIn = await Auth.signIn(user.toLowerCase(), pass)
        .then(userSigned => {
            //console.log({ userSigned })
            return userSigned
        })
        .catch(logInError => {
            console.warn("error signing in:", JSON.stringify(logInError, null, 4))
            return
        })
    return { payload: userSignedIn.signInUserSession.idToken.payload }
}

const CRUD = async ({ query, variables }) =>
    await API.graphql({
        query,
        variables,
        // must specify auth mode for non-default (API key) calls
        // https://aws-amplify.github.io/amplify-js/api/enums/graphql_auth_mode.html
        authMode  : GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }).catch(e => {
        console.warn("Error during CRUD op:", JSON.stringify(e, null, 4))
    })

// https://github.com/aws-amplify/amplify-cli/issues/5239

const listEdgeNodesGQL = /* GraphQL */ `
    query listEdgeNodes ($id: ID!) {
      getEdge(id: $id) {
        nodes {
          items {
            id
          }
        }
      }
    }
`

const deleteEdgeNodesGQL = /* GraphQL */ `
    mutation deleteEdgeNodes ($id: ID!) {
        deleteEdgeNode(input: { id: $id }) {
            id
            edge_id
        }
    }
`

// TODO: done client-side?
//const createEdgeNodesGQL = /* GraphQL */ `
//    mutation createEdgeNodes ({ })
//`
exports.handler = async (event, ctx, done) => {
    //console.log("raw event:", JSON.stringify(event, null, 2))
    const { Parameters: secrets } = await new AWS.SSM()
        .getParameters({
            Names          : [ "ADMIN_EMAIL", "ADMIN_PASS" ].map(secret => process.env[secret]),
            WithDecryption : true,
        })
        .promise()

    //console.log({ Parameters })
    const [ user, pass ] = secrets.map(p => p.Value)
    /*
    record.dynamodb will contain a DynamoDB change json
    describing the item changed in DynamoDB table. Please note
    that it does not represent an original and new item as
    stored in DynamoDB table. To retrieve a original and new
    item you need to convert a DynamoDB json to original form:
    */
    const raw_records = event.Records

    try {
        return await logIn({ user, pass }).then(async ({ payload }) => {
            console.log({ payload })
            return await Promise.all(
                raw_records.map(async r => {
                    const OLD = AWS.DynamoDB.Converter.unmarshall(r?.dynamodb?.OldImage)
                    console.log({ OLD })
                    const NEW = AWS.DynamoDB.Converter.unmarshall(r?.dynamodb?.NewImage)
                    console.log({ NEW })
                    switch (r.eventName) {
                        case "REMOVE": {
                            const { id, type } = OLD
                            console.log(`Deleting EdgeNodes for Edge: ${id}, type: ${type}`)
                            const attempt = await CRUD({
                                query     : listEdgeNodesGQL,
                                variables : { id },
                            })
                            console.log("attempt:", JSON.stringify(attempt, null, 4))
                            const items = attempt?.data?.getEdge?.items || null
                            if (!items) return { items: null }
                            return await Promise.all(
                                items.map(async ({ id }) => {
                                    if (!id) return { no_id_for_node_item: id }
                                    const { data: { edge_id } } = await CRUD({
                                        query     : deleteEdgeNodesGQL,
                                        variables : { id },
                                    })
                                    console.log(`DELETED: EdgeNode ${id} for Edge ${edge_id}`)
                                    return { EdgeNode_id: id, edge_id }
                                }),
                            )
                        }
                        case "INSERT": {
                            const { id, type } = NEW
                            console.log(`CREATED: Edge ${id}, type: ${type}`)
                            return { id, type }
                            // create EdgeNodes
                        }
                        case "MODIFY": {
                            const { type: old_type } = OLD
                            const { type: new_type } = NEW
                            console.log("Edge Updated")
                            return { old_type, new_type }
                        }
                        default: {
                            console.log("No matches found for eventName:", r.eventName)
                            return null
                        }
                    }
                }),
            )
                .then(completed => {
                    console.log({ completed })
                    return done(null, event)
                })
                .catch(e => {
                    console.warn("Error processing Edge event:", e)
                    return done(e, event)
                })
        })
    } catch (error) {
        console.warn("Error processing Edge event:", error)
        return done(error, event)
    }
}

//https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
