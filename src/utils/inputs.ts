import { v4 as uuid } from "uuid"
import { Relation, LinkInput, LinksConfig, AssetGroupInput, Asset, AssetConfig } from "../api"
import { NodeStatus, NodeType, EdgeType, AssetType } from "../models"

//generateWord(1) //?
//generateSentence(2) //?
//generateParagraph(2, 3) //?

/**
 * any node id with length less than a threshold is treated as an alias
 */
export const is_alias = (id, threshold = 10) => id.length < threshold
/**
 * generates unique ids and aliases from LinkInput config object
 * 
 * @example
 * gen_id_references({
 *   nodes: [
 *     { id: "n01", status: "A", type: "B" },
 *     { id: "n02", status: "A", type: "B" }
 *   ],
 *     edge: { id: "990f2819-ef38-40fa-86f0-2620cd9cc844", type: "TO", weight: null }
 * }, 
 * { "n02": "this id comes from a prior instance of UUID" }
 * ) 
 * 
 * //=> {
 * //=>   n1_id: "n01",
 * //=>   n2_id: "n02",
 * //=>   e1_id: "990f2819-ef38-40fa-86f0-2620cd9cc844",
 * //=>   n1_UUID: "c4b1df77-8ce2-45d6-8457-10f2e4720717",
 * //=>   n2_UUID: "this id comes from a prior instance of UUID",
 * //=>   e1_UUID: "990f2819-ef38-40fa-86f0-2620cd9cc844",
 * //=>   n1_new: { id: "c4b1df77-8ce2-45d6-8457-10f2e4720717", status: "A", type: "B" },
 * //=>   n2_new: { id: "this id comes from a prior instance of UUID", status: "A", type: "B" },
 * //=>   e1_new: { id: "990f2819-ef38-40fa-86f0-2620cd9cc844", type: "TO", weight: null },
 * //=>   n1_alias: true,
 * //=>   n2_alias: true,
 * //=>   e1_alias: false
 * //=> }
 */
const gen_id_references = (config, refs = {}) => {
    const { nodes, edge } = config
    if (!nodes || !edge || nodes.length === 0 || Object.entries(edge).length === 0) {
        console.warn(`gen_link_input args do not meet requirements. Check signature`)
        return null
    }

    const [ { id: n1_id, ...n1 }, { id: n2_id, ...n2 } ] = nodes
    const { id: e1_id, ...e1 } = edge

    const n1_UUID = refs[n1_id] || uuid()
    const n2_UUID = refs[n2_id] || uuid()
    const e1_UUID = refs[e1_id] || uuid()

    return {
        n1_id,
        n2_id,
        e1_id,
        n1_UUID,
        n2_UUID,
        e1_UUID,
        n1_new: { id: n1_UUID, ...n1 },
        n2_new: { id: n2_UUID, ...n2 },
        e1_new: { id: e1_UUID, ...e1 }
    }
}

/**
 * creates input arguments to create a link between two
 * nodes in order to enable directed edges, 
 *
 * Note: the edge_node order must be maintained during
 * insertion/EdgeNode creation. I.e., EdgeNode (edge_node)
 * insertion order = [ from, to ]
 *
 * @example
 * gen_link_input({
 *    nodes : [ { id: "this is a reference" }, { id: "alias", status: "A", type: "B" } ],
 *    edge  : { id: "also a (edge) reference" }
 * })
 * // => { nodes: [ 
 * // =>     null, 
 * // =>     { id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7', status: 'A', type: 'B' } 
 * // =>   ], 
 * // =>   edge: null, // reference = no new edge
 * // =>   edge_nodes: [ 
 * // =>      { edge_id: 'also a (edge) reference', node_id: 'this is a reference' }, 
 * // =>      { edge_id: 'also a (edge) reference', node_id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7' } 
 * // =>   ] 
 * // => } 
 */
export const gen_link_input = (config: LinkInput, refs = {}): Relation => {
    const ids = gen_id_references(config, refs)
    if (!ids) return {}
    // prettier-ignore
    const { 
        n1_id, 
        n2_id, 
        e1_id, 
        n1_UUID, 
        n2_UUID, 
        e1_UUID, 
        n1_new, 
        n2_new, 
        e1_new, 
    } = ids

    return {
        nodes: [ is_alias(n1_id) ? n1_new : null, is_alias(n2_id) ? n2_new : null ],
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
    }
}

