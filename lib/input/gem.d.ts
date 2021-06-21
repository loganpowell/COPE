import { NodeStatus, Node } from "../models";
export declare const gem_input: ({ name_50_chars_or_less, parent_node_id, status, id, img_url, video_url, og_img_url, desc_200_chars_or_less, body_text }: {
    name_50_chars_or_less: any;
    parent_node_id?: string;
    status?: NodeStatus;
    id?: any;
    img_url?: string;
    video_url?: string;
    og_img_url?: string;
    desc_200_chars_or_less?: string;
    body_text?: string;
}) => {
    gem: import("../api").AssetConfig;
    link: import("../api").Relation;
};
interface GemCRUDInput {
    name_50_chars_or_less: string;
    parentNode: Node;
    status?: NodeStatus;
    id?: any;
    img_url?: string;
    video_url?: string;
    og_img_url?: string;
    desc_200_chars_or_less?: string;
    body_text?: string;
}
export declare const gemCRUD: (config: GemCRUDInput, operation?: string) => Promise<{
    node_id: string;
}>;
export {};
