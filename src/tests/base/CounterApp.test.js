import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../../CounterApp';

describe('Pruebas en <PrimeraApp/>', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe de mostar <CounterApp/> correctamente"', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostar el valor por defecto 100"', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find('h2').text().trim();
    console.log(counterText);
    expect(counterText).toBe('100');
  });
  test('debe incrementar el contador', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('11');
  });
  test('debe decrementar el contador', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('9');
  });
  test('debe volver el contador al estado inicial (reset)', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('105');
  });
});
