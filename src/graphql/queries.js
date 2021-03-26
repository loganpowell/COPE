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
export const getNode = /* GraphQL */ `
  query GetNode($id: ID!) {
    getNode(id: $id) {
      id
      name
      content
      edges {
        nextToken
      }
      createdAt
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
        name
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeta = /* GraphQL */ `
  query GetMeta($id: ID!) {
    getMeta(id: $id) {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        name
        content
        createdAt
        updatedAt
      }
      draft {
        id
        name
        content
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listMetas = /* GraphQL */ `
  query ListMetas(
    $filter: ModelMetaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetas(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    $statusCreatedAt: ModelMetaByStatusAndDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMetaFilterInput
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
