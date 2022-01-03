import React from 'react';
import { getByText, render } from "@testing-library/react";//para que funcione en pruebas
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en PrimeraApp', () => {
    test('debe de mostrar el mensaje hola, soy nick ', () => {

        const saludo = "Hola, soy Nick";
        // const wrapper = render( <PrimeraApp saludo={saludo} /> );
        const {getByText } = render( <PrimeraApp saludo={saludo} /> );

        expect(getByText(saludo)).toBeInTheDocument();
        // wrapper.getByText()
    })

})
