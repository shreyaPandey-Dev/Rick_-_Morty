import React from "react";
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../../App'
import thunk from 'redux-thunk';
import PaginationComp from './PaginationComp';

const mockhandlePageChange = jest.fn();
// Configuring Mock Store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    characters: [],
    species: 'alien',
    gender: 'female',
    name: 'summer',
    status: 'alive',
    orderBy: 'ascending',
    characterType: [

    ],
    currentPage: 1,
    totalPage: 59
});



describe('Pagination container', () => {
    store.clearActions();
    const wrapper = mount(
        <Provider store={store} >
            <PaginationComp handlePageChange={mockhandlePageChange} />
        </Provider>
    );

    it('Should receive page props  ', () => { 
        const currentpage = wrapper.find('Pagination').html();
        expect(currentpage).toContain(1);
    });

});