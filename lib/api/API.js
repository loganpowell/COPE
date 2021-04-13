import dotenv from "dotenv";
dotenv.config();
export const auth = {
    user1_owner: process.env.MOCK_USER_POOL_ID_1,
    user2_NA: process.env.MOCK_USER_POOL_ID_2,
    user3_viewers: process.env.MOCK_USER_POOL_ID_3_VIEWERS,
    user4_admins: process.env.MOCK_USER_POOL_ID_4_ADMINS,
    user5_editors: process.env.MOCK_USER_POOL_ID_5_EDITORS
};
export var NodeStatus;
(function (NodeStatus) {
    NodeStatus["DRAFT"] = "DRAFT";
    NodeStatus["REVIEWED"] = "REVIEWED";
    NodeStatus["PUBLISHED"] = "PUBLISHED";
    NodeStatus["EDITED"] = "EDITED";
    NodeStatus["DELETED"] = "DELETED";
})(NodeStatus || (NodeStatus = {}));
export var NodeType;
(function (NodeType) {
    NodeType["PER_AUTHOR"] = "PER_AUTHOR";
    NodeType["A_ARTICLE"] = "A_ARTICLE";
    NodeType["A_PAGE"] = "A_PAGE";
    NodeType["GR_COURSE"] = "GR_COURSE";
    NodeType["A_LESSON"] = "A_LESSON";
})(NodeType || (NodeType = {}));
export var EdgeType;
(function (EdgeType) {
    EdgeType["AUTHORED"] = "AUTHORED";
    EdgeType["HAS_CHILD"] = "HAS_CHILD";
    EdgeType["IS_BEFORE"] = "IS_BEFORE";
    EdgeType["HAS_PART"] = "HAS_PART";
})(EdgeType || (EdgeType = {}));
export var AssetType;
(function (AssetType) {
    AssetType["V_IMAGE"] = "V_IMAGE";
    AssetType["V_VIDEO"] = "V_VIDEO";
    AssetType["V_AUDIO"] = "V_AUDIO";
    AssetType["T_BIO"] = "T_BIO";
    AssetType["T_HEADLINE_140"] = "T_HEADLINE_140";
    AssetType["T_TITLE"] = "T_TITLE";
    AssetType["T_LEDE"] = "T_LEDE";
    AssetType["T_SUMMARY"] = "T_SUMMARY";
    AssetType["T_BODY"] = "T_BODY";
    AssetType["L_REFERENCE"] = "L_REFERENCE";
    AssetType["F_PDF"] = "F_PDF";
})(AssetType || (AssetType = {}));
