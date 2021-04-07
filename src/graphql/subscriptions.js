/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset($owner: String) {
    onCreateAsset(owner: $owner) {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset($owner: String) {
    onUpdateAsset(owner: $owner) {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset($owner: String) {
    onDeleteAsset(owner: $owner) {
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
export const onCreate_Asset = /* GraphQL */ `
  subscription OnCreate_Asset($owner: String) {
    onCreate_Asset(owner: $owner) {
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
export const onUpdate_Asset = /* GraphQL */ `
  subscription OnUpdate_Asset($owner: String) {
    onUpdate_Asset(owner: $owner) {
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
export const onDelete_Asset = /* GraphQL */ `
  subscription OnDelete_Asset($owner: String) {
    onDelete_Asset(owner: $owner) {
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
export const onCreateNode = /* GraphQL */ `
  subscription OnCreateNode($owner: String) {
    onCreateNode(owner: $owner) {
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
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode($owner: String) {
    onUpdateNode(owner: $owner) {
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
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode($owner: String) {
    onDeleteNode(owner: $owner) {
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
export const onCreateEdge = /* GraphQL */ `
  subscription OnCreateEdge($owner: String) {
    onCreateEdge(owner: $owner) {
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
export const onUpdateEdge = /* GraphQL */ `
  subscription OnUpdateEdge($owner: String) {
    onUpdateEdge(owner: $owner) {
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
export const onDeleteEdge = /* GraphQL */ `
  subscription OnDeleteEdge($owner: String) {
    onDeleteEdge(owner: $owner) {
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
export const onCreateNodeEdge = /* GraphQL */ `
  subscription OnCreateNodeEdge($owner: String) {
    onCreateNodeEdge(owner: $owner) {
      id
      edge_id
      node_id
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      edge {
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
      owner
    }
  }
`;
export const onUpdateNodeEdge = /* GraphQL */ `
  subscription OnUpdateNodeEdge($owner: String) {
    onUpdateNodeEdge(owner: $owner) {
      id
      edge_id
      node_id
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      edge {
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
      owner
    }
  }
`;
export const onDeleteNodeEdge = /* GraphQL */ `
  subscription OnDeleteNodeEdge($owner: String) {
    onDeleteNodeEdge(owner: $owner) {
      id
      edge_id
      node_id
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      edge {
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
      owner
    }
  }
`;