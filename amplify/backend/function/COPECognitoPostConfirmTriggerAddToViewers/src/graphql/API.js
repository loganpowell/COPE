const NodeStatus = {
    DRAFT     : "DRAFT",
    REVIEWED  : "REVIEWED",
    PUBLISHED : "PUBLISHED",
    EDITED    : "EDITED",
    DELETED   : "DELETED"
}

const NodeType = {
    R_ACCOUNT     : "R_ACCOUNT",
    H_AUTHOR      : "H_AUTHOR",
    H_TEAM        : "H_TEAM",
    A_ARTICLE     : "A_ARTICLE",
    A_PAGE        : "A_PAGE",
    A_APPLICATION : "A_APPLICATION",
    A_GEM         : "A_GEM",
    S_ACS         : "S_ACS",
    S_DECENNIAL   : "S_DECENNIAL",
    S_CBP         : "S_CBP",
    V_1990        : "V_1990",
    V_2000        : "V_2000",
    V_2010        : "V_2010",
    V_2020        : "V_2020",
    C_SERIES      : "C_SERIES",
    C_LIST        : "C_LIST"
}

module.exports = {
    NodeStatus,
    NodeType
}
