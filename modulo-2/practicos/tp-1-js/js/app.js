function resultadoEj1() {
  alert('un mensaje');
};

function resultadoEj2() {
  document.getElementById('resultado2').innerHTML = `Hello World`;
};

function resultadoEj3() {
  document.getElementById('resultado3').innerHTML = `La suma de 3 y 5 es ${3+5}.`;
};

function resultadoEj4() {
  let nombreUsuario = prompt('Ingrese su nombre.');
  document.getElementById('resultado4').innerHTML = `Hola ${nombreUsuario}`;
};

function resultadoEj5() {
  let num1 = parseInt(prompt('Ingrese el primer número.'));
  let num2 = parseInt(prompt('Ingrese el segundo número.'));
  document.getElementById('resultado5').innerHTML = `La suma de ambos números es: ${num1 + num2}`;
};

function resultadoEj6() {
  let num1 = parseInt(prompt('Ingrese el primer número.'));
  let num2 = parseInt(prompt('Ingrese el segundo número.'));
  if (num1 > num2) {
    document.getElementById('resultado6').innerHTML = `El mayor es: ${num1}`;
  } else if (num1 == num2) {
    document.getElementById('resultado6').innerHTML = `Los números ${num1} y ${num2} son iguales.`;
  } else {
    document.getElementById('resultado6').innerHTML = `El mayor es: ${num2}`;
  };
};

function resultadoEj7() {
  let num1 = parseInt(prompt('Ingrese el primer número.'));
  let num2 = parseInt(prompt('Ingrese el segundo número.'));
  let num3 = parseInt(prompt('Ingrese el tercer número.'));
  if (num1 > num2 && num1 > num3) {
    document.getElementById('resultado7').innerHTML = `El mayor es: ${num1}`;    
  } else if (num2 > num3) {
    document.getElementById('resultado7').innerHTML = `El mayor es: ${num2}`;
  } else if ( num3 > num2 ) {
    document.getElementById('resultado7').innerHTML = `El mayor es: ${num3}`;
  } else {
    document.getElementById('resultado7').innerHTML = `Los números ${num1} ,${num2} y ${num3} son iguales.`;
  };
};

function resultadoEj8() {
  let num = parseInt(prompt('Ingrese un número.'));
  if (num % 2 == 0) {
    document.getElementById('resultado8').innerHTML = `El número ${num} es divisible entre 2.`;
  } else {
    document.getElementById('resultado8').innerHTML = `El número ${num} NO es divisible entre 2.`;
  };
};

function resultadoEj9() {
  let frase = prompt('Ingrese una frase.').toLowerCase();
  let vocales = '';
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
      vocales = vocales + frase[i];
    };
  };
  document.getElementById('resultado9').innerHTML = `Las vocales en la frase son: ${vocales}`;
};

function resultadoEj10() {
  let num = parseInt(prompt('Ingrese un número.'));
  if (num % 2 == 0) {
    document.getElementById('resultado10').innerHTML = `El número ${num} es divisible entre 2.`;
  } else if (num % 3 == 0) {
    document.getElementById('resultado10').innerHTML = `El número ${num} es divisible entre 3.`;
  } else if (num % 5 == 0) {
    document.getElementById('resultado10').innerHTML = `El número ${num} es divisible entre 5.`;
  } else if (num % 7 == 0) {
    document.getElementById('resultado10').innerHTML = `El número ${num} es divisible entre 7.`;
  } else {
    document.getElementById('resultado10').innerHTML = `El número ${num} es un número primo, sólo es divisible entre 1 o entre ${num}.`;
  };
};

function resultadoEj11() {
  let dividendo = parseInt(prompt('Ingrese un número.'));
  let divisores = [2, 3, 5, 7];
  let divisoresDividendo = [];
  for (let i = 0; i < divisores.length; i++) {
    if (dividendo % divisores[i] == 0) {
      divisoresDividendo.toString() == divisoresDividendo.push(divisores[i]);
    };
  };
  if (divisoresDividendo.length != 0) {
    document.getElementById('resultado11').innerHTML = `El número ${dividendo} es divisible entre ${divisoresDividendo}.`;
  } else {
    document.getElementById('resultado11').innerHTML = `El número ${dividendo} es primo, sólo es divisible entre 1 y ${dividendo}.`;
  };
};