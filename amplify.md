# Amplify Utilities for `-0` Integration

There are certain modules within `@aws-amplify` that are
helpful to integrate into `-0` libraries for use on the
client:

- `@aws-amplify/datastore`: Provides a client-first DX using IndexedDB
- `@aws-amplify/auth`: Provides authentication/authorization for AWS Appsync APIs
- `@aws-amplify/storage`: Provides object storage (S3) for client-side apps

## Integrations

All the integrations provided in this package are meant to
be used on the client. The following AWS Amplify
dependencies are integrated:

### DataStore

DataStore is integrated with `-0`'s routing Tasks. Utilities
are herein provided to make calling DataStore APIs in a more
data-centric fashion

### Storage

Storage to S3 is abstracted to simple Command-based APIs, so
that they can be composed with other actions as a pipeline

### Auth

Authentication is also integrated with `-0`'s router, so
that routes requiring special permissions dsFx are protected

# Steps

## 1: `amplify add auth`

For any Amplify project covered by the utitlies, you will
want to select the `graphql` type of API and use the
`advanced settings` options to enable `automerge` conflict
detection strategy and add `userpools` as an addition to the
default (`api key`) authorization