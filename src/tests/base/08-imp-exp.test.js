import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08 heroes', () => {
    test('deve regresar un heroe por el id ', () => {
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('deve retornar un undefined si heroe no existe ', () => {
        const id = 10;

        const heroe = getHeroeById(id);


        expect(heroe).toBe(undefined);

    })



    test('deve retornar un arreglo con los heroes de DC ', () => {
        const owner = 'DC';

        const heroesArr = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner)
        // console.log(heroesArr);
        // expect(heroesArr).toEqual(
        //     [
        //         {
        //             id: 1,
        //             name: 'Batman',
        //             owner: 'DC'
        //         },
        //         {
        //             id: 3,
        //             name: 'Superman',
        //             owner: 'DC'
        //         },
        //         {
        //             id: 4,
        //             name: 'Flash',
        //             owner: 'DC'
        //         },

        //     ]
        // );
        expect(heroesArr).toEqual(heroesData);

    })

    test('deve retornar un arreglo con los heroes de Marvel y de 2 parametros ', () => {
        const owner = 'Marvel';

        const heroesArr = getHeroesByOwner(owner);

        console.log(heroesArr);
        expect(heroesArr).toEqual(
            [
                {
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                },
                {
                    id: 5,
                    name: 'Wolverine',
                    owner: 'Marvel'
                },

            ]
        );
        expect(heroesArr.length).toBe(2);

    })



})
