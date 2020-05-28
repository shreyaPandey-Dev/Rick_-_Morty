import { ADD_CURRENT_PAGE, RESET_CURRENT_PAGE} from "../types/types";


export   const addCurrentPage = (payload) => {
    

    return {
        type: ADD_CURRENT_PAGE,
        payload: payload
    };

}

export   const resetCurrentPage = (payload) => {
    

    return {
        type: RESET_CURRENT_PAGE,
        payload: 1
    };

}


export default {addCurrentPage,resetCurrentPage};

