import { isPlainObject, isArray } from "@thi.ng/checks"

export const delete_ids = input => {
    if (isPlainObject(input)) {
        if (input.id) delete input.id
        Object.values(input).forEach(delete_ids)
    }
    if (isArray(input)) {
        input.forEach(delete_ids)
        return input
    }
    return input
}

//delete_ids({
//    nodes      : [
//        {
//            id     : "10c37430-4ab3-4045-b991-522fd1dd1d7b",
//            status : "A",
//            type   : "B"
//        },
//        {
//            id     : "1de7733a-5358-4863-8640-32cb3dad6ef0",
//            status : "A",
//            type   : "B"
//        }
//    ],
//    edge       : null,
//    edge_nodes : [
//        {
//            edge_id : "faffasfdasdf",
//            node_id : "10c37430-4ab3-4045-b991-522fd1dd1d7b"
//        },
//        {
//            edge_id : "faffasfdasdf",
//            node_id : "1de7733a-5358-4863-8640-32cb3dad6ef0"
//        }
//    ]
//}) //?

export const abbreviateIDVals = (input, i = 0, edge = false) => {
    if (edge) {
        if (input) return (input.id = `edge_id`)
        return input
    }
    if (isPlainObject(input)) {
        if (input.id && input.id.length > 4) input.id = `id${i}`
        if (input.edge_id && input.edge_id.length > 4) input.edge_id = `edge_id`
        if (input.node_id && input.node_id.length > 4) input.node_id = `id${i}`
        Object.entries(input).forEach(
            ([ k, v ], idx) => (k === "edge" ? abbreviateIDVals(v, idx, true) : abbreviateIDVals(v, idx))
        )
    }
    if (isArray(input)) {
        input.forEach((i, idx) => abbreviateIDVals(i, idx))
        return input
    }
    return input
}

//abbreviateIDVals({
//    nodes      : [
//        {
//            id     : "1de7733a-5358-4863-8640-32cb3dad6e",
//            status : "A",
//            type   : "B"
//        },
//        {
//            id     : "1de7733a-5358-4863-8640-32cb3dad6ef0",
//            status : "A",
//            type   : "B"
//        }
//    ],
//    edge       : { id: "fasdfasdfasdf", type: "TO", weight: null },
//    edge_nodes : [
//        {
//            edge_id : "faffasfdasdf",
//            node_id : "1de7733a-5358-4863-8640-32cb3dad6e"
//        },
//        {
//            edge_id : "faffasfdasdf",
//            node_id : "1de7733a-5358-4863-8640-32cb3dad6ef0"
//        }
//    ]
//}) //?

/**
 { nodes:  
    [ { id: 'id0', status: 'A', type: 'B' }, 
    { id: 'id1', status: 'A', type: 'B' } ], 
    edge: { id: 'edge_id', type: 'TO', weight: null }, 
    edge_nodes:  
    [ { edge_id: 'edge_id', node_id: 'id0' }, 
    { edge_id: 'edge_id', node_id: 'id1' } ] } 
*/
