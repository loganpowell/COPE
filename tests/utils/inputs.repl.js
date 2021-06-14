import { gen_link_input, gen_link_cluster_input, gen_assets_for_node_input } from "../../lib/utils/inputs"
import { generateWord, generateSentence, generateParagraph } from "dummy-text-generator"
import { dummy_links, create_assets_new_node } from "../graphql/data"
import { abbreviateIDVals } from "../utils"

const node_alias1 = { id: "001", status: "A", type: "B" }
const node_alias2 = { id: "002", status: "A", type: "B" }
const edge_alias1 = { id: "1:1", type: "TO", weight: null }

const test_full_alias = {
    nodes : [ node_alias1, node_alias2 ],
    edge  : edge_alias1
}

gen_link_input(test_full_alias)
/**
{ nodes:  
   [ { id: '9c0fad35-589f-46e0-bc5d-c2b9a1347d73', 
       status: 'A', 
       type: 'B' }, 
     { id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7', 
       status: 'A', 
       type: 'B' } ], 
  edge:  
   { id: '350b9854-d4b0-47eb-b566-897295cc559b', 
     type: 'TO', 
     weight: null }, 
  edge_nodes:  
   [ { edge_id: '350b9854-d4b0-47eb-b566-897295cc559b', 
       node_id: '9c0fad35-589f-46e0-bc5d-c2b9a1347d73' }, 
     { edge_id: '350b9854-d4b0-47eb-b566-897295cc559b', 
       node_id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7' } ] } 
 */

const test_nodes_alias_edge_reference = {
    nodes : [ node_alias1, node_alias2 ],
    edge  : { id: "faffasfdasdf" }
}

gen_link_input(test_nodes_alias_edge_reference)

/**
{ nodes:  
   [ { id: '10c37430-4ab3-4045-b991-522fd1dd1d7b', 
       status: 'A', 
       type: 'B' }, 
     { id: '1de7733a-5358-4863-8640-32cb3dad6ef0', 
       status: 'A', 
       type: 'B' } ], 
  edge: null, 
  edge_nodes:  
   [ { edge_id: 'faffasfdasdf', 
       node_id: '10c37430-4ab3-4045-b991-522fd1dd1d7b' }, 
     { edge_id: 'faffasfdasdf', 
       node_id: '1de7733a-5358-4863-8640-32cb3dad6ef0' } ] } 
 */

const test_edge_alias_nodes_reference = {
    nodes : [ { id: "1231231" }, { id: "234235" } ],
    edge  : edge_alias1
}

gen_link_input(test_edge_alias_nodes_reference)

/**
{ nodes: [ null, null ], 
  edge:  
   { id: '51b2bf09-473f-4f21-ba84-1ceb5dd439b2', 
     type: 'TO', 
     weight: null }, 
  edge_nodes:  
   [ { edge_id: '51b2bf09-473f-4f21-ba84-1ceb5dd439b2', 
       node_id: '1231231' }, 
     { edge_id: '51b2bf09-473f-4f21-ba84-1ceb5dd439b2', 
       node_id: '234235' } ] } 
 */

const test_edge_alias_node1_reference_node2_alias = {
    nodes : [ { id: "123131" }, node_alias2 ],
    edge  : edge_alias1
}

gen_link_input(test_edge_alias_node1_reference_node2_alias)

/**
{ nodes:  
   [ null, 
     { id: 'c4b1df77-8ce2-45d6-8457-10f2e4720717', 
       status: 'A', 
       type: 'B' } ], 
  edge:  
   { id: '990f2819-ef38-40fa-86f0-2620cd9cc844', 
     type: 'TO', 
     weight: null }, 
  edge_nodes:  
   [ { edge_id: '990f2819-ef38-40fa-86f0-2620cd9cc844', 
       node_id: '123131' }, 
     { edge_id: '990f2819-ef38-40fa-86f0-2620cd9cc844', 
       node_id: 'c4b1df77-8ce2-45d6-8457-10f2e4720717' } ] } 
 */

