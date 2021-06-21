export const onCreateAsset = `
  subscription OnCreateAsset($owner: String) {
    onCreateAsset(owner: $owner) {
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
export const onUpdateAsset = `
  subscription OnUpdateAsset($owner: String) {
    onUpdateAsset(owner: $owner) {
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
export const onDeleteAsset = `
  subscription OnDeleteAsset($owner: String) {
    onDeleteAsset(owner: $owner) {
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
export const onCreate_Asset = `
  subscription OnCreate_Asset($owner: String) {
    onCreate_Asset(owner: $owner) {
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
export const onUpdate_Asset = `
  subscription OnUpdate_Asset($owner: String) {
    onUpdate_Asset(owner: $owner) {
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
export const onDelete_Asset = `
  subscription OnDelete_Asset($owner: String) {
    onDelete_Asset(owner: $owner) {
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
export const onCreateNode = `
  subscription OnCreateNode($owner: String) {
    onCreateNode(owner: $owner) {
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
export const onUpdateNode = `
  subscription OnUpdateNode($owner: String) {
    onUpdateNode(owner: $owner) {
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
export const onDeleteNode = `
  subscription OnDeleteNode($owner: String) {
    onDeleteNode(owner: $owner) {
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
export const onCreateEdge = `
  subscription OnCreateEdge($owner: String) {
    onCreateEdge(owner: $owner) {
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
export const onUpdateEdge = `
  subscription OnUpdateEdge($owner: String) {
    onUpdateEdge(owner: $owner) {
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
export const onDeleteEdge = `
  subscription OnDeleteEdge($owner: String) {
    onDeleteEdge(owner: $owner) {
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
export const onCreateEdgeNode = `
  subscription OnCreateEdgeNode($owner: String) {
    onCreateEdgeNode(owner: $owner) {
      id
      edge_id
      node_id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      node {
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
      edge {
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
    }
  }
`;
export const onUpdateEdgeNode = `
  subscription OnUpdateEdgeNode($owner: String) {
    onUpdateEdgeNode(owner: $owner) {
      id
      edge_id
      node_id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      node {
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
      edge {
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
    }
  }
`;
export const onDeleteEdgeNode = `
  subscription OnDeleteEdgeNode($owner: String) {
    onDeleteEdgeNode(owner: $owner) {
      id
      edge_id
      node_id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      node {
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
      edge {
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
    }
  }
`;
