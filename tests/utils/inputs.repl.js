import { gen_link_input } from "../../lib/utils/inputs"

const test_full_alias = {
    nodes : [ { id: "124", status: "A", type: "B" }, { id: "014", status: "A", type: "B" } ],
    edge  : { id: "faffasfdasdf", type: "TO", weight: null }
}

gen_link_input(test_full_alias) //?
//const test_op = "hello".length > 2 && "yep"
//test_op //?
//const uid1 = uuid()
//uid1 //?
