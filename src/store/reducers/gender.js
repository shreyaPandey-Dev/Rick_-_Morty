import {
    ADD_GENDER,
    DELETE_GENDER
} from '../types/types';

const initialState = {
    gender: ''
}


const getGender = (state, payload) => ({
    ...state,
    gender: payload
});

const removeGender = (state) => ({
    ...state,
    gender: ''
})

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_GENDER:
            return getGender(state, payload);
        case DELETE_GENDER:
            return removeGender(state);
        default:
            return state;
    }
}
