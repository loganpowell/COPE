/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const nodeCreate = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
  ) {
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
          node_id
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
          node_id
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
          edge_id
          node_id
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
    nodeCreate
}
