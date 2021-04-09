import { v4 as uuid } from "uuid"

import dotenv from "dotenv"
dotenv.config()

export const auth = {
    user1_owner: process.env.MOCK_USER_POOL_ID_1,
    user2_NA: process.env.MOCK_USER_POOL_ID_2,
    user3_viewers: process.env.MOCK_USER_POOL_ID_3_VIEWERS,
    user4_admins: process.env.MOCK_USER_POOL_ID_4_ADMINS,
    user5_editors: process.env.MOCK_USER_POOL_ID_5_EDITORS
}

export type Node = {
    id?: string
    status?: string
    type?: string
} | null

export type Edge = {
    id?: string
    type?: string
    weight?: number | null
} | null

export type EdgeNode = {
    id?: string
    edge_id?: string
    node_id?: string
} | null

export interface LinkInput {
    nodes: Array<Node | null>
    edge: Edge
}

export type Relation =
    | {
          nodes: Array<Node | null>
          edge: Edge
          edge_nodes: Array<EdgeNode | null>
      }
    | Record<string, never>

//generateWord(1) //?
//generateSentence(2) //?
//generateParagraph(2, 3) //?

/**
 * creates input arguments to create a link between two
 * nodes in order to enable directed edges, the edge_node
 * order must be maintained during insertion/EdgeNode
 * creation. 
 * I.e., EdgeNode (edge_node) insertion order = [ from, to ]
 * 
 */
export const gen_link_input = (config: LinkInput): Relation => {
    const { nodes, edge } = config
    if (!nodes || !edge || nodes.length === 0 || Object.entries(edge).length === 0) {
        console.warn(`
        gen_link_input args do not meet requirements. Check signature`)
        return {}
    }

    const [ { id: n_id1, ...n1 }, { id: n_id2, ...n2 } ] = nodes
    const { id: e_id1, ...e1 } = edge

    const UID_n1 = uuid()
    const UID_n2 = uuid()
    const UID_e1 = uuid()

    const node_new1 = { id: UID_n1, ...n1 }
    const node_new2 = { id: UID_n2, ...n2 }
    const edge_new1 = { id: UID_e1, ...e1 }

    const n1_alias = n_id1.length < 5
    const n2_alias = n_id2.length < 5
    const e1_alias = e_id1.length < 5

    return {
        nodes: [ n1_alias ? node_new1 : null, n2_alias ? node_new2 : null ],
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
    }
}

export type Asset = {
    id: string
    node_id: string
    type: string
    name: string
    content?: string
}

export interface AssetInput {
    node: Node
    assets: Array<Asset>
}

export const gen_assets_for_node_input = (config: AssetInput) => {
    const { node, assets } = config
    const { id, ...ns } = node
    const alias = id.length < 5
    const node_id = alias ? uuid() : id

    const results = assets.map(asset => {
        const { id, ...as } = asset
        const alias = id.length < 5
        const alias_id = alias ? uuid() : id
        return { id: alias_id, node_id, ...as }
    })

    if (alias) return { node: { node_id, ...ns }, assets: results }
    return { node, assets: results }
}