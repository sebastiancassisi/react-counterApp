import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en el archivo 08-imp-exp', () => {
  test('getHeroeById - Debe retornar un heroes por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((heroe) => heroe.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test('getHeroeById - Debe retornar undefined si heroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  test('getHeroesByOwner - Debe retornar undefined si heroe no existe', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((heroes) => heroes.owner === owner);

    expect(heroes).toEqual(heroesData);
  });
});
