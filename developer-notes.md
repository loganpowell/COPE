## Global (CLI) Dependencies

These are required to be installed globally for `scripts`:

-   `npm-check-updates`
-   `jsdoc`
-   `concurrently`
-   `madge`
-   `typescript`
-   `jest`
-   `parcel`
-   `gh-pages`

## Last Compilation Environment

-   Node Version: 12.20.1/x64
-   OS: Windows 10

# Step by Step Guide

If this is your first time using the `amplify` CLI, you will
first need to configure it using

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

# 🤔 Perhaps as easy as `git clone` this repo...

TODO: See if the cloudformation template is sufficient to
regenerate all backend assets

## Initialize

```
amplify init
```

This will initialize your Amplify project

## Add GraphQL API

```
amplify add api
```

Here we will add a `graphl` API. You will copy the
[`schema.graphql`
file](https://github.com/loganpowell/COPE/blob/master/amplify/backend/api/CopeAPI/schema.graphql)
from this project and use that. This is the backbone of your
C.O.P.E. project.

## Add Authentication

```
amplify add auth
```

COPE uses two types of authorization:

1. API keys: for public `read` access to all published
   content
2. Cognito User Pools: for signed in user activity

TODO:
https://medium.com/@fullstackpho/aws-amplify-multi-auth-graphql-public-read-and-authenticated-create-update-delete-1bf5443b0ad1

## Add Admin Queries

## Add a User Pool Lambda Trigger to Automatically Add All Signed Users to the `Viewers` Group

> IMPORTANT NOTE: This configuration requires you to set
> your Lambda to have more memory than the default (120MB).
> You need to go to the lambda and set the memory to @1024.
> See more details [in the
> docs](https://docs.amplify.aws/guides/functions/configuring-lambda/q/platform/js#updating-the-default-memory-size)

`...\amplify\backend\function\<confirm>\<confirm>-cloudformation-template.json:`

```diff
"Resources": {
  "LambdaFunction": {
      ...
      "Properties": {
        "Runtime": "nodejs14.x",
+       "MemorySize": "1024", // Memory size now set to 1024 mb
        "Layers": [],
      }
      ...
    }
  },
}
```

> UPDATE: see the [Lambda Triggers] guide for how to
> configure this Lambda completely within the Amplify CLI

<!-- links -->

[lambda triggers]: https://docs.amplify.aws/cli/usage/lambda-triggers#set-up-lambda-triggers

<!-- links -->

[Automatically Adding Cognito Users to a Group on Sign up]

By default, Amplify doesn't handle adding users to any
Cognito User Pool Groups. This is unfortunate for anyone who
wants to enable special `@auth` directives to their GraphQL
schema (namely users of COPE).

We need to create a relatively simple Lambda function and
attach it to one of Cognito's [session triggers]. Here's
how...

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
        GroupName: groupName,
        UserPoolId: userPoolId,
        Username: userName,
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
            groupName: "Viewers",
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
> **Granting your Lambda permissions to Appsync to create
> ACCOUNT Node**

---

🔥 KEEP 🔻

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

> You can find your Userpool arn under the `General Settings` of your userpool listed as `Pool ARN` in AWS
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

### Updating secrets for additional environments

If you have multiple environments (e.g. `dev`/`prod`/etc),
you will need to update the secrets in each like so:

```diff
➜  cope git:(migration) ✗ amplify function update
? Select the Lambda function you want to update
+ COPECognitoPostConfirmTriggerAddToViewers

General information
* Name: COPECognitoPostConfirmTriggerAddToViewers
* Runtime: nodejs

Resource access permission
* copeAuth (read)
* CopeAPI (Mutation)

Scheduled recurring invocation
* Not configured

Lambda layers
* Not configured

Environment variables:
* Not configured

Secrets configuration
* ADMIN_EMAIL
* ADMIN_PASS

? Which setting do you want to update?
+ Secret values configuration
? What do you want to do?
+ Update a secret
? Select the secret to update:
+ ADMIN_EMAIL
? Enter the value for ADMIN_EMAIL:
+ [hidden]
? What do you want to do?
+ Update a secret
? Select the secret to update:
+ ADMIN_PASS
? Enter the value for ADMIN_PASS:
+ [hidden]
? What do you want to do?
+ I'm done
? This will immediately update secret values in the cloud. Do you want to continue?
+ Yes
Use the AWS SSM GetParameter API to retrieve secrets in your Lambda function.
More information can be found here: https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html
? Do you want to edit the local lambda function now?
+ Yes
Edit the file in your editor: /Users/logan/Desktop/projects/libs/COPE/amplify/backend/function/COPECognitoPostConfirmTriggerAddToViewers/src\index.js
?
+ Press enter to continue
```

## Granting your Lambda permissions to Appsync to create ACCOUNT Node

We need to add another feature to our post confirmation
trigger lambda: the ability to create an Account Node to
provide us a way to attach any relevant info about the user
while using the app.

### Step 1: Add Secrets access to your lambda:

`ADMIN_EMAIL` `ADMIN_PASS`

Read [a blog post] from AWS to learn about creating and
accessing Secrets

See [this medium post] for more another take or [this
article] for another

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

## Setting Admin Email and Password

Before you have a UI set up, you can add your admin user via
the Cognito UI.

However, you will not be able to `CONFIRM` this account via
the UI. To confirm it before you set up your client, you can
use the [AWSCLI]

You can change a user's password and update status using:

```sh
aws cognito-idp admin-set-user-password
  --user-pool-id <your-user-pool-id> \
  --username <username> \
  --password <password> \
  --permanent
```

<!-- links -->

[awscli]: https://docs.aws.amazon.com/cli/latest/reference/cognito-idp/admin-set-user-password.html
[this medium post]: https://medium.com/@jan.hesters/how-to-use-aws-appsync-in-lambda-functions-e593a9cef1d5
[this article]: https://adrianhall.github.io/cloud/2018/10/26/backend-graphql-trigger-appsync/
[a blog post]: https://aws.amazon.com/blogs/mobile/configure-environment-variables-and-secrets-for-your-lambda-functions-with-amplify-cli/

<!-- links -->

🔥 KEEP 🔺

## Triggering Cascading Operations on Edge CRUD:

> UPDATE: The easier (and equally effective) approach you
> can take for this is to batch deletes via graphql
> [aliases](). See [this
> example](https://github.com/loganpowell/COPE-client-utils/blob/master/src/commands/edges.ts#L144)

```diff
λ amplify function add
? Select which capability you want to add:
+ Lambda function (serverless function)
? Provide an AWS Lambda function name:
+ CopeEdgeCRUDLambda
? Choose the runtime that you want to use:
+ NodeJS
? Choose the function template that you want to use:
+ Lambda trigger
? What event source do you want to associate with Lambda trigger?
+ Amazon DynamoDB Stream
? Choose a DynamoDB event source option
+ Use API category graphql @model backed DynamoDB table(s) in the current Amplify project
Selected resource
+ CopeAPI
Choose the graphql @model(s)
+ Edge

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration
- Environment variables configuration
- Secret values configuration

? Do you want to configure advanced settings?
+ Yes
? Do you want to access other resources in this project from your Lambda function?
+ Yes
? Select the categories you want this function to have access to.
+ auth
+ api
? Auth has 2 resources in this project. Select the one you would like your Lambda to access
+ copeAuth
? Select the operations you want to permit on copeAuth
+ create
+ read
+ update
+ delete
? Api has 2 resources in this project. Select the one you would like your Lambda to access
+ CopeAPI
? Select the operations you want to permit on CopeAPI
+ Query
+ Mutation

You can access the following resource attributes as environment variables from your Lambda function
        API_COPEAPI_GRAPHQLAPIENDPOINTOUTPUT
        API_COPEAPI_GRAPHQLAPIIDOUTPUT
        API_COPEAPI_GRAPHQLAPIKEYOUTPUT
        AUTH_COPEAUTH_USERPOOLID
        ENV
        REGION
? Do you want to invoke this function on a recurring schedule?
+ No
? Do you want to enable Lambda layers for this function?
+ No
? Do you want to configure environment variables for this function?
+ No
? Do you want to configure secret values this function can access?
+ No
? Do you want to edit the local lambda function now?
+ Yes
Edit the file in your editor: C:\...\COPE\amplify\backend\function\CopeEdgeCRUDLambda\src\index.js
? Press enter to continue
Successfully added resource CopeEdgeCRUDLambda locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/CopeEdgeCRUDLambda/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
```

# Storage

In order for storage to be most easily and properly
configured, first `amplify add auth` must be added to the
project and configured appropriately.

Once you have your groups configured, you can execute:

```diff
λ amplify add storage
? Please select from one of the below mentioned services:
+ Content (Images, audio, video, etc.)
? Restrict access by?
+ Both
? Who should have access:
+ Auth and guest users
? What kind of access do you want for Authenticated users?
+ read
? What kind of access do you want for Guest users?
+ read
? Select groups:
+ Admins, Editors, Viewers
? What kind of access do you want for Admins users?
+ create/update, read, delete
? What kind of access do you want for Editors users?
+ create/update, read
? What kind of access do you want for Viewers users?
+ read
? Do you want to add a Lambda Trigger for your S3 Bucket?
+ No

```

In addition to setting up your S3 Object store via the
`amplify` CLI, there are some additional settings you will
need to set on your bucket directly:

```diff
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::{your bucket}/{public|protected}/*"
        }
    ]
}
```

A good resource for learning how to use storage from a
client can be found [in a blog post by Nader
Dabit](https://dev.to/dabit3/graphql-tutorial-how-to-manage-image-file-uploads-downloads-with-aws-appsync-aws-amplify-hga)

---

## Admin Queries

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

## There be dragons 🐉 🐉 🐉

Amplify still has some rough edges and you may run into some
errors along the way

```
Following resources failed

× An error occurred when pushing the resources to the cloud

Resource is not in the state stackUpdateComplete
An error occurred during the push operation: Resource is not in the state stackUpdateComplete
```

for this, I've found the easiest
[solution](https://github.com/aws-amplify/amplify-cli/issues/82#issuecomment-639908474)
is to add an arbitrary extra space to your `schema.graphql`
file and then run `amplify push` again

### Enable Iterative GSI Updates

[source](https://docs.amplify.aws/cli/reference/feature-flags/#enableIterativeGsiUpdates)

```
Attempting to mutate more than 1 global secondary index at the same time.

```

for
[this](https://docs.amplify.aws/cli/reference/feature-flags/#enableIterativeGsiUpdates)
To enable multiple GSI updates, set the
`"enableiterativegsiupdates"` feature flag to true in your
`amplify/cli.json` (located in the `amplify/` directory
under root).

## ⚠ ERRORS? ⚠

The most common errors come from trying to change primary
indices, which causes - in the backend - a simultaneous
delete and update operations on the same index. This will
cause Amplify and the cloud environment to choke. If you
need to change an index, do it by first commenting out the
index, then `amplify push`ing that change, then make the
change to the index and `amplify push` again.

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
amplify pull --appId <id> --envName <env>
```

Then you will

<!--////////////////////  LINKS  /////////////////////-->

[automatically adding cognito users to a group on sign up]: https://bobbyhadz.com/blog/aws-cognito-add-user-to-group
[session triggers]: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html
[lambda console]: https://console.aws.amazon.com/lambda/home
[code referenced from s.o.]: https://stackoverflow.com/questions/49984024/aws-cognito-amplify-have-new-user-sign-ups-be-automatically-add-to-a-user-grou/50003946#50003946

## Add Custom Email Registration via SES

By default, when setting up authentication with Amplify,
Cognito sends emails on your behalf. If you look at the user
group Amplify created for you in your AWS console, you'll
see Best practices suggest that customers send emails
through Amazon SES for production User Pools due to a daily
email limit.

TODO:
https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html

---

📌 TODO:

-   https://docs.amplify.aws/cli/graphql-transformer/auth#owner-authorization
    -   client side (if needed):
        https://github.com/aws-amplify/amplify-cli/issues/3794
-   https://docs.amplify.aws/cli/usage/mock#config-files
-   https://docs.amplify.aws/lib/datastore/setup-auth-rules/q/platform/js#configure-multiple-authorization-types
-   https://docs.amplify.aws/lib/graphqlapi/create-or-re-use-existing-backend/q/platform/js#create-new-appsync-graphql-api
-   https://docs.amplify.aws/lib/auth/start/q/platform/js#configure-your-application
-   https://medium.com/@dantasfiles/three-methods-to-get-user-information-in-aws-amplify-authentication-e4e39e658c33

# Migration to AWS CDK:

## CDK Tutorials

-   [Getting Started](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
-   [Appsync + DynamoDB + Lambda](https://aws.amazon.com/blogs/mobile/building-scalable-graphql-apis-on-aws-with-cdk-and-aws-appsync/)
-   [appsync with cdk + graphql transformer](https://www.trek10.com/blog/appsync-with-the-aws-cloud-development-kit)

    -   [lib](https://github.com/kcwinner/cdk-appsync-transformer)

-   [Egghead tutorial with serverless](https://egghead.io/courses/build-a-graphql-api-with-aws-cdk-and-appsync-7d2a5fbc)
-   [AWS Appsync with CDK](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/67662c95-2007-4281-ae51-5313cd7caa67/en-US/lab1/2-deploy-with-cdk)

## AWS CloudFormation Tutorials

-   [CFN Masterclass youtube](https://www.youtube.com/watch?v=6R44BADNJA8)
-   [Cloud formation template reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html)

## VTL

-   [VTL resolver mapping template reference](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html)
-   [Article: Lamdba vs VTL](https://dev.to/skorfmann/aws-appsync-direct-lambda-vs-dynamodb-resolver-2596)
-   [SO lambda vs VTL](https://stackoverflow.com/questions/61887922/aws-appsync-resolvers-lambda-function-vs-velocity-template-language-vtl)
-   [pipeline resolvers](https://thenewstack.io/why-serverless-graphql-is-better-with-aws-appsync/)
-   [burningmonk interview re: VTL vs lambda](https://aws.fm/episodes/episode-5-yan-cui)
-   [Generate appsync vtl files without amplify cli](https://medium.com/collaborne-engineering/generate-appsync-vtl-files-without-amplify-cli-e5658fca2da5)

## Lambda

-   [Direct lambda resolvers](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/67662c95-2007-4281-ae51-5313cd7caa67/en-US/lab3/1-direct-lambda)

## S3

-   [SO how to use VTL for S3 directly with DynamoDB](https://stackoverflow.com/questions/48495338/how-to-upload-file-to-aws-s3-using-aws-appsync/50218870#50218870)
-

### Examples

-   [union types](https://github.com/yinlinchen/amplify-appsync-graphql/blob/master/docs/uniontype.md)
-   [TODO app Appsync API with CDK](https://gist.github.com/dabit3/e325dbfc55b4d59f05c949399b3c5d8c)
-   [Custom GraphQL Transformers](https://kaustavghosh06.github.io/docs/cli-toolchain/plugins?sdk=js)

### Existing (COPE) Appsync functions

-   [console](https://console.aws.amazon.com/appsync/home?region=us-east-1#/dmziwpiehbeclofncicxhe47xq/v1/functions)

## GSIs

-   [COPE example GSI: EdgeNode](https://console.aws.amazon.com/dynamodbv2/home?region=us-east-1#table?initialTagKey=&name=EdgeNode-5gkobp75jjd2vioh5harxftoji-dev&tab=indexes)

## Amplify CLI Plugins

-   [graphql-model-transformer.ts](https://github.com/aws-amplify/amplify-cli/blob/master/packages/amplify-graphql-model-transformer/src/graphql-model-transformer.ts)
-   [authoring a new plugin](https://docs.amplify.aws/cli/plugins/authoring/)
