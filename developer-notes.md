## Global (CLI) Dependencies

These are required to be installed globally for `scripts`:

- `npm-check-updates`
- `jsdoc`
- `concurrently`
- `madge`
- `typescript`
- `jest`
- `parcel`
- `gh-pages`

## Last Compilation Environment

- Node Version: 12.20.1/x64
- OS: Windows 10

# Step by Step Guide

If this is your first time using the `amplify` CLI, you will first need to configure it using 

```
amplify configure

Specify the AWS Region
? region:  # Your preferred region: eg: us-east-1
Specify the username of the new IAM user:
? user name:  # User name for Amplify IAM user
Complete the user creation using the AWS console
```
You will be directed to the AWS Console. Once you're done,
follow the next steps:
```
Enter the access key of the newly created user:
? accessKeyId:  # YOUR_ACCESS_KEY_ID
? secretAccessKey:  # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
? Profile Name:  # (default)

Successfully set up the new user.
```

## Initialize
```
amplify init
````

This will initialize your Amplify project

## Add GraphQL API
```
amplify add api
```

Here we will add a `graphl` API. You will copy the `schema.graphql` from this project and use that. This is the backbone of your C.O.P.E. project.

## Add Authentication
```
amplify add auth
```

COPE uses two types of authorization: 

1. API keys: for public `read` access to all published content
2. Cognito User Pools: for signed in user activity

TODO:
https://medium.com/@fullstackpho/aws-amplify-multi-auth-graphql-public-read-and-authenticated-create-update-delete-1bf5443b0ad1

## Add Admin Queries

## Add a User Pool Lambda Trigger to Automatically Add All Signed Users to the `Viewers` Group

[Automatically Adding Cognito Users to a Group on Sign up]

By default, Amplify doesn't handle adding users to any
Cognito User Pool Groups. This is unfortunate for anyone who
wants to enable special `@auth` directives to their GraphQL
schema (namely users of COPE). 

We need to create a relatively simple Lambda function and
attach it to one of Cognito's [session triggers]. Here's how...

To add a user pool Lambda trigger with the console

1. Create a Lambda function

```diff
λ amplify function add
? Select which capability you want to add: 
+ Lambda function (serverless function)
? Provide an AWS Lambda function name: 
+ COPECognitoPostConfirmTriggerAddToViewers
? Choose the runtime that you want to use: 
+ NodeJS
? Choose the function template that you want to use: 
+ Hello World

Available advanced settings:
_ Resource access permissions
_ Scheduled recurring invocation
_ Lambda layers configuration

? Do you want to configure advanced settings? 
+ No
? Do you want to edit the local lambda function now? 
+ Yes
```


```js

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
```
---

> UPDATE: The following access permissions can be done via
> the Amplify CLI as well. See the section below titled:
> __Granting your Lambda permissions to Appsync to create
> ACCOUNT Node__

---

```
λ amplify function push

Current Environment: dev

| Category | Resource name                             | Operation | Provider plugin   |
| -------- | ----------------------------------------- | --------- | ----------------- |
| Function | COPECognitoPostConfirmTriggerAddToViewers | Create    | awscloudformation |
? Are you sure you want to continue? Yes

\ Updating resources in the cloud. This may take a few minutes...
```
You will also have to set the policy for the lambda function
role. In the IAM console, find the role for this lambda and
added an inline policy. It should be named something like:

`copeLambdaRole63f0443d-dev`

To get to the IAM role, you can either go directly to the
IAM console and find the role or you can go to the lambda
itself in the Lambda console under the `Permissions` menu
where you'll find a link to the IAM role under `Role name`. 

The Post Confirmation lambda trigger needs to have the IAM
permission to execute the `cognito-idp:AdminAddUserToGroup`
action on the User Pool. 

In IAM, under `Permissions`, you'll need to click on the
`lambda-execution-policy` dropdown and then `Edit policy`.
You will then edit the policy `JSON`, replacing the
`"Resource":` `"arn..."` with your Userpool arn

> You can find your Userpool arn under the `General
> Settings` of your userpool listed as `Pool ARN` in AWS
> Cognito console

```diff
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": "arn:aws:logs:us-east-1:xxxxxxxxxxxx:log-group:/aws/lambda/COPECognitoPostConfirmTriggerAddToViewers-dev:log-stream:*",
            "Effect": "Allow"
        },
+       {
+           "Effect": "Allow",
+           "Action": [
+               "cognito-idp:AdminAddUserToGroup"
+           ],
+           "Resource": "arn:aws:cognito-idp:us-east-1:xxxxxxxxxxxx:userpool/us-east-1_xxxxxxxx"
+       }
    ]
}
```

2. Navigate to the Amazon Cognito console, choose Manage
   User Pools.
3. Choose your user pool from the list
4. In your user pool, choose the `Triggers` tab from the
   navigation bar.
5. Under the `Post confirmation` trigger, choose your Lambda
   function from the Lambda function drop-down list. You may
   have to refresh the page - if you landed on it before you
   created the Lambda - to see the Lambda in the list.
6. `Save changes` to your trigger


## Granting your Lambda permissions to Appsync to create ACCOUNT Node

We need to add another feature to our post confirmation
trigger lambda: the ability to create an Account Node to
provide us a way to attach any relevant info about the user
while using the app.

### Step 1: Add Environment Keys to your lambda:

`ADMIN_EMAIL`
`ADMIN_PASS`

See [this medium post] for more another take or [this article] for another


```diff
λ amplify update function
? Select which capability you want to update: Lambda function (serverless function)
? Select the Lambda function you want to update COPECognitoPostConfirmTriggerAddToViewers
General information
_ Name: COPECognitoPostConfirmTriggerAddToViewers
_ Runtime: nodejs

