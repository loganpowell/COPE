/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePublicResource = /* GraphQL */ `
  subscription OnCreatePublicResource($owner: String) {
    onCreatePublicResource(owner: $owner) {
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
export const onUpdatePublicResource = /* GraphQL */ `
  subscription OnUpdatePublicResource($owner: String) {
    onUpdatePublicResource(owner: $owner) {
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
export const onDeletePublicResource = /* GraphQL */ `
  subscription OnDeletePublicResource($owner: String) {
    onDeletePublicResource(owner: $owner) {
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
export const onCreateDraftResource = /* GraphQL */ `
  subscription OnCreateDraftResource($owner: String) {
    onCreateDraftResource(owner: $owner) {
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
export const onUpdateDraftResource = /* GraphQL */ `
  subscription OnUpdateDraftResource($owner: String) {
    onUpdateDraftResource(owner: $owner) {
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
export const onDeleteDraftResource = /* GraphQL */ `
  subscription OnDeleteDraftResource($owner: String) {
    onDeleteDraftResource(owner: $owner) {
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
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode($owner: String) {
    onUpdateNode(owner: $owner) {
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
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode($owner: String) {
    onDeleteNode(owner: $owner) {
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
export const onCreateEdge = /* GraphQL */ `
  subscription OnCreateEdge($owner: String) {
    onCreateEdge(owner: $owner) {
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
export const onUpdateEdge = /* GraphQL */ `
  subscription OnUpdateEdge($owner: String) {
    onUpdateEdge(owner: $owner) {
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
export const onDeleteEdge = /* GraphQL */ `
  subscription OnDeleteEdge($owner: String) {
    onDeleteEdge(owner: $owner) {
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
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      edge {
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
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      edge {
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
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      edge {
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
      owner
    }
  }
`;
