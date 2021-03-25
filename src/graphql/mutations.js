/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEdge = /* GraphQL */ `
  mutation CreateEdge(
    $input: CreateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    createEdge(input: $input, condition: $condition) {
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
export const updateEdge = /* GraphQL */ `
  mutation UpdateEdge(
    $input: UpdateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    updateEdge(input: $input, condition: $condition) {
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
export const deleteEdge = /* GraphQL */ `
  mutation DeleteEdge(
    $input: DeleteEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    deleteEdge(input: $input, condition: $condition) {
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
export const createNodeProps = /* GraphQL */ `
  mutation CreateNodeProps(
    $input: CreateNodePropsInput!
    $condition: ModelNodePropsConditionInput
  ) {
    createNodeProps(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateNodeProps = /* GraphQL */ `
  mutation UpdateNodeProps(
    $input: UpdateNodePropsInput!
    $condition: ModelNodePropsConditionInput
  ) {
    updateNodeProps(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteNodeProps = /* GraphQL */ `
  mutation DeleteNodeProps(
    $input: DeleteNodePropsInput!
    $condition: ModelNodePropsConditionInput
  ) {
    deleteNodeProps(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    createNode(input: $input, condition: $condition) {
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
export const updateNode = /* GraphQL */ `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    updateNode(input: $input, condition: $condition) {
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
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    deleteNode(input: $input, condition: $condition) {
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
export const createNodeEdge = /* GraphQL */ `
  mutation CreateNodeEdge(
    $input: CreateNodeEdgeInput!
    $condition: ModelNodeEdgeConditionInput
  ) {
    createNodeEdge(input: $input, condition: $condition) {
      id
      edge_id
      node_id
      edge {
        id
        type
        createdAt
        updatedAt
      }
      node {
        id
        status
        type
        category
        createdAt
        updated_at
        deleted_at
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNodeEdge = /* GraphQL */ `
  mutation UpdateNodeEdge(
    $input: UpdateNodeEdgeInput!
    $condition: ModelNodeEdgeConditionInput
  ) {
    updateNodeEdge(input: $input, condition: $condition) {
      id
      edge_id
      node_id
      edge {
        id
        type
        createdAt
        updatedAt
      }
      node {
        id
        status
        type
        category
        createdAt
        updated_at
        deleted_at
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNodeEdge = /* GraphQL */ `
  mutation DeleteNodeEdge(
    $input: DeleteNodeEdgeInput!
    $condition: ModelNodeEdgeConditionInput
  ) {
    deleteNodeEdge(input: $input, condition: $condition) {
      id
      edge_id
      node_id
      edge {
        id
        type
        createdAt
        updatedAt
      }
      node {
        id
        status
        type
        category
        createdAt
        updated_at
        deleted_at
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
