import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

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
  C_LIST = "C_LIST"
}

export enum NodeStatus {
  DRAFT = "DRAFT",
  REVIEWED = "REVIEWED",
  PUBLISHED = "PUBLISHED",
  EDITED = "EDITED",
  DELETED = "DELETED"
}

export enum EdgeType {
  AUTHORED = "AUTHORED",
  HAS_NEXT = "HAS_NEXT",
  HAS_PART = "HAS_PART",
  HAS_CHILD = "HAS_CHILD"
}

export enum AssetType {
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
  F_CSV = "F_CSV"
}



export declare class Asset {
  readonly id: string;
  readonly node_id: string;
  readonly createdAt: string;
  readonly type: AssetType | keyof typeof AssetType;
  readonly name: string;
  readonly owner?: string;
  readonly content?: string;
  constructor(init: ModelInit<Asset>);
  static copyOf(source: Asset, mutator: (draft: MutableModel<Asset>) => MutableModel<Asset> | void): Asset;
}

export declare class _Asset {
  readonly id: string;
  readonly node_id: string;
  readonly createdAt: string;
  readonly type: AssetType | keyof typeof AssetType;
  readonly name: string;
  readonly owner?: string;
  readonly content?: string;
  constructor(init: ModelInit<_Asset>);
  static copyOf(source: _Asset, mutator: (draft: MutableModel<_Asset>) => MutableModel<_Asset> | void): _Asset;
}

export declare class Node {
  readonly id: string;
  readonly status: NodeStatus | keyof typeof NodeStatus;
  readonly type: NodeType | keyof typeof NodeType;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly owner?: string;
  readonly assets?: (Asset | null)[];
  readonly _assets?: (_Asset | null)[];
  readonly edges?: (EdgeNode | null)[];
  constructor(init: ModelInit<Node>);
  static copyOf(source: Node, mutator: (draft: MutableModel<Node>) => MutableModel<Node> | void): Node;
}

export declare class EdgeNode {
  readonly id: string;
  readonly edge: Edge;
  readonly node: Node;
  readonly owner?: string;
  constructor(init: ModelInit<EdgeNode>);
  static copyOf(source: EdgeNode, mutator: (draft: MutableModel<EdgeNode>) => MutableModel<EdgeNode> | void): EdgeNode;
}

export declare class Edge {
  readonly id: string;
  readonly type: EdgeType | keyof typeof EdgeType;
  readonly createdAt: string;
  readonly owner?: string;
  readonly weight?: number;
  readonly nodes?: (EdgeNode | null)[];
  constructor(init: ModelInit<Edge>);
  static copyOf(source: Edge, mutator: (draft: MutableModel<Edge>) => MutableModel<Edge> | void): Edge;
}