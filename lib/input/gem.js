import { __awaiter } from "tslib";
import { gen_assets_for_node_input, gen_link_input } from "../utils";
import { NodeStatus, AssetType, EdgeType, Asset, Edge, EdgeNode, Node, NodeType } from "../models";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { v4 as uuid } from "uuid";
export const gem_input = ({ name_50_chars_or_less, parent_node_id = "", status = NodeStatus.DRAFT, id = uuid(), img_url = "", video_url = "", og_img_url = "https://www.census.gov/content/dam/Census/public/brand/census-logo-sharing-card.jpg", desc_200_chars_or_less = "The Census Bureau's mission is to serve as the nation's leading provider of quality data about its people and economy.", body_text = "enter markdown here" }) => {
    if (!name_50_chars_or_less) {
        console.warn("name required for gem_input");
        throw new Error("no name provided for gem_input");
    }
    let link = parent_node_id
        ? gen_link_input({
            edge: { type: EdgeType.HAS_CHILD, id: "edge_id" },
            nodes: [{ id: parent_node_id }, { id, status }]
        })
        : null;
    const gem = gen_assets_for_node_input({
        node: {
            status,
            id,
            type: NodeType.A_GEM
        },
        assets: [
            {
                type: AssetType.A_IMAGE,
                name: name_50_chars_or_less,
                content: img_url || og_img_url
            },
            {
                type: AssetType.A_OG_IMAGE,
                name: "og:image",
                content: og_img_url
            },
            {
                type: AssetType.T_OG_TITLE,
                name: name_50_chars_or_less
            },
            {
                type: AssetType.T_OG_DESCRIPTION,
                name: desc_200_chars_or_less
            },
            {
                type: AssetType.T_BODY,
                name: "body text",
                content: body_text
            },
            {
                type: AssetType.A_VIDEO,
                name: "gem video",
                content: video_url
            },
            {
                type: AssetType.A_OG_VIDEO,
                name: "og:video",
                content: video_url
            }
        ]
    });
    return { gem, link };
};
export const gemCRUD = (config, operation = "create") => __awaiter(void 0, void 0, void 0, function* () {
    const { status, parentNode } = config;
    if (operation === "create") {
        const ds_node = yield DataStore.save(new Node({
            status,
            type: NodeType.A_GEM
        }));
        const { id } = ds_node;
        const { gem: { assets } } = gem_input(Object.assign(Object.assign({}, config), { id }));
        yield assets.forEach((asset) => __awaiter(void 0, void 0, void 0, function* () {
            const { type, name, content } = asset;
            let res = yield DataStore.save(new Asset({
                node_id: id,
                type,
                name,
                content
            }));
        }));
        if (parentNode) {
            const ds_edge = yield DataStore.save(new Edge({ type: EdgeType.HAS_CHILD }));
            const parent = yield DataStore.save(new EdgeNode({ edge: ds_edge, node: parentNode }));
            const child = yield DataStore.save(new EdgeNode({ edge: ds_edge, node: ds_node }));
        }
        let all_nodes = yield DataStore.query(Node, Predicates.ALL);
        let all_assets = yield DataStore.query(Asset, Predicates.ALL);
        let all_Edges = yield DataStore.query(Edge, Predicates.ALL);
        let all_EdgeNodes = yield DataStore.query(EdgeNode, Predicates.ALL);
        console.log({ all_nodes, all_assets, all_Edges });
        console.log("all_EdgeNodes", JSON.stringify(all_EdgeNodes, null, 2));
        return { node_id: id };
    }
});
