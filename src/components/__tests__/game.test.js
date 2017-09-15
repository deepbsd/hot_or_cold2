import React from 'react';
import {shallow} from 'enzyme';
import Game from '../game';

describe('<Game/>', () => {


  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Renders the secret number correctly', () => {
    const wrapper = shallow(<Game/>);
    const instance = wrapper.instance();
    expect(instance.state.correctAnswer > 0).toEqual(true);
    expect(instance.state.correctAnswer < 101).toEqual(true);
  });

  it('Creates a new game properly', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().newGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback') ).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
    expect(wrapper.state('correctAnswer')).toBeLessThan(100);
  })

  it('Can process guesses properly', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 55
    });
    wrapper.instance().guess(20);
    expect(wrapper.state('guesses')).toContain(20);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().guess(75);
    expect(wrapper.state('guesses')).toContain(20,75);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm');

    wrapper.instance().guess(4);
    expect(wrapper.state('guesses')).toContain(20,75,4);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().guess(56);
    expect(wrapper.state('guesses')).toContain(20,75,4,56);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().guess(55);
    expect(wrapper.state('guesses')).toContain(20,75,4,56,55);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  })



});
