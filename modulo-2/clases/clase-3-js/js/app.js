// alert('Hello');
// document.write('<img src="https://picsum.photos/200/300?random=1">');
// document.write('<br>');
// document.write(3 + 5);
// document.write('<h1 style="color: red"; >Hola</h1>');
// 
// const userName = prompt('Hey, ingresá tu nombre');
// document.write(`Bienvenido ${userName}`);

// let num1 = parseInt(prompt('Ingresá el primer número'));
// let num2 = parseInt(prompt('Ingresá el segundo número'));
// let num3 = parseInt(prompt('Ingresá el tercer número'));

// if (isNaN(num1) || isNaN(num2)) {
//   alert('Sólo puedes ingresar números');
// } else {
//   document.write(num1 + num2);
// }

// if (num1 > num2) {
//   document.write(`El mayor es ${num1}`);
// } else if (num2 > num1) {
//   document.write(`El mayor es ${num2}`)
// } else {
//   document.write('Son iguales')
// }

// Ingresar 3 números e indicar cuál es el mayor de los 3

// if (num1 > num2 && num1 > num3) {
//   document.write(num1);
// } else if (num2 > num3) {
//   document.write(num2);
// } else {
//   document.write(num3);
// }

// --------------------------------

// let isDiv = parseFloat(prompt('Ingresá un número'));
// if (isDiv % 2 == 0) {
//   alert(`El número ${isDiv} es divisible por 2`);
// } else {
//   alert(`El número ${isDiv} no es divisible por 2`);
// }

// const frase = prompt('Ingresá una frase.').toLocaleLowerCase();
// let vocales = '';

// for (let i = 0; i < frase.length; i++) {
//   if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
//     vocales = vocales + frase[i];
//   }
// };
// if (vocales.length != 0) {
//   console.log(vocales);
// } else {
//   console.log('No se encontraron vocales.');
// };

const inputNumber = parseInt(prompt('Ingresa un número.'));

if (inputNumber % 2 == 0) {
  alert('Es divisible por 2.');
} else if (inputNumber % 3 == 0) {
  alert('Es divisible por 3.');
} else if (inputNumber % 5 == 0) {
  alert('Es divisible por 5.');
} else if (inputNumber % 7 == 0) {
  alert('Es divisible por 7.');
} else {
  alert('No es divisible por 2, 3, 5 o 7.');
};