export const getAsset = `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const assetsByType = `
  query AssetsByType(
    $type: AssetType
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByType(
      type: $type
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const assetsByOwner = `
  query AssetsByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByOwner(
      owner: $owner
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const get_Asset = `
  query Get_Asset($id: ID!) {
    get_Asset(id: $id) {
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
export const list_Assets = `
  query List_Assets(
    $filter: Model_AssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    list_Assets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const _assetsByNode = `
  query _assetsByNode(
    $node_id: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: Model_AssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    _assetsByNode(
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const _assetsByTypeOwner = `
  query _assetsByTypeOwner(
    $type: AssetType
    $ownerCreatedAt: Model_Asset_Assets_by_type_ownerCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: Model_AssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    _assetsByTypeOwner(
      type: $type
      ownerCreatedAt: $ownerCreatedAt
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const _assetsByOwner = `
  query _assetsByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: Model_AssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    _assetsByOwner(
      owner: $owner
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
        owner
        content
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
        owner
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        owner
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const nodesByStatusType = `
  query NodesByStatusType(
    $status: NodeStatus
    $typeCreatedAt: ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByStatusType(
      status: $status
      typeCreatedAt: $typeCreatedAt
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
        owner
        _version
        _deleted
        _lastChangedAt
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
        owner
        _version
        _deleted
        _lastChangedAt
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
        owner
        weight
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const edgesByType = `
  query EdgesByType(
    $type: EdgeType
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    edgesByType(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        owner
        weight
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
