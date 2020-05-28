import { ADD_STATUS,DELETE_STATUS} from "../types/types";


export   const addStatus = (payload) => {
    

    return {
        type: ADD_STATUS,
        payload: payload
    };

}


export const deleteStatus= (payload) => {
    

    return {
        type: DELETE_STATUS,
        payload: payload
    };

}

export default addStatus;

