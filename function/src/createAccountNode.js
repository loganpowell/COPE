const { API, GRAPHQL_AUTH_MODE } = require("@aws-amplify/api")
const { nodeCreate } = require("./graphql/mutations.js")
const { NodeType, NodeStatus } = require("./graphql/API.js")

/**
 * Local mocking with Auth is a bit more circuitous:
 * https://aws.amazon.com/blogs/mobile/amplify-framework-local-mocking/
 * (see "Seamless transition between local and cloud environments" - paragraph 2)
 * 
 */
const CRUD = async ({ query, variables }) => {
    let res
    try {
        res = await API.graphql({
            query,
            variables,
            // must specify auth mode for non-default (API key) calls
            // https://aws-amplify.github.io/amplify-js/api/enums/graphql_auth_mode.html
            authMode  : GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
    } catch (e) {
        console.warn("Error during createAccountNode op:", JSON.stringify(e, null, 4))
    }
    return res
}

// 🔻
const createAccountNode = async ({ userName }) => {
    const { data: { createNode } } = await CRUD({
        query     : nodeCreate,
        variables : {
            input : {
                id     : "ACCOUNT-" + userName,
                status : NodeStatus.PUBLISHED,
                type   : NodeType.R_ACCOUNT,
                owner  : "PostConfirmTriggerLambda"
            }
        }
    })
    console.log("ACCOUNT- Node created!")
    return createNode
}

module.exports = {
    CRUD,
    createAccountNode
}
