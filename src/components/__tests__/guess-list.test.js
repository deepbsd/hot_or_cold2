import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from '../guess-list';

describe('<GuessList />', () => {


  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[34,45,67]}/>);
  });

  it('Renders the list of guesses', () => {
    const wrapper = mount(<GuessList guesses={[34,54,76]} />);
    const instance = wrapper.instance();
    expect(wrapper.props('guesses')['guesses']).toContain(34);
    expect(wrapper.props('guesses')['guesses']).toContain(54);
    expect(wrapper.props('guesses')['guesses']).toContain(76);
  })


})
