import { ADD_CHARACTERTYPE } from '../types/types';



const initialState = {
    characterType: []
}


const getCharacterType = (state, payload) => ({
    ...state,
    characterType: payload
})


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_CHARACTERTYPE:
            return getCharacterType(state, payload);
        default:
            return state;
    }
}