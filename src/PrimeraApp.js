import PropTypes from 'prop-types';

// import { Fragment } from "react";

const PrimeraApp = ({ saludo, subtitulo }) => {



    // const saludo = 123; si
    // const saludo = 123.123; si
    // const saludo = true; no imprime 
    // const saludo = [1,2,3,4,5]; imprime
    // const saludo = {
    //     nombre: "nick",
    //     edad: 33
    // };
    //  objetos tiene que tener stringify y con pre para imprimir

    return (
        // <Fragment>
        <>
            <h1> {saludo} </h1>
            {/* <pre >{JSON.stringify(saludo, null,3)}</pre> */}
            <p> {subtitulo} </p>
        </>
        // </Fragment>
    );

}

PrimeraApp.propTypes = {
        saludo: PropTypes.string.isRequired
    }

    PrimeraApp.defaultProps = {
        subtitulo: 'soy un subtitulo'
    }

export default PrimeraApp;