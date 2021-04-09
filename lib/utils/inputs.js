import { __rest } from "tslib";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
dotenv.config();
export const auth = {
    user1_owner: process.env.MOCK_USER_POOL_ID_1,
    user2_NA: process.env.MOCK_USER_POOL_ID_2,
    user3_viewers: process.env.MOCK_USER_POOL_ID_3_VIEWERS,
    user4_admins: process.env.MOCK_USER_POOL_ID_4_ADMINS,
    user5_editors: process.env.MOCK_USER_POOL_ID_5_EDITORS
};
export const gen_link_input = (config) => {
    const { nodes, edge } = config;
    if (!nodes || !edge || nodes.length === 0 || Object.entries(edge).length === 0) {
        console.warn(`
        gen_link_input args do not meet requirements. Check signature`);
        return {};
    }
    const [_a, _b] = nodes, { id: n_id1 } = _a, n1 = __rest(_a, ["id"]), { id: n_id2 } = _b, n2 = __rest(_b, ["id"]);
    const { id: e_id1 } = edge, e1 = __rest(edge, ["id"]);
    const UID_n1 = uuid();
    const UID_n2 = uuid();
    const UID_e1 = uuid();
    const node_new1 = Object.assign({ id: UID_n1 }, n1);
    const node_new2 = Object.assign({ id: UID_n2 }, n2);
    const edge_new1 = Object.assign({ id: UID_e1 }, e1);
    const n1_alias = n_id1.length < 5;
    const n2_alias = n_id2.length < 5;
    const e1_alias = e_id1.length < 5;
    return {
        nodes: [n1_alias ? node_new1 : null, n2_alias ? node_new2 : null],
        edge: e1_alias ? edge_new1 : null,
        edge_nodes: [
            {
                edge_id: e1_alias ? UID_e1 : e_id1,
                node_id: n1_alias ? UID_n1 : n_id1
            },
            {
                edge_id: e1_alias ? UID_e1 : e_id1,
                node_id: n2_alias ? UID_n2 : n_id2
            }
        ]
    };
};
export const gen_assets_for_node_input = (config) => {
    const { node, assets } = config;
    const { id } = node, ns = __rest(node, ["id"]);
    const alias = id.length < 5;
    const node_id = alias ? uuid() : id;
    const results = assets.map(asset => {
        const { id } = asset, as = __rest(asset, ["id"]);
        const alias = id.length < 5;
        const alias_id = alias ? uuid() : id;
        return Object.assign({ id: alias_id, node_id }, as);
    });
    if (alias)
        return { node: Object.assign({ node_id }, ns), assets: results };
    return { node, assets: results };
};
