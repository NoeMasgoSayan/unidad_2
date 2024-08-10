// FUNCIÓN DE SUMA
// Definición de la función
function suma(a, b) {
  let resultado = a + b;

  return resultado;
}

// Llamar a la función
suma(34, 56);
console.log(suma(34, 56));

let respuesta = suma(-10, 20);
console.log(respuesta);


// FUNCIÓN DE RESTA
function restar(a, b) {

  return a - b;
}

let respuestaResta = restar(34, 56);
console.log(respuestaResta);
console.log(restar(100, 28));

// FUNCIÓN PARA MULTIPLICAR
function multiplicar(a, b) {

  return a * b;
}

let respuestaMultiplicar = multiplicar(30, 5);
console.log(respuestaMultiplicar);

// FUNCIÓN PARA DIVIDIR
function dividir(a, b) {
  if (b != 0) {
    let resultado = a / b;

    return resultado;
  } else {

    return"error"
  }
}

let respuestaDividir = dividir(30, 60);
console.log(respuestaDividir);

// Arrow function significa función de 
// SUMA
let sumar = (a, b) => a + b;

// Llamar a la función
let rpta = sumar(10, -5);
console.log(rpta);

// RESTA
let resta = (a, b) => {
  let rpta = a - b;

  return rpta;
};

// Llamar a la función
let sol = resta(10, -5);
console.log(sol);

// MULTIPLICACIÓN
let mul = (a, b) => a * b;

let solMul = mul(20, 15);
console.log(solMul);

// DIVISIÓN
let div = (a, b) => {
  if (b != 0) {
    let resultado = a / b;

    return resultado
  } else {

    return"error"
  }
};

let solDiv = div(250, 50);
console.log(solDiv);