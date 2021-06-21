import { gem_input, gemCRUD } from "../../lib/input"
import { DataStore } from "@aws-amplify/datastore"

import { NodeStatus, AssetType, EdgeType, Asset, Edge, EdgeNode, Node, _Asset, NodeType } from "../../lib/models"

const body_text = `
# My first Data Gem

## Introduction

this __would be__ a _markdown_ enabled body text

## Features

- unordered
- lists

1. ordered
2. lists

all [github flavored markdown]()


😻 
(with emoji support)
`

gem_input({
    name_50_chars_or_less  : "This Title is less than 50 characters",
    body_text,
    parent_node_id         : "this is a reference id",
    desc_200_chars_or_less : "this description would be used f or open graph!",
    //img_url                : "https://www.census.gov/content/dam/Census/public/brand/census-logo-sharing-card.jpg",
    //status                 : NodeStatus.DRAFT,
    video_url              : "https://www.youtube.com/watch?v=uegSa6y0RQ0"
})
;(async () => {
    // required reading: https://docs.amplify.aws/lib/datastore/relational/q/platform/js#many-to-many
    const parentNode = await DataStore.save(
        new Node({
            type : NodeType.A_PAGE
        })
    )
    gemCRUD({
        name_50_chars_or_less : "some random name goes here ",
        status                : NodeStatus.DRAFT,
        //parent_node_id        : "some parent node id goes here"
        parentNode
    })
})() //?
