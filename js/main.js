//PIDE POR TECLADO LA EDAD
var edad = prompt("Introduce tu edad");
//COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO Y SI ES MAYOR DE 18
if (Number(edad) == edad && edad >= 18) {
  document.write("Puedes conducir, eres mayor de edad");
} else if (edad < 18) {
  document.write("Eres menor de edad.-");
} else {
  document.write("No es un número válido.-");
}
