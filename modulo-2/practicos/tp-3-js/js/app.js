const resultadoEj1 = function () {
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let resultado;
  resultado = '<ul>';
  for (let i = 0; i < meses.length; i++) {
    resultado += `<li>${meses[i]}</li>`;
  };
  resultado + `</ul>`;
  document.getElementById('resultado1').innerHTML = resultado;
};

const resultadoEj2 = function () {
  let ciudades= [];
  while (confirm('Ingrese nombres de ciudades o pulce "Cancelar" para salir y/o imprimir el resultado.')) {
    ciudades.push(prompt('Ingrese nombres de ciudades.'));
  };
    let resultado = ciudades;
    let longitudArreglo = resultado.length;
    let primera = resultado[0];
    let tercera = resultado[2];
    let ultima = resultado[resultado.length-1];
    document.getElementById('resultado2').innerHTML = `
  <p>El arreglo generado es: ${resultado}</p>
  <ul>
    <li>La longitud del arreglo es: ${longitudArreglo}</li>
    <li> Posiciones en el arreglo: 
      <ul>
        <li>Item 1° ${primera}</li>
        <li>Item 3° ${tercera}</li>
        <li>Item ultima° ${ultima}</li>
      </ul>
    </li>
  </ul>`;
  resultado.push('París');
  document.getElementById('resultado2x1').innerHTML = `<p>Añadiendo "París" al final del arreglo: ${resultado}</p>`;
  let elementoPos2 = resultado[1];
  document.getElementById('resultado2x2').innerHTML = `<p>El elemento en la posición 2 del arreglo es: ${elementoPos2}</p>`;
  let reemplazaPos2 = resultado.splice(1,1,'Barcelona');
  document.getElementById('resultado2x3').innerHTML = `<p>Cambiando el segundo elemento por "Barcelona": ${resultado}</p>`;
};

const resultadoEj3 = function () {
  let repeticiones = 50;
  let dado1;
  let dado2;
  let sumaDados;
  let arregloDados = [];
  for (let i = 0; i < repeticiones; i++) {
    dado1 = Math.floor((Math.random() * 6) + 1);
    dado2 = Math.floor((Math.random() * 6) + 1);
    sumaDados = dado1 + dado2;
    arregloDados.push(sumaDados);
  };
  document.getElementById('resultado3').innerHTML = `Las sumas de los dados lanzados 50 veces son: ${arregloDados}`;
};

const resultadoEj4 = function () {
  const parOImpar = function (numero) {
    if (numero % 2 == 0) {
      return document.getElementById('resultado4').innerHTML = `El número ${numero} es par.`;
    } else {
      return document.getElementById('resultado4').innerHTML = `El número ${numero} es impar.`;
    };
  };
  let numImput = parseInt(prompt('Por favor ingrese un número.'));
  parOImpar(numImput);
};

const resultadoEj5 = function () {
  const esMayusOMinus = function (cadena) {
    if (cadena.toLowerCase() == cadena) {
      return document.getElementById('resultado5').innerHTML = `La cadena ingresada está en minúsculas.`;
    } else if (cadena.toUpperCase() == cadena){
      return document.getElementById('resultado5').innerHTML = `La cadena ingresada está en mayúsculas.`;
    } else {
      return document.getElementById('resultado5').innerHTML = `La cadena ingresada tiene combinaciones de mayúsculas y minúsculas.`;
    };
  };
  let cadenaIngresada = prompt('Ingrese una cadena de texto.');
  esMayusOMinus(cadenaIngresada);
};

const resultadoEj6 = function () {
  const calcularPerimetro = (a,b) => {
    let perimetro = 2 * ( a + b );
    return document.getElementById('resultado6').innerHTML = `El perimetro del rectángulo es: ${perimetro}`;
  };
  let ladoA = parseInt(prompt('Ingrese el primer número para calcular el perímetro.'))
  let ladoB = parseInt(prompt('Ingrese el segundo número para calcular el perimetro.'))
  calcularPerimetro(ladoA,ladoB);
};

const resultadoEj7 = function () {
  let numero = parseInt(prompt('Ingrese un número para ver su tabla de multiplicación.'));
  const tablaMultiplicar = multiplicando => {
    let multiplicacion;
    let tabla = ` <table class="table table-bordered">
                    <thead>Taba del número: ${multiplicando}</thead>
                    <tbody>
                      <tr>
                        <th>Multiplicando: ${multiplicando}</th>
                        <th>Multiplicador</th>
                        <th>Producto</th>
                      </tr>`;
    for (let i = 1; i <= 10; i++) {
      let producto = multiplicando * i;
      multiplicacion += `<tr>
                          <td>${multiplicando}</td>
                          <td>${i}</td>
                          <td>${producto}</td>
                        </tr>`;
    };
    return tabla + multiplicacion + `</tbody>
                                    </table>`;
  };
  document.getElementById('resultado7').innerHTML = tablaMultiplicar(numero);
};