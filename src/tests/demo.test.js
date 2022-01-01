
describe('Pruebas en el archivo demo.tes.js', () => {
    test('deve ser iguales los string ', () => {

        // 1. inicialización
        const mensaje = 'Hola Mundo';

        // 2. Estimulo

        const mensaje2 = "Hola Mundo";

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);


    })

})


