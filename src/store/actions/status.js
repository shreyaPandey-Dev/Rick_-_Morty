import { ADD_STATUS,DELETE_STATUS} from "../types/types";


export   const addStatus = (payload) => {
    console.log("ACTION PAY ADD TYPE========================", payload)

    return {
        type: ADD_STATUS,
        payload: payload
    };

}


export const deleteStatus= (payload) => {
    console.log("ACTION PAY DELETE  TYPE========================", payload)

    return {
        type: DELETE_STATUS,
        payload: payload
    };

}

export default addStatus;

