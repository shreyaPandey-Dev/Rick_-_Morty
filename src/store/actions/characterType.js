import { ADD_CHARACTERTYPE} from "../types/types";


export   const addCharacterType = (payload) => {
    return {
        type: ADD_CHARACTERTYPE,
        payload: payload
    };

}


export default addCharacterType;
