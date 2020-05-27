import {
  ADD_CHARACTERS,
  ADD_GENDER,
  ADD_SPECIES,
  ADD_NAME,
  ADD_STATUS,
  DELETE_GENDER,
  DELETE_SPECIES,
  DELETE_STATUS,
  ADD_ORDER_BY,
  ADD_CHARACTERTYPE,
  ADD_CURRENT_PAGE,
  ADD_TOTAL_PAGE,
  RESET_CURRENT_PAGE
} from '../types/types';

const initialState = {
  characters: [],
  species: '',
  gender: '',
  name: '',
  status: '',
  orderBy: 'ascending',
  characterType: [],
  currentPage: 1,
  totalPage: 59
};


const getCharacters = (state, payload) => ({
  ...state,
  characters: payload.slice()
});

const getGender = (state, payload) => ({
  ...state,
  gender: payload
});

const getSpecies = (state, payload) => ({
  ...state,
  species: payload
});

const getName = (state, payload) => ({
  ...state,
  name: payload
});

const getStatus = (state, payload) => ({
  ...state,
  status: payload
});

const getOrderBy = (state, payload) => ({
  ...state,
  orderBy: payload
});

const removeGender = (state) => ({
  ...state,
  gender: ''
})

const removeSpecies = (state) => ({
  ...state,
  species: ''
})

const removeStatus = (state) => ({
  ...state,
  status: ''
})

const getCharacterType = (state,payload) => ({
  ...state,
  characterType: payload
})

const getCurrentPage = (state,payload) => ({
  ...state,
  currentPage: payload
})

const getTotalPage =(state,payload) => ({
  ...state,
  totalPage: payload
})

const resetCurrentPage = (state,payload) => ({
  ...state,
  currentPage: 1
})

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHARACTERS:
      
      return getCharacters(state, payload);
    case ADD_GENDER:
      
      return getGender(state, payload);
    case ADD_SPECIES:
      
      return getSpecies(state, payload);
    case ADD_NAME:
      
      return getName(state, payload);
    case ADD_STATUS:
      
      return getStatus(state, payload);
    case ADD_ORDER_BY:
      
      return getOrderBy(state, payload);
    case  DELETE_GENDER:
      
      return removeGender(state);
    case  DELETE_SPECIES:
      
      return removeSpecies(state);
    case  DELETE_STATUS:
      
      return removeStatus(state);
      case  ADD_CHARACTERTYPE:
      
        return getCharacterType(state,payload);
      case ADD_CURRENT_PAGE:
        return getCurrentPage(state,payload);
        case  ADD_TOTAL_PAGE:
        return getTotalPage(state,payload);
        case RESET_CURRENT_PAGE:
          console.log("**********************************************in reducer currentpage==",resetCurrentPage(state,payload), state, payload)
          return resetCurrentPage(state,payload);
    default:
      return state;
  }
};
