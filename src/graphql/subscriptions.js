/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset($owner: String, $editors: String) {
    onCreateAsset(owner: $owner, editors: $editors) {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset($owner: String, $editors: String) {
    onUpdateAsset(owner: $owner, editors: $editors) {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset($owner: String, $editors: String) {
    onDeleteAsset(owner: $owner, editors: $editors) {
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
export const onCreate_Asset = /* GraphQL */ `
  subscription OnCreate_Asset($owner: String, $editors: String) {
    onCreate_Asset(owner: $owner, editors: $editors) {
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
export const onUpdate_Asset = /* GraphQL */ `
  subscription OnUpdate_Asset($owner: String, $editors: String) {
    onUpdate_Asset(owner: $owner, editors: $editors) {
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
export const onDelete_Asset = /* GraphQL */ `
  subscription OnDelete_Asset($owner: String, $editors: String) {
    onDelete_Asset(owner: $owner, editors: $editors) {
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
export const onCreateEdge = /* GraphQL */ `
  subscription OnCreateEdge($owner: String) {
    onCreateEdge(owner: $owner) {
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
export const onUpdateEdge = /* GraphQL */ `
  subscription OnUpdateEdge($owner: String) {
    onUpdateEdge(owner: $owner) {
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
export const onDeleteEdge = /* GraphQL */ `
  subscription OnDeleteEdge($owner: String) {
    onDeleteEdge(owner: $owner) {
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
export const onCreateEdgeNode = /* GraphQL */ `
  subscription OnCreateEdgeNode($owner: String, $editors: String) {
    onCreateEdgeNode(owner: $owner, editors: $editors) {
      id
      edge_id
      node_id
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
      }
      edge {
        id
        type
        createdAt
        owner
        weight
        updatedAt
      }
      editors
    }
  }
`;
export const onUpdateEdgeNode = /* GraphQL */ `
  subscription OnUpdateEdgeNode($owner: String, $editors: String) {
    onUpdateEdgeNode(owner: $owner, editors: $editors) {
      id
      edge_id
      node_id
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
      }
      edge {
        id
        type
        createdAt
        owner
        weight
        updatedAt
      }
      editors
    }
  }
`;
export const onDeleteEdgeNode = /* GraphQL */ `
  subscription OnDeleteEdgeNode($owner: String, $editors: String) {
    onDeleteEdgeNode(owner: $owner, editors: $editors) {
      id
      edge_id
      node_id
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
      }
      edge {
        id
        type
        createdAt
        owner
        weight
        updatedAt
      }
      editors
    }
  }
`;
