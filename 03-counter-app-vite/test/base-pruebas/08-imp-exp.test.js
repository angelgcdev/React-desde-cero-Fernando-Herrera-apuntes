import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

import heroes from "../../src/data/heroes";

/* eslint-disable no-undef */
describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por Id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  //Tarea
  //Debe de retornar un arreglo con los héroes de DC
  //length === 3
  //toEqual al arreglo filtrado

  //Debe de retornar un arreglo con los héroes de Marvel
  //length ===2
  test("Debe de retornar un arreglo con lo héroes de DC", () => {
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);

    expect(3).toBe(heroesDC.length);
    expect(heroes.filter((heroe) => heroe.owner === owner)).toEqual(heroesDC);
  });

  test("Debe de retornar un arreglo con lo héroes de Marvel", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);

    expect(heroesMarvel.length).toBe(2);
    expect(heroes.filter((heroe) => heroe.owner === owner)).toEqual(
      heroesMarvel
    );
  });
});
