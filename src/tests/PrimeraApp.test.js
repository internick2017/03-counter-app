import React from 'react';
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
// import { getByText, render } from "@testing-library/react";//para que funcione en pruebas

describe('Pruebas en PrimeraApp', () => {
    // test('debe de mostrar el mensaje hola, soy nick ', () => {
    //     const saludo = "Hola, soy Nick";
    //     // const wrapper = render( <PrimeraApp saludo={saludo} /> );
    //     const {getByText } = render( <PrimeraApp saludo={saludo} /> );
    //     expect(getByText(saludo)).toBeInTheDocument();
    //     // wrapper.getByText()
    // })
    test('debe de mostrar primera app correctamente ', () => {
        const saludo = 'Hola, soy Nick';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();
    })
    test('deve mostrat el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Nick';
        const sub = 'soy un sub';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={sub}
            />)

        const textParagraph = wrapper.find('p').text();
        expect(textParagraph).toBe(sub);

    })




})
