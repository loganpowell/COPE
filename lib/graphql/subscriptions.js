export const onCreateAsset = `
  subscription OnCreateAsset($owner: String, $editors: String) {
    onCreateAsset(owner: $owner, editors: $editors) {
      id
      nodeID
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`
export const onUpdateAsset = `
  subscription OnUpdateAsset($owner: String, $editors: String) {
    onUpdateAsset(owner: $owner, editors: $editors) {
      id
      nodeID
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`
export const onDeleteAsset = `
  subscription OnDeleteAsset($owner: String, $editors: String) {
    onDeleteAsset(owner: $owner, editors: $editors) {
      id
      nodeID
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`
export const onCreateAssetPr = `
  subscription OnCreateAssetPr($owner: String, $editors: String) {
    onCreateAssetPr(owner: $owner, editors: $editors) {
      id
      nodeID
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`
export const onUpdateAssetPr = `
  subscription OnUpdateAssetPr($owner: String, $editors: String) {
    onUpdateAssetPr(owner: $owner, editors: $editors) {
      id
      nodeID
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`
export const onDeleteAssetPr = `
  subscription OnDeleteAssetPr($owner: String, $editors: String) {
    onDeleteAssetPr(owner: $owner, editors: $editors) {
      id
      nodeID
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`
export const onCreateNode = `
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
          nodeID
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
          edgeID
          nodeID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
export const onUpdateNode = `
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
          nodeID
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
          edgeID
          nodeID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
export const onDeleteNode = `
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
          nodeID
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
          edgeID
          nodeID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
export const onCreateEdge = `
  subscription OnCreateEdge($owner: String) {
    onCreateEdge(owner: $owner) {
      id
      type
      createdAt
      owner
      weight
      updatedAt
      nodes {
        items {
          id
          edgeID
          nodeID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
export const onUpdateEdge = `
  subscription OnUpdateEdge($owner: String) {
    onUpdateEdge(owner: $owner) {
      id
      type
      createdAt
      owner
      weight
      updatedAt
      nodes {
        items {
          id
          edgeID
          nodeID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
export const onDeleteEdge = `
  subscription OnDeleteEdge($owner: String) {
    onDeleteEdge(owner: $owner) {
      id
      type
      createdAt
      owner
      weight
      updatedAt
      nodes {
        items {
          id
          edgeID
          nodeID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
export const onCreateEdgeNode = `
  subscription OnCreateEdgeNode($owner: String) {
    onCreateEdgeNode(owner: $owner) {
      id
      edgeID
      nodeID
      owner
      createdAt
      updatedAt
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
        updatedAt
        nodes {
          nextToken
        }
      }
    }
  }
`
export const onUpdateEdgeNode = `
  subscription OnUpdateEdgeNode($owner: String) {
    onUpdateEdgeNode(owner: $owner) {
      id
      edgeID
      nodeID
      owner
      createdAt
      updatedAt
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
        updatedAt
        nodes {
          nextToken
        }
      }
    }
  }
`
export const onDeleteEdgeNode = `
  subscription OnDeleteEdgeNode($owner: String) {
    onDeleteEdgeNode(owner: $owner) {
      id
      edgeID
      nodeID
      owner
      createdAt
      updatedAt
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
        updatedAt
        nodes {
          nextToken
        }
      }
    }
  }
`
