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
      owner
      content
      editors
      updatedAt
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
        owner
        content
        editors
        updatedAt
      }
      nextToken
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByType = /* GraphQL */ `
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByOwner = /* GraphQL */ `
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const get_Asset = /* GraphQL */ `
  query Get_Asset($id: ID!) {
    get_Asset(id: $id) {
      id
      node_id
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`;
export const list_Assets = /* GraphQL */ `
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const _assetsByNode = /* GraphQL */ `
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const _assetsByTypeOwner = /* GraphQL */ `
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const _assetsByOwner = /* GraphQL */ `
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
        editors
        updatedAt
      }
      nextToken
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
      owner
      assets {
        nextToken
      }
      _assets {
        nextToken
      }
      edges {
        nextToken
      }
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
        owner
      }
      nextToken
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
        owner
      }
      nextToken
    }
  }
`;
export const nodesByStatusType = /* GraphQL */ `
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
      }
      nextToken
    }
  }
`;
export const nodesByStatus = /* GraphQL */ `
  query NodesByStatus(
    $status: NodeStatus
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByStatus(
      status: $status
      createdAt: $createdAt
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
      }
      nextToken
    }
  }
`;
export const getEdge = /* GraphQL */ `
  query GetEdge($id: ID!) {
    getEdge(id: $id) {
      id
      type
      createdAt
      owner
      weight
      updatedAt
      nodes {
        nextToken
      }
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
        owner
        weight
        updatedAt
      }
      nextToken
    }
  }
`;
export const edgesByType = /* GraphQL */ `
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
        updatedAt
      }
      nextToken
    }
  }
`;
