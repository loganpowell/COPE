/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResourcePublic = /* GraphQL */ `
  mutation CreateResourcePublic(
    $input: CreateResourcePublicInput!
    $condition: ModelResourcePublicConditionInput
  ) {
    createResourcePublic(input: $input, condition: $condition) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const updateResourcePublic = /* GraphQL */ `
  mutation UpdateResourcePublic(
    $input: UpdateResourcePublicInput!
    $condition: ModelResourcePublicConditionInput
  ) {
    updateResourcePublic(input: $input, condition: $condition) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const deleteResourcePublic = /* GraphQL */ `
  mutation DeleteResourcePublic(
    $input: DeleteResourcePublicInput!
    $condition: ModelResourcePublicConditionInput
  ) {
    deleteResourcePublic(input: $input, condition: $condition) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const createResourceDraft = /* GraphQL */ `
  mutation CreateResourceDraft(
    $input: CreateResourceDraftInput!
    $condition: ModelResourceDraftConditionInput
  ) {
    createResourceDraft(input: $input, condition: $condition) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const updateResourceDraft = /* GraphQL */ `
  mutation UpdateResourceDraft(
    $input: UpdateResourceDraftInput!
    $condition: ModelResourceDraftConditionInput
  ) {
    updateResourceDraft(input: $input, condition: $condition) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const deleteResourceDraft = /* GraphQL */ `
  mutation DeleteResourceDraft(
    $input: DeleteResourceDraftInput!
    $condition: ModelResourceDraftConditionInput
  ) {
    deleteResourceDraft(input: $input, condition: $condition) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
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
      updatedAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      resources_public {
        nextToken
        startedAt
      }
      resources_draft {
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
      updatedAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      resources_public {
        nextToken
        startedAt
      }
      resources_draft {
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
      updatedAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      resources_public {
        nextToken
        startedAt
      }
      resources_draft {
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
