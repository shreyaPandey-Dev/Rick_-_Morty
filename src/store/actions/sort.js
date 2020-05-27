import {
    ADD_ORDER_BY
} from '../types/types';



const addOrderBy = (payload) => {  
    return {
        type: ADD_ORDER_BY,
        payload: payload
    };

}




export default addOrderBy;