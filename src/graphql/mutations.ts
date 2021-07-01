/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
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
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
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
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
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
export const createProxy = /* GraphQL */ `
  mutation CreateProxy(
    $input: CreateProxyInput!
    $condition: ModelProxyConditionInput
  ) {
    createProxy(input: $input, condition: $condition) {
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
export const updateProxy = /* GraphQL */ `
  mutation UpdateProxy(
    $input: UpdateProxyInput!
    $condition: ModelProxyConditionInput
  ) {
    updateProxy(input: $input, condition: $condition) {
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
export const deleteProxy = /* GraphQL */ `
  mutation DeleteProxy(
    $input: DeleteProxyInput!
    $condition: ModelProxyConditionInput
  ) {
    deleteProxy(input: $input, condition: $condition) {
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
export const createNode = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    createNode(input: $input, condition: $condition) {
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
          type
          name
          owner
          content
          editors
          updatedAt
        }
        nextToken
      }
      proxies {
        items {
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
          editors
        }
        nextToken
      }
    }
  }
`;
export const updateNode = /* GraphQL */ `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    updateNode(input: $input, condition: $condition) {
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
          type
          name
          owner
          content
          editors
          updatedAt
        }
        nextToken
      }
      proxies {
        items {
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
          editors
        }
        nextToken
      }
    }
  }
`;
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    deleteNode(input: $input, condition: $condition) {
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
          type
          name
          owner
          content
          editors
          updatedAt
        }
        nextToken
      }
      proxies {
        items {
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
          editors
        }
        nextToken
      }
    }
  }
`;
export const createEdge = /* GraphQL */ `
  mutation CreateEdge(
    $input: CreateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    createEdge(input: $input, condition: $condition) {
      id
      type
      createdAt
      owner
      weight
      updatedAt
      nodes {
        items {
          id
          edge_id
          node_id
          owner
          createdAt
          updatedAt
          editors
        }
        nextToken
      }
    }
  }
`;
export const updateEdge = /* GraphQL */ `
  mutation UpdateEdge(
    $input: UpdateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    updateEdge(input: $input, condition: $condition) {
      id
      type
      createdAt
      owner
      weight
      updatedAt
      nodes {
        items {
          id
          edge_id
          node_id
          owner
          createdAt
          updatedAt
          editors
        }
        nextToken
      }
    }
  }
`;
export const deleteEdge = /* GraphQL */ `
  mutation DeleteEdge(
    $input: DeleteEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    deleteEdge(input: $input, condition: $condition) {
      id
      type
      createdAt
      owner
      weight
      updatedAt
      nodes {
        items {
          id
          edge_id
          node_id
          owner
          createdAt
          updatedAt
          editors
        }
        nextToken
      }
    }
  }
`;
export const createEdgeNode = /* GraphQL */ `
  mutation CreateEdgeNode(
    $input: CreateEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    createEdgeNode(input: $input, condition: $condition) {
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
        assets {
          nextToken
        }
        proxies {
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
      editors
    }
  }
`;
export const updateEdgeNode = /* GraphQL */ `
  mutation UpdateEdgeNode(
    $input: UpdateEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    updateEdgeNode(input: $input, condition: $condition) {
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
        assets {
          nextToken
        }
        proxies {
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
      editors
    }
  }
`;
export const deleteEdgeNode = /* GraphQL */ `
  mutation DeleteEdgeNode(
    $input: DeleteEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    deleteEdgeNode(input: $input, condition: $condition) {
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
        assets {
          nextToken
        }
        proxies {
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
      editors
    }
  }
`;
