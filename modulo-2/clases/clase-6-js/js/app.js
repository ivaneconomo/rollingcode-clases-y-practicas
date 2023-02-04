function sumar(a,b) {
  return a + b;
};

const result = sumar(2,6);


function saludar(name = 'Usuario') {
  console.log(`Hola ${name}`)
};


const saludar2 = function (name = 'Usuario') {
  return(`Hola ${name}`)
};
console.log(saludar2());


// Función Arrow (Flecha)
const sumar2 = (a, b) => {
  return a + b;
};

//2+ parametros
const sumar3 = (a, b) => a + b;

//1 parametro
const sumar4 = a => a + 2;

//0 parametros
const sumar5 = () => 2 + 2;

// Fin Función Arrow (Flecha)


// Operador Ternario

const age = 18;

if (age >= 18) {
  console.log('Si, es mayor de edad.');
} else {
  console.log('No, no es mayor de edad.');
};

age >= 18 ? console.log('Si, es mayor de edad.') : console.log('No, no es mayor de edad.');

true ? 'evalua true' : 'evalua false';

const isOld = age >= 18 ? 'evalua true' : 'evalua false';

console.log(isOld);

// Si la condición se cumple devuelve el valor dado, si no cumple la condición no devuelve nada.
const isOld2 = age >= 18 && 'evalua true';

//Scope
const name = 'Iván';
const saludar4 = () => {
  const name = 'Ale';
  console.log(name);
};
saludar4();