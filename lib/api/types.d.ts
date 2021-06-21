import { NodeType, NodeStatus, EdgeType, AssetType } from "../models";
export declare type Node = {
    id?: string;
    status?: NodeStatus;
    createdAt?: string;
    type?: NodeType;
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
    node_id?: string;
    type: AssetType;
    name: string;
};
export declare type AssetConfig = {
    node?: Node;
    assets: Array<Asset>;
};
export interface LinkInput {
    nodes: Array<Node | null>;
    edge: Edge;
}
export interface AssetGroupInput {
    node: Node | null;
    assets: Array<Asset>;
}
