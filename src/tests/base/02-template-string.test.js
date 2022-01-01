import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas 02-template', () => {
    test('prueba en el metodo getSaludo o get saludo deve retornar hola x ', () => {
        const nombre = 'nick';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    // get Saludo deve de retornar Hola carlos so no hay argumenmtos en nombre

    test('Saludo deve de retornar Hola carlos so no hay argumenmtos en nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola ' + 'Carlos!');
    })

})