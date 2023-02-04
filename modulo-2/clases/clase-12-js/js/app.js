// Get y Set
class Rectangulo {
  constructor(alto = 0, ancho = 0,) {
    this.alto = alto;
    this.ancho = ancho;
  };
  // Métodos
  set setearAlto(valor){
    this.alto = valor;
  };
  set setearAncho(valor){
    this.ancho = valor;
  };
  get area(){
    return this.alto*this.ancho;
  };
};

const rectanguleitor = new Rectangulo();
rectanguleitor.setearAlto = 24;
rectanguleitor.setearAncho = 12;



///////////////////////////
////// **DOM Y BOM** //////


// BOM - Browser Object Model

// window
// console.log(window.navigator);
// console.log(window.location);
// window.alert('Esperame');
// window.location.href = 'https://www.google.com.ar';
// window.location.reload();
// window.location.replace('https://www.google.com.ar');
// console.log(window.history); // .back() y .go(-1) - sus métodos
// console.log(window.screen);
// console.log(window.frames);

// if (window.location.protocol == 'http:') {
//   alert('Ésta página no es segura.');
//   window.location.replace('https://www.google.com.ar')
// } else {
//   window.location.reload();
// };


// Funciones del tiempo setInterval()
// const reloadPage = () => {
//   location.reload();
// };

// const loop = setInterval(() => {
//   console.log('Estoy en un SetInterval');
// }, 500);

// // clearInterval() 
// const stopLoop = () => {
//   clearInterval(loop);
//   console.log('El loop ha muerto');
// };

// // setTimeout() ejecuta una vez cumplido el tiempo dado
// setTimeout(() => {
//   stopLoop();
// }, 2000);


// DOM - Document Object Model

// document
// console.log(document.body);
// document.body.innerHTML = '<h1>Hola cómo andas</h1>';