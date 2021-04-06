/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
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
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
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
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
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
export const create_Asset = /* GraphQL */ `
  mutation Create_Asset(
    $input: Create_AssetInput!
    $condition: Model_AssetConditionInput
  ) {
    create_Asset(input: $input, condition: $condition) {
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
export const update_Asset = /* GraphQL */ `
  mutation Update_Asset(
    $input: Update_AssetInput!
    $condition: Model_AssetConditionInput
  ) {
    update_Asset(input: $input, condition: $condition) {
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
export const delete_Asset = /* GraphQL */ `
  mutation Delete_Asset(
    $input: Delete_AssetInput!
    $condition: Model_AssetConditionInput
  ) {
    delete_Asset(input: $input, condition: $condition) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      assets {
        nextToken
        startedAt
      }
      _assets {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      assets {
        nextToken
        startedAt
      }
      _assets {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      assets {
        nextToken
        startedAt
      }
      _assets {
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
      createdAt
      weight
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
      nodes {
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
      createdAt
      weight
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
      nodes {
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
      createdAt
      weight
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
      nodes {
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
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      edge {
        id
        type
        createdAt
        weight
        _version
        _deleted
        _lastChangedAt
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
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      edge {
        id
        type
        createdAt
        weight
        _version
        _deleted
        _lastChangedAt
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
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      edge {
        id
        type
        createdAt
        weight
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
