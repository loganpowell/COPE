export const createAsset = `
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
export const updateAsset = `
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
export const deleteAsset = `
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
export const create_Asset = `
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
export const update_Asset = `
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
export const delete_Asset = `
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
export const createNode = `
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
export const updateNode = `
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
export const deleteNode = `
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
export const createEdge = `
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
export const updateEdge = `
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
export const deleteEdge = `
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
export const createEdgeNode = `
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
export const updateEdgeNode = `
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
export const deleteEdgeNode = `
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
