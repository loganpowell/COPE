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
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
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
                        "name": "Assets_by_type",
                        "fields": [
                            "type",
                            "createdAt"
                        ],
                        "queryField": "assetsByType"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "Assets_by_owner",
                        "fields": [
                            "owner",
                            "createdAt"
                        ],
                        "queryField": "assetsByOwner"
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
                                "identityClaim": "email",
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
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
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
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "_Assets_by_node",
                        "fields": [
                            "node_id",
                            "createdAt"
                        ],
                        "queryField": "_assetsByNode"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "_Assets_by_type_owner",
                        "fields": [
                            "type",
                            "owner",
                            "createdAt"
                        ],
                        "queryField": "_assetsByTypeOwner"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "_Assets_by_owner",
                        "fields": [
                            "owner",
                            "createdAt"
                        ],
                        "queryField": "_assetsByOwner"
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
                                "identityClaim": "email",
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
                        "enum": "NodeStatus"
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
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
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
                    "type": "key",
                    "properties": {
                        "name": "Nodes_by_status_type_createdAt",
                        "fields": [
                            "status",
                            "type",
                            "createdAt"
                        ],
                        "queryField": "nodesByStatusType"
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
                                "identityClaim": "email",
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
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EdgeNodes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
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
                                "identityClaim": "email",
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
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
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
                        "name": "Edges_by_type",
                        "fields": [
                            "type",
                            "createdAt"
                        ],
                        "queryField": "edgesByType"
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
                                "identityClaim": "email",
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
        "NodeType": {
            "name": "NodeType",
            "values": [
                "H_AUTHOR",
                "H_TEAM",
                "A_ARTICLE",
                "A_PAGE",
                "A_APPLICATION",
                "A_GEM",
                "S_ACS",
                "S_DECENNIAL",
                "S_CBP",
                "V_1990",
                "V_2000",
                "V_2010",
                "V_2020",
                "C_SERIES",
                "C_LIST"
            ]
        },
        "NodeStatus": {
            "name": "NodeStatus",
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
                "AUTHORED",
                "HAS_NEXT",
                "HAS_PART",
                "HAS_CHILD"
            ]
        },
        "AssetType": {
            "name": "AssetType",
            "values": [
                "DEPRECATED",
                "A_IMAGE",
                "A_OG_IMAGE",
                "A_OG_AUDIO",
                "A_OG_VIDEO",
                "A_VIDEO",
                "A_AUDIO",
                "T_OG_TITLE",
                "T_OG_DESCRIPTION",
                "T_OG_TYPE",
                "T_LEDE",
                "T_BODY",
                "M_DATA",
                "M_MAP",
                "M_VIZ",
                "M_API",
                "F_PDF",
                "F_KML",
                "F_SHP",
                "F_CSV"
            ]
        }
    },
    "nonModels": {},
    "version": "4b15baa68d8866b95bb2a4e7a2ff4c5b"
};
