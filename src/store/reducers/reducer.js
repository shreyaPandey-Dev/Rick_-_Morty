


// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import characters from './characters';
import characterType from './characterType';
import currentPage from './currentPage';
import gender from './gender';
import name from './name';
import orderBy from './orderBy';
import species from './species';
import status from './status';
import totalPage from './totalPage';


const rootReducer = combineReducers({
  characters: characters,
  characterType: characterType,
  currentPage: currentPage,
  gender: gender,
  name: name,
  orderBy: orderBy,
  species: species,
  status: status,
  totalPage: totalPage
});

export default rootReducer;