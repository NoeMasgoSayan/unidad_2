function maximo(A, B, C) {
  if (A < B) {
    if (B < C) {
      return C;
    } 
    return B;
  }
  return A;
}

function saludar() {
  console.log('hola');
}

export {
  maximo,
  saludar
};