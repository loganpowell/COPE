import { Relation, LinkInput, LinksConfig, AssetInput, Asset } from "../api";
export declare const gen_link_input: (config: LinkInput, refs?: {}) => Relation;
export declare const gen_link_cluster_input: (configs: Array<LinkInput>) => LinksConfig;
export declare const gen_assets_for_node_input: (config: AssetInput) => Array<Asset>;
