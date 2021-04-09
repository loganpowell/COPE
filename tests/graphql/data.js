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
            edge  : { id: 0, type: e_type.a, weight: null }
        },
        {
            log   : "authored",
            nodes : [ null, { id: 2, status: n_status.a, type: n_type.b } ],
            edge  : { id: 1, type: e_type.a, weight: null }
        },
        {
            log   : "authored",
            nodes : [ null, { id: 3, status: n_status.a, type: n_type.b } ],
            edge  : { id: 2, type: e_type.a, weight: null }
        },
        {
            log   : "authored",
            nodes : [ null, { id: 4, status: n_status.a, type: n_type.b } ],
            edge  : { id: 3, type: e_type.a, weight: null }
        },
        {
            nodes : [ null, { id: 3, status: n_status.a, type: n_type.b } ],
            edge  : { id: 2, type: e_type.a, weight: null }
        },
        {
            nodes : [ null, { id: 3, status: n_status.a, type: n_type.b } ],
            edge  : { id: 2, type: e_type.a, weight: null }
        }
    ]
}
