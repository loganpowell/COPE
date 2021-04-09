export const getAsset = `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
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
export const listAssets = `
  query ListAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const assetsByNode = `
  query AssetsByNode(
    $node_id: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByNode(
      node_id: $node_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const assetsByTypeName = `
  query AssetsByTypeName(
    $type: AssetType
    $nameCreatedAt: ModelAssetAssets_by_type_nameCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByTypeName(
      type: $type
      nameCreatedAt: $nameCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAssets = `
  query SyncAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const sync_Assets = `
  query Sync_Assets(
    $filter: Model_AssetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    sync_Assets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listNodes = `
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getNode = `
  query GetNode($id: ID!) {
    getNode(id: $id) {
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
export const nodesByTypeStatus = `
  query NodesByTypeStatus(
    $type: NodeType
    $statusCreatedAt: ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByTypeStatus(
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNodes = `
  query SyncNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listEdges = `
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
        weight
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getEdge = `
  query GetEdge($id: ID!) {
    getEdge(id: $id) {
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
export const edgesByTypeWeight = `
  query EdgesByTypeWeight(
    $type: EdgeType
    $weightCreatedAt: ModelEdgeEdges_by_type_weightCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    edgesByTypeWeight(
      type: $type
      weightCreatedAt: $weightCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEdges = `
  query SyncEdges(
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEdges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEdgeNodes = `
  query SyncEdgeNodes(
    $filter: ModelEdgeNodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEdgeNodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        edge_id
        node_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
