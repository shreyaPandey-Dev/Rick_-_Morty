import reducer from './currentPage';
import { ADD_CURRENT_PAGE,RESET_CURRENT_PAGE } from '../actions/currentPage';

const initialState = {
    currentPage: 1
};

describe('Current Page reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });
    it('should store the current page payload', () => {
        expect(reducer({currentPage:2},{type: ADD_CURRENT_PAGE})).toEqual({currentPage:2})
    });
    it('should reset current page payload', () => {
        expect(reducer({currentPage:1},{type: RESET_CURRENT_PAGE})).toEqual({currentPage:1})
    });
});
