/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAssetInput = {
  id?: string | null,
  node_id: string,
  createdAt?: string | null,
  type: AssetType,
  name: string,
  owner?: string | null,
  content?: string | null,
  editors?: Array< string | null > | null,
};

export enum AssetType {
  // A [description](http://spec.graphql.org/June2018/#sec-Descriptions),
  // here in parentheses, is `markdown` friendly!
  DEPRECATED = "DEPRECATED",
  A_IMAGE = "A_IMAGE",
  A_OG_IMAGE = "A_OG_IMAGE",
  A_OG_AUDIO = "A_OG_AUDIO",
  A_OG_VIDEO = "A_OG_VIDEO",
  A_VIDEO = "A_VIDEO",
  A_AUDIO = "A_AUDIO",
  T_OG_TITLE = "T_OG_TITLE",
  T_OG_DESCRIPTION = "T_OG_DESCRIPTION",
  T_OG_TYPE = "T_OG_TYPE",
  T_LEDE = "T_LEDE",
  T_BODY = "T_BODY",
  M_DATA = "M_DATA",
  M_MAP = "M_MAP",
  M_VIZ = "M_VIZ",
  M_API = "M_API",
  F_PDF = "F_PDF",
  F_KML = "F_KML",
  F_SHP = "F_SHP",
  F_CSV = "F_CSV",
}


