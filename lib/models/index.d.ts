export const Asset: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const _Asset: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const Node: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const EdgeNode: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const Edge: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export namespace NodeType {
    const H_AUTHOR: string;
    const H_TEAM: string;
    const A_ARTICLE: string;
    const A_PAGE: string;
    const A_APPLICATION: string;
    const A_GEM: string;
    const S_ACS: string;
    const S_DECENNIAL: string;
    const S_CBP: string;
    const V_1990: string;
    const V_2000: string;
    const V_2010: string;
    const V_2020: string;
    const C_SERIES: string;
    const C_LIST: string;
}
export namespace NodeStatus {
    const DRAFT: string;
    const REVIEWED: string;
    const PUBLISHED: string;
    const EDITED: string;
    const DELETED: string;
}
export namespace EdgeType {
    const AUTHORED: string;
    const HAS_NEXT: string;
    const HAS_PART: string;
    const HAS_CHILD: string;
}
export namespace AssetType {
    const DEPRECATED: string;
    const A_IMAGE: string;
    const A_OG_IMAGE: string;
    const A_OG_AUDIO: string;
    const A_OG_VIDEO: string;
    const A_VIDEO: string;
    const A_AUDIO: string;
    const T_OG_TITLE: string;
    const T_OG_DESCRIPTION: string;
    const T_OG_TYPE: string;
    const T_LEDE: string;
    const T_BODY: string;
    const M_DATA: string;
    const M_MAP: string;
    const M_VIZ: string;
    const M_API: string;
    const F_PDF: string;
    const F_KML: string;
    const F_SHP: string;
    const F_CSV: string;
}
