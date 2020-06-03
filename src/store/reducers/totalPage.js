import { ADD_TOTAL_PAGE} from '../types/types';

const initialState = {
    totalPage: 59
};


const getTotalPage = (state, payload) => ({
    ...state,
    totalPage: payload
})


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TOTAL_PAGE:
            return getTotalPage(state, payload);
        default:
            return state;
    }
};