export type ModelAssetConditionInput = {
  node_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelAssetTypeInput | null,
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelAssetConditionInput | null > | null,
  or?: Array< ModelAssetConditionInput | null > | null,
  not?: ModelAssetConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAssetTypeInput = {
  eq?: AssetType | null,
  ne?: AssetType | null,
};

export type Asset = {
  __typename: "Asset",
  id: string,
  node_id: string,
  createdAt: string,
  type: AssetType,
  name: string,
  owner?: string | null,
  content?: string | null,
  editors?: Array< string | null > | null,
  updatedAt: string,
};

export type Resource = {
  __typename: "Resource",
  id: string,
  node_id: string,
  createdAt: string,
  type: AssetType,
  name: string,
  content?: string | null,
  editors?: Array< string | null > | null,
};

export type Proxy = {
  __typename: "Proxy",
  id: string,
  node_id: string,
  createdAt: string,
  type: AssetType,
  name: string,
  owner?: string | null,
  content?: string | null,
  editors?: Array< string | null > | null,
  updatedAt: string,
};

export type UpdateAssetInput = {
  id: string,
  node_id?: string | null,
  createdAt?: string | null,
  type?: AssetType | null,
  name?: string | null,
  owner?: string | null,
  content?: string | null,
  editors?: Array< string | null > | null,
};

export type DeleteAssetInput = {
  id: string,
};

export type CreateProxyInput = {
  id?: string | null,
  node_id: string,
  createdAt?: string | null,
  type: AssetType,
  name: string,
  owner?: string | null,
  content?: string | null,
  editors?: Array< string | null > | null,
};

export type ModelProxyConditionInput = {
  node_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelAssetTypeInput | null,
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelProxyConditionInput | null > | null,
  or?: Array< ModelProxyConditionInput | null > | null,
  not?: ModelProxyConditionInput | null,
};

export type UpdateProxyInput = {
  id: string,
  node_id?: string | null,
  createdAt?: string | null,
  type?: AssetType | null,
  name?: string | null,
  owner?: string | null,
  content?: string | null,
  editors?: Array< string | null > | null,
};

export type DeleteProxyInput = {
  id: string,
};

export type CreateNodeInput = {
  id?: string | null,
  status: NodeStatus,
  type: NodeType,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export enum NodeStatus {
  DRAFT = "DRAFT",
  REVIEWED = "REVIEWED",
  PUBLISHED = "PUBLISHED",
  EDITED = "EDITED",
  DELETED = "DELETED",
}


export enum NodeType {
  H_AUTHOR = "H_AUTHOR",
  H_TEAM = "H_TEAM",
  A_ARTICLE = "A_ARTICLE",
  A_PAGE = "A_PAGE",
  A_APPLICATION = "A_APPLICATION",
  A_GEM = "A_GEM",
  S_ACS = "S_ACS",
  S_DECENNIAL = "S_DECENNIAL",
  S_CBP = "S_CBP",
  V_1990 = "V_1990",
  V_2000 = "V_2000",
  V_2010 = "V_2010",
  V_2020 = "V_2020",
  C_SERIES = "C_SERIES",
  C_LIST = "C_LIST",
}


export type ModelNodeConditionInput = {
  status?: ModelNodeStatusInput | null,
  type?: ModelNodeTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNodeConditionInput | null > | null,
  or?: Array< ModelNodeConditionInput | null > | null,
  not?: ModelNodeConditionInput | null,
};

export type ModelNodeStatusInput = {
  eq?: NodeStatus | null,
  ne?: NodeStatus | null,
};

export type ModelNodeTypeInput = {
  eq?: NodeType | null,
  ne?: NodeType | null,
};

export type Node = {
  __typename: "Node",
  id: string,
  status: NodeStatus,
  type: NodeType,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  assets?: ModelAssetConnection | null,
  proxies?: ModelProxyConnection | null,
  edges?: ModelEdgeNodeConnection | null,
};

export type ModelAssetConnection = {
  __typename: "ModelAssetConnection",
  items?:  Array<Asset | null > | null,
  nextToken?: string | null,
};

export type ModelProxyConnection = {
  __typename: "ModelProxyConnection",
  items?:  Array<Proxy | null > | null,
  nextToken?: string | null,
};

export type ModelEdgeNodeConnection = {
  __typename: "ModelEdgeNodeConnection",
  items?:  Array<EdgeNode | null > | null,
  nextToken?: string | null,
};

export type EdgeNode = {
  __typename: "EdgeNode",
  id: string,
  edge_id: string,
  node_id: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  node: Node,
  edge: Edge,
  editors?: string | null,
};

export type Edge = {
  __typename: "Edge",
  id: string,
  type: EdgeType,
  createdAt: string,
  owner?: string | null,
  weight?: number | null,
  updatedAt: string,
  nodes?: ModelEdgeNodeConnection | null,
};

export enum EdgeType {
  AUTHORED = "AUTHORED",
  HAS_NEXT = "HAS_NEXT",
  HAS_PREVIOUS = "HAS_PREVIOUS",
  HAS_PART = "HAS_PART",
  HAS_CHILD = "HAS_CHILD",
}


export type UpdateNodeInput = {
  id: string,
  status?: NodeStatus | null,
  type?: NodeType | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteNodeInput = {
  id: string,
};

export type CreateEdgeInput = {
  id?: string | null,
  type: EdgeType,
  createdAt?: string | null,
  owner?: string | null,
  weight?: number | null,
};

export type ModelEdgeConditionInput = {
  type?: ModelEdgeTypeInput | null,
  createdAt?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  and?: Array< ModelEdgeConditionInput | null > | null,
  or?: Array< ModelEdgeConditionInput | null > | null,
  not?: ModelEdgeConditionInput | null,
};

export type ModelEdgeTypeInput = {
  eq?: EdgeType | null,
  ne?: EdgeType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEdgeInput = {
  id: string,
  type?: EdgeType | null,
  createdAt?: string | null,
  owner?: string | null,
  weight?: number | null,
};

export type DeleteEdgeInput = {
  id: string,
};

export type CreateEdgeNodeInput = {
  id?: string | null,
  edge_id: string,
  node_id: string,
  owner?: string | null,
};

export type ModelEdgeNodeConditionInput = {
  edge_id?: ModelIDInput | null,
  node_id?: ModelIDInput | null,
  and?: Array< ModelEdgeNodeConditionInput | null > | null,
  or?: Array< ModelEdgeNodeConditionInput | null > | null,
  not?: ModelEdgeNodeConditionInput | null,
};

export type UpdateEdgeNodeInput = {
  id: string,
  edge_id?: string | null,
  node_id?: string | null,
  owner?: string | null,
};

export type DeleteEdgeNodeInput = {
  id: string,
};

export type ModelAssetFilterInput = {
  id?: ModelIDInput | null,
  node_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelAssetTypeInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  content?: ModelStringInput | null,
  editors?: ModelStringInput | null,
  and?: Array< ModelAssetFilterInput | null > | null,
  or?: Array< ModelAssetFilterInput | null > | null,
  not?: ModelAssetFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProxyFilterInput = {
  id?: ModelIDInput | null,
  node_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelAssetTypeInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  content?: ModelStringInput | null,
  editors?: ModelStringInput | null,
  and?: Array< ModelProxyFilterInput | null > | null,
  or?: Array< ModelProxyFilterInput | null > | null,
  not?: ModelProxyFilterInput | null,
};

export type ModelProxyProxies_by_owner_typeCompositeKeyConditionInput = {
  eq?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null,
  le?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null,
  lt?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null,
  ge?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null,
  gt?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null,
  between?: Array< ModelProxyProxies_by_owner_typeCompositeKeyInput | null > | null,
  beginsWith?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null,
};

export type ModelProxyProxies_by_owner_typeCompositeKeyInput = {
  type?: AssetType | null,
  createdAt?: string | null,
};

export type ModelNodeFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelNodeStatusInput | null,
  type?: ModelNodeTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNodeFilterInput | null > | null,
  or?: Array< ModelNodeFilterInput | null > | null,
  not?: ModelNodeFilterInput | null,
};

export type ModelNodeConnection = {
  __typename: "ModelNodeConnection",
  items?:  Array<Node | null > | null,
  nextToken?: string | null,
};

export type ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput = {
  eq?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null,
  le?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null,
  lt?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null,
  ge?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null,
  gt?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null,
  between?: Array< ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null > | null,
  beginsWith?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null,
};

export type ModelNodeNodes_by_type_status_createdAtCompositeKeyInput = {
  status?: NodeStatus | null,
  createdAt?: string | null,
};

export type ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput = {
  eq?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null,
  le?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null,
  lt?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null,
  ge?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null,
  gt?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null,
  between?: Array< ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null > | null,
  beginsWith?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null,
};

export type ModelNodeNodes_by_status_type_createdAtCompositeKeyInput = {
  type?: NodeType | null,
  createdAt?: string | null,
};

export type ModelEdgeFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelEdgeTypeInput | null,
  createdAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  and?: Array< ModelEdgeFilterInput | null > | null,
  or?: Array< ModelEdgeFilterInput | null > | null,
  not?: ModelEdgeFilterInput | null,
};

export type ModelEdgeConnection = {
  __typename: "ModelEdgeConnection",
  items?:  Array<Edge | null > | null,
  nextToken?: string | null,
};

export type CreateAssetMutationVariables = {
  input: CreateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type CreateAssetMutation = {
  createAsset?:  {
    __typename: "Asset",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateAssetMutationVariables = {
  input: UpdateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type UpdateAssetMutation = {
  updateAsset?:  {
    __typename: "Asset",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteAssetMutationVariables = {
  input: DeleteAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type DeleteAssetMutation = {
  deleteAsset?:  {
    __typename: "Asset",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type CreateProxyMutationVariables = {
  input: CreateProxyInput,
  condition?: ModelProxyConditionInput | null,
};

export type CreateProxyMutation = {
  createProxy?:  {
    __typename: "Proxy",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateProxyMutationVariables = {
  input: UpdateProxyInput,
  condition?: ModelProxyConditionInput | null,
};

export type UpdateProxyMutation = {
  updateProxy?:  {
    __typename: "Proxy",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteProxyMutationVariables = {
  input: DeleteProxyInput,
  condition?: ModelProxyConditionInput | null,
};

export type DeleteProxyMutation = {
  deleteProxy?:  {
    __typename: "Proxy",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type CreateNodeMutation = {
  createNode?:  {
    __typename: "Node",
    id: string,
    status: NodeStatus,
    type: NodeType,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items?:  Array< {
        __typename: "Asset",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    proxies?:  {
      __typename: "ModelProxyConnection",
      items?:  Array< {
        __typename: "Proxy",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type UpdateNodeMutation = {
  updateNode?:  {
    __typename: "Node",
    id: string,
    status: NodeStatus,
    type: NodeType,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items?:  Array< {
        __typename: "Asset",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    proxies?:  {
      __typename: "ModelProxyConnection",
      items?:  Array< {
        __typename: "Proxy",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type DeleteNodeMutation = {
  deleteNode?:  {
    __typename: "Node",
    id: string,
    status: NodeStatus,
    type: NodeType,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items?:  Array< {
        __typename: "Asset",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    proxies?:  {
      __typename: "ModelProxyConnection",
      items?:  Array< {
        __typename: "Proxy",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateEdgeMutationVariables = {
  input: CreateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type CreateEdgeMutation = {
  createEdge?:  {
    __typename: "Edge",
    id: string,
    type: EdgeType,
    createdAt: string,
    owner?: string | null,
    weight?: number | null,
    updatedAt: string,
    nodes?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateEdgeMutationVariables = {
  input: UpdateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type UpdateEdgeMutation = {
  updateEdge?:  {
    __typename: "Edge",
    id: string,
    type: EdgeType,
    createdAt: string,
    owner?: string | null,
    weight?: number | null,
    updatedAt: string,
    nodes?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteEdgeMutationVariables = {
  input: DeleteEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type DeleteEdgeMutation = {
  deleteEdge?:  {
    __typename: "Edge",
    id: string,
    type: EdgeType,
    createdAt: string,
    owner?: string | null,
    weight?: number | null,
    updatedAt: string,
    nodes?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateEdgeNodeMutationVariables = {
  input: CreateEdgeNodeInput,
  condition?: ModelEdgeNodeConditionInput | null,
};

export type CreateEdgeNodeMutation = {
  createEdgeNode?:  {
    __typename: "EdgeNode",
    id: string,
    edge_id: string,
    node_id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    node:  {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    edge:  {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    editors?: string | null,
  } | null,
};

export type UpdateEdgeNodeMutationVariables = {
  input: UpdateEdgeNodeInput,
  condition?: ModelEdgeNodeConditionInput | null,
};

export type UpdateEdgeNodeMutation = {
  updateEdgeNode?:  {
    __typename: "EdgeNode",
    id: string,
    edge_id: string,
    node_id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    node:  {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    edge:  {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    editors?: string | null,
  } | null,
};

export type DeleteEdgeNodeMutationVariables = {
  input: DeleteEdgeNodeInput,
  condition?: ModelEdgeNodeConditionInput | null,
};

export type DeleteEdgeNodeMutation = {
  deleteEdgeNode?:  {
    __typename: "EdgeNode",
    id: string,
    edge_id: string,
    node_id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    node:  {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    edge:  {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    editors?: string | null,
  } | null,
};

export type GetAssetQueryVariables = {
  id: string,
};

export type GetAssetQuery = {
  getAsset?:  {
    __typename: "Asset",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type ListAssetsQueryVariables = {
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssetsQuery = {
  listAssets?:  {
    __typename: "ModelAssetConnection",
    items?:  Array< {
      __typename: "Asset",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AssetsByNodeQueryVariables = {
  node_id?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssetsByNodeQuery = {
  assetsByNode?:  {
    __typename: "ModelAssetConnection",
    items?:  Array< {
      __typename: "Asset",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AssetsByTypeQueryVariables = {
  type?: AssetType | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssetsByTypeQuery = {
  assetsByType?:  {
    __typename: "ModelAssetConnection",
    items?:  Array< {
      __typename: "Asset",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AssetsByOwnerQueryVariables = {
  owner?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssetsByOwnerQuery = {
  assetsByOwner?:  {
    __typename: "ModelAssetConnection",
    items?:  Array< {
      __typename: "Asset",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProxyQueryVariables = {
  id: string,
};

export type GetProxyQuery = {
  getProxy?:  {
    __typename: "Proxy",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type ListProxysQueryVariables = {
  filter?: ModelProxyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProxysQuery = {
  listProxys?:  {
    __typename: "ModelProxyConnection",
    items?:  Array< {
      __typename: "Proxy",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ProxiesByNodeQueryVariables = {
  node_id?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProxyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProxiesByNodeQuery = {
  proxiesByNode?:  {
    __typename: "ModelProxyConnection",
    items?:  Array< {
      __typename: "Proxy",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ProxiesByOwnerTypeQueryVariables = {
  owner?: string | null,
  typeCreatedAt?: ModelProxyProxies_by_owner_typeCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProxyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProxiesByOwnerTypeQuery = {
  proxiesByOwnerType?:  {
    __typename: "ModelProxyConnection",
    items?:  Array< {
      __typename: "Proxy",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ProxiesByOwnerQueryVariables = {
  owner?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProxyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProxiesByOwnerQuery = {
  proxiesByOwner?:  {
    __typename: "ModelProxyConnection",
    items?:  Array< {
      __typename: "Proxy",
      id: string,
      node_id: string,
      createdAt: string,
      type: AssetType,
      name: string,
      owner?: string | null,
      content?: string | null,
      editors?: Array< string | null > | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNodeQueryVariables = {
  id: string,
};

export type GetNodeQuery = {
  getNode?:  {
    __typename: "Node",
    id: string,
    status: NodeStatus,
    type: NodeType,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items?:  Array< {
        __typename: "Asset",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    proxies?:  {
      __typename: "ModelProxyConnection",
      items?:  Array< {
        __typename: "Proxy",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNodesQuery = {
  listNodes?:  {
    __typename: "ModelNodeConnection",
    items?:  Array< {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type NodesByTypeStatusQueryVariables = {
  type?: NodeType | null,
  statusCreatedAt?: ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByTypeStatusQuery = {
  nodesByTypeStatus?:  {
    __typename: "ModelNodeConnection",
    items?:  Array< {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type NodesByStatusTypeQueryVariables = {
  status?: NodeStatus | null,
  typeCreatedAt?: ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByStatusTypeQuery = {
  nodesByStatusType?:  {
    __typename: "ModelNodeConnection",
    items?:  Array< {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type NodesByStatusQueryVariables = {
  status?: NodeStatus | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByStatusQuery = {
  nodesByStatus?:  {
    __typename: "ModelNodeConnection",
    items?:  Array< {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEdgeQueryVariables = {
  id: string,
};

export type GetEdgeQuery = {
  getEdge?:  {
    __typename: "Edge",
    id: string,
    type: EdgeType,
    createdAt: string,
    owner?: string | null,
    weight?: number | null,
    updatedAt: string,
    nodes?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListEdgesQueryVariables = {
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEdgesQuery = {
  listEdges?:  {
    __typename: "ModelEdgeConnection",
    items?:  Array< {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type EdgesByTypeQueryVariables = {
  type?: EdgeType | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EdgesByTypeQuery = {
  edgesByType?:  {
    __typename: "ModelEdgeConnection",
    items?:  Array< {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAssetSubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnCreateAssetSubscription = {
  onCreateAsset?:  {
    __typename: "Asset",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssetSubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnUpdateAssetSubscription = {
  onUpdateAsset?:  {
    __typename: "Asset",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssetSubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnDeleteAssetSubscription = {
  onDeleteAsset?:  {
    __typename: "Asset",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProxySubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnCreateProxySubscription = {
  onCreateProxy?:  {
    __typename: "Proxy",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateProxySubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnUpdateProxySubscription = {
  onUpdateProxy?:  {
    __typename: "Proxy",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteProxySubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnDeleteProxySubscription = {
  onDeleteProxy?:  {
    __typename: "Proxy",
    id: string,
    node_id: string,
    createdAt: string,
    type: AssetType,
    name: string,
    owner?: string | null,
    content?: string | null,
    editors?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateNodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNodeSubscription = {
  onCreateNode?:  {
    __typename: "Node",
    id: string,
    status: NodeStatus,
    type: NodeType,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items?:  Array< {
        __typename: "Asset",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    proxies?:  {
      __typename: "ModelProxyConnection",
      items?:  Array< {
        __typename: "Proxy",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateNodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNodeSubscription = {
  onUpdateNode?:  {
    __typename: "Node",
    id: string,
    status: NodeStatus,
    type: NodeType,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items?:  Array< {
        __typename: "Asset",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    proxies?:  {
      __typename: "ModelProxyConnection",
      items?:  Array< {
        __typename: "Proxy",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteNodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNodeSubscription = {
  onDeleteNode?:  {
    __typename: "Node",
    id: string,
    status: NodeStatus,
    type: NodeType,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items?:  Array< {
        __typename: "Asset",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    proxies?:  {
      __typename: "ModelProxyConnection",
      items?:  Array< {
        __typename: "Proxy",
        id: string,
        node_id: string,
        createdAt: string,
        type: AssetType,
        name: string,
        owner?: string | null,
        content?: string | null,
        editors?: Array< string | null > | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    edges?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateEdgeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEdgeSubscription = {
  onCreateEdge?:  {
    __typename: "Edge",
    id: string,
    type: EdgeType,
    createdAt: string,
    owner?: string | null,
    weight?: number | null,
    updatedAt: string,
    nodes?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateEdgeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEdgeSubscription = {
  onUpdateEdge?:  {
    __typename: "Edge",
    id: string,
    type: EdgeType,
    createdAt: string,
    owner?: string | null,
    weight?: number | null,
    updatedAt: string,
    nodes?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteEdgeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEdgeSubscription = {
  onDeleteEdge?:  {
    __typename: "Edge",
    id: string,
    type: EdgeType,
    createdAt: string,
    owner?: string | null,
    weight?: number | null,
    updatedAt: string,
    nodes?:  {
      __typename: "ModelEdgeNodeConnection",
      items?:  Array< {
        __typename: "EdgeNode",
        id: string,
        edge_id: string,
        node_id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateEdgeNodeSubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnCreateEdgeNodeSubscription = {
  onCreateEdgeNode?:  {
    __typename: "EdgeNode",
    id: string,
    edge_id: string,
    node_id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    node:  {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    edge:  {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    editors?: string | null,
  } | null,
};

export type OnUpdateEdgeNodeSubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnUpdateEdgeNodeSubscription = {
  onUpdateEdgeNode?:  {
    __typename: "EdgeNode",
    id: string,
    edge_id: string,
    node_id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    node:  {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    edge:  {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    editors?: string | null,
  } | null,
};

export type OnDeleteEdgeNodeSubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnDeleteEdgeNodeSubscription = {
  onDeleteEdgeNode?:  {
    __typename: "EdgeNode",
    id: string,
    edge_id: string,
    node_id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    node:  {
      __typename: "Node",
      id: string,
      status: NodeStatus,
      type: NodeType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
      proxies?:  {
        __typename: "ModelProxyConnection",
        nextToken?: string | null,
      } | null,
      edges?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    edge:  {
      __typename: "Edge",
      id: string,
      type: EdgeType,
      createdAt: string,
      owner?: string | null,
      weight?: number | null,
      updatedAt: string,
      nodes?:  {
        __typename: "ModelEdgeNodeConnection",
        nextToken?: string | null,
      } | null,
    },
    editors?: string | null,
  } | null,
};
