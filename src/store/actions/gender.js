import { ADD_GENDER,DELETE_GENDER} from "../types/types";


export   const addGender = (payload) => {
    

    return {
        type: ADD_GENDER,
        payload: payload
    };

}


export const deleteGender = (payload) => {
    

    return {
        type: DELETE_GENDER,
        payload: payload
    };

}

export default addGender;

