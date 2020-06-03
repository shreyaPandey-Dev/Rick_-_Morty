import React from "react";
import { shallow } from 'enzyme';
import FilterCard from './FilterCard';

const mockData =   {
   characterType : {
                            type: 'Gender',
                            data: [
                                {
                                    title: 'Male',
                                    value: 'male',
                                    isChecked: false
                                },
                                {
                                    title: 'Female',
                                    value: 'female',
                                    isChecked: false
                                }
                            ]
   }
}

const mockGetFilter = jest.fn();

describe('FilterCard', () => {
    const wrapper = shallow(<FilterCard characterType={mockData.characterType} getFilter={mockGetFilter} />);
    
    it('should render FilterCard component', () => {
      expect(wrapper.length).toBe(1);
    });
}
);

describe('checkbox input card', () => {
    const wrapper = shallow(<FilterCard characterType={mockData.characterType} 
      getFilter={mockGetFilter}  />);
    
    it('should render type name', () => {
        const typeName = wrapper.find('.card-header').html();
        expect(typeName).toContain(mockData.characterType.type);
    },
 
    it('should render checkbox label', () => {
        const labelName = wrapper.find('.checkrow').map((el,index) => {
            
            expect(el.text()).toContain(mockData.characterType.data[index].title);
        });
    }),

    it('should simulate checkbox onCheck ', () => {
        
        wrapper.find('input[type="checkbox"]').map((el)=> {
            el.simulate('click',
            {
                target : {checked: true}
            });
        })
        expect(mockGetFilter).toHaveBeenCalled();
    }),

    )
}
);