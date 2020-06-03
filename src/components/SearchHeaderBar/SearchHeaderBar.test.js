import React from "react";
import { shallow, mount } from 'enzyme';
import SearchHeaderBar from './SearchHeaderBar';

const mockgetData =  jest.fn();
const mockgetOrder =  jest.fn();

describe('SearchHeaderBar', () => {
const wrapper = mount(<SearchHeaderBar getData={mockgetData} getOrder={mockgetOrder} />);

it('Should simulate search input', () => {
    wrapper.find('input').simulate('keypress', {key: 'Enter',  target : {value: "summer"}})
    expect(mockgetData).toHaveBeenCalled();
}),
it('Should simulate search button', () => {
    wrapper.find('button').simulate('click')
    expect(mockgetData).toHaveBeenCalled();
}),
it('Should simulate sorting dropdown', () => {
    wrapper.find('select').simulate('change', {  target : {value: "ascending"}})
    expect(mockgetOrder).toHaveBeenCalled();
})


});
