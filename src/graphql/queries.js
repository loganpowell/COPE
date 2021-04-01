/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicResource = /* GraphQL */ `
  query GetPublicResource($id: ID!) {
    getPublicResource(id: $id) {
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
export const listPublicResources = /* GraphQL */ `
  query ListPublicResources(
    $filter: ModelPublicResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncPublicResources = /* GraphQL */ `
  query SyncPublicResources(
    $filter: ModelPublicResourceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicResources(
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
export const syncDraftResources = /* GraphQL */ `
  query SyncDraftResources(
    $filter: ModelDraftResourceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDraftResources(
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
        updated_at
        deleted_at
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
export const getNode = /* GraphQL */ `
  query GetNode($id: ID!) {
    getNode(id: $id) {
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
export const nodesByTypeStatusCreatedAt = /* GraphQL */ `
  query NodesByTypeStatusCreatedAt(
    $type: NodeType
    $statusCreatedAt: ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByTypeStatusCreatedAt(
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
        updated_at
        deleted_at
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
        updated_at
        deleted_at
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
