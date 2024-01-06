function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  const cadena1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  const cadena2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

  return cadena1 === cadena2;
}

// Ejemplos de uso
console.log(esAnagrama("Listen", "Silent"));        // Devuelve true, son anagramas
console.log(esAnagrama("Hello", "World"));           // Devuelve false, no son anagramas
console.log(esAnagrama("Clint Eastwood", "Old West Action")); // Devuelve true, son anagramas
console.log(esAnagrama("rail safety", "fairy tales"));          // Devuelve true, son anagramas
console.log(esAnagrama("ABC", "abc"));                // Devuelve true, son anagramas
console.log(esAnagrama("Hola", "aloh"));              // Devuelve true, son anagramas
console.log(esAnagrama("Palabra", "AlabraP"));        // Devuelve true, son anagramas
console.log(esAnagrama("", ""));                      // Devuelve true, son anagramas (ambas cadenas vacías)


module.exports = esAnagrama;
