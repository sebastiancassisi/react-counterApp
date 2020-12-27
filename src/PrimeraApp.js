import React, { useState } from 'react';
import './index.css';
import { PropTypes } from 'prop-types';

const PrimeraApp = ({ miSaludo, subtitulo }) => {
  const saludo = 'Hola mundo !!';

  return (
    <>
      <h1>{saludo}</h1>
      <h2>{miSaludo}</h2>
      <h3>{subtitulo}</h3>
    </>
  );
};

PrimeraApp.propTypes = {
  miSaludo: PropTypes.string,
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo',
};

export default PrimeraApp;
