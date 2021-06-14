//
//
//   e88~~8e  888-~88e 888  888 888-~88e-~88e  d88~\
//  d888  88b 888  888 888  888 888  888  888 C888
//  8888__888 888  888 888  888 888  888  888  Y88b
//  Y888    , 888  888 888  888 888  888  888   888D
//   "88___/  888  888 "88_-888 888  888  888 \_88P
//
//

export enum NodeStatus {
    DRAFT = "DRAFT",
    REVIEWED = "REVIEWED",
    PUBLISHED = "PUBLISHED",
    EDITED = "EDITED",
    DELETED = "DELETED"
}

export enum NodeType {
    PER_AUTHOR = "PER_AUTHOR",
    A_ARTICLE = "A_ARTICLE",
    A_PAGE = "A_PAGE",
    GR_COURSE = "GR_COURSE",
    A_LESSON = "A_LESSON"
}

export enum EdgeType {
    AUTHORED = "AUTHORED",
    HAS_CHILD = "HAS_CHILD",
    IS_BEFORE = "IS_BEFORE",
    HAS_PART = "HAS_PART"
}

export enum AssetType {
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

//
//    d8
//  _d88__ Y88b  / 888-~88e   e88~~8e   d88~\
//   888    Y888/  888  888b d888  88b C888
//   888     Y8/   888  8888 8888__888  Y88b
//   888      Y    888  888P Y888    ,   888D
//   "88_/   /     888-_88"   "88___/  \_88P
//         _/      888
//

export type Node = {
    id?: string
    createdAt?: string
    status: NodeStatus
    type?: NodeType
} | null

export type Edge = {
    id?: string
    createdAt?: string
    weight?: number | null
    type: EdgeType
} | null

export type EdgeNode = {
    id?: string
    createdAt?: string
    edge_id: string
    node_id: string
} | null

export type Relation =
    | {
          nodes: Array<Node | null>
          edge: Edge
          edge_nodes: Array<EdgeNode | null>
      }
    | Record<string, never>

export type LinksConfig = {
    refs: Record<string, unknown>
    links: Array<Relation>
}

export type Asset = {
    id?: string
    createdAt?: string
    content?: string
    node_id: string
    type: AssetType
    name: string
}

export type AssetConfig = {
    node?: any
    assets: Array<Asset>
}

//
//  ,e,            d8                      88~\
//   "  888-~88e _d88__  e88~~8e  888-~\ _888__   /~~~8e   e88~~\  e88~~8e   d88~\
//  888 888  888  888   d888  88b 888     888         88b d888    d888  88b C888
//  888 888  888  888   8888__888 888     888    e88~-888 8888    8888__888  Y88b
//  888 888  888  888   Y888    , 888     888   C888  888 Y888    Y888    ,   888D
//  888 888  888  "88_/  "88___/  888     888    "88_-888  "88__/  "88___/  \_88P
//
//

export interface LinkInput {
    nodes: Array<Node | null>
    edge: Edge
}

export interface AssetGroupInput {
    node: Node | null
    assets: Array<Asset>
}
