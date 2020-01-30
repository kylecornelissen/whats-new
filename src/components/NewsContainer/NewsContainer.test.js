import React from 'react';
import { shallow } from 'enzyme';
import local from '../../data/local';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should match a snapshot of the NewsContainer', () => {
    const wrapper = shallow(<NewsContainer articles={local}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
