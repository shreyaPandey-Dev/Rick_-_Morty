import {
    ADD_CURRENT_PAGE,
    RESET_CURRENT_PAGE
  } from '../types/types';
  
  const initialState = {
    currentPage: 1
  };
  

  const getCurrentPage = (state, payload) => ({
    ...state,
    currentPage: payload
  })

  
  const resetCurrentPage = (state, payload) => ({
    ...state,
    currentPage: 1
  })


  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_CURRENT_PAGE:
        return getCurrentPage(state, payload);
      case RESET_CURRENT_PAGE:
        return resetCurrentPage(state, payload);
        default:
          return state;
    }
  };