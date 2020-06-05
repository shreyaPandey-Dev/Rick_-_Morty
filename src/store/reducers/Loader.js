import {
    ENABLE_LOADER,
    DISABLE_LOADER
} from '../types/types';


const initialState = {
    loader: false
};



const getLoader = (state, payload) => ({
    ...state,
    loader: payload
});



export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ENABLE_LOADER:
            return getLoader(state, payload);
        case DISABLE_LOADER:
            return getLoader(state, payload);
        default:
            return state;
    }
}