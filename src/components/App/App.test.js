import React from 'react';
import { shallow, configure } from 'enzyme';
import local from '../../data/local';
import health from '../../data/health';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should start with a state with currentCategory and categories', () => {
    const obj = {
      categories: {local: local, health: health},
      currentCategory: local
    };
    const wrapper = shallow(<App />);
    wrapper.instance().state = obj
    expect(wrapper.instance().state.currentCategory).toEqual(local);
    expect(wrapper.instance().state.categories).toEqual({local: local, health: health});
  });

  it('should have an changeCategory method that changes the currentCategory state', () => {
    // setup
    const wrapper = shallow(<App />);
    expect(wrapper.state('currentCategory')).toEqual(local);
    // execution
    wrapper.instance().changeCategory('health')
    // expectation
    expect(wrapper.state('currentCategory')).toEqual(health);
  });

  it('should match a snapshot of the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
