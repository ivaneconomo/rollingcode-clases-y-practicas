//////////////////METODOS STRING//////////////////////
// let saludo = `Hola, mi nombre es`;
// let userName = `ivan`;
// let userLastname = `economo`;

// const presentation = "Hola, mi nombre es" + " " + userName + " " + userLastname;

// const presentation2 = `${saludo} ${userName} ${userLastname}`;

// const todoEnMayus = presentation2.toUpperCase();
// console.log(todoEnMayus);

// const todoEnMin = presentation2.toLowerCase();
// console.log(todoEnMin);

// let ultimaPos = userLastname[userLastname.length - 1];
// console.log(ultimaPos);

// let ultimaPos2 = userLastname.charAt(userLastname.length - 1);
// console.log(ultimaPos2);



// let apellidoIngresado = prompt('Ingresa tu apellido.').trim();
// let primeraLetra = apellidoIngresado.charAt(0);
// let letraEnMayus = primeraLetra.toUpperCase();
// let restoDelApellido = apellidoIngresado.substring(1);
// console.log(`${letraEnMayus}${restoDelApellido}`);

// const txt = '  alejandro Busi  ';
// console.log(txt.trim());

// const txt2 = 'Hola Mundo';
// console.log(txt2.repeat(2));

// const txt3 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(txt3.replace('dog', 'cat'));

// const userInput = prompt('Ingresa una palabra.');
// const isInclude = txt3.includes(userInput);

// isInclude ? alert('Si se encontró coincidencia.') : alert('No se encontró coincidencia.');



////////////////////////METODOS NUMBER//////////////////////
let num1 = 44.50;
let num2 = 25;
let num3 = 34.33;

// Redondear para abajo
console.log(Math.floor(num1));

// Redondear al número más cercano
console.log(Math.round(num1));

// Retornar el número más alto
console.log(Math.max(num1, num2, num3));

// Retornar el número más bajo
console.log(Math.min(num1, num2, num3));

// Elevar a la potencia dada
const base = '4';
const exponente = 2;

console.log(Math.pow(base, exponente));

// Obtener raíz cuadrada
console.log(Math.sqrt(num2));

// Obtener números con 2 decimales
console.log(Math.round(num3 * 100) / 100);
console.log(typeof(Number(num3.toFixed(2))));

// Eliminar decimales
console.log(Math.trunc(num3));

// Obtener número aleatorio
console.log(Math.floor(Math.random() * 10));

// Redondear hacia arriba
console.log(Math.ceil(num3));


// FUNCION RANDOM MIN MAX///////////////////////////////////
function random() {
  return Math.floor((Math.random() * (100 - 50 + 1)) + 50);
};
////////////////////////////////////////////////////////////

////// Ejercicio DNI
const id = parseInt(prompt('DNI'));
const numMatch = (id) => {
  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const result = letters.charAt(id % 23);
  alert(result);
};