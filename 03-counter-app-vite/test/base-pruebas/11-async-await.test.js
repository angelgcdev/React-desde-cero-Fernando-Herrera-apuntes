import { getImagen } from "../../src/base-pruebas/11-async-await";

/* eslint-disable no-undef */
describe("Pruebas en 11-async-await", () => {
  test("getImagen debe de retornar un URL de la getImagen ", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });
});
