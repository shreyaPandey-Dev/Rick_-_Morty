import { ADD_ORDER_BY } from '../types/types';


const initialState = {
    orderBy: 'ascending'
}


const getOrderBy = (state, payload) => ({
    ...state,
    orderBy: payload
});

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_ORDER_BY:
            return getOrderBy(state, payload);
        default:
            return state;
    }
}