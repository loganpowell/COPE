# AWS CDK Migration

## Main Components

1. Apps:
2. Stacks
3. Constructs

### Constructs

Constructs are the basic building blocks of AWS CDK apps. A
construct represents a cloud component and encapsulates
everything that AWS CloudFormation needs to create the
component. A construct can represent a single cloud resource
(such as an AWS Lambda function), or it can represent a
higher-level component consisting of multiple AWS CDK
resources.

AWS CDK includes the AWS Construct Library, which contains
constructs representing Amazon Web Services (AWS) resources.
This library includes constructs that represent all the
resources available on AWS.

For more information, see "[Constructs]" in the AWS Cloud
Development Kit Developer Guide.

### Stacks

Stacks are a unit of deployment in AWS CDK. All AWS
resources defined within the scope of a stack, directly or
indirectly, are provisioned as a single unit. Because AWS
CDK stacks are implemented through AWS CloudFormation
stacks, they have the same limitations. You can define any
number of stacks in an AWS CDK app.

For more information, see "[Stacks]" in the AWS Cloud
Development Kit Developer Guide.

For more information about AWS CloudFormation [limits and
restrictions], see limits and restrictions in the AWS
CloudFormation FAQs.

### Apps

Your CDK application is an app, and is represented by the
AWS CDK App class. To provision infrastructure resources,
all constructs that represent AWS resources must be defined,
directly or indirectly, within the scope of a stack
construct.

For more information, see [“Apps”] in the AWS Cloud
Development Kit Developer Guide.

```diff
+ USER EVENTS
  - read                                          O   I
  - write
- ORDER                        001 002 003 004 005 006 007
# Chron Job (batch)
  - READ details for dates              O
  - CREATE details for dates            |   I-->O
# Granicus API                          |   |   |
  - bulletin details                    I-->O   |
# Appsync Fns                                   |
  - READ a detail                               |
  - CREATE a detail                             I-->O
# DynamoDB                                          |
  - CREATE                                          I-->O
  - READ
  - UPDATE
  - DELETE

```

[constructs]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[stacks]: https://docs.aws.amazon.com/cdk/latest/guide/stacks.html
[limits and restrictions]: https://aws.amazon.com/cloudformation/faqs/#Limits_and_Restrictions
[“apps”]: https://docs.aws.amazon.com/cdk/latest/guide/apps.html

## `JSii`

AWS builds the business logic of AWS Construct Library
packages in TypeScript, and uses AWS [`JSii`] to provide
mappings to each supported programming language.

This mapping ensures that the AWS CDK construct process is
consistent across languages. AWS can then offer a
comprehensive set of construct packages that are available
in all languages. The code you write in your AWS CDK project
is built in the programming language you prefer, and the
compiled JavaScript runtime is an implementation of your
code.

[`jsii`]: https://github.com/aws/jsii

## [Setup]

[setup]: https://explore.skillbuilder.aws/learn/course/1475/play/4999/aws-cloud-development-kit-primer
