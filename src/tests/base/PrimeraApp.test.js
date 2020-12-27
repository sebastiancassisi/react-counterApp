import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../../PrimeraApp';
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp/>', () => {
  /*   test('debe de mostar el mensaje "Hola, Soy sebastian"', () => {
    const saludo = 'Hola, Soy sebastian';

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  }); */

  test('debe de mostar <PrimeraApp/> correctamente"', () => {
    const saludo = 'Hola, Soy sebastian';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostar el subtitulo enviado por props', () => {
    const saludo = 'Hola, Soy sebastian';
    const subtitulo = 'Soy un subtitulo';
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

    const textoParrafo = wrapper.find('h3').text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
