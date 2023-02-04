/*  Cree una card que contenga dos input para ingresar numeros, un input type select con los values de +, -. * y /.
    Acceder a los valores de los distintos input
    Crear una funcion para cada operacion matematica ( por ejemplo funcion sumar que sumara el valor del primer input mas el segundo)
    crear boton "calcular" que ejecutara mediante un evento las funciones
    crear logica para que se ejecuten distintas funciones de acuerdo al value del input select
    renderiza dentro de la card en la parte inferior el valor de la operacion realizada */


const calcular = () => {
  let numero1 = parseInt(document.getElementById('num1').value);
  let numero2 = parseInt(document.getElementById('num2').value);
  let operacion = document.getElementById('operacion').value;
  let resultado;
  if (operacion == 'suma') {
    resultado = numero1 + numero2;
  } else if (operacion == 'resta') {
    resultado = numero1 - numero2;
  } else if (operacion == 'producto') {
    resultado = numero1 * numero2;
  } else if (operacion == 'division') {
    resultado = numero1 / numero2;
  } else {
    alert('Seleccione una operación válida.');
  };
  document.getElementById('resultadoAqui').innerHTML = `<h4>Resultado: ${resultado}</h4>`;
};