// const auto = {
//   marca: 'Peugeot',
//   modelo: 306,
//   puertas: () => {console.log('5');}
// };

// console.log(auto);
// // auto.puertas();

// // añadir
// auto.combustible = 'Gasoil';

// // editar
// auto.puertas = 5;

// // eliminar
// delete auto['puertas']; // o delete auto.puertas (con todas las herramientas)
// console.log(auto);

/////////////////////////////////////////////////////////////
// // recorrer un objeto
// const keys = Object.keys(auto); // toma todas las KEYS de un objeto
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//   console.log(auto[keys[i]]);
// };


// var products = [
//   { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//   { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
// ];


// var products = [
//   { id: 1, name: "Leche", price: 120, categories: ["familiar", {type: 'food'}] },
//   { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
// ];
// console.log(products[0].categories[1].type);

// var products = [
//   { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//   { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
// ];

// products.map((prod) => {
//   console.group(prod.name)
//   console.log(`id: ${prod.id}`);
//   console.log(`id: ${prod.price}`);
//   console.log(`id: ${prod.categories}`);
//   console.groupEnd();
// });

// for (var i=0; i < products.length; i++) {
//   var product = products[i];
//   console.group(product.name);
//   console.log("  Id: " + product.id);
//   console.log("  Precio: " + product.price);
//   console.log("  Categorías: " + product.categories.join(", "));
//   console.groupEnd();
// };


// CREAR OBJETOS

// notación literal
const persona = {
  name: 'Iván',
  age: 27,
};

// función constructora
const auto2 = {
  color: 'rojo',
  marca: 'fiat',    // esto no
  modelo: 'punto',
  año: 2020
};

function Auto(color, marca, modelo, año) {
  this.colorA = color;
  this.marcaA = marca;
  this.modeloA = modelo;
  this.añoA = año;                                        // esto si (reutilizable)
};

const autito = new Auto('negro', 'chevrolet', 'cruce', 2022);
console.log(autito);

// constructor Object() (crea un object vacío)
var auto = new Object();

auto.color = "rojo";
auto.marca = "fiat";
auto["modelo"] = "bravo",
auto.anio = 2008;

// Object.create (prototype ¿?)
autito.añoA = 1993;
let autito2 = autito;
console.log(autito2);


const autito3 =  Object.create(autito);
autito.marcaA = 'fiat'
autito3.marcaA = 'ford'
console.log(autito3);

////////////////////////////////////////////
// comparando objetos
// variable de referencia del objeto persona1
var persona1 = {nombre: "Juan"};

// variable de referencia del objeto persona2
var persona2 = {nombre: "Juan"};

console.log(persona1 == persona2) // retorna false
console.log(persona1 === persona2) // retorna false


// variable de referencia del objeto persona1
var persona1 = {nombre: "Juliana"};

// variable de referencia del objeto persona2
var persona2 = persona1; // asignamos la referencia del objeto persona a la variable de referencia del objeto persona2

///////////////////////////////////////
// OBJETOS GLOBALES ///////////////////
/* Son los objetos que tenemos disponibles en el ámbito global (objetos primitivos, es decir, que viene con el lenguaje).
Los podemos dividir en 3 grupos
Objetos contenedores de datos: Object, Array, Function, Boolean, Number 
Objetos de utilidades: Math, Date, RegExp
Objetos de errores: Error */