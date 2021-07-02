const AWS = require("aws-sdk")

const adminAddUserToGroup = ({ userPoolId, userName, groupName = "Viewers" }) => {
    const params = {
        GroupName  : groupName,
        UserPoolId : userPoolId,
        Username   : userName
    }

    const cognitoIdp = new AWS.CognitoIdentityServiceProvider()
    return cognitoIdp.adminAddUserToGroup(params).promise()
}

exports.handler = async (event, context, callback) => {
    const { userPoolId, userName } = event

    try {
        await adminAddUserToGroup({
            userPoolId,
            userName,
            groupName  : "Viewers"
        })
        console.log("user added to Viewers group:", userName)
        return callback(null, event)
    } catch (error) {
        return callback(error, event)
    }
}
