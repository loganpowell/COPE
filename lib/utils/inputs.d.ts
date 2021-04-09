export declare const auth: {
    user1_owner: string;
    user2_NA: string;
    user3_viewers: string;
    user4_admins: string;
    user5_editors: string;
};
export declare type Node = {
    id?: string;
    status?: string;
    type?: string;
} | null;
export declare type Edge = {
    id?: string;
    type?: string;
    weight?: number | null;
} | null;
export declare type EdgeNode = {
    id?: string;
    edge_id?: string;
    node_id?: string;
} | null;
export interface Link {
    nodes: Array<Node | null>;
    edge: Edge;
}
export declare type Relation = {
    nodes: Array<Node | null>;
    edge: Edge;
    edge_nodes: Array<EdgeNode | null>;
} | Record<string, never>;
export declare const gen_link_input: (node_matrix: Link) => Relation;
