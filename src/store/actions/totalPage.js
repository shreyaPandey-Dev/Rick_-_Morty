import { ADD_TOTAL_PAGE} from "../types/types";


export   const addTotalPage = (payload) => {
    

    return {
        type: ADD_TOTAL_PAGE,
        payload: payload
    };

}


export default addTotalPage;

