import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match a snapshot of the Menu', () => {
    const wrapper = shallow(<Menu changeCategory={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
