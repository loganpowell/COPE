import { gen_link_input } from "../../lib/utils/inputs"
import { abbreviateIDVals } from "../utils"

const node_alias1 = { id: "001", status: "A", type: "B" }
const node_alias2 = { id: "002", status: "C", type: "D" }
const edge_alias1 = { id: "1:1", type: "TO", weight: null }

describe("gen_link_input", () => {
    test("full aliases", () => {
        const test_full_alias = {
            nodes : [ node_alias1, node_alias2 ],
            edge  : edge_alias1
        }
        const res = gen_link_input(test_full_alias)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ { id: "id0", status: "A", type: "B" }, { id: "id1", status: "C", type: "D" } ],
            edge       : { id: "edge_id", type: "TO", weight: null },
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("nodes alias, edge reference", () => {
        const test_nodes_alias_edge_iderence = {
            nodes : [ node_alias1, node_alias2 ],
            edge  : { id: "faffasfdasdf" }
        }
        const res = gen_link_input(test_nodes_alias_edge_iderence)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ { id: "id0", status: "A", type: "B" }, { id: "id1", status: "C", type: "D" } ],
            edge       : null,
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge alias, nodes reference", () => {
        const test_edge_alias_nodes_reference = {
            nodes : [ { id: "1231231" }, { id: "234235" } ],
            edge  : edge_alias1
        }
        const res = gen_link_input(test_edge_alias_nodes_reference)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ null, null ],
            edge       : { id: "edge_id", type: "TO", weight: null },
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge alias, node1 reference, node2 alias", () => {
        const test_edge_alias_node1_reference_node2_alias = {
            nodes : [ { id: "123131" }, node_alias2 ],
            edge  : edge_alias1
        }
        const res = gen_link_input(test_edge_alias_node1_reference_node2_alias)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ null, { id: "id1", status: "C", type: "D" } ],
            edge       : { id: "edge_id", type: "TO", weight: null },
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge alias, node1 alias, node2 reference", () => {
        const test_edge_alias_node1_alias_node2_reference = {
            nodes : [ node_alias1, { id: "1231231" } ],
            edge  : edge_alias1
        }
        const res = gen_link_input(test_edge_alias_node1_alias_node2_reference)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ { id: "id0", status: "A", type: "B" }, null ],
            edge       : { id: "edge_id", type: "TO", weight: null },
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge reference, node1 reference, node2 alias", () => {
        const test_edge_iderence_node1_reference_node2_alias = {
            nodes : [ { id: "1231231" }, node_alias2 ],
            edge  : { id: "im an edgy sombitch" }
        }
        const res = gen_link_input(test_edge_iderence_node1_reference_node2_alias)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ null, { id: "id1", status: "C", type: "D" } ],
            edge       : null,
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("edge reference, node1 alias, node2 reference", () => {
        const test_edge_reference_node1_alias_node2_reference = {
            nodes : [ node_alias1, { id: "1231231" } ],
            edge  : { id: "im an edgy sombitch" }
        }
        const res = gen_link_input(test_edge_reference_node1_alias_node2_reference)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ { id: "id0", status: "A", type: "B" }, null ],
            edge       : null,
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("full reference", () => {
        const test_full_reference = {
            nodes : [ { id: "12312312343" }, { id: "1231231" } ],
            edge  : { id: "full on double rainbow" }
        }
        const res = gen_link_input(test_full_reference)
        const res_abv = abbreviateIDVals(res)
        const test = {
            nodes      : [ null, null ],
            edge       : null,
            edge_nodes : [ { edge_id: "edge_id", node_id: "id0" }, { edge_id: "edge_id", node_id: "id1" } ]
        }
        expect(res_abv).toMatchObject(test)
    })

    test("garbage input", () => {
        const spy = jest.spyOn(console, "warn").mockImplementation()
        const test_garbage = { nodes: [], edge: {} }
        const res = gen_link_input(test_garbage)
        expect(spy.mock.calls.length).toBe(1)
        expect(res).toMatchObject({})
    })
})
