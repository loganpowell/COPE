//import { EnumType, jsonToGraphQLQuery as js2gql } from "json-to-graphql-query"
//import { v4 as uuid } from "uuid"
//import { abbreviateIDVals } from "../utils"
import { nod_status, nod_type, edg_type, ass_type } from "../../src/api/consts"

const node_alias1 = { id: "001", status: nod_status.DRAFT, type: nod_type.A_ARTICLE }
const node_alias2 = { id: "002", status: nod_status.PUBLISHED, type: nod_type.GR_COURSE }
const edge_alias1 = { id: "1:1", type: edg_type.HAS_CHILD, weight: null }

export const dummy_links = [
    // full_alias                                      :
    {
        nodes : [ node_alias1, node_alias2 ],
        edge  : edge_alias1
    },
    // nodes_alias_edge_reference                       :
    {
        nodes : [ node_alias1, node_alias2 ],
        edge  : { id: "this is long enough to be unique" }
    },
    // edge_alias_nodes_reference                      :
    {
        nodes : [ { id: "unique identifier 1" }, { id: "unique identifier 2" } ],
        edge  : edge_alias1
    },
    // edge_alias_node1_reference_node2_alias          :
    {
        nodes : [ { id: "unique identifier 1" }, { ...node_alias2, id: "003" } ],
        edge  : { ...edge_alias1, id: "1:2" }
    },
    // edge_alias_node1_alias_node2_reference          :
    {
        nodes : [ { ...node_alias1, id: "003" }, { id: "unique identifier 1" } ],
        edge  : { ...edge_alias1, id: "1:2" }
    },
    // test_edge_reference_node1_reference_node2_alias :
    {
        nodes : [ { id: "unique identifier 1" }, node_alias2 ],
        edge  : { id: "edge unique identifier" }
    },
    // edge_reference_node1_alias_node2_reference      :
    {
        nodes : [ node_alias1, { id: "unique identifier 1" } ],
        edge  : { id: "edge unique identifier" }
    },
    // full_reference                                  :
    {
        nodes : [ { id: "unique identifier 1" }, { id: "unique identifier 2" } ],
        edge  : { id: "full on double rainbow" }
    },
    // garbage                                         :
    { nodes: [], edge: {} }
]

export const create_assets = [
    {
        id      : "new id", //TODO: USE SAME LOGIC FOR REFERENCING/ADDING ASSETS AS NODES
        node_id : "node_id",
        type    : ass_type.V_IMAGE,
        name    : "fancy image",
        content : "https://i.picsum.photos/id/650/200/300.jpg?hmac=iNg9Umek-SwBR_yU0igvABZSTcRJFdhp1zyaqp0PdIw"
    },
    {
        id      : "new id",
        node_id : "node_id",
        type    : ass_type.V_IMAGE,
        name    : "fancy image",
        content : "https://i.picsum.photos/id/650/200/300.jpg?hmac=iNg9Umek-SwBR_yU0igvABZSTcRJFdhp1zyaqp0PdIw"
    }
]
