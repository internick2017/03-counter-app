import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas Async-Await y fecth', () => {
    test('debe de retornar el url de la imagen  ', async () => {
        const url = await getImagen();

        console.log(url);

        expect(url.includes('https://')).toBe(true);
    })

})

