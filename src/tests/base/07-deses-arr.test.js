import { retornaArreglo } from '../../base-pruebas/07-deses-arr'


describe('Pruebas archivo 07 desestructuracion', () => {
    test('debe retornar un string y un numero', () => {
        // const arr = retornaArreglo(); // ['ABC', 123]
        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]
        console.log(typeof (letras))
        // expect(arr).toEqual(['ABC', 123])

        // expect(letras).toBe('ABC');
        expect(typeof (letras)).toBe(String);
    })


})
