// Ejercicio 1

/*console.log("Bucle while")

let number = 0;

// Bucle while
while (number <= 5) {
  // Bloque de código a repetir
  console.log(number);
  // Incrementar variable number
  number++;
}

console.log("Bucle for")

for (let number = 0; number <= 5; number++) {
  console.log(number);
}

console.log("");*/

// Reto 1
// Números pares del 1 al 100
let number = 1;
while (number <= 100) {
  if (number % 2 === 0) {
    console.log(number);
  }

  number++;
}

// Reto 2
// Números impares del 1 al 12
let numero = 1;
while (numero <= 12) {
  if (numero % 2 != 0) {
    console.log(numero);
  }

  numero++;
}

// Recorrer arreglos con el bucle while
const paises = ['Perú', 'Uruguay', 'Chile', 'Argentina'];

let i = 0;

while (i < paises.length) {
  console.log(paises[i]);
  i++;
}

// Do while
let num = 0;

do {
  console.log(num);
  num++;
} while (num <= 5)

// prompt()
let nombre = prompt('Ingresa tu nombre');
console.log(nombre);

let edad = prompt('Ingresa tu edad');
console.log(edad);

// REGEX
// const patron = /hola/;
// const patron = /hola[0-9]mundo/;
 const patron = /hola[0-9]+mundo/;
// const patron = /^hola$/;
// const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while (!patron.test(dato));
console.log('Coincidencia');