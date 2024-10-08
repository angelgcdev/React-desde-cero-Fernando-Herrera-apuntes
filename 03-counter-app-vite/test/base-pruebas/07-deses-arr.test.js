import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

/* eslint-disable no-undef */
describe("Pruebas en07-deses-arr", () => {
  test("Debe de retornar un string y un número", () => {
    const [letters, numbers] = retornaArreglo();

    // expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