const test_edge_alias_node1_alias_node2_reference = {
    nodes : [ node_alias1, { id: "1231231" } ],
    edge  : edge_alias1
}

gen_link_input(test_edge_alias_node1_alias_node2_reference)

/**
{ nodes:  
   [ { id: '6ce14e68-4a7a-4d48-a51d-2d3cd904a12d', 
       status: 'A', 
       type: 'B' }, 
     null ], 
  edge:  
   { id: 'dc887eb2-35c6-4648-8f50-50ea7d4d8212', 
     type: 'TO', 
     weight: null }, 
  edge_nodes:  
   [ { edge_id: 'dc887eb2-35c6-4648-8f50-50ea7d4d8212', 
       node_id: '6ce14e68-4a7a-4d48-a51d-2d3cd904a12d' }, 
     { edge_id: 'dc887eb2-35c6-4648-8f50-50ea7d4d8212', 
       node_id: '1231231' } ] } 
 */

const test_edge_reference_node1_reference_node2_alias = {
    nodes : [ { id: "1231231" }, node_alias2 ],
    edge  : { id: "im an edgy sombitch" }
}

gen_link_input(test_edge_reference_node1_reference_node2_alias)

/**
{ nodes:  
   [ null, 
     { id: '6ac063c2-d877-4b7b-8283-0c27577b7b63', 
       status: 'A', 
       type: 'B' } ], 
  edge: null, 
  edge_nodes:  
   [ { edge_id: 'im an edgy sombitch', node_id: '1231231' }, 
     { edge_id: 'im an edgy sombitch', 
       node_id: '6ac063c2-d877-4b7b-8283-0c27577b7b63' } ] } 
 */

const test_edge_reference_node1_alias_node2_reference = {
    nodes : [ node_alias1, { id: "1231231" } ],
    edge  : { id: "im an edgy sombitch" }
}

gen_link_input(test_edge_reference_node1_alias_node2_reference)

/**
{ nodes:  
   [ { id: 'e793adf7-2d7c-43cf-b4b2-94226960e8c9', 
       status: 'A', 
       type: 'B' }, 
     null ], 
  edge: null, 
  edge_nodes:  
   [ { edge_id: 'im an edgy sombitch', 
       node_id: 'e793adf7-2d7c-43cf-b4b2-94226960e8c9' }, 
     { edge_id: 'im an edgy sombitch', node_id: '1231231' } ] } 
 */

const test_full_reference = {
    nodes : [ { id: "12312312343" }, { id: "1231231" } ],
    edge  : { id: "full on double rainbow" }
}

gen_link_input(test_full_reference)

/**
{ nodes: [ null, null ], 
  edge: null, 
  edge_nodes:  
   [ { edge_id: 'full on double rainbow', node_id: '12312312343' }, 
     { edge_id: 'full on double rainbow', node_id: '1231231' } ] } 
 */

const test_garbage = { nodes: [], edge: {} }

//gen_link_input(test_garbage)

// GEN ASSETS ///////////////////////////////////////////////

const assets = Array.from(Array(10), () => {
    return { type: generateWord().toUpperCase(), name: generateWord(), content: generateSentence(6) }
})

//const test_assets_node_alias = {
//    node   : node_alias1,
//    assets : []
//}

//gen_assets_for_node_input({
//    node   : {},
//    assets : []
//})

/////////////////////////////////////////////// GEN ASSETS //

export const test_links = [
    // full_alias                                      :
    {
        nodes : [ { id: "001", status: "A", type: "D" }, { id: "002", status: "H", type: "I" } ],
        edge  : { id: "1:1", type: "FROM", weight: null }
    },
    // nodes_alias_edge_reference                       :
    {
        nodes : [ { id: "001", status: "A", type: "D" }, node_alias2 ],
        edge  : { id: "this is long enough to be unique" }
    }
]

const res_cluster = gen_link_cluster_input(test_links)

//const dummy = JSON.stringify(abbreviateIDVals(res_cluster), null, 1) //?

gen_assets_for_node_input({ node: { id: "001" }, assets: create_assets_new_node }) //?
