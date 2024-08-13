// Potencia de 2
const powerOfTwo = (number) => {
  if (number <= 0) {
    return 1;
  }
  
  let rpta = 2
  
  for (let i = 1; i < number; i++) {
    rpta *= 2;
  }
  
  return rpta;
};

console.log(powerOfTwo(10));

// Invertir un arreglo
const reverse = (array) => {
  let newArray = [];
  
  for (let i = 1; i <= array.length; i++) {
    newArray.push(array[array.length - i]);
  }

  return newArray;
};

console.log(reverse(['a', 'b', 'c', 'd']))

// Contar vocales 
const countVowels = (str) => {
  
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  
  for (let texto of str) {
    if (vocales.includes(texto)) {
    counter++;
    }
  }
  
  return counter;
};

console.log(countVowels('holaa'));

const contarVowels = (str) => {
  
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vocales.indexOf(str[i]) >= 0) {
      counter++;
    }
  }
  
  return counter;
};

console.log(contarVowels('gioul'));

// Función par/impar
const evenOrOdd = (n) => {
  if (n % 2 === 0) {
    // par
    return 0;
  } else {
    // impar
    return 1;
  }

};

console.log(evenOrOdd(10));

// Número mayor que otro
const max = (A, B, C) => {
  if (A < B) {
    if (B < C) {
      return C
    } 
    return B
  }
  return A
};

console.log(max(11, 90, 36));

// Determinar si un número es primo
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for ( let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
};

console.log(isPrime(2));

// ¿Puedes conducir y votar?
const canDriveAndVote = (edad) => {
  return edad >= 18;
};

console.log(canDriveAndVote(15));

// Determinar si dos números son pares
const areOdd = (n, m) => {
  let rpta = n % 2 === 0 && m % 2 === 0;
    return rpta;
};

console.log(areOdd(110,50));