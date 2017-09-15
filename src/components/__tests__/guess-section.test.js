import React from 'react';
import {shallow} from 'enzyme';
import GuessSection from '../guess-section';

describe('<GuessSection/>', () => {


  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  });

  it('Renders the appropriate feedback', () => {
    const usrFeedback = 'Yabba Dabba Do';
    const wrapper = shallow(<GuessSection feedback={usrFeedback} />);
    expect(wrapper.contains(usrFeedback)).toEqual(true);
  })



})
