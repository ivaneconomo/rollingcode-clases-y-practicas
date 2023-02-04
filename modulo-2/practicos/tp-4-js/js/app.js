// Clases en ES6 - Machetito de lo aprendido en clase ////
class Persona {
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  };
  // Métodos
  comer() {
    alert(`${this.nombre}, está comiendo.`)
  };
};
// Objetos e instancias de la Clase
const nuevaPersona = new Persona('Alvarito', 'Jotar', 24);
//////////////////////////////////////////////////////////



/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
     Crea los métodos necesarios para permitir encender y apagar el auto.*/
const resultadoEj1 = () => {
  class Auto {
    constructor(marca, modelo, color, estado){
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.estado = estado;
    };
    // Métodos
    info() {
      document.getElementById('resultado1').innerHTML = `
        <h4>Instancia Auto - Especificaciones:</h4>
        <ul class="list-group col-lg-3">
          <li class="list-group-item"><b>Marca</b>: ${this.marca}</li>
          <li class="list-group-item"><b>Modelo</b>: ${this.modelo}</li>
          <li class="list-group-item"><b>Color</b>: ${this.color}</li>
          <li class="list-group-item"><b>Estado del motor</b>: ${this.estado}</li>
        </ul>
        <button id="onOff" class="btn p-0 m-3"><img class="border border-success border-4 border-opacity-25 p-1 rounded-circle me-1" width="45" src="./img/off.png" alt="Motor apagado."></img>Encender motor</button>
      `;
    };
    onOff() {
      if (this.estado == 'Apagado') {
        const encender = () => {
          this.estado = 'Encendido'
          this.info();
          document.getElementById('onOff').innerHTML = `<img class="border border-danger border-4 border-opacity-25 p-1 rounded-circle me-1" width="45" src="./img/on.png" alt="Motor encendido."></img>Apagar motor`
          this.onOff();
        };
        document.getElementById('onOff').onclick = function () {encender()};
      } else {
        const apagar = () => {
          this.estado = 'Apagado'
          this.info();
          document.getElementById('onOff').innerHTML = `<img class="border border-success border-4 border-opacity-25 p-1 rounded-circle me-1" width="45" src="./img/off.png" alt="Motor apagado."></img>Encender motor`
          this.onOff();
        };
        document.getElementById('onOff').onclick = function () {apagar()};
      };
    };
  };

  const nuevoAuto = new Auto('Ford', 'Focus', 'Azul', 'Apagado');
  nuevoAuto.info();
  nuevoAuto.onOff();
};


/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:

Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro.
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta.

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta. */
const resultadoEj2 = () => {
  class Cuenta {
    constructor(titular, saldo){
      this.titular = titular;
      this.saldo = saldo;
    };
    // Métodos
    informar() {
      document.getElementById('resultado2').innerHTML = `
        <h4>La cuenta del titular "${this.titular}" tiene saldo: $${this.saldo}</h4>
        <button id="btnIngresar" class="btn btn-success">Ingresar</button>
        <button id="btnExtraer" class="btn btn-danger">Extraer</button>
        `;
        this.ingresar();
        this.egresar();
    };
    ingresar() {
      const hacerIngreso = () => {
        const regex = /^[^-][0-9]*\.?[0-9]*$/gm;
        let ingreso = parseFloat(prompt('Monto a ingresar:'));
        try {
          if (regex.test(ingreso)) {
            this.saldo = parseFloat((this.saldo + ingreso).toFixed(2));
            this.informar();
          } else {
            throw new Error('Por favor, ingresa sólo números.');
          };
        } catch (error) {
          console.error(error.message);
          alert(error.message);
        };
      };
      document.getElementById('btnIngresar').onclick = function () {hacerIngreso()};
    };
    egresar() {
      const hacerEgreso = () => {
        const regex = /^[^-][0-9]*\.?[0-9]*$/gm;
        let egreso = parseFloat(prompt('Monto a retirar:'));
        try {
          if (regex.test(egreso)) {
            if (egreso <= this.saldo) {
              this.saldo = parseFloat((this.saldo - egreso).toFixed(2));
              this.informar();
            } else {
              throw Error ('Saldo insuficiente. Por favor, intenta con un monto menor.');
            };
          } else {
            throw new Error('Por favor, ingresa sólo números.');
          };
        } catch (error) {
          console.error(error.message);
          alert(error.message);
        };
      };
      document.getElementById('btnExtraer').onclick = function () {hacerEgreso()};
    };
  };
  const cuentaEj1 = new Cuenta('Alex', 0);
  cuentaEj1.informar();
};


/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área. */
class Rectangulos {
  constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
  };
  modificarAlto(alto) {
    this.alto = alto;
  };
  modificarAncho(ancho){
    this.ancho = ancho;
  };
  mostrarPropiedades(){
    document.getElementById('liAltoRectangulo').innerHTML = `Alto: ${this.alto}px`;
    document.getElementById('liAnchoRectangulo').innerHTML = `Ancho: ${this.ancho}px`;
    document.getElementById('mostrarPropiedades').classList.remove('d-none');
    document.getElementById('containerDivRectangulo').classList.remove('d-none');
    document.getElementById('divRectangulo').style.height = `${this.alto}px`;
    document.getElementById('divRectangulo').style.width = `${this.ancho}px`;
    document.getElementById('divRectangulo').classList.remove('d-none');
  };
  calcularPerimetro() {
    let perimetro = 2 * (parseFloat(this.alto) + parseFloat(this.ancho));
    document.getElementById('liPerimetroRectangulo').innerHTML = `Perimetro: ${perimetro}px`;
    document.getElementById('liPerimetroRectangulo').classList.add('list-group-item');
    document.getElementById('liPerimetroRectangulo').classList.remove('d-none');
  };
  calcularArea() {
    let area = this.alto * this.ancho;
    document.getElementById('liAreaRectangulo').innerHTML = `Area: ${area}px`;
    document.getElementById('liAreaRectangulo').classList.add('list-group-item');
    document.getElementById('liAreaRectangulo').classList.remove('d-none');
  };
};

const crearRectangulo = () => {
  const rectanguloUsuario = new Rectangulos();
  document.getElementById('crearRectangulo').classList.remove('d-none');
  const modificarPropiedades = () => {
    rectanguloUsuario.modificarAlto(document.getElementById('inAlto').value);
    rectanguloUsuario.modificarAncho(document.getElementById('inAncho').value);
    rectanguloUsuario.mostrarPropiedades();
    document.getElementById('calcular').classList.remove('d-none');
    document.getElementById('liPerimetroRectangulo').classList.add('d-none');
    document.getElementById('liAreaRectangulo').classList.add('d-none');
  };
  document.getElementById('btnPropiedades').onclick = function () {modificarPropiedades()};
  const perimetro = () => {
    rectanguloUsuario.calcularPerimetro();
  };
  document.getElementById('btnPerimetro').onclick = function () {perimetro()};
  const area = () => {
    rectanguloUsuario.calcularArea();
  };
  document.getElementById('btnArea').onclick = function () {area()};
};

/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades. Posteriormente, cree tres instancias de este objeto y guárdalas en un array. Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */
class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  };
  imprimirDatos() {
    
  };
};