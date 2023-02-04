// Crear objeto literario
const auto = {
  marca: 'Peugeot',
  color: 'Rojo',
  modelo: () => {
    //console.log('2020')
  }
};

// Crear objeto con función constructora (clase versión antigua)
function Auto (colorA, marcaA, modeloA, añoA) {
  this.color = colorA;
  this.marca = marcaA;
  this.modelo = modeloA;
  this.año = añoA;
  this.mostrarModelo = () => {
    alert(this.modelo);
  };
};

const auto1 = new Auto('Negro', 'Fiat', 'Punto', 2021);
const auto2 = new Auto('rojo', 'chevrolet', 'cruce', 2022);
//console.log(auto1, auto2);

// Constructor Object()
const persona = new Object();
persona.nombre = 'Iván';
//console.log(persona);

////////////////////////
// Comparando Objetos //
const persona1 = {name: 'jose'};
const persona2 = persona1
//console.log(persona1 == persona2); // ésto sí devuelve True


////////////
// CLASES //

// Clase con ES6
class Persona {
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  };
  //métodos
  comer() {
    alert(`${this.nombre}, está comiendo.`)
  }
};

// Objetos e instancias
const nuevaPersona = new Persona('Alvarito', 'Jotar', 24);
//console.log(nuevaPersona);

/* Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta. */

class Cuenta {
  constructor(titular, saldo){
    this.titular = titular;
    this.saldo = saldo;
  };
  // métodos
  ingresar(dinero) {
    this.saldo += dinero;
  };
  extraer(dinero){
    if (this.saldo >= dinero) {
      this.saldo -= dinero;
    } else {
      alert('No tienes suficiente saldo en la cuenta. Kieres tener?')
    };
  };
  informar(){
    alert(`Saldo en la cuenta ${this.saldo}`);
  };
};

const nuevaCuenta = new Cuenta('Alex', 0);
//console.log(nuevaCuenta);

/* Rectángulos
Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulos {
  alto = this.ladoA;
  ancho = this.ladoB;

  métodos
  modificarAlto(alto){
    this.alto = alto;
  };
  modificarAncho(ancho){
    this.ancho = ancho;
  };
  perimetro(ladoA, ladoB){

  };
  area(ladoA, ladoB) {

  };
};

const nuevoRectangulo = new Rectangulos();
console.log(nuevoRectangulo);