import { ADD_CHARACTERTYPE} from "../types/types";


export   const addCharacterType = (payload) => {
    console.log("ACTION PAY ADD_CHARACTERTYPE========================", payload)

    return {
        type: ADD_CHARACTERTYPE,
        payload: payload
    };

}


export default addCharacterType;
