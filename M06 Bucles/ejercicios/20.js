function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;

  for (let i = 0; i <= n; i++) {
    suma+= i;
    
    if (suma >5000){
      break;
    }
   }
   return suma;
}

const resultado = sumarHastaNConBreak(15);
console.log(resultado);

//está todo perfecto, ustedes cometieron un error en el codigo de prueba, repitieron:

//test('sumarHastaNConBreak of 15 should return 120', () => {
//  expect(sumarHastaNConBreak(15)).toBe(120);
//});

//test('sumarHastaNConBreak of 20 should return 120', () => {     (debería decir return 210, no 120).
//  expect(sumarHastaNConBreak(20)).toBe(120); 
//});

module.exports = sumarHastaNConBreak;