import React from 'react';
import { shallow } from 'enzyme';
import local from '../../data/local';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match a snapshot of the NewsArticle', () => {
    const wrapper = shallow(<NewsArticle article={local[0]} key={42}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
