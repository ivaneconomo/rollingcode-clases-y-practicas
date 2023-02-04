// Función constructora
function Auto(marca, modelo, km) {
  this.marca = marca;
  this.modelo = modelo;
  this.km = km;
  this.kilometraje = (x = 2020) => {
    alert(`Tiene ${this.km}km. ${x}`);
  };
};

const nuevoAuto = new Auto('Peugeot', '308', 10000);

//////////////////////
// Objetos globales //

// Objeto date
const date = new Date();
//console.log(date.getMilliseconds());

// Expresión regular (RegExp)
const newReg = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'); // con constructor

const newReg2 = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // sin constructor (ambas son válidas)

if (newReg2.test('alejandro@gmail.com')) {
  //alert('Email válido.');
} else {
  //alert('Email inválido.');
};

// Objetos de error
// try catch
try {
  if (newReg2.test('alejandrogmail.com')) {
    //alert('Email válido.');
  } else {
    throw new Error('Ups, email inválido.')
  };
} catch (error) {
  //console.error(error.message);
  //alert(error.message)
};



// Clases ES6

class Cuenta {
  constructor() {
    this.titular = 'Alex';
    this.saldo = 0;
  };
  // Métodos
  ingresar(pesos) {
    let valorIngresado = parseFloat(pesos);
    try {
      if (!isNaN(valorIngresado)) {
        this.saldo = this.saldo + valorIngresado;
      } else {
        throw new Error('Tipo de dato inválido.');
      }
    } catch (error) {
      console.log(error.message);
      alert('Sólo puedes ingresar números.');
    };
  };
  extraer(pesos) {
    let valorIngresado = parseFloat(pesos);
    try {
      if (!isNaN(valorIngresado)) {
        if (valorIngresado <= this.saldo) {
          this.saldo = this.saldo - valorIngresado;
        } else {
          throw new Error('Saldo insuficiente.');
        }
      } else {
        throw new Error('Tipo de dato inválido.');
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    };
  };
  informeDeCuenta() {
    alert(`El usuario ${this.titular} tiene disponible $${this.saldo}`);
  };
};

const usuarioBanco = new Cuenta();

/* Rectángulos
Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área. */

class Rectangulos {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  };
  // Métodos
  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
    document.write(`Alto: ${this.alto} <br>`);
  };
  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
    document.write(`Alto: ${this.alto} <br>`);
  };
};