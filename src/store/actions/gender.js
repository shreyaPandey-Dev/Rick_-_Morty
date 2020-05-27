import { ADD_GENDER,DELETE_GENDER} from "../types/types";


export   const addGender = (payload) => {
    console.log("ACTION PAY ADD GENDR========================", payload)

    return {
        type: ADD_GENDER,
        payload: payload
    };

}


export const deleteGender = (payload) => {
    console.log("ACTION PAY DELETE  GENDR========================", payload)

    return {
        type: DELETE_GENDER,
        payload: payload
    };

}

export default addGender;

