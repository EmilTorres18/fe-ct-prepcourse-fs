function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  do {
    if (mes<1 || mes>12) {
      return 0;
    }
  }while (mes<1 || mes>12);

  switch (mes) {

  case 1: //Enero
  case 3: //Marzo
  case 5: //Mayo
  case 7: //Julio
  case 8: //Agosto
  case 10: //Octubre
  case 12: //Diciembre
    return 31;

  case 4: //Abril
  case 6: //Junio
  case 9: //Septiembre
  case 11: //Noviembre
  return 30;

  case 2: //Febrero
  //Verificar si es un año bisiesto
  return 28;
  }
}


const mesIngresado =2;
const dias = diasEnMes(mesIngresado);
console.log('El mes ${mesIngresado} tienes ${dias} dias.');

module.exports = diasEnMes;
