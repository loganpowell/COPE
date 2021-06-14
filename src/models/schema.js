export const schema = {
    "models": {
        "Asset": {
            "name": "Asset",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "node_id": {
                    "name": "node_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "AssetType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Assets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "Assets_by_node",
                        "fields": [
                            "node_id",
                            "createdAt"
                        ],
                        "queryField": "assetsByNode"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "Assets_by_type_name",
                        "fields": [
                            "type",
                            "name",
                            "createdAt"
                        ],
                        "queryField": "assetsByTypeName"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read",
                                    "update",
                                    "delete"
                                ],
                                "groups": [
                                    "Admins",
                                    "Editors"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read"
                                ],
                                "groups": [
                                    "Viewers"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "_Asset": {
            "name": "_Asset",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "node_id": {
                    "name": "node_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "AssetType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "_Assets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "_Assets_by_node",
                        "fields": [
                            "node_id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read",
                                    "update",
                                    "delete"
                                ],
                                "groups": [
                                    "Admins",
                                    "Editors"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Node": {
            "name": "Node",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "Status"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "NodeType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "assets": {
                    "name": "assets",
                    "isArray": true,
                    "type": {
                        "model": "Asset"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "node_id"
                    }
                },
                "_assets": {
                    "name": "_assets",
                    "isArray": true,
                    "type": {
                        "model": "_Asset"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "node_id"
                    }
                },
                "edges": {
                    "name": "edges",
                    "isArray": true,
                    "type": {
                        "model": "EdgeNode"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "node"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Nodes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "Nodes_by_type_status_createdAt",
                        "fields": [
                            "type",
                            "status",
                            "createdAt"
                        ],
                        "queryField": "nodesByTypeStatus"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read",
                                    "update",
                                    "delete"
                                ],
                                "groups": [
                                    "Admins",
                                    "Editors"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read"
                                ],
                                "groups": [
                                    "Viewers"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EdgeNode": {
            "name": "EdgeNode",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "edge": {
                    "name": "edge",
                    "isArray": false,
                    "type": {
                        "model": "Edge"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "edge_id"
                    }
                },
                "node": {
                    "name": "node",
                    "isArray": false,
                    "type": {
                        "model": "Node"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "node_id"
                    }
                }
            },
            "syncable": true,
            "pluralName": "EdgeNodes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "EdgeNodes_by_edge",
                        "fields": [
                            "edge_id",
                            "node_id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "EdgeNodes_by_node",
                        "fields": [
                            "node_id",
                            "edge_id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read",
                                    "update",
                                    "delete"
                                ],
                                "groups": [
                                    "Admins",
                                    "Editors"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read"
                                ],
                                "groups": [
                                    "Viewers"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Edge": {
            "name": "Edge",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EdgeType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "nodes": {
                    "name": "nodes",
                    "isArray": true,
                    "type": {
                        "model": "EdgeNode"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "edge"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Edges",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "Edges_by_type_weight",
                        "fields": [
                            "type",
                            "weight",
                            "createdAt"
                        ],
                        "queryField": "edgesByTypeWeight"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read",
                                    "update",
                                    "delete"
                                ],
                                "groups": [
                                    "Admins",
                                    "Editors"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "operations": [
                                    "read"
                                ],
                                "groups": [
                                    "Viewers"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "AssetType": {
            "name": "AssetType",
            "values": [
                "DEPRECATED",
                "V_IMAGE",
                "V_VIDEO",
                "V_AUDIO",
                "T_BIO",
                "T_HEADLINE_140",
                "T_TITLE",
                "T_LEDE",
                "T_SUMMARY",
                "T_BODY",
                "L_REFERENCE",
                "F_PDF"
            ]
        },
        "NodeType": {
            "name": "NodeType",
            "values": [
                "PER_PERSON",
                "PER_AUTHOR",
                "PER_EMPLOYEE",
                "PER_HISTORICAL",
                "GEO_STATE_01",
                "GEO_STATE_02",
                "A_LESSON",
                "A_ARTICLE",
                "A_PAGE",
                "A_APPLICATION",
                "GR_COURSE",
                "GR_SERIES",
                "GR_LIST"
            ]
        },
        "Status": {
            "name": "Status",
            "values": [
                "DRAFT",
                "REVIEWED",
                "PUBLISHED",
                "EDITED",
                "DELETED"
            ]
        },
        "EdgeType": {
            "name": "EdgeType",
            "values": [
                "WORKED_WITH",
                "HAS_MEMBER",
                "AUTHORED",
                "HAS_CHILD",
                "IS_BEFORE",
                "HAS_PART"
            ]
        }
    },
    "nonModels": {},
    "version": "8e0c90c7d2f464ea404c3bc3b2596c60"
};