import { __rest } from "tslib";
import { EquivMap } from "@thi.ng/associative";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
dotenv.config();
export const auth = {
    user1_owner: process.env.MOCK_USER_POOL_ID_1,
    user2_NA: process.env.MOCK_USER_POOL_ID_2,
    user3_viewers: process.env.MOCK_USER_POOL_ID_3_VIEWERS,
    user4_admins: process.env.MOCK_USER_POOL_ID_4_ADMINS,
    user5_editors: process.env.MOCK_USER_POOL_ID_5_EDITORS
};
export const gen_link_input = (node_matrix) => {
    const { nodes, edge } = node_matrix;
    if (!nodes || !edge || nodes.length === 0 || Object.entries(edge).length === 0) {
        console.warn("gen_link_input args do not meet requirements. Check signature");
        return {};
    }
    const [_a, _b] = node_matrix.nodes, { id: id1 } = _a, n1 = __rest(_a, ["id"]), { id: id2 } = _b, n2 = __rest(_b, ["id"]), _c = node_matrix.edge, { id: id3 } = _c, e1 = __rest(_c, ["id"]);
    const aka1 = id1.length < 5 && "id";
    const aka2 = id2.length < 5 && "id";
    const aka3 = id3.length < 5 && "id";
    const ref1 = id1.length > 4 && "id";
    const ref2 = id2.length > 4 && "id";
    const ref3 = id3.length > 4 && "id";
    const n1_aka = Object.assign({ [aka1]: id1 }, n1);
    const n1_ref = Object.assign({ [ref1]: id1 }, n1);
    const n2_aka = Object.assign({ [aka2]: id2 }, n2);
    const n2_ref = Object.assign({ [ref2]: id2 }, n2);
    const e1_aka = Object.assign({ [aka3]: id3 }, e1);
    const e1_ref = Object.assign({ [ref3]: id3 }, e1);
    const uid1 = uuid();
    const uid2 = uuid();
    const uid3 = uuid();
    const na1 = Object.assign({ id: uid1 }, n1);
    const na2 = Object.assign({ id: uid2 }, n2);
    const ea1 = Object.assign({ id: uid3 }, e1);
    const result = (new EquivMap([
        [
            { nodes: [n1_aka, n2_aka], edge: e1_aka },
            { nodes: [na1, na2], edge: ea1,
                edge_nodes: [
                    { edge_id: uid3, node_id: uid1 },
                    { edge_id: uid3, node_id: uid2 }
                ]
            }
        ],
        [
            { nodes: [n1_aka, n2_aka], edge: e1_ref },
            { nodes: [na1, na2], edge: null,
                edge_nodes: [
                    { edge_id: id3, node_id: uid1 },
                    { edge_id: id3, node_id: uid2 }
                ]
            }
        ],
        [
            { nodes: [n1_ref, n2_ref], edge: e1_aka },
            { nodes: [null, null], edge: ea1,
                edge_nodes: [
                    { edge_id: uid3, node_id: id1 },
                    { edge_id: uid3, node_id: id2 }
                ]
            }
        ],
        [
            { nodes: [n1_ref, n2_aka], edge: e1_aka },
            { nodes: [null, na2], edge: ea1,
                edge_nodes: [
                    { edge_id: uid3, node_id: id1 },
                    { edge_id: uid3, node_id: uid2 }
                ]
            }
        ],
        [
            { nodes: [n1_aka, n2_ref], edge: e1_aka },
            { nodes: [na1, null], edge: ea1,
                edge_nodes: [
                    { edge_id: uid3, node_id: uid1 },
                    { edge_id: uid3, node_id: id2 }
                ]
            }
        ],
        [
            { nodes: [n1_ref, n2_aka], edge: e1_ref },
            { nodes: [null, na2], edge: null,
                edge_nodes: [
                    { edge_id: id3, node_id: id1 },
                    { edge_id: id3, node_id: uid2 }
                ]
            }
        ],
        [
            { nodes: [n1_aka, n2_ref], edge: e1_ref },
            { nodes: [na1, null], edge: null,
                edge_nodes: [
                    { edge_id: id3, node_id: uid1 },
                    { edge_id: id3, node_id: id2 }
                ]
            }
        ],
        [
            { nodes: [n1_ref, n2_ref], edge: e1_ref },
            { nodes: [null, null], edge: null,
                edge_nodes: [
                    { edge_id: id3, node_id: id1 },
                    { edge_id: id3, node_id: id2 }
                ]
            }
        ],
    ]).get(node_matrix) || {
        nodes: [null, null], edge: null, edge_nodes: [null, null]
    });
    return result;
};
