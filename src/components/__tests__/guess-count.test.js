import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from '../guess-count';

describe('<GuessCount/>', () => {


  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Count is defined and equals value', () => {
    const fakeCount = 7;
    const expectedOutput = `Guess #${fakeCount}!`;
    const wrapper = shallow(<GuessCount count={fakeCount}/>);
    expect(wrapper.props('count')).toBeDefined();
    expect(wrapper.props('count')["children"][1]["props"]["children"]).toEqual(fakeCount);
    expect(wrapper.text()).toEqual(expectedOutput);
  })



})
