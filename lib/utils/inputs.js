import { __rest } from "tslib";
import { v4 as uuid } from "uuid";
import { NodeStatus } from "../models";
export const is_alias = (id, threshold = 10) => id.length < threshold;
const gen_id_references = (config, refs = {}) => {
    const { nodes, edge } = config;
    if (!nodes || !edge || nodes.length === 0 || Object.entries(edge).length === 0) {
        console.warn(`gen_link_input args do not meet requirements. Check signature`);
        return null;
    }
    const [_a, _b] = nodes, { id: n1_id } = _a, n1 = __rest(_a, ["id"]), { id: n2_id } = _b, n2 = __rest(_b, ["id"]);
    const { id: e1_id } = edge, e1 = __rest(edge, ["id"]);
    const n1_UUID = refs[n1_id] || uuid();
    const n2_UUID = refs[n2_id] || uuid();
    const e1_UUID = refs[e1_id] || uuid();
    return {
        n1_id,
        n2_id,
        e1_id,
        n1_UUID,
        n2_UUID,
        e1_UUID,
        n1_new: Object.assign({ id: n1_UUID }, n1),
        n2_new: Object.assign({ id: n2_UUID }, n2),
        e1_new: Object.assign({ id: e1_UUID }, e1)
    };
};
export const gen_link_input = (config, refs = {}) => {
    const ids = gen_id_references(config, refs);
    if (!ids)
        return {};
    const { n1_id, n2_id, e1_id, n1_UUID, n2_UUID, e1_UUID, n1_new, n2_new, e1_new, } = ids;
    return {
        nodes: [is_alias(n1_id) ? n1_new : null, is_alias(n2_id) ? n2_new : null],
        edge: is_alias(e1_id) ? e1_new : null,
        edge_nodes: [
            {
                edge_id: is_alias(e1_id) ? e1_UUID : e1_id,
                node_id: is_alias(n1_id) ? n1_UUID : n1_id
            },
            {
                edge_id: is_alias(e1_id) ? e1_UUID : e1_id,
                node_id: is_alias(n2_id) ? n2_UUID : n2_id
            }
        ]
    };
};
export const gen_link_cluster_input = (configs) => {
    return configs.reduce((a, c) => {
        const { refs, links } = a;
        const ids = gen_id_references(c);
        if (!ids)
            return a;
        const { n1_id, n2_id, e1_id } = ids;
        Object.entries({
            n1_id: is_alias(n1_id),
            n2_id: is_alias(n2_id),
            e1_id: is_alias(e1_id)
        }).forEach(([key, is_alias]) => {
            if (is_alias) {
                const [alias_entry] = key.split("_");
                const alias = ids[`${alias_entry}_id`];
                if (refs[alias]) {
                    return;
                }
                refs[alias] = ids[`${alias_entry}_UUID`];
                return;
            }
        });
        const link = gen_link_input(c, refs);
        links.push(link);
        const res = { refs, links };
        return res;
    }, { refs: {}, links: [] });
};
export const gen_assets_for_node_input = (config) => {
    let { node, assets } = config;
    if (!node) {
        node = { id: uuid(), status: NodeStatus.DRAFT };
    }
    const { id } = node, ns = __rest(node, ["id"]);
    const node_id = is_alias(id) ? uuid() : id;
    const assets_linked = assets.map(asset => {
        const { id = uuid() } = asset, etc = __rest(asset, ["id"]);
        const alias_id = is_alias(id) ? uuid() : id;
        const result = Object.assign({ id: alias_id, node_id }, etc);
        return result;
    });
    return {
        node: Object.assign({ id: node_id }, ns),
        assets: assets_linked
    };
};
