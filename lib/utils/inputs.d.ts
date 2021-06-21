import { Relation, LinkInput, LinksConfig, AssetGroupInput, AssetConfig } from "../api";
export declare const is_alias: (id: any, threshold?: number) => boolean;
export declare const gen_link_input: (config: LinkInput, refs?: {}) => Relation;
export declare const gen_link_cluster_input: (configs: Array<LinkInput>) => LinksConfig;
export declare const gen_assets_for_node_input: (config: AssetGroupInput) => AssetConfig;
