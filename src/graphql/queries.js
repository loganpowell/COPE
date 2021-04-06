/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsset = /* GraphQL */ `
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
export const listAssets = /* GraphQL */ `
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
export const assetsByNode = /* GraphQL */ `
  query AssetsByNode(
    $node_id: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AssetsByNode(
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
export const assetsByTypeName = /* GraphQL */ `
  query AssetsByTypeName(
    $type: AssetType
    $nameCreatedAt: ModelAssetAssets_by_type_nameCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AssetsByTypeName(
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
export const syncAssets = /* GraphQL */ `
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
export const sync_Assets = /* GraphQL */ `
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
export const getNode = /* GraphQL */ `
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
export const nodesByTypeStatus = /* GraphQL */ `
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
export const syncNodes = /* GraphQL */ `
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
export const getEdge = /* GraphQL */ `
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
export const edgesByTypeWeight = /* GraphQL */ `
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
export const syncEdges = /* GraphQL */ `
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
export const syncNodeEdges = /* GraphQL */ `
  query SyncNodeEdges(
    $filter: ModelNodeEdgeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNodeEdges(
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
