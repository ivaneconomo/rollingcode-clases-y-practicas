// Seleccionando elementos
// console.log(document.getElementById('title')); // sólo por id
// console.log(document.querySelector('h4')); // etiqueta
// console.log(document.querySelector('.subtitle')); // clase
// console.log(document.querySelector('#sub2')); // id
// console.log(document.getElementsByClassName('subtitle')); // sólo por clase


// Agregar nodos
// creamos un elemento div
let myDiv = document.createElement('div');
// cargamos contenido en el elemento div creado
myDiv.innerHTML = '<h3>Soy el h3 que está en el div</h3>';
// le agregamos una clase con estilos ya dados en un documento .css
myDiv.className = 'myDiv';
// agregamos nuestro div al body
document.getElementById('theSectionTag').appendChild(myDiv);


// Clonar nodos
// creamos una variable y guardamos en ella el nodo deseado a clonar (lo seleccionamos por id)
let mySection = document.getElementById('theSectionTag');
// insertamos el nodo clonado en el documento
document.body.appendChild(mySection.cloneNode(true)); // false: para el nodo solo / true: para el nodo con sus elementos child



////////////
// Eventos//
const clickButton = (x) => {
  alert(`Hola ${x}, te voy a cambiar de página.`);
  window.location.replace('https://google.com.ar');
};
//
const readinput = () => {
  const userName = document.getElementById('inputUserName').value;
  const selectOptions = document.getElementById('selectOptions').value;
  const dataForm = {userName,selectOptions};
  if (dataForm.userName == '') {
    alert('El nombre de usuario es obligatorio')
  }
};