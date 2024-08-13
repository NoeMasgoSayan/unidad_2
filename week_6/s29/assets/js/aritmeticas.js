// Función para sumar 2 números
function sumar(a, b) {
  return a + b;
}

// Función para restar 2 números
function restar(a, b) {
  return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir
function dividir(a, b) {
  if (b === 0) {
    return "error";
  } else {
    return a / b;
  }
}

export {
  sumar,
  restar,
  multiplicar,
  dividir
};