import {
    ADD_STATUS,
    DELETE_STATUS
}
from '../types/types';

const initialState = {
    status: ''
}

const getStatus = (state, payload) => ({
    ...state,
    status: payload
});

const removeStatus = (state) => ({
    ...state,
    status: ''
});


export default (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case ADD_STATUS:
            return getStatus(state, payload);
        case DELETE_STATUS:
            return removeStatus(state);
        default:
            return state;
    }
}