import { EnumType, jsonToGraphQLQuery as js2gql } from "json-to-graphql-query"
import { v4 as uuid } from "uuid"

const n_status = {
    a : "DRAFT",
    b : "REVIEWED",
    c : "PUBLISHED",
    d : "EDITED",
    e : "DELETED"
}

const n_type = {
    a : "PER_AUTHOR",
    b : "A_ARTICLE",
    c : "A_PAGE",
    d : "GR_COURSE",
    e : "A_LESSON"
}

const e_type = {
    a : "AUTHORED",
    b : "HAS_CHILD",
    c : "IS_BEFORE",
    d : "HAS_PART"
}

const cluster = {
    UUIDs : {
        from_node : "some long UUID",
        to_nodes  : [ "UUID2", "UUID3", "UUID4", "etc..." ]
    },
    links : [
        {
            log   : "authored",
            nodes : [ { id: 0, status: n_status.c, type: n_type.a }, { id: 1, status: n_status.a, type: n_type.b } ],
            edge  : { id: 0, type: e_type.a, weight: null },
            link  : [
                { edge_id: 0, node_id: 0 }, // from
                { edge_id: 0, node_id: 1 } // to
            ]
        },
        {
            log   : "authored",
            nodes : [
                null, // from node preexisting
                { id: 2, status: n_status.a, type: n_type.b }
            ],
            edge  : { id: 1, type: e_type.a, weight: null },
            link  : [
                { edge_id: 1, node_id: 0 }, // node_id preexisting
                { edge_id: 1, node_id: 2 } // id = `${edge_id}:{node_id}
            ]
        },
        {
            log   : "authored",
            nodes : [ null, { id: 3, status: n_status.a, type: n_type.b } ],
            edge  : { id: 2, type: e_type.a, weight: null },
            link  : [ { edge_id: 2, node_id: 0 }, { edge_id: 2, node_id: 3 } ]
        },
        {
            log   : "authored",
            nodes : [ null, { id: 4, status: n_status.a, type: n_type.b } ],
            edge  : { id: 3, type: e_type.a, weight: null },
            link  : [ { edge_id: 3, node_id: 0 }, { edge_id: 3, node_id: 4 } ]
        },
        {
            nodes : [ null, { id: 3, status: n_status.a, type: n_type.b } ],
            edge  : { id: 2, type: e_type.a, weight: null },
            link  : [ { edge_id: 2, node_id: 0 }, { edge_id: 2, node_id: 3 } ]
        },
        {
            nodes : [ null, { id: 3, status: n_status.a, type: n_type.b } ],
            edge  : { id: 2, type: e_type.a, weight: null },
            link  : [ { edge_id: 2, node_id: 0 }, { edge_id: 2, node_id: 3 } ]
        }
    ]
}
