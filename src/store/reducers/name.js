import { ADD_NAME } from '../types/types';

const initialState = {
    name: ''
};


const getName = (state, payload) => ({
    ...state,
    name: payload
});


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_NAME:
            return getName(state, payload);
        default:
            return state;
    }
}