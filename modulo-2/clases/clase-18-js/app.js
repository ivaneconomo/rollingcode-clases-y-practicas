/*
import {sales} from './facturas'

const facTypeC = 'c';
const facTypeA = 'a';

sales.map((sale) => {
  if (sale.type === facTypeC) {
    console.log(`El nombre es ${sale.name}`);
  };
});

console.log(sales.find((sale) => sale.type === facTypeA));

console.log(sales.filter((sale) => sale.type === facTypeA));

const nombres = ['Ale', 'Iván', 'Alvarito'];
const [nombre1, nombre2, nombre3] = nombres;

console.log({nombre2, nombre1});

const persona = {
  name: 'José',
  age: 25,
  dni: 123456,
  test: {type: {class: 'B'}}
};

const {name, age} = persona;
console.log(name); // desescrutcurado en vez de persona.name
console.log(persona.test.type.class);

const state = false;
if (state) {
  console.log(`Es estado es true`);
} else {
  console.log(`Es estado es false`);
};

state ? console.log(`Es estado es true`) : console.log(`Es estado es false`);
state && console.log(`Es estado es true`);

*/

// Import y export



// Promise (promesas)

const funcAsync = async () => {
  let post0;
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((resp) => resp.json())
  .then(resp => post0 = resp[0])
  return post0;
};

funcAsync().then((resp) => console.log(resp));

const funcAsync2 = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();
  return data;
};

funcAsync2().then(resp => console.log(resp))