describe('Pruebas en el archivo demo.js', () => {
  test('deben ser iguales los strings', () => {
    
    // 1. Inicializacion
    const mensaje = 'Hola mundo';

    // 2. Estimulo
    const mensaje2 = `Hola mundo`;

    // 3. Observa el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
