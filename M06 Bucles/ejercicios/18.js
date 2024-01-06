function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).                               5/1
  // Tu código:
  var mayor = null;
  var menor = null;
  var producto = null;
  if (a===b) return a;
  if (a>b){
    mayor = a;
    menor = b;
  }else {
    mayor = b;
    menor = a;
  }
  for (let i = menor; i < mayor; i++) {
    producto = menor=menor*(i + 1);
  }
  if (producto === -0) return 0;
  else return producto;
}

module.exports = productoEntreNúmeros;