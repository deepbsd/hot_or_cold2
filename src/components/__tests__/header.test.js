import React from 'react';
import {shallow,mount} from 'enzyme';
import Header from '../header';

describe('<Header/>', () => {


  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Starting state for info-modal should be falsy', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state('showInfoModal')).toBeFalsy();
  });

  it('Calling toggleInfoModal should change the state to be truthy', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal();
    expect(wrapper.state('showInfoModal')).toBeTruthy();
  });

})
