export namespace schema {
    namespace models {
        namespace Asset {
            export const name: string;
            export namespace fields {
                export namespace id {
                    const name_1: string;
                    export { name_1 as name };
                    export const isArray: boolean;
                    export const type: string;
                    export const isRequired: boolean;
                    export const attributes: any[];
                }
                export namespace node_id {
                    const name_2: string;
                    export { name_2 as name };
                    const isArray_1: boolean;
                    export { isArray_1 as isArray };
                    const type_1: string;
                    export { type_1 as type };
                    const isRequired_1: boolean;
                    export { isRequired_1 as isRequired };
                    const attributes_1: any[];
                    export { attributes_1 as attributes };
                }
                export namespace createdAt {
                    const name_3: string;
                    export { name_3 as name };
                    const isArray_2: boolean;
                    export { isArray_2 as isArray };
                    const type_2: string;
                    export { type_2 as type };
                    const isRequired_2: boolean;
                    export { isRequired_2 as isRequired };
                    const attributes_2: any[];
                    export { attributes_2 as attributes };
                }
                export namespace type_3 {
                    const name_4: string;
                    export { name_4 as name };
                    const isArray_3: boolean;
                    export { isArray_3 as isArray };
                    export namespace type_4 {
                        const _enum: string;
                        export { _enum as enum };
                    }
                    export { type_4 as type };
                    const isRequired_3: boolean;
                    export { isRequired_3 as isRequired };
                    const attributes_3: any[];
                    export { attributes_3 as attributes };
                }
                export { type_3 as type };
                export namespace name_5 {
                    const name_6: string;
                    export { name_6 as name };
                    const isArray_4: boolean;
                    export { isArray_4 as isArray };
                    const type_5: string;
                    export { type_5 as type };
                    const isRequired_4: boolean;
                    export { isRequired_4 as isRequired };
                    const attributes_4: any[];
                    export { attributes_4 as attributes };
                }
                export { name_5 as name };
                export namespace owner {
                    const name_7: string;
                    export { name_7 as name };
                    const isArray_5: boolean;
                    export { isArray_5 as isArray };
                    const type_6: string;
                    export { type_6 as type };
                    const isRequired_5: boolean;
                    export { isRequired_5 as isRequired };
                    const attributes_5: any[];
                    export { attributes_5 as attributes };
                }
                export namespace content {
                    const name_8: string;
                    export { name_8 as name };
                    const isArray_6: boolean;
                    export { isArray_6 as isArray };
                    const type_7: string;
                    export { type_7 as type };
                    const isRequired_6: boolean;
                    export { isRequired_6 as isRequired };
                    const attributes_6: any[];
                    export { attributes_6 as attributes };
                }
            }
            export const syncable: boolean;
            export const pluralName: string;
            const attributes_7: ({
                type: string;
                properties: {
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    name: string;
                    fields: string[];
                    queryField: string;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    rules: ({
                        provider: string;
                        ownerField: string;
                        allow: string;
                        identityClaim: string;
                        operations: string[];
                        groupClaim?: undefined;
                        groups?: undefined;
                    } | {
                        groupClaim: string;
                        provider: string;
                        allow: string;
                        operations: string[];
                        groups: string[];
                        ownerField?: undefined;
                        identityClaim?: undefined;
                    } | {
                        allow: string;
                        operations: string[];
                        provider?: undefined;
                        ownerField?: undefined;
                        identityClaim?: undefined;
                        groupClaim?: undefined;
                        groups?: undefined;
                    })[];
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                };
            })[];
            export { attributes_7 as attributes };
        }
        namespace _Asset {
            const name_9: string;
            export { name_9 as name };
            export namespace fields_1 {
                export namespace id_1 {
                    const name_10: string;
                    export { name_10 as name };
                    const isArray_7: boolean;
                    export { isArray_7 as isArray };
                    const type_8: string;
                    export { type_8 as type };
                    const isRequired_7: boolean;
                    export { isRequired_7 as isRequired };
                    const attributes_8: any[];
                    export { attributes_8 as attributes };
                }
                export { id_1 as id };
                export namespace node_id_1 {
                    const name_11: string;
                    export { name_11 as name };
                    const isArray_8: boolean;
                    export { isArray_8 as isArray };
                    const type_9: string;
                    export { type_9 as type };
                    const isRequired_8: boolean;
                    export { isRequired_8 as isRequired };
                    const attributes_9: any[];
                    export { attributes_9 as attributes };
                }
                export { node_id_1 as node_id };
                export namespace createdAt_1 {
                    const name_12: string;
                    export { name_12 as name };
                    const isArray_9: boolean;
                    export { isArray_9 as isArray };
                    const type_10: string;
                    export { type_10 as type };
                    const isRequired_9: boolean;
                    export { isRequired_9 as isRequired };
                    const attributes_10: any[];
                    export { attributes_10 as attributes };
                }
                export { createdAt_1 as createdAt };
                export namespace type_11 {
                    const name_13: string;
                    export { name_13 as name };
                    const isArray_10: boolean;
                    export { isArray_10 as isArray };
                    export namespace type_12 {
                        const _enum_1: string;
                        export { _enum_1 as enum };
                    }
                    export { type_12 as type };
                    const isRequired_10: boolean;
                    export { isRequired_10 as isRequired };
                    const attributes_11: any[];
                    export { attributes_11 as attributes };
                }
                export { type_11 as type };
                export namespace name_14 {
                    const name_15: string;
                    export { name_15 as name };
                    const isArray_11: boolean;
                    export { isArray_11 as isArray };
                    const type_13: string;
                    export { type_13 as type };
                    const isRequired_11: boolean;
                    export { isRequired_11 as isRequired };
                    const attributes_12: any[];
                    export { attributes_12 as attributes };
                }
                export { name_14 as name };
                export namespace owner_1 {
                    const name_16: string;
                    export { name_16 as name };
                    const isArray_12: boolean;
                    export { isArray_12 as isArray };
                    const type_14: string;
                    export { type_14 as type };
                    const isRequired_12: boolean;
                    export { isRequired_12 as isRequired };
                    const attributes_13: any[];
                    export { attributes_13 as attributes };
                }
                export { owner_1 as owner };
                export namespace content_1 {
                    const name_17: string;
                    export { name_17 as name };
                    const isArray_13: boolean;
                    export { isArray_13 as isArray };
                    const type_15: string;
                    export { type_15 as type };
                    const isRequired_13: boolean;
                    export { isRequired_13 as isRequired };
                    const attributes_14: any[];
                    export { attributes_14 as attributes };
                }
                export { content_1 as content };
            }
            export { fields_1 as fields };
            const syncable_1: boolean;
            export { syncable_1 as syncable };
            const pluralName_1: string;
            export { pluralName_1 as pluralName };
            const attributes_15: ({
                type: string;
                properties: {
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    name: string;
                    fields: string[];
                    queryField: string;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    rules: ({
                        provider: string;
                        ownerField: string;
                        allow: string;
                        identityClaim: string;
                        operations: string[];
                        groupClaim?: undefined;
                        groups?: undefined;
                    } | {
                        groupClaim: string;
                        provider: string;
                        allow: string;
                        operations: string[];
                        groups: string[];
                        ownerField?: undefined;
                        identityClaim?: undefined;
                    })[];
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                };
            })[];
            export { attributes_15 as attributes };
        }
        namespace Node {
            const name_18: string;
            export { name_18 as name };
            export namespace fields_2 {
                export namespace id_2 {
                    const name_19: string;
                    export { name_19 as name };
                    const isArray_14: boolean;
                    export { isArray_14 as isArray };
                    const type_16: string;
                    export { type_16 as type };
                    const isRequired_14: boolean;
                    export { isRequired_14 as isRequired };
                    const attributes_16: any[];
                    export { attributes_16 as attributes };
                }
                export { id_2 as id };
                export namespace status {
                    const name_20: string;
                    export { name_20 as name };
                    const isArray_15: boolean;
                    export { isArray_15 as isArray };
                    export namespace type_17 {
                        const _enum_2: string;
                        export { _enum_2 as enum };
                    }
                    export { type_17 as type };
                    const isRequired_15: boolean;
                    export { isRequired_15 as isRequired };
                    const attributes_17: any[];
                    export { attributes_17 as attributes };
                }
                export namespace type_18 {
                    const name_21: string;
                    export { name_21 as name };
                    const isArray_16: boolean;
                    export { isArray_16 as isArray };
                    export namespace type_19 {
                        const _enum_3: string;
                        export { _enum_3 as enum };
                    }
                    export { type_19 as type };
                    const isRequired_16: boolean;
                    export { isRequired_16 as isRequired };
                    const attributes_18: any[];
                    export { attributes_18 as attributes };
                }
                export { type_18 as type };
                export namespace createdAt_2 {
                    const name_22: string;
                    export { name_22 as name };
                    const isArray_17: boolean;
                    export { isArray_17 as isArray };
                    const type_20: string;
                    export { type_20 as type };
                    const isRequired_17: boolean;
                    export { isRequired_17 as isRequired };
                    const attributes_19: any[];
                    export { attributes_19 as attributes };
                }
                export { createdAt_2 as createdAt };
                export namespace updatedAt {
                    const name_23: string;
                    export { name_23 as name };
                    const isArray_18: boolean;
                    export { isArray_18 as isArray };
                    const type_21: string;
                    export { type_21 as type };
                    const isRequired_18: boolean;
                    export { isRequired_18 as isRequired };
                    const attributes_20: any[];
                    export { attributes_20 as attributes };
                }
                export namespace owner_2 {
                    const name_24: string;
                    export { name_24 as name };
                    const isArray_19: boolean;
                    export { isArray_19 as isArray };
                    const type_22: string;
                    export { type_22 as type };
                    const isRequired_19: boolean;
                    export { isRequired_19 as isRequired };
                    const attributes_21: any[];
                    export { attributes_21 as attributes };
                }
                export { owner_2 as owner };
                export namespace assets {
                    const name_25: string;
                    export { name_25 as name };
                    const isArray_20: boolean;
                    export { isArray_20 as isArray };
                    export namespace type_23 {
                        const model: string;
                    }
                    export { type_23 as type };
                    const isRequired_20: boolean;
                    export { isRequired_20 as isRequired };
                    const attributes_22: any[];
                    export { attributes_22 as attributes };
                    export const isArrayNullable: boolean;
                    export namespace association {
                        const connectionType: string;
                        const associatedWith: string;
                    }
                }
                export namespace _assets {
                    const name_26: string;
                    export { name_26 as name };
                    const isArray_21: boolean;
                    export { isArray_21 as isArray };
                    export namespace type_24 {
                        const model_1: string;
                        export { model_1 as model };
                    }
                    export { type_24 as type };
                    const isRequired_21: boolean;
                    export { isRequired_21 as isRequired };
                    const attributes_23: any[];
                    export { attributes_23 as attributes };
                    const isArrayNullable_1: boolean;
                    export { isArrayNullable_1 as isArrayNullable };
                    export namespace association_1 {
                        const connectionType_1: string;
                        export { connectionType_1 as connectionType };
                        const associatedWith_1: string;
                        export { associatedWith_1 as associatedWith };
                    }
                    export { association_1 as association };
                }
                export namespace edges {
                    const name_27: string;
                    export { name_27 as name };
                    const isArray_22: boolean;
                    export { isArray_22 as isArray };
                    export namespace type_25 {
                        const model_2: string;
                        export { model_2 as model };
                    }
                    export { type_25 as type };
                    const isRequired_22: boolean;
                    export { isRequired_22 as isRequired };
                    const attributes_24: any[];
                    export { attributes_24 as attributes };
                    const isArrayNullable_2: boolean;
                    export { isArrayNullable_2 as isArrayNullable };
                    export namespace association_2 {
                        const connectionType_2: string;
                        export { connectionType_2 as connectionType };
                        const associatedWith_2: string;
                        export { associatedWith_2 as associatedWith };
                    }
                    export { association_2 as association };
                }
            }
            export { fields_2 as fields };
            const syncable_2: boolean;
            export { syncable_2 as syncable };
            const pluralName_2: string;
            export { pluralName_2 as pluralName };
            const attributes_25: ({
                type: string;
                properties: {
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    name: string;
                    fields: string[];
                    queryField: string;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    rules: ({
                        provider: string;
                        ownerField: string;
                        allow: string;
                        identityClaim: string;
                        operations: string[];
                        groupClaim?: undefined;
                        groups?: undefined;
                    } | {
                        groupClaim: string;
                        provider: string;
                        allow: string;
                        operations: string[];
                        groups: string[];
                        ownerField?: undefined;
                        identityClaim?: undefined;
                    } | {
                        allow: string;
                        operations: string[];
                        provider?: undefined;
                        ownerField?: undefined;
                        identityClaim?: undefined;
                        groupClaim?: undefined;
                        groups?: undefined;
                    })[];
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                };
            })[];
            export { attributes_25 as attributes };
        }
        namespace EdgeNode {
            const name_28: string;
            export { name_28 as name };
            export namespace fields_3 {
                export namespace id_3 {
                    const name_29: string;
                    export { name_29 as name };
                    const isArray_23: boolean;
                    export { isArray_23 as isArray };
                    const type_26: string;
                    export { type_26 as type };
                    const isRequired_23: boolean;
                    export { isRequired_23 as isRequired };
                    const attributes_26: any[];
                    export { attributes_26 as attributes };
                }
                export { id_3 as id };
                export namespace edge {
                    const name_30: string;
                    export { name_30 as name };
                    const isArray_24: boolean;
                    export { isArray_24 as isArray };
                    export namespace type_27 {
                        const model_3: string;
                        export { model_3 as model };
                    }
                    export { type_27 as type };
                    const isRequired_24: boolean;
                    export { isRequired_24 as isRequired };
                    const attributes_27: any[];
                    export { attributes_27 as attributes };
                    export namespace association_3 {
                        const connectionType_3: string;
                        export { connectionType_3 as connectionType };
                        export const targetName: string;
                    }
                    export { association_3 as association };
                }
                export namespace node {
                    const name_31: string;
                    export { name_31 as name };
                    const isArray_25: boolean;
                    export { isArray_25 as isArray };
                    export namespace type_28 {
                        const model_4: string;
                        export { model_4 as model };
                    }
                    export { type_28 as type };
                    const isRequired_25: boolean;
                    export { isRequired_25 as isRequired };
                    const attributes_28: any[];
                    export { attributes_28 as attributes };
                    export namespace association_4 {
                        const connectionType_4: string;
                        export { connectionType_4 as connectionType };
                        const targetName_1: string;
                        export { targetName_1 as targetName };
                    }
                    export { association_4 as association };
                }
                export namespace owner_3 {
                    const name_32: string;
                    export { name_32 as name };
                    const isArray_26: boolean;
                    export { isArray_26 as isArray };
                    const type_29: string;
                    export { type_29 as type };
                    const isRequired_26: boolean;
                    export { isRequired_26 as isRequired };
                    const attributes_29: any[];
                    export { attributes_29 as attributes };
                }
                export { owner_3 as owner };
            }
            export { fields_3 as fields };
            const syncable_3: boolean;
            export { syncable_3 as syncable };
            const pluralName_3: string;
            export { pluralName_3 as pluralName };
            const attributes_30: ({
                type: string;
                properties: {
                    name?: undefined;
                    fields?: undefined;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    name: string;
                    fields: string[];
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    rules: ({
                        provider: string;
                        ownerField: string;
                        allow: string;
                        identityClaim: string;
                        operations: string[];
                        groupClaim?: undefined;
                        groups?: undefined;
                    } | {
                        groupClaim: string;
                        provider: string;
                        allow: string;
                        operations: string[];
                        groups: string[];
                        ownerField?: undefined;
                        identityClaim?: undefined;
                    } | {
                        allow: string;
                        operations: string[];
                        provider?: undefined;
                        ownerField?: undefined;
                        identityClaim?: undefined;
                        groupClaim?: undefined;
                        groups?: undefined;
                    })[];
                    name?: undefined;
                    fields?: undefined;
                };
            })[];
            export { attributes_30 as attributes };
        }
        namespace Edge {
            const name_33: string;
            export { name_33 as name };
            export namespace fields_4 {
                export namespace id_4 {
                    const name_34: string;
                    export { name_34 as name };
                    const isArray_27: boolean;
                    export { isArray_27 as isArray };
                    const type_30: string;
                    export { type_30 as type };
                    const isRequired_27: boolean;
                    export { isRequired_27 as isRequired };
                    const attributes_31: any[];
                    export { attributes_31 as attributes };
                }
                export { id_4 as id };
                export namespace type_31 {
                    const name_35: string;
                    export { name_35 as name };
                    const isArray_28: boolean;
                    export { isArray_28 as isArray };
                    export namespace type_32 {
                        const _enum_4: string;
                        export { _enum_4 as enum };
                    }
                    export { type_32 as type };
                    const isRequired_28: boolean;
                    export { isRequired_28 as isRequired };
                    const attributes_32: any[];
                    export { attributes_32 as attributes };
                }
                export { type_31 as type };
                export namespace createdAt_3 {
                    const name_36: string;
                    export { name_36 as name };
                    const isArray_29: boolean;
                    export { isArray_29 as isArray };
                    const type_33: string;
                    export { type_33 as type };
                    const isRequired_29: boolean;
                    export { isRequired_29 as isRequired };
                    const attributes_33: any[];
                    export { attributes_33 as attributes };
                }
                export { createdAt_3 as createdAt };
                export namespace owner_4 {
                    const name_37: string;
                    export { name_37 as name };
                    const isArray_30: boolean;
                    export { isArray_30 as isArray };
                    const type_34: string;
                    export { type_34 as type };
                    const isRequired_30: boolean;
                    export { isRequired_30 as isRequired };
                    const attributes_34: any[];
                    export { attributes_34 as attributes };
                }
                export { owner_4 as owner };
                export namespace weight {
                    const name_38: string;
                    export { name_38 as name };
                    const isArray_31: boolean;
                    export { isArray_31 as isArray };
                    const type_35: string;
                    export { type_35 as type };
                    const isRequired_31: boolean;
                    export { isRequired_31 as isRequired };
                    const attributes_35: any[];
                    export { attributes_35 as attributes };
                }
                export namespace nodes {
                    const name_39: string;
                    export { name_39 as name };
                    const isArray_32: boolean;
                    export { isArray_32 as isArray };
                    export namespace type_36 {
                        const model_5: string;
                        export { model_5 as model };
                    }
                    export { type_36 as type };
                    const isRequired_32: boolean;
                    export { isRequired_32 as isRequired };
                    const attributes_36: any[];
                    export { attributes_36 as attributes };
                    const isArrayNullable_3: boolean;
                    export { isArrayNullable_3 as isArrayNullable };
                    export namespace association_5 {
                        const connectionType_5: string;
                        export { connectionType_5 as connectionType };
                        const associatedWith_3: string;
                        export { associatedWith_3 as associatedWith };
                    }
                    export { association_5 as association };
                }
            }
            export { fields_4 as fields };
            const syncable_4: boolean;
            export { syncable_4 as syncable };
            const pluralName_4: string;
            export { pluralName_4 as pluralName };
            const attributes_37: ({
                type: string;
                properties: {
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    name: string;
                    fields: string[];
                    queryField: string;
                    rules?: undefined;
                };
            } | {
                type: string;
                properties: {
                    rules: ({
                        provider: string;
                        ownerField: string;
                        allow: string;
                        identityClaim: string;
                        operations: string[];
                        groupClaim?: undefined;
                        groups?: undefined;
                    } | {
                        groupClaim: string;
                        provider: string;
                        allow: string;
                        operations: string[];
                        groups: string[];
                        ownerField?: undefined;
                        identityClaim?: undefined;
                    } | {
                        allow: string;
                        operations: string[];
                        provider?: undefined;
                        ownerField?: undefined;
                        identityClaim?: undefined;
                        groupClaim?: undefined;
                        groups?: undefined;
                    })[];
                    name?: undefined;
                    fields?: undefined;
                    queryField?: undefined;
                };
            })[];
            export { attributes_37 as attributes };
        }
    }
    namespace enums {
        namespace NodeType {
            const name_40: string;
            export { name_40 as name };
            export const values: string[];
        }
        namespace NodeStatus {
            const name_41: string;
            export { name_41 as name };
            const values_1: string[];
            export { values_1 as values };
        }
        namespace EdgeType {
            const name_42: string;
            export { name_42 as name };
            const values_2: string[];
            export { values_2 as values };
        }
        namespace AssetType {
            const name_43: string;
            export { name_43 as name };
            const values_3: string[];
            export { values_3 as values };
        }
    }
    const nonModels: {};
    const version: string;
}
