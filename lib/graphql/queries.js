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
      editors
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByNode = `
  query AssetsByNode(
    $node_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByNode(
      node_id: $node_id
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
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByOwnerType = `
  query AssetsByOwnerType(
    $owner: String
    $typeCreatedAt: ModelAssetAssets_by_owner_typeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByOwnerType(
      owner: $owner
      typeCreatedAt: $typeCreatedAt
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
export const getAssetPr = `
  query GetAssetPr($id: ID!) {
    getAssetPr(id: $id) {
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
export const listAssetPrs = `
  query ListAssetPrs(
    $filter: ModelAssetPrFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetPrs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const assetsPrByNode = `
  query AssetsPrByNode(
    $node_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAssetPrFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsPrByNode(
      node_id: $node_id
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
export const assetsPrByOwnerType = `
  query AssetsPrByOwnerType(
    $owner: String
    $typeCreatedAt: ModelAssetPrAssetsPr_by_owner_typeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetPrFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsPrByOwnerType(
      owner: $owner
      typeCreatedAt: $typeCreatedAt
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
export const assetsPrByType = `
  query AssetsPrByType(
    $type: AssetType
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetPrFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsPrByType(
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
export const getNode = `
  query GetNode($id: ID!) {
    getNode(id: $id) {
      id
      status
      type
      createdAt
      updatedAt
      owner
      assets {
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
      assetsPr {
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
      edges {
        items {
          id
          edge_id
          node_id
          owner
          createdAt
          updatedAt
        }
        nextToken
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
        assets {
          nextToken
        }
        assetsPr {
          nextToken
        }
        edges {
          nextToken
        }
      }
      nextToken
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
        assets {
          nextToken
        }
        assetsPr {
          nextToken
        }
        edges {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const nodesByOwnerStatus = `
  query NodesByOwnerStatus(
    $owner: String
    $statusCreatedAt: ModelNodeNodes_by_owner_status_createdAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByOwnerStatus(
      owner: $owner
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
        assets {
          nextToken
        }
        assetsPr {
          nextToken
        }
        edges {
          nextToken
        }
      }
      nextToken
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
      updatedAt
      nodes {
        items {
          id
          edge_id
          node_id
          owner
          createdAt
          updatedAt
        }
        nextToken
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
        updatedAt
        nodes {
          nextToken
        }
      }
      nextToken
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
        updatedAt
        nodes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
