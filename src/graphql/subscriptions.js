/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEdge = /* GraphQL */ `
  subscription OnCreateEdge {
    onCreateEdge {
      id
      type
      Nodes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEdge = /* GraphQL */ `
  subscription OnUpdateEdge {
    onUpdateEdge {
      id
      type
      Nodes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEdge = /* GraphQL */ `
  subscription OnDeleteEdge {
    onDeleteEdge {
      id
      type
      Nodes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNode = /* GraphQL */ `
  subscription OnCreateNode {
    onCreateNode {
      id
      name
      content
      edges {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode {
    onUpdateNode {
      id
      name
      content
      edges {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode {
    onDeleteNode {
      id
      name
      content
      edges {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMeta = /* GraphQL */ `
  subscription OnCreateMeta {
    onCreateMeta {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        name
        content
        createdAt
        updatedAt
      }
      draft {
        id
        name
        content
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateMeta = /* GraphQL */ `
  subscription OnUpdateMeta {
    onUpdateMeta {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        name
        content
        createdAt
        updatedAt
      }
      draft {
        id
        name
        content
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteMeta = /* GraphQL */ `
  subscription OnDeleteMeta {
    onDeleteMeta {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        name
        content
        createdAt
        updatedAt
      }
      draft {
        id
        name
        content
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateNodeEdge = /* GraphQL */ `
  subscription OnCreateNodeEdge {
    onCreateNodeEdge {
      id
      edge_id
      node_id
      edge {
        id
        type
        createdAt
        updatedAt
      }
      node {
        id
        name
        content
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNodeEdge = /* GraphQL */ `
  subscription OnUpdateNodeEdge {
    onUpdateNodeEdge {
      id
      edge_id
      node_id
      edge {
        id
        type
        createdAt
        updatedAt
      }
      node {
        id
        name
        content
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNodeEdge = /* GraphQL */ `
  subscription OnDeleteNodeEdge {
    onDeleteNodeEdge {
      id
      edge_id
      node_id
      edge {
        id
        type
        createdAt
        updatedAt
      }
      node {
        id
        name
        content
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
