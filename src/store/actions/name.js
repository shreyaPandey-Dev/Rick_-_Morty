import { ADD_NAME} from "../types/types";

export   const addName = (payload) => {
    return {
        type: ADD_NAME,
        payload: payload
    };

}


export default addName;

