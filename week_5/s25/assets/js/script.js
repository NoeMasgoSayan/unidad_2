// alert() sirve para mostrar un mensaje en el navegador
function mostrarMsj() {
  alert('hola!!');
}

// Ejemplo 1
function mostrarMensaje() {
  // Mostrar los números del 1 al 10
  for (let i = 1; i < 11; i++) {
    alert(i);
  }
}

// Ejemplo 2
let texto = "";

// Obtenemos el conteo como texto HTML
for (let i = 1; i < 11; i++) {
  texto += `${i}<br>`;
}

// Asignamos al elemento
document.getElementById('demo').innerHTML = texto;

// Ejemplo 3
texto = "";
const autos = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (let i = 0; i < autos.length; i++) {
  texto += `${autos[i]}<br>`;
}

document.getElementById('autos').innerHTML = texto;

// Ejemplo 4
texto = "";

// Recorrer una lista por elemento
for (let auto of autos) {
  texto += `${auto}<br>`;
}

// Asignamos el elemento
document.getElementById('autos2').innerHTML = texto;