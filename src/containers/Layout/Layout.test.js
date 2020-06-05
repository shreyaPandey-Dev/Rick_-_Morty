import React from "react";
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../../App'
import thunk from 'redux-thunk';
import Layout from './Layout';
import Header from '../../components/Header/Header';
import SideFilter from '../../containers/SideFilter/SideFilter'
import SearchHeaderBar from '../../components/SearchHeaderBar/SearchHeaderBar'
import CharacterDataBuilder from '../CharacterDataBuilder/CharacterDataBuilder'
import PaginationComp from '../PaginationComp/PaginationComp'



const mockgetData = jest.fn();
const mockgetOrder = jest.fn();
const mockremoveSelectedFilter = jest.fn();

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
    characterType: [],
    currentPage: 1,
    totalPage: 59
});


describe('Layout container', () => {

    store.clearActions();

    const wrapper = mount(
        <Provider store={store}
            getData={mockgetData}
            getOrder={mockgetOrder}
            removeSelectedFilter={mockremoveSelectedFilter} >
            <Layout />
        </Provider>
    );


    it('Should render Header component', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('Should render SideFilter component', () => {
        expect(wrapper.find(SideFilter)).toHaveLength(1);
    });

    it('Should render SearchHeaderBar component', () => {
        expect(wrapper.find(SearchHeaderBar)).toHaveLength(1);
    });

    it('Should render CharacterDataBuilder component', () => {
        expect(wrapper.find(CharacterDataBuilder)).toHaveLength(1);
    });

    it('Should render PaginationComp component', () => {
        expect(wrapper.find(PaginationComp)).toHaveLength(1);
    });


});