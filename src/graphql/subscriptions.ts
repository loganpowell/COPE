/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset($owner: String) {
    onCreateAsset(owner: $owner) {
      id
      nodeID
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset($owner: String) {
    onUpdateAsset(owner: $owner) {
      id
      nodeID
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset($owner: String) {
    onDeleteAsset(owner: $owner) {
      id
      nodeID
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
export const onCreateAssetPr = /* GraphQL */ `
  subscription OnCreateAssetPr($owner: String) {
    onCreateAssetPr(owner: $owner) {
      id
      nodeID
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
export const onUpdateAssetPr = /* GraphQL */ `
  subscription OnUpdateAssetPr($owner: String) {
    onUpdateAssetPr(owner: $owner) {
      id
      nodeID
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
export const onDeleteAssetPr = /* GraphQL */ `
  subscription OnDeleteAssetPr($owner: String) {
    onDeleteAssetPr(owner: $owner) {
      id
      nodeID
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
export const onCreateNode = /* GraphQL */ `
  subscription OnCreateNode($owner: String) {
    onCreateNode(owner: $owner) {
      id
      status
      type
      createdAt
      updatedAt
      owner
      assets {
        items {
          id
          nodeID
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
          nodeID
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
          nodeID
          edgeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode($owner: String) {
    onUpdateNode(owner: $owner) {
      id
      status
      type
      createdAt
      updatedAt
      owner
      assets {
        items {
          id
          nodeID
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
          nodeID
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
          nodeID
          edgeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode($owner: String) {
    onDeleteNode(owner: $owner) {
      id
      status
      type
      createdAt
      updatedAt
      owner
      assets {
        items {
          id
          nodeID
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
          nodeID
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
          nodeID
          edgeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateEdge = /* GraphQL */ `
  subscription OnCreateEdge($owner: String) {
    onCreateEdge(owner: $owner) {
      id
      type
      createdAt
      owner
      weight
      nodes {
        items {
          id
          nodeID
          edgeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateEdge = /* GraphQL */ `
  subscription OnUpdateEdge($owner: String) {
    onUpdateEdge(owner: $owner) {
      id
      type
      createdAt
      owner
      weight
      nodes {
        items {
          id
          nodeID
          edgeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteEdge = /* GraphQL */ `
  subscription OnDeleteEdge($owner: String) {
    onDeleteEdge(owner: $owner) {
      id
      type
      createdAt
      owner
      weight
      nodes {
        items {
          id
          nodeID
          edgeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateEdgeNode = /* GraphQL */ `
  subscription OnCreateEdgeNode($owner: String) {
    onCreateEdgeNode(owner: $owner) {
      id
      nodeID
      edgeID
      node {
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
      edge {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEdgeNode = /* GraphQL */ `
  subscription OnUpdateEdgeNode($owner: String) {
    onUpdateEdgeNode(owner: $owner) {
      id
      nodeID
      edgeID
      node {
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
      edge {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEdgeNode = /* GraphQL */ `
  subscription OnDeleteEdgeNode($owner: String) {
    onDeleteEdgeNode(owner: $owner) {
      id
      nodeID
      edgeID
      node {
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
      edge {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