// @ts-ignore
/**
 * 
 * generates a cluster of link inputs to allow correct
 * references to be associated between links that are
 * related (clustered) together
 * 
 * @example
 *  gen_link_cluster_input([
 *     {
 *         nodes : [ { id: "001", status: "A", type: "D" }, { id: "002", status: "H", type: "I" } ],
 *         edge  : { id: "1:1", type: "FROM", weight: null }
 *     },
 *     {
 *         nodes : [ { id: "001", status: "A", type: "D" }, node_alias2 ],
 *         edge  : { id: "this is long enough to be unique" }
 *     }
 * ])
 * //=>{ refs:  
 * //=>   { 001: 'auto id for 001', 
 * //=>     002: 'magic id for 002', 
 * //=>     '1:1': 'yes, even edge ids 1:1' }, 
 * //=>  links:  
 * //=>   [ { nodes:  
 * //=>        [ { id: 'auto id for 001', status: 'A', type: 'D' }, 
 * //=>          { id: 'magic id for 002', status: 'H', type: 'I' } ], 
 * //=>       edge:  
 * //=>        { id: 'yes, even edge ids 1:1', type: 'FROM', weight: null }, 
 * //=>       edge_nodes:  
 * //=>        [ { edge_id: 'yes, even edge ids 1:1', node_id: 'auto id for 001' }, 
 * //=>          { edge_id: 'yes, even edge ids 1:1', node_id: 'magic id for 002' } ] 
 * //=>     }, 
 * //=>     { nodes:  
 * //=>        [ { id: 'auto id for 001', status: 'A', type: 'D' }, 
 * //=>          { id: 'magic id for 002', status: 'A', type: 'B' } ], 
 * //=>       edge: null, 
 * //=>       edge_nodes:  
 * //=>        [ { edge_id: 'this is long enough to be unique', 
 * //=>            node_id: 'auto id for 001' }, 
 * //=>          { edge_id: 'this is long enough to be unique', 
 * //=>            node_id: 'magic id for 002' } ] } ] 
 * //=>     } 
 */
export const gen_link_cluster_input = (configs: Array<LinkInput>): LinksConfig => {
    return configs.reduce(
        (a, c) => {
            const { refs, links } = a

            const ids = gen_id_references(c)

            if (!ids) return a

            const { n1_id, n2_id, e1_id } = ids

            Object.entries({
                n1_id: is_alias(n1_id),
                n2_id: is_alias(n2_id),
                e1_id: is_alias(e1_id)
            }).forEach(([ key, is_alias ]) => {
                if (is_alias) {
                    // id is an alias, add ref UUID
                    const [ alias_entry ] = key.split("_")
                    const alias = ids[`${alias_entry}_id`]
                    if (refs[alias]) {
                        // UUID for alias already assigned
                        return
                    }
                    refs[alias] = ids[`${alias_entry}_UUID`]
                    return
                }
            })

            const link = gen_link_input(c, refs)
            links.push(link)
            const res = { refs, links }
            //console.log({ res })
            return res
        },
        { refs: {}, links: [] }
    )
}

/**
 * generates associations between a set of assets and a node
 * -> inputs for asset creation/mutations.
 * 
 * @example
 * gen_assets_for_node_input({
 *      node: {
 *          id: "node_id",
 *          status: "DRAFT"
 *      },
 *      assets: [
 *           {
 *                 id      : "new id",
 *                 type    : AssetType.V_IMAGE,
 *                 name    : "fancy image",
 *                 content : "https://i.picsum.photos/..."
 *             },
 *             {
 *                 id      : "new id",
 *                 type    : AssetType.V_IMAGE,
 *                 name    : "another fancy image",
 *                 content : "https://i.picsum.photos/..."
 *             }
 *      ]
 * })
 *
 * //=>{
 * //=>     node: {
 * //=>         id: "fef47b75-8850-44d9-8b57-79a46ff35fdb"",
 * //=>         status: "DRAFT"
 * //=>     },
 * //=>     assets: [
 * //=>          {
 * //=>                id      : "e1e2a1bf-6eda-479c-a54c-fda7f893cef8"",
 * //=>                node_id : "fef47b75-8850-44d9-8b57-79a46ff35fdb"",
 * //=>                type    : AssetType.V_IMAGE,
 * //=>                name    : "fancy image",
 * //=>                content : "https://i.picsum.photos/..."
 * //=>            },
 * //=>            {
 * //=>                id      : "c54df3a1-5a50-4f01-9ced-bd1b5963e88b",
 * //=>                node_id : "fef47b75-8850-44d9-8b57-79a46ff35fdb"",
 * //=>                type    : AssetType.V_IMAGE,
 * //=>                name    : "another fancy image",
 * //=>                content : "https://i.picsum.photos/..."
 * //=>            }
 * //=>     ]
 * //=>}
 */
export const gen_assets_for_node_input = (config: AssetGroupInput): AssetConfig => {
    let { node, assets } = config

    if (!node) {
        // @ts-ignore
        node = { id: uuid(), status: NodeStatus.DRAFT }
    }
    const { id, ...ns } = node
    const node_id = is_alias(id) ? uuid() : id

    const assets_linked = assets.map(asset => {
        const { id = uuid(), ...etc } = asset
        const alias_id = is_alias(id) ? uuid() : id
        const result = { id: alias_id, node_id, ...etc }
        return result
    })

    return {
        node: { id: node_id, ...ns },
        assets: assets_linked
    }
}
