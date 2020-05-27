import { ADD_CURRENT_PAGE, RESET_CURRENT_PAGE} from "../types/types";


export   const addCurrentPage = (payload) => {
    console.log("ACTION PAY ADD NAME========================", payload)

    return {
        type: ADD_CURRENT_PAGE,
        payload: payload
    };

}

export   const resetCurrentPage = (payload) => {
    console.log("ACTION resetCurrentPage========================", payload)

    return {
        type: RESET_CURRENT_PAGE,
        payload: 1
    };

}


export default {addCurrentPage,resetCurrentPage};

