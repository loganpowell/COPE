export declare const auth: {
    user1_owner: string;
    user2_NA: string;
    user3_viewers: string;
    user4_admins: string;
    user5_editors: string;
};
export declare enum NodeStatus {
    DRAFT = "DRAFT",
    REVIEWED = "REVIEWED",
    PUBLISHED = "PUBLISHED",
    EDITED = "EDITED",
    DELETED = "DELETED"
}
export declare enum NodeType {
    PER_AUTHOR = "PER_AUTHOR",
    A_ARTICLE = "A_ARTICLE",
    A_PAGE = "A_PAGE",
    GR_COURSE = "GR_COURSE",
    A_LESSON = "A_LESSON"
}
export declare enum EdgeType {
    AUTHORED = "AUTHORED",
    HAS_CHILD = "HAS_CHILD",
    IS_BEFORE = "IS_BEFORE",
    HAS_PART = "HAS_PART"
}
export declare enum AssetType {
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
export declare type Node = {
    id?: string;
    createdAt?: string;
    status: NodeStatus;
    type: NodeType;
} | null;
export declare type Edge = {
    id?: string;
    createdAt?: string;
    weight?: number | null;
    type: EdgeType;
} | null;
export declare type EdgeNode = {
    id?: string;
    createdAt?: string;
    edge_id: string;
    node_id: string;
} | null;
export declare type Relation = {
    nodes: Array<Node | null>;
    edge: Edge;
    edge_nodes: Array<EdgeNode | null>;
} | Record<string, never>;
export declare type LinksConfig = {
    refs: Record<string, unknown>;
    links: Array<Relation>;
};
export declare type Asset = {
    id?: string;
    createdAt?: string;
    content?: string;
    node_id: string;
    type: AssetType;
    name: string;
};
export interface LinkInput {
    nodes: Array<Node | null>;
    edge: Edge;
}
export interface AssetInput {
    node: Node | null;
    assets: Array<Asset>;
}
