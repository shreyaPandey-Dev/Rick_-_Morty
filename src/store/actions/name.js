import { ADD_NAME} from "../types/types";


export   const addName = (payload) => {
    console.log("ACTION PAY ADD NAME========================", payload)

    return {
        type: ADD_NAME,
        payload: payload
    };

}


export default addName;

