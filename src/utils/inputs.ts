//import { generateWord, generateSentence, generateParagraph } from "dummy-text-generator"
import { EquivMap } from "@thi.ng/associative"
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

export interface Link {
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

// prettier-ignore
export const gen_link_input = ( node_matrix : Link ) : Relation => {
    const { nodes, edge } = node_matrix
    if (!nodes || !edge || nodes.length === 0 || Object.entries(edge).length === 0 ) {
        console.warn("gen_link_input args do not meet requirements. Check signature")
        return {}
    }
    const { 
        nodes : [ 
            { id: id1, ...n1 },
            { id: id2, ...n2 }
        ], 
        edge : { id: id3, ...e1 }
    } = node_matrix


    const aka1 = id1.length < 5 && "id"
    const aka2 = id2.length < 5 && "id"
    const aka3 = id3.length < 5 && "id"
    const ref1 = id1.length > 4 && "id"
    const ref2 = id2.length > 4 && "id"
    const ref3 = id3.length > 4 && "id"

    const n1_aka = { [aka1]: id1, ...n1 }
    const n1_ref = { [ref1]: id1, ...n1 }
    const n2_aka = { [aka2]: id2, ...n2 }
    const n2_ref = { [ref2]: id2, ...n2 }
    const e1_aka = { [aka3]: id3, ...e1 }
    const e1_ref = { [ref3]: id3, ...e1 }

    const uid1 = uuid()
    const uid2 = uuid()
    const uid3 = uuid()

    const na1 = { id: uid1, ...n1 }
    const na2 = { id: uid2, ...n2 }
    const ea1 = { id: uid3, ...e1 }

    const result = (
        new EquivMap([
            [ // full alias
                { nodes : [ n1_aka, n2_aka  ], edge : e1_aka }, 
                { nodes : [ na1, na2        ], edge : ea1, 
                    edge_nodes : [
                        { edge_id: uid3, node_id: uid1 }, 
                        { edge_id: uid3, node_id: uid2 }
                    ]
                }
            ],
            [ // nodes alias, edge reference
                { nodes : [ n1_aka, n2_aka  ], edge : e1_ref }, 
                { nodes : [ na1, na2        ], edge : null, 
                    edge_nodes : [
                        { edge_id: id3, node_id: uid1 }, 
                        { edge_id: id3, node_id: uid2 }
                    ]
                }
            ],
            [ // edge alias, nodes reference
                { nodes : [ n1_ref, n2_ref  ], edge : e1_aka }, 
                { nodes : [ null, null      ], edge : ea1, 
                    edge_nodes : [
                        { edge_id: uid3, node_id: id1 }, 
                        { edge_id: uid3, node_id: id2 }
                    ]
                }
            ],
            [ // edge alias, node1 reference, node2 alias
                { nodes : [ n1_ref, n2_aka  ], edge : e1_aka }, 
                { nodes : [ null, na2       ], edge : ea1, 
                    edge_nodes : [
                        { edge_id: uid3, node_id: id1 }, 
                        { edge_id: uid3, node_id: uid2 }
                    ]
                }
            ],
            [ // edge alias, node1 alias, node2 reference
                { nodes : [ n1_aka, n2_ref  ], edge : e1_aka }, 
                { nodes : [ na1, null       ], edge : ea1, 
                    edge_nodes : [
                        { edge_id: uid3, node_id: uid1 }, 
                        { edge_id: uid3, node_id: id2 }
                    ]
                }
            ],
            [ // edge reference, node1 reference, node2 alias
                { nodes : [ n1_ref, n2_aka  ], edge : e1_ref }, 
                { nodes : [ null, na2       ], edge : null, 
                    edge_nodes : [
                        { edge_id: id3, node_id: id1 }, 
                        { edge_id: id3, node_id: uid2 }
                    ]
                }
            ],
            [ // edge reference, node1 alias, node2 reference
                { nodes : [ n1_aka, n2_ref  ], edge : e1_ref }, 
                { nodes : [ na1, null       ], edge : null, 
                    edge_nodes : [
                        { edge_id: id3, node_id: uid1 }, 
                        { edge_id: id3, node_id: id2 }
                    ]
                }
            ],
            [ // full reference
                { nodes : [ n1_ref, n2_ref ], edge : e1_ref }, 
                { nodes : [ null, null       ], edge : null, 
                    edge_nodes : [
                        { edge_id: id3, node_id: id1 }, 
                        { edge_id: id3, node_id: id2 }
                    ]
                }
            ],
        ]).get(node_matrix) || { // no action
            nodes: [null, null], edge: null, edge_nodes: [ null, null ]
        })
        
        return result
}
