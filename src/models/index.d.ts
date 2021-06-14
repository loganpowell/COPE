import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AssetType {
  DEPRECATED = "DEPRECATED",
  V_IMAGE = "V_IMAGE",
  V_VIDEO = "V_VIDEO",
  V_AUDIO = "V_AUDIO",
  T_BIO = "T_BIO",
  T_HEADLINE_140 = "T_HEADLINE_140",
  T_TITLE = "T_TITLE",
  T_LEDE = "T_LEDE",
  T_SUMMARY = "T_SUMMARY",
  T_BODY = "T_BODY",
  L_REFERENCE = "L_REFERENCE",
  F_PDF = "F_PDF"
}

export enum NodeType {
  PER_PERSON = "PER_PERSON",
  PER_AUTHOR = "PER_AUTHOR",
  PER_EMPLOYEE = "PER_EMPLOYEE",
  PER_HISTORICAL = "PER_HISTORICAL",
  GEO_STATE_01 = "GEO_STATE_01",
  GEO_STATE_02 = "GEO_STATE_02",
  A_LESSON = "A_LESSON",
  A_ARTICLE = "A_ARTICLE",
  A_PAGE = "A_PAGE",
  A_APPLICATION = "A_APPLICATION",
  GR_COURSE = "GR_COURSE",
  GR_SERIES = "GR_SERIES",
  GR_LIST = "GR_LIST"
}

export enum Status {
  DRAFT = "DRAFT",
  REVIEWED = "REVIEWED",
  PUBLISHED = "PUBLISHED",
  EDITED = "EDITED",
  DELETED = "DELETED"
}

export enum EdgeType {
  WORKED_WITH = "WORKED_WITH",
  HAS_MEMBER = "HAS_MEMBER",
  AUTHORED = "AUTHORED",
  HAS_CHILD = "HAS_CHILD",
  IS_BEFORE = "IS_BEFORE",
  HAS_PART = "HAS_PART"
}



export declare class Asset {
  readonly id: string;
  readonly node_id: string;
  readonly createdAt: string;
  readonly type: AssetType | keyof typeof AssetType;
  readonly name: string;
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
  readonly content?: string;
  constructor(init: ModelInit<_Asset>);
  static copyOf(source: _Asset, mutator: (draft: MutableModel<_Asset>) => MutableModel<_Asset> | void): _Asset;
}

export declare class Node {
  readonly id: string;
  readonly status: Status | keyof typeof Status;
  readonly type: NodeType | keyof typeof NodeType;
  readonly createdAt: string;
  readonly updatedAt: string;
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
  constructor(init: ModelInit<EdgeNode>);
  static copyOf(source: EdgeNode, mutator: (draft: MutableModel<EdgeNode>) => MutableModel<EdgeNode> | void): EdgeNode;
}

export declare class Edge {
  readonly id: string;
  readonly type: EdgeType | keyof typeof EdgeType;
  readonly createdAt: string;
  readonly weight?: number;
  readonly nodes?: (EdgeNode | null)[];
  constructor(init: ModelInit<Edge>);
  static copyOf(source: Edge, mutator: (draft: MutableModel<Edge>) => MutableModel<Edge> | void): Edge;
}