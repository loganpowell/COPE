/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEdge = /* GraphQL */ `
  query GetEdge($id: ID!) {
    getEdge(id: $id) {
      id
      type
      Nodes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEdges = /* GraphQL */ `
  query ListEdges(
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEdges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNodeProps = /* GraphQL */ `
  query GetNodeProps($id: ID!) {
    getNodeProps(id: $id) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const listNodePropss = /* GraphQL */ `
  query ListNodePropss(
    $filter: ModelNodePropsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNodePropss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNode = /* GraphQL */ `
  query GetNode($id: ID!) {
    getNode(id: $id) {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        content
        createdAt
        updatedAt
      }
      draft {
        id
        content
        createdAt
        updatedAt
      }
      edges {
        nextToken
      }
      updatedAt
    }
  }
`;
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        type
        category
        createdAt
        updated_at
        deleted_at
        updatedAt
      }
      nextToken
    }
  }
`;
export const nodesByType = /* GraphQL */ `
  query NodesByType(
    $type: NodeType
    $statusCreatedAt: ModelNodeTypeIndexCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByType(
      type: $type
      statusCreatedAt: $statusCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        type
        category
        createdAt
        updated_at
        deleted_at
        updatedAt
      }
      nextToken
    }
  }
`;
