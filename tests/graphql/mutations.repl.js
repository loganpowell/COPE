import {
    createAsset,
    createEdge,
    createNode,
    createEdgeNode,
    create_Asset,
    deleteAsset,
    deleteEdge,
    deleteNode,
    deleteEdgeNode,
    delete_Asset,
    updateAsset,
    updateEdge,
    updateNode,
    updateEdgeNode,
    update_Asset
} from "../../src/graphql/mutations"
import { _Asset, Asset, Edge, Node, EdgeNode } from "../../lib/models"
import Amplify from "@aws-amplify/core"
import { DataStore } from "@aws-amplify/datastore"
import { auth, ass_type, edg_type, nod_status, nod_type } from "../../lib/api"
import { v4 as uuid } from "uuid"
import config from "../../src/aws-exports"
import fetch from "node-fetch"

import dotenv from "dotenv"

Amplify.configure(config)
dotenv.config()

//
//  888~-_               d8             ,d88~~\   d8
//  888   \    /~~~8e  _d88__   /~~~8e  8888    _d88__  e88~-_  888-~\  e88~~8e
//  888    |       88b  888         88b `Y88b    888   d888   i 888    d888  88b
//  888    |  e88~-888  888    e88~-888  `Y88b,  888   8888   | 888    8888__888
//  888   /  C888  888  888   C888  888    8888  888   Y888   ' 888    Y888    ,
//  888_-~    "88_-888  "88_/  "88_-888 \__88P'  "88_/  "88_-~  888     "88___/
//
//

const save_Asset = async config => {
    const { name, node_id, type, createdAt, content } = config
    await DataStore.save(new _Asset(config)).then(r => console.log("saved _Asset:", r)).catch(console.warn)
}
const read_Assets = async () => {
    const assets = await DataStore.query(_Asset).catch(console.warn)
    console.log("Read these _assets:", JSON.stringify(assets, null, 4))
}
save_Asset({
    name    : "created by DataStore",
    node_id : "0123456789",
    type    : ""
}).then(
    read_Assets() //?
)

let query = /* GraphQL */ `
    query getNode {
        getNode(id:1){
            id
            status
            type
            createdAt
            owner
            edges(sortDirection:DESC){
                items{ 
                    edge{
                        id
                        type
                        weight
                        createdAt
                        owner
                        nodes{
                            items{
                                id
                                node{
                                    id
                                    type
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const data = fetch("http://localhost:20002/graphql", {
    headers : {
        authorization  : auth.user3_viewers,
        "content-type" : "application/json"
    },
    method  : "POST",
    body    : JSON.stringify({ query: query })
})
    .then(r => r.json())
    .then(j => JSON.stringify(j, null, 2)) //?

const result = {
    data : {
        getNode : {
            id        : "1",
            status    : "STUBBED",
            type      : "H_AUTHOR",
            createdAt : "2021-04-07T12:06:56.328Z",
            owner     : "user1",
            edges     : {
                items : [
                    {
                        edge : {
                            id        : "1",
                            type      : "CREATED_BY",
                            weight    : 0,
                            createdAt : "2021-04-07T12:09:12.280Z",
                            owner     : "user1",
                            nodes     : {
                                items : [
                                    {
                                        id   : "1:1",
                                        node : {
                                            id   : "1",
                                            type : "H_AUTHOR"
                                        }
                                    },
                                    {
                                        id   : "1:2",
                                        node : {
                                            id   : "2",
                                            type : "A_ARTICLE"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}

//describe("graphql mutations", () => {
//    test("basic", () => {
//        data.then(j => {
//            expect(j).toMatchObject(result)
//        })
//    })
//})
