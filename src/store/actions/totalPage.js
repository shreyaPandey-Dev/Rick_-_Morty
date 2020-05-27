import { ADD_TOTAL_PAGE} from "../types/types";


export   const addTotalPage = (payload) => {
    console.log("ACTION PAY ADD NAME========================", payload)

    return {
        type: ADD_TOTAL_PAGE,
        payload: payload
    };

}


export default addTotalPage;

