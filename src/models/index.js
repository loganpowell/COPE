// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NodeType = {
  "H_AUTHOR": "H_AUTHOR",
  "H_TEAM": "H_TEAM",
  "A_ARTICLE": "A_ARTICLE",
  "A_PAGE": "A_PAGE",
  "A_APPLICATION": "A_APPLICATION",
  "A_GEM": "A_GEM",
  "S_ACS": "S_ACS",
  "S_DECENNIAL": "S_DECENNIAL",
  "S_CBP": "S_CBP",
  "V_1990": "V_1990",
  "V_2000": "V_2000",
  "V_2010": "V_2010",
  "V_2020": "V_2020",
  "C_SERIES": "C_SERIES",
  "C_LIST": "C_LIST"
};

const NodeStatus = {
  "DRAFT": "DRAFT",
  "REVIEWED": "REVIEWED",
  "PUBLISHED": "PUBLISHED",
  "EDITED": "EDITED",
  "DELETED": "DELETED"
};

const EdgeType = {
  "AUTHORED": "AUTHORED",
  "HAS_NEXT": "HAS_NEXT",
  "HAS_PART": "HAS_PART",
  "HAS_CHILD": "HAS_CHILD"
};

const AssetType = {
  "DEPRECATED": "DEPRECATED",
  "A_IMAGE": "A_IMAGE",
  "A_OG_IMAGE": "A_OG_IMAGE",
  "A_OG_AUDIO": "A_OG_AUDIO",
  "A_OG_VIDEO": "A_OG_VIDEO",
  "A_VIDEO": "A_VIDEO",
  "A_AUDIO": "A_AUDIO",
  "T_OG_TITLE": "T_OG_TITLE",
  "T_OG_DESCRIPTION": "T_OG_DESCRIPTION",
  "T_OG_TYPE": "T_OG_TYPE",
  "T_LEDE": "T_LEDE",
  "T_BODY": "T_BODY",
  "M_DATA": "M_DATA",
  "M_MAP": "M_MAP",
  "M_VIZ": "M_VIZ",
  "M_API": "M_API",
  "F_PDF": "F_PDF",
  "F_KML": "F_KML",
  "F_SHP": "F_SHP",
  "F_CSV": "F_CSV"
};

const { Asset, _Asset, Node, EdgeNode, Edge } = initSchema(schema);

export {
  Asset,
  _Asset,
  Node,
  EdgeNode,
  Edge,
  NodeType,
  NodeStatus,
  EdgeType,
  AssetType
};