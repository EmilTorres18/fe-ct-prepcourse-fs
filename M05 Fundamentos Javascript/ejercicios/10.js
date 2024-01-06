function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (fecha instanceof Date) {
    const tiempoEnMilisegundos = fecha.getTime();
    if (!isNaN(tiempoEnMilisegundos)) {
      return true;
    }
  }
  return false;
}

module.exports = esFechaValida;