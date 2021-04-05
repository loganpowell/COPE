/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResourcePublic = /* GraphQL */ `
  query GetResourcePublic($id: ID!) {
    getResourcePublic(id: $id) {
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
export const listResourcePublics = /* GraphQL */ `
  query ListResourcePublics(
    $filter: ModelResourcePublicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResourcePublics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncResourcePublics = /* GraphQL */ `
  query SyncResourcePublics(
    $filter: ModelResourcePublicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResourcePublics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncResourceDrafts = /* GraphQL */ `
  query SyncResourceDrafts(
    $filter: ModelResourceDraftFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResourceDrafts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
export const nodesByTypeStatusupdatedAt = /* GraphQL */ `
  query NodesByTypeStatusupdatedAt(
    $type: NodeType
    $statusUpdatedAt: ModelNodeNodes_by_type_status_updatedAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByTypeStatusupdatedAt(
      type: $type
      statusUpdatedAt: $statusUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
        weight
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
export const getEdge = /* GraphQL */ `
  query GetEdge($id: ID!) {
    getEdge(id: $id) {
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
        weight
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
