/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const nodeCreate = /* GraphQL */ `
    mutation CreateNode($input: CreateNodeInput!) {
        createNode(input: $input) {
            id
            status
            type
            createdAt
            updatedAt
            owner
            assets {
                items {
                    id
                    nodeID
                    createdAt
                    type
                    name
                    owner
                    content
                    editors
                    updatedAt
                }
                nextToken
            }
            assetsPr {
                items {
                    id
                    nodeID
                    createdAt
                    type
                    name
                    owner
                    content
                    editors
                    updatedAt
                }
                nextToken
            }
            edges {
                items {
                    id
                    edgeID
                    nodeID
                    owner
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`

module.exports = {
    nodeCreate,
}
