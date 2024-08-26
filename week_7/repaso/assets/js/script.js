for (let i = 135; i >= 36; i -= 6) {
  console.log(i);
}

let animales = ['gato', 'perro', 'conejo', 'pájaro', 'pato'];

let listaAnimales = document.getElementById('animales');

for (let i = 0; i < animales.length; i++) {
  listaAnimales.innerHTML += `${animales[i]} <br/>`;
}