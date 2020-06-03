import React from "react";
import { shallow } from 'enzyme';
import App from "./App";


const wrapper = shallow(<App />);

describe('App component', () => {
  it('testing the root app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});



