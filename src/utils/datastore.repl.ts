import { DataStore } from "@aws-amplify/datastore"
import * as M from "../models"
import { schema } from "../models/schema"

//JSON.stringify(schema, null, 2) //?

const gen_save_to_DS = model => {
    return async args => {
        const res = await DataStore.save(new model(args))
        return res
    }
}

// @ts-ignore
const saveNode = gen_save_to_DS(M.Node) //?



//const test = async () => {
//    const res = await DataStore.save(
//        new M["Node"]({
//            status: "BLOOP",

//        })
//    )
//    return res
//}

//test() //?
