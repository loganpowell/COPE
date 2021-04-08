import {
    createAsset,
    createEdge,
    createNode,
    createNodeEdge,
    create_Asset,
    deleteAsset,
    deleteEdge,
    deleteNode,
    deleteNodeEdge,
    delete_Asset,
    updateAsset,
    updateEdge,
    updateNode,
    updateNodeEdge,
    update_Asset
} from "../../src/graphql/mutations"
import { auth } from "./utils"
import fetch from "node-fetch"
import dotenv from "dotenv"
dotenv.config()

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
}).then(r => r.json())
//.then(j => JSON.stringify(j, null, 2)) //?

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

describe("graphql mutations", () => {
    test("basic", () => {
        data.then(j => {
            expect(j).toMatchObject(result)
        })
    })
})
