import React from "react";
import { shallow, mount } from 'enzyme';
import SelectedFilters from './SelectedFilters';

const mockData = {
        genderFilter: {
            gender: "female"
        }
}

describe('SelectedFilters', () => {
const wrapper = shallow(<SelectedFilters  genderFilter={mockData.genderFilter} />);

it('Should print selected filter', () => {
    const badge = wrapper.find('.badge-danger').html();
    expect(badge).toContain(mockData.genderFilter.gender)
})


});
