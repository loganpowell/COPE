/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResourcePublic = /* GraphQL */ `
  subscription OnCreateResourcePublic($owner: String) {
    onCreateResourcePublic(owner: $owner) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const onUpdateResourcePublic = /* GraphQL */ `
  subscription OnUpdateResourcePublic($owner: String) {
    onUpdateResourcePublic(owner: $owner) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const onDeleteResourcePublic = /* GraphQL */ `
  subscription OnDeleteResourcePublic($owner: String) {
    onDeleteResourcePublic(owner: $owner) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const onCreateResourceDraft = /* GraphQL */ `
  subscription OnCreateResourceDraft($owner: String) {
    onCreateResourceDraft(owner: $owner) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const onUpdateResourceDraft = /* GraphQL */ `
  subscription OnUpdateResourceDraft($owner: String) {
    onUpdateResourceDraft(owner: $owner) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      owner
    }
  }
`;
export const onDeleteResourceDraft = /* GraphQL */ `
  subscription OnDeleteResourceDraft($owner: String) {
    onDeleteResourceDraft(owner: $owner) {
      id
      node_id
      updatedAt
      type
      name
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
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
      updatedAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      resources_public {
        nextToken
        startedAt
      }
      resources_draft {
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
      updatedAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      resources_public {
        nextToken
        startedAt
      }
      resources_draft {
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
      updatedAt
      updated_at
      deleted_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      resources_public {
        nextToken
        startedAt
      }
      resources_draft {
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
        updatedAt
        updated_at
        deleted_at
        _version
        _deleted
        _lastChangedAt
        createdAt
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
