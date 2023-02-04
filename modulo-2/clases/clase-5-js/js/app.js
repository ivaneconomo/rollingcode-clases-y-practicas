// Funciones declarativas
const undefinedUser = 'user';
const alumnos = ['ale', 'ivan', 'gabriel'];

function findUserByName (listOfStudents, studentName) {
  for (let i = 0; i < listOfStudents.length; i++) {
    if (listOfStudents[i] == studentName) {
      return`Se encontró el alumno ${listOfStudents[i]}`
    };
  };
};

const result = findUserByName(alumnos, 'ivan');


// Funciones anonimas

const saludar2 = function (listOfStudents, studentName) {
  for (let i = 0; i < listOfStudents.length; i++) {
    if (listOfStudents[i] == studentName) {
      return`Se encontró el alumno ${listOfStudents[i]}`
    };
  };
};

console.log(saludar2(alumnos, 'ivan'));

// Function arrow o Funcion flecha

const suma = (a,b) => {
  return a + b;
};

// Funcion flecha resumida (para 1 solo parametro: sin parentesis)
const suma2 = a => a * 2;

// Funcion flecha (sin parametros de entrada: parentesis() vacios)
const suma3 = () => 12 * 2;


// Operador ternario

console.log ( 10 == 11 ? 'yes' : 'nop');

console.log ( 10 == 10 && 'sipi');


// Funciones dinamicas

let age = prompt('Ingresa tu edad');

const isOld = ( age >= 18 ) ? () => alert('Eres mayor') : () => alert('No eres mayor');

isOld();

// Scope Global

const userName = 'Rodo';
var name = 'Alvarito';

const saludar5 = () => {
  let userName = 'Ivan';
  console.log(userName);
};

const a = 1;
const b = 2;

const sumar = () => {
  console.log(a+b);
};


// Scope Local

const saludo1 = () => {
  let user = 'Rodo';
  console.log(user);
};

console.log(user);

if (true) {
  var student = 'Arnold';
};

let student = 'Pia';
console.log(student);