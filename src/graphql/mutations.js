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
      owner
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
      owner
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
      owner
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
      owner
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
      owner
      content
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
      owner
      content
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      owner
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
      owner
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
      owner
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
      owner
      weight
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
      owner
      weight
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
      owner
      weight
      _version
      _deleted
      _lastChangedAt
      updatedAt
      nodes {
        nextToken
        startedAt
      }
    }
  }
`;
export const createEdgeNode = /* GraphQL */ `
  mutation CreateEdgeNode(
    $input: CreateEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    createEdgeNode(input: $input, condition: $condition) {
      id
      edge_id
      node_id
      owner
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
        owner
        _version
        _deleted
        _lastChangedAt
      }
      edge {
        id
        type
        createdAt
        owner
        weight
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const updateEdgeNode = /* GraphQL */ `
  mutation UpdateEdgeNode(
    $input: UpdateEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    updateEdgeNode(input: $input, condition: $condition) {
      id
      edge_id
      node_id
      owner
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
        owner
        _version
        _deleted
        _lastChangedAt
      }
      edge {
        id
        type
        createdAt
        owner
        weight
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const deleteEdgeNode = /* GraphQL */ `
  mutation DeleteEdgeNode(
    $input: DeleteEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    deleteEdgeNode(input: $input, condition: $condition) {
      id
      edge_id
      node_id
      owner
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
        owner
        _version
        _deleted
        _lastChangedAt
      }
      edge {
        id
        type
        createdAt
        owner
        weight
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
