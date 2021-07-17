/* Amplify Params - DO NOT EDIT
	API_COPEAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_COPEAPI_GRAPHQLAPIIDOUTPUT
	API_COPEAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ const AWS = require("aws-sdk")
const { createAccountNode } = require("./createAccountNode.js")
const { Amplify } = require("@aws-amplify/core")
const { Auth } = require("@aws-amplify/auth")
const { config } = require("./aws-exports.js")

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

const adminAddUserToGroup = ({ userPoolId, userName, groupName = "Viewers" }) => {
    const params = {
        GroupName  : groupName,
        UserPoolId : userPoolId,
        Username   : userName,
    }

    const cognitoIdp = new AWS.CognitoIdentityServiceProvider()
    return cognitoIdp.adminAddUserToGroup(params).promise()
}

/**
 * Set these Environment variables in Lambda "configuration"
 * page.
 */
//const user = process.env.ADMIN_EMAIL
//const pass = process.env.ADMIN_PASS

exports.handler = async (event, context, callback) => {
    // Get secrets from Secrets Store
    const { Parameters } = await new AWS.SSM()
        .getParameters({
            Names          : [ "ADMIN_EMAIL", "ADMIN_PASS" ].map(secret => process.env[secret]),
            WithDecryption : true,
        })
        .promise()

    //console.log({ Parameters })
    const [ user, pass ] = Parameters.map(p => p.Value)
    const { userPoolId, userName } = event

    try {
        const added = await adminAddUserToGroup({
            userPoolId,
            userName,
            groupName  : "Viewers",
        })
        console.log("user added to Viewers group:", added)
        await logIn({ user, pass }).then(async ({ payload }) => {
            //console.log({ payload })

            const nodeCreated = await createAccountNode({ userName })
            console.log({ nodeCreated })
            return callback(null, event)
        })
    } catch (error) {
        return callback(error, event)
    }
}
