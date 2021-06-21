import { gen_assets_for_node_input, gen_link_input } from "../utils"
import { NodeStatus, AssetType, EdgeType, Asset, Edge, EdgeNode, Node, _Asset, NodeType } from "../models"
import { DataStore, Predicates } from "@aws-amplify/datastore"
import { v4 as uuid } from "uuid"

export const gem_input = ({
    name_50_chars_or_less,
    parent_node_id = "",
    status = NodeStatus.DRAFT,
    id = uuid(),
    img_url = "",
    video_url = "",
    og_img_url = "https://www.census.gov/content/dam/Census/public/brand/census-logo-sharing-card.jpg",
    desc_200_chars_or_less = "The Census Bureau's mission is to serve as the nation's leading provider of quality data about its people and economy.",
    body_text = "enter markdown here"
}) => {
    if (!name_50_chars_or_less) {
        console.warn("name required for gem_input")
        throw new Error("no name provided for gem_input")
    }
    let link = parent_node_id
        ? gen_link_input({
              edge: { type: EdgeType.HAS_CHILD, id: "edge_id" },
              nodes: [ { id: parent_node_id }, { id, status } ]
          })
        : null

    const gem = gen_assets_for_node_input({
        node: {
            status,
            id,
            type: NodeType.A_GEM
        },
        assets: [
            {
                type: AssetType.A_IMAGE,
                name: name_50_chars_or_less,
                content: img_url || og_img_url
            },
            {
                type: AssetType.A_OG_IMAGE,
                name: "og:image",
                content: og_img_url
            },
            {
                type: AssetType.T_OG_TITLE,
                name: name_50_chars_or_less
            },
            {
                type: AssetType.T_OG_DESCRIPTION,
                name: desc_200_chars_or_less
            },
            {
                type: AssetType.T_BODY,
                name: "body text",
                content: body_text
            },
            {
                type: AssetType.A_VIDEO,
                name: "gem video",
                content: video_url
            },
            {
                type: AssetType.A_OG_VIDEO,
                name: "og:video",
                content: video_url
            }
        ]
    })
    return { gem, link }
}

interface GemCRUDInput {
    name_50_chars_or_less: string
    //parent_node_id? //  parent_node_specified = orphan
    parentNode: Node // TODO: this needs to be an instance of the actual DataStore Node, not just an ID 😞
    status?: NodeStatus
    id? // if no id provided = create; TODO: if provided = update |
    img_url?: string
    video_url?: string
    og_img_url?: string
    desc_200_chars_or_less?: string
    body_text?: string
}

// required reading: https://docs.amplify.aws/lib/datastore/relational/q/platform/js
export const gemCRUD = async (config: GemCRUDInput, operation = "create") => {
    const { status, parentNode } = config
    // if parent node id'd, create link to parent

    if (operation === "create") {
        // FIXME: DataStore doesn't allow setting ID:
        // https://github.com/aws-amplify/amplify-js/issues/6264#issuecomment-864676815
        // so, we have to create the Node first and bypass client UUID gen for gem_input
        const ds_node = await DataStore.save(
            // @ts-ignore
            new Node({
                status,
                type: NodeType.A_GEM
            })
        )
        const { id } = ds_node
        const { gem: { assets } } = gem_input({ ...config, id })
        await assets.forEach(async asset => {
            const { type, name, content } = asset
            let res = await DataStore.save(
                // @ts-ignore
                new Asset({
                    node_id: id,
                    type,
                    name,
                    content
                })
            )
        })
        if (parentNode) {
            // same issue as with Nodes, Edge id must be sourced from DataStore
            const ds_edge = await DataStore.save(
                // @ts-ignore
                new Edge({ type: EdgeType.HAS_CHILD })
            )
            // many:many relationship requires a special sort of PITA
            const parent = await DataStore.save(new EdgeNode({ edge: ds_edge, node: parentNode }))
            const child = await DataStore.save(new EdgeNode({ edge: ds_edge, node: ds_node }))
        }
        let all_nodes = await DataStore.query(Node, Predicates.ALL)
        let all_assets = await DataStore.query(Asset, Predicates.ALL)
        let all_Edges = await DataStore.query(Edge, Predicates.ALL)
        let all_EdgeNodes = await DataStore.query(EdgeNode, Predicates.ALL)
        console.log({ all_nodes, all_assets, all_Edges })
        console.log("all_EdgeNodes", JSON.stringify(all_EdgeNodes, null, 2))
        return { node_id: id }
    }
}
