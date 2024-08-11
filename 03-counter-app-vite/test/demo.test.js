describe("Pruebas en <DemoComponent>", () => {
  test("Esta prueba no debe de fallar", () => {
    //1. Inicializacion (arrange --> reparar)
    const message1 = "Hola mundo";

    //2. Estímulo (add --> estimular)
    const message2 = message1.trim();

    //3. Observar el comportamiento....esperado (assert --> afirmar)
    // expect(message1).toBe(message2);
    expect(message1).toBe(message2);
  });
});
