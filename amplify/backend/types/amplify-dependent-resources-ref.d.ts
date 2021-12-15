export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "AdminsGroupRole": "string",
            "EditorsGroupRole": "string",
            "ViewersGroupRole": "string"
        },
        "copeAuth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "AdminQueriesae6420d7": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "COPECognitoPostConfirmTriggerAddToViewers": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "CopeAPI": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "CopeStorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}