import { gen_link_input, gen_link_cluster_input, gen_assets_for_node_input } from "../../lib/utils/inputs"
import { abbreviateIDVals } from "../utils"
import { create_assets_new_node, create_assets_old_node, dummy_links } from "./data"
import { NodeStatus, NodeType, EdgeType } from "../../lib/models"

// prettier-ignore
describe("gen_link_input", () => {
    test("full aliases", () => {
        const res = gen_link_input(dummy_links[0])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ 
                { id: "id0", status: NodeStatus.DRAFT, type: NodeType.A_ARTICLE }, 
                { id: "id1", status: NodeStatus.PUBLISHED, type: NodeType.GR_COURSE } 
            ],
            edge       : { id: "edge_id", type: EdgeType.HAS_CHILD, weight: null },
            edge_nodes : [ 
                { edge_id: "edge_id", node_id: "id0" }, 
                { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("nodes alias, edge reference", () => {
        const res = gen_link_input(dummy_links[1])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ 
                { id: "id0", status: NodeStatus.DRAFT, type: NodeType.A_ARTICLE }, 
                { id: "id1", status: NodeStatus.PUBLISHED, type: NodeType.GR_COURSE } 
            ],
            edge       : null,
            edge_nodes : [ 
                { edge_id: "edge_id", node_id: "id0" }, 
                { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge alias, nodes reference", () => {
        const res = gen_link_input(dummy_links[2])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ 
                null, 
                null 
            ],
            edge       : { id: "edge_id", type: EdgeType.HAS_CHILD, weight: null },
            edge_nodes : [
                 { edge_id: "edge_id", node_id: "id0" }, 
                 { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge alias, node1 reference, node2 alias", () => {
        const res = gen_link_input(dummy_links[3])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ 
                null, 
                { id: "id1", status: NodeStatus.PUBLISHED, type: NodeType.GR_COURSE } 
            ],
            edge       : { id: "edge_id", type: EdgeType.HAS_CHILD, weight: null },
            edge_nodes : [ 
                { edge_id: "edge_id", node_id: "id0" }, 
                { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge alias, node1 alias, node2 reference", () => {
        const res = gen_link_input(dummy_links[4])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ 
                { id: "id0", status: NodeStatus.DRAFT, type: NodeType.A_ARTICLE }, 
                null 
            ],
            edge       : { id: "edge_id", type: EdgeType.HAS_CHILD, weight: null },
            edge_nodes : [ 
                { edge_id: "edge_id", node_id: "id0" }, 
                { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge reference, node1 reference, node2 alias", () => {
        const res = gen_link_input(dummy_links[5])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ 
                null, 
                { id: "id1", status: NodeStatus.PUBLISHED, type: NodeType.GR_COURSE } 
            ],
            edge       : null,
            edge_nodes : [ 
                { edge_id: "edge_id", node_id: "id0" }, 
                { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge reference, node1 alias, node2 reference", () => {
        const res = gen_link_input(dummy_links[6])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ 
                { id: "id0", status: NodeStatus.DRAFT, type: NodeType.A_ARTICLE }, 
                null 
            ],
            edge       : null,
            edge_nodes : [ 
                { edge_id: "edge_id", node_id: "id0" }, 
                { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("full reference", () => {
        const res = gen_link_input(dummy_links[7])
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ null, null ],
            edge       : null,
            edge_nodes : [ 
                { edge_id: "edge_id", node_id: "id0" }, 
                { edge_id: "edge_id", node_id: "id1" } 
            ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("garbage input", () => {
        const spy = jest.spyOn(console, "warn").mockImplementation()
        const res = gen_link_input(dummy_links[8])
        expect(spy.mock.calls.length).toBe(1)
        expect(res).toMatchObject({})
    })
})

describe("gen_link_cluster_input", () => {
    test("test cross-linking between same IDs in link cluster", () => {
        const { refs } = gen_link_cluster_input(dummy_links)
        expect(Object.keys(refs).length).toEqual(5)
    })
})

describe("gen_assets_for_node_input", () => {
    test("new node", () => {
        const res = gen_assets_for_node_input(create_assets_new_node)
        expect(res.node.id).toEqual(res.assets[0].node_id)
    })
    test("existing node", () => {
        const res = gen_assets_for_node_input(create_assets_old_node)
        expect(res.assets[0].node_id).toBe("this is a long id, so it will remain")
    })
})
