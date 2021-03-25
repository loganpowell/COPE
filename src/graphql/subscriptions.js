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
export const onCreateNodeProps = /* GraphQL */ `
  subscription OnCreateNodeProps {
    onCreateNodeProps {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNodeProps = /* GraphQL */ `
  subscription OnUpdateNodeProps {
    onUpdateNodeProps {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNodeProps = /* GraphQL */ `
  subscription OnDeleteNodeProps {
    onDeleteNodeProps {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNode = /* GraphQL */ `
  subscription OnCreateNode {
    onCreateNode {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        content
        createdAt
        updatedAt
      }
      draft {
        id
        content
        createdAt
        updatedAt
      }
      edges {
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode {
    onUpdateNode {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        content
        createdAt
        updatedAt
      }
      draft {
        id
        content
        createdAt
        updatedAt
      }
      edges {
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode {
    onDeleteNode {
      id
      status
      type
      category
      createdAt
      updated_at
      deleted_at
      published {
        id
        content
        createdAt
        updatedAt
      }
      draft {
        id
        content
        createdAt
        updatedAt
      }
      edges {
        nextToken
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
        status
        type
        category
        createdAt
        updated_at
        deleted_at
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
        status
        type
        category
        createdAt
        updated_at
        deleted_at
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
        status
        type
        category
        createdAt
        updated_at
        deleted_at
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
