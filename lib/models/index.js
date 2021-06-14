import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";
const AssetType = {
    DEPRECATED: "DEPRECATED",
    V_IMAGE: "V_IMAGE",
    V_VIDEO: "V_VIDEO",
    V_AUDIO: "V_AUDIO",
    T_BIO: "T_BIO",
    T_HEADLINE_140: "T_HEADLINE_140",
    T_TITLE: "T_TITLE",
    T_LEDE: "T_LEDE",
    T_SUMMARY: "T_SUMMARY",
    T_BODY: "T_BODY",
    L_REFERENCE: "L_REFERENCE",
    F_PDF: "F_PDF"
};
const NodeType = {
    PER_PERSON: "PER_PERSON",
    PER_AUTHOR: "PER_AUTHOR",
    PER_EMPLOYEE: "PER_EMPLOYEE",
    PER_HISTORICAL: "PER_HISTORICAL",
    GEO_STATE_01: "GEO_STATE_01",
    GEO_STATE_02: "GEO_STATE_02",
    A_LESSON: "A_LESSON",
    A_ARTICLE: "A_ARTICLE",
    A_PAGE: "A_PAGE",
    A_APPLICATION: "A_APPLICATION",
    GR_COURSE: "GR_COURSE",
    GR_SERIES: "GR_SERIES",
    GR_LIST: "GR_LIST"
};
const Status = {
    DRAFT: "DRAFT",
    REVIEWED: "REVIEWED",
    PUBLISHED: "PUBLISHED",
    EDITED: "EDITED",
    DELETED: "DELETED"
};
const EdgeType = {
    WORKED_WITH: "WORKED_WITH",
    HAS_MEMBER: "HAS_MEMBER",
    AUTHORED: "AUTHORED",
    HAS_CHILD: "HAS_CHILD",
    IS_BEFORE: "IS_BEFORE",
    HAS_PART: "HAS_PART"
};
const { Asset, _Asset, Node, EdgeNode, Edge } = initSchema(schema);
export { Asset, _Asset, Node, EdgeNode, Edge, AssetType, NodeType, Status, EdgeType };
