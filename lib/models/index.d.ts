export const Asset: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const _Asset: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const Node: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const EdgeNode: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export const Edge: import("@aws-amplify/datastore").PersistentModelConstructor<any> | import("@aws-amplify/datastore").NonModelTypeConstructor<any>;
export namespace AssetType {
    const DEPRECATED: string;
    const V_IMAGE: string;
    const V_VIDEO: string;
    const V_AUDIO: string;
    const T_BIO: string;
    const T_HEADLINE_140: string;
    const T_TITLE: string;
    const T_LEDE: string;
    const T_SUMMARY: string;
    const T_BODY: string;
    const L_REFERENCE: string;
    const F_PDF: string;
}
export namespace NodeType {
    const PER_PERSON: string;
    const PER_AUTHOR: string;
    const PER_EMPLOYEE: string;
    const PER_HISTORICAL: string;
    const GEO_STATE_01: string;
    const GEO_STATE_02: string;
    const A_LESSON: string;
    const A_ARTICLE: string;
    const A_PAGE: string;
    const A_APPLICATION: string;
    const GR_COURSE: string;
    const GR_SERIES: string;
    const GR_LIST: string;
}
export namespace Status {
    const DRAFT: string;
    const REVIEWED: string;
    const PUBLISHED: string;
    const EDITED: string;
    const DELETED: string;
}
export namespace EdgeType {
    const WORKED_WITH: string;
    const HAS_MEMBER: string;
    const AUTHORED: string;
    const HAS_CHILD: string;
    const IS_BEFORE: string;
    const HAS_PART: string;
}
