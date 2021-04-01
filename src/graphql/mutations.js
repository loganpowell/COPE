/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPublicResource = /* GraphQL */ `
  mutation CreatePublicResource(
    $input: CreatePublicResourceInput!
    $condition: ModelPublicResourceConditionInput
  ) {
    createPublicResource(input: $input, condition: $condition) {
      id
      node_id
      createdAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const updatePublicResource = /* GraphQL */ `
  mutation UpdatePublicResource(
    $input: UpdatePublicResourceInput!
    $condition: ModelPublicResourceConditionInput
  ) {
    updatePublicResource(input: $input, condition: $condition) {
      id
      node_id
      createdAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const deletePublicResource = /* GraphQL */ `
  mutation DeletePublicResource(
    $input: DeletePublicResourceInput!
    $condition: ModelPublicResourceConditionInput
  ) {
    deletePublicResource(input: $input, condition: $condition) {
      id
      node_id
      createdAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const createDraftResource = /* GraphQL */ `
  mutation CreateDraftResource(
    $input: CreateDraftResourceInput!
    $condition: ModelDraftResourceConditionInput
  ) {
    createDraftResource(input: $input, condition: $condition) {
      id
      node_id
      createdAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const updateDraftResource = /* GraphQL */ `
  mutation UpdateDraftResource(
    $input: UpdateDraftResourceInput!
    $condition: ModelDraftResourceConditionInput
  ) {
    updateDraftResource(input: $input, condition: $condition) {
      id
      node_id
      createdAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const deleteDraftResource = /* GraphQL */ `
  mutation DeleteDraftResource(
    $input: DeleteDraftResourceInput!
    $condition: ModelDraftResourceConditionInput
  ) {
    deleteDraftResource(input: $input, condition: $condition) {
      id
      node_id
      createdAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
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
      createdAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      updatedAt
      public_resources {
        nextToken
        startedAt
      }
      draft_resources {
        nextToken
        startedAt
      }
      owner
      edges {
        nextToken
        startedAt
      }
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
      createdAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      updatedAt
      public_resources {
        nextToken
        startedAt
      }
      draft_resources {
        nextToken
        startedAt
      }
      owner
      edges {
        nextToken
        startedAt
      }
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
      createdAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      updatedAt
      public_resources {
        nextToken
        startedAt
      }
      draft_resources {
        nextToken
        startedAt
      }
      owner
      edges {
        nextToken
        startedAt
      }
    }
  }
`;
export const createEdge = /* GraphQL */ `
  mutation CreateEdge(
    $input: CreateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    createEdge(input: $input, condition: $condition) {
      id
      type
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      Nodes {
        nextToken
        startedAt
      }
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
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      Nodes {
        nextToken
        startedAt
      }
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
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      Nodes {
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      node {
        id
        status
        type
        createdAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      edge {
        id
        type
        weight
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      node {
        id
        status
        type
        createdAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      edge {
        id
        type
        weight
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      node {
        id
        status
        type
        createdAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      edge {
        id
        type
        weight
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
