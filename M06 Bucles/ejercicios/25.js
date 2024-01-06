function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const textoSinEspacios = string.toLowerCase().replace(/\s/g, '');

  const textoInvertido = textoSinEspacios.split ('').reverse().join('');

  return textoSinEspacios === textoInvertido;
}
console.log(esPalindromo('oso'));
console.log(esPalindromo('Hola'));

module.exports = esPalindromo;
