import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';

describe('Pruebas counter App tarea', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => { // hacer antes de cada prueba
        wrapper = shallow(<CounterApp />)
    })

    test('deve mostrar counter app correctamente y hacer snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('deve mostrat el valor por defecto de 100', () => {

        const value = 100;
        const wrapper = shallow(
            <CounterApp
                value={value}
            />)

        const valueInH2 = wrapper.find('h2').text()
        const valueInt = parseInt(valueInH2);
        expect(valueInt).toBe(value);
    })

    test('deve de incrementar con el boton +1', () => {
        const valueInH2 = wrapper.find('h2').text();
        const valueInt = parseInt(valueInH2);
        const button1 = wrapper.find('button').at(0);
        const simulateButton = button1.simulate('click');
        const newValueInH2 = wrapper.find('h2').text();
        const newValueInt = parseInt(newValueInH2);

        expect(newValueInt).toBe(valueInt + 1)
    })

    test('deve de restar con el boton -1', () => {
        const valueInH2 = wrapper.find('h2').text();
        const valueInt = parseInt(valueInH2);
        const button2 = wrapper.find('button').at(2);
        const simulateButton = button2.simulate('click');
        const newValueInH2 = wrapper.find('h2').text();
        const newValueInt = parseInt(newValueInH2);
        expect(newValueInt).toBe(valueInt - 1)
    })

    test('deve mostar el valor por defecto cuando clica e el boton de reset', () => {
        const value = 105;
        const wrapper = shallow(
            <CounterApp
                value={value}
            />)
        const buttonMore1 = wrapper.find('button').at(0);
        const buttonReset = wrapper.find('button').at(1);
        const simulateButton = buttonMore1.simulate('click');
        const simulateButton2 = buttonMore1.simulate('click');
        const simulateButtonReset = buttonReset.simulate('click');
        const newValueInH2 = wrapper.find('h2').text();
        const newValueInt = parseInt(newValueInH2);
        expect(newValueInt).toBe(value);
    })




})
