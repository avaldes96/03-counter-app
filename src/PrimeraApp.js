import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo = "Soy un subtitulo" }) => {
  //const saludo = "hola mundo";
  //const saludo = {
  //nombre: "Adriana",
  //edad: 25,
  //};
  return (
    <>
      <h1>{saludo}</h1>
      {/*<pre>{JSON.stringify(saludo)}</pre>*/}
      <p>mi primera pagina</p>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "soy un subtitulo",
};

export default PrimeraApp;
