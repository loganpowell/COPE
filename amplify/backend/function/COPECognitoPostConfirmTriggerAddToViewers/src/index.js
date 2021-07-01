import AWS from "aws-sdk"

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

        return callback(null, event)
    } catch (error) {
        return callback(error, event)
    }
}
