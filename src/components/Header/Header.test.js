import React from "react";
import { shallow } from 'enzyme';
import Header from './Header';



describe('Header component', () => {
it('Should print navbar title', () => {
    // given
    const wrapper = shallow(<Header />);
    var title = wrapper.find('nav > span').html();
    // when
    expect(title).toContain('Rick and Morty');
})

});