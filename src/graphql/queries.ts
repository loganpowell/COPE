/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsset = /* GraphQL */ `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
      id
      node_id
      createdAt
      updatedAt
      type
      name
      index
      owner
      content
      editors
    }
  }
`;
export const listAssets = /* GraphQL */ `
  query ListAssets(
    $id: ID
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAssets(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        node_id
        createdAt
        updatedAt
        type
        name
        index
        owner
        content
        editors
      }
      nextToken
    }
  }
`;
export const assetsByNode = /* GraphQL */ `
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
        updatedAt
        type
        name
        index
        owner
        content
        editors
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
        updatedAt
        type
        name
        index
        owner
        content
        editors
      }
      nextToken
    }
  }
`;
export const assetsByOwnerType = /* GraphQL */ `
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
        updatedAt
        type
        name
        index
        owner
        content
        editors
      }
      nextToken
    }
  }
`;
export const getAssetPr = /* GraphQL */ `
  query GetAssetPr($id: ID!) {
    getAssetPr(id: $id) {
      id
      node_id
      createdAt
      updatedAt
      type
      name
      index
      owner
      content
      editors
    }
  }
`;
export const listAssetPrs = /* GraphQL */ `
  query ListAssetPrs(
    $id: ID
    $filter: ModelAssetPrFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAssetPrs(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        node_id
        createdAt
        updatedAt
        type
        name
        index
        owner
        content
        editors
      }
      nextToken
    }
  }
`;
export const assetsPrByNode = /* GraphQL */ `
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
        updatedAt
        type
        name
        index
        owner
        content
        editors
      }
      nextToken
    }
  }
`;
export const assetsPrByType = /* GraphQL */ `
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
        updatedAt
        type
        name
        index
        owner
        content
        editors
      }
      nextToken
    }
  }
`;
export const assetsPrByOwnerType = /* GraphQL */ `
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
        updatedAt
        type
        name
        index
        owner
        content
        editors
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
        items {
          id
          node_id
          createdAt
          updatedAt
          type
          name
          index
          owner
          content
          editors
        }
        nextToken
      }
      assetsPr {
        items {
          id
          node_id
          createdAt
          updatedAt
          type
          name
          index
          owner
          content
          editors
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
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $id: ID
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNodes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
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
export const nodesByOwnerStatus = /* GraphQL */ `
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
export const nodesByOwnerType = /* GraphQL */ `
  query NodesByOwnerType(
    $owner: String
    $typeCreatedAt: ModelNodeNodes_by_owner_type_createdAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByOwnerType(
      owner: $owner
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
export const getEdge = /* GraphQL */ `
  query GetEdge($id: ID!) {
    getEdge(id: $id) {
      id
      type
      createdAt
      owner
      weight
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
      updatedAt
    }
  }
`;
export const listEdges = /* GraphQL */ `
  query ListEdges(
    $id: ID
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEdges(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        type
        createdAt
        owner
        weight
        nodes {
          nextToken
        }
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
        nodes {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