Resource access permission
_ CopeAPI (Mutation)

Scheduled recurring invocation
_ Not configured

Lambda layers
_ Not configured

Environment variables:
_ Not configured

Secrets configuration
_ Not configured

? Which setting do you want to update? 
+ Resource access permissions
? Select the categories you want this function to have access to. 
+ auth, 
+ api
? Auth has 2 resources in this project. Select the one you would like your Lambda to access 
+ copeAuth
? Select the operations you want to permit on copeAuth 
read
+ create
? Api has 2 resources in this project. Select the one you would like your Lambda to access 
+ CopeAPI
? Select the operations you want to permit on CopeAPI 
+ Mutation

You can access the following resource attributes as environment variables from your Lambda function
        API_COPEAPI_GRAPHQLAPIENDPOINTOUTPUT
        API_COPEAPI_GRAPHQLAPIIDOUTPUT
        API_COPEAPI_GRAPHQLAPIKEYOUTPUT
        AUTH_COPEAUTH_USERPOOLID
? Do you want to edit the local lambda function now? 
+ Yes

```

<!-- links -->
[this medium post]:
https://medium.com/@jan.hesters/how-to-use-aws-appsync-in-lambda-functions-e593a9cef1d5
[this article]:
https://adrianhall.github.io/cloud/2018/10/26/backend-graphql-trigger-appsync/
<!-- links -->



```diff
λ amplify update auth
Please note that certain attributes may not be overwritten if you choose to use defaults settings.
Using service: Cognito, provided by: awscloudformation
 What do you want to do? Create or update Admin queries API
? Do you want to restrict access to the admin queries API to a specific Group 
+ Yes
? Select the group to restrict access with: 
+ Admins

```
--- 
##  🐉  🐉  🐉 

Amplify still has some rough edges and you may run into some
errors along the way

```
Following resources failed

× An error occurred when pushing the resources to the cloud

Resource is not in the state stackUpdateComplete
An error occurred during the push operation: Resource is not in the state stackUpdateComplete
```
for this, use this:
```
```

```
Attempting to mutate more than 1 global secondary index at the same time.

```
for
[this](https://docs.amplify.aws/cli/graphql-transformer/key#deploying-multiple-secondary-indices-gsi)
To enable multiple GSI updates, set the
`"enableiterativegsiupdates"` feature flag to true in your
`amplify/cli.json` (located in the `amplify/` directory under root).
##  🐉  🐉  🐉 



⚠ ERRORS? ⚠

If you get an error like this:
```
Error: ENOENT: no such file or directory, lstat '<full path>\COPE\amplify\#current-cloud-backend\api\CopeAPI'
```

Something got corrupted and you will have to delete the
`amplify` directory under the root folder of the project
then pull the app down. If you've not pushed it, you will
also need to reinitialize the GraphQL API.

You can find your App ID in the Amplify console in AWS
console. Navigate to your App name and in the main panel -
top left - you'll see a link to the environment (e.g.,
`dev`). At the bottom of the environment page you'll see a
command that looks like this:

```
amplify pull --appId d17wg1ypllrfa8 --envName dev
```

Then you will 
<!--////////////////////  LINKS  /////////////////////-->
[Automatically Adding Cognito Users to a Group on Sign up]: https://bobbyhadz.com/blog/aws-cognito-add-user-to-group

[session triggers]: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html

[Lambda console]: https://console.aws.amazon.com/lambda/home
[code referenced from S.O.]: https://stackoverflow.com/questions/49984024/aws-cognito-amplify-have-new-user-sign-ups-be-automatically-add-to-a-user-grou/50003946#50003946



## Add Custom Email Registration via SES

By default, when setting up authentication with Amplify, Cognito sends emails on your behalf. If you look at the user group Amplify created for you in your AWS console, you'll see Best practices suggest that customers send emails through Amazon SES for production User Pools due to a daily email limit.

TODO:
https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html

---
📌 TODO:
- https://docs.amplify.aws/cli/graphql-transformer/auth#owner-authorization
    - client side (if needed): https://github.com/aws-amplify/amplify-cli/issues/3794
- https://docs.amplify.aws/cli/usage/mock#config-files
- https://docs.amplify.aws/lib/datastore/setup-auth-rules/q/platform/js#configure-multiple-authorization-types
- https://docs.amplify.aws/lib/graphqlapi/create-or-re-use-existing-backend/q/platform/js#create-new-appsync-graphql-api
- https://docs.amplify.aws/lib/auth/start/q/platform/js#configure-your-application
- https://medium.com/@dantasfiles/three-methods-to-get-user-information-in-aws-amplify-authentication-e4e39e658c33
