import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"
import '@testing-library/jest-dom';

describe('Pruebas funciones', () => {
    test('Debe retoranar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();


        expect(user).toEqual(userTest);
    })

    // get usuario activo debe retornar un objeto

    test('get usuario activo debe retornar un objeto ', () => {

        const nombre = 'nick';
        // const getUserActiveTest = (nombre) => ({
        //     uid: 'ABC567',
        //     username: nombre
        // })
        const userActive = getUsuarioActivo(nombre);

        expect(userActive).toEqual(({
            uid: 'ABC567',
            username: nombre
        }));

    })


})
