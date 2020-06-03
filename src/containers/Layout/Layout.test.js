import React from "react";
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Layout from './Layout';
import App from '../../App'
import thunk from 'redux-thunk'


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

    const wrapper = shallow(<Layout  store={store} getData={mockgetData} getOrder={mockgetOrder} removeSelectedFilter={mockremoveSelectedFilter}  />);
    store.clearActions();
    it('Should snapshot Layout component', () => {
        expect(wrapper.getElements()).toMatchSnapshot();
    })

    // it('Should render Header component', () => {
    //     console.log("-------------------------------",wrapper.debug())
    //     expect(wrapper.find('Header').html()).toHaveLength(1);
    // })
   
   
});