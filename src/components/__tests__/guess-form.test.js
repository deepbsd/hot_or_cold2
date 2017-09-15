import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from '../guess-form';

describe('<GuessForm />', () => {


  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Passes down the onGuess() function', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.props('onGuess')).toBeDefined();
  });

  it('Should fire the onGuess callback when called', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const val = 'WoobaDooba';
    wrapper.find('input[type="text"]').node.value = val;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(val);
  });

  it('Should reset text input after callback fires', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const val = 'Oye Vay!';
    const input = wrapper.find('input[type="text"]');
    input.node.value = val;
    wrapper.simulate('submit');
    expect(input.node.value).toEqual('');
  })

})
