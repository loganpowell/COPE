## Authentication

Here is a [token example]

```json
{
    "sub": "aaaaaaaa-bbbb-cccc-dddd-example",
    "aud": "xxxxxxxxxxxxexample",
    "email_verified": true,
    "token_use": "id",
    "auth_time": 1500009400,
    "iss": "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_example",
    "cognito:username": "anaya",
    "exp": 1500013000,
    "given_name": "Anaya",
    "iat": 1500009400,
    "email": "anaya@example.com"
}
```

There are a number of ways to protect your Amplify resources:

| Assignment Type | scope  | facility                                 |
| --------------- | ------ | ---------------------------------------- |
| Compile time    | groups | use `groups`                             |
| Creation time   | groups | use `groups` with `groupsField`          |
| Creation time   | owner  | use `owner` with `ownerField" (String)   |
| Creation time   | groups | use `owner` with `ownerField" ([String]) |

You can add custom attributes to the user in the [`PostConfirmationLambdaTrigger`] Read about custom attributes to Cognito User Pool user [in the Cognito docs]. There's also a nice [blog post about token strategies on medium]

[token example]: https://aws.amazon.com/premiumsupport/knowledge-center/decode-verify-cognito-json-token/
[in the cognito docs]: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-custom-attributes
[`postconfirmationlambdatrigger`]: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html
[blog post about token strategies on medium]: https://medium.com/@dantasfiles/multi-tenant-aws-amplify-method-1-cognito-custom-attributes-6719d27d84cc
