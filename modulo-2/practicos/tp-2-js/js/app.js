function resultadoEj1() {
  let edad = parseInt(prompt('Por favor, ingresá tu edad.'));
  let edadReq = 18;
  if (edad >= edadReq) {
    document.getElementById('resultado1').innerHTML = `Tenes edad adecuada para conducir, felicidades.`;
  } else if (edad < edadReq) {
    document.getElementById('resultado1').innerHTML = `Necesitas tener al menos ${edadReq} años para conducir.`;
  } else {
    document.getElementById('resultado1').innerHTML = `Al parecer ingresaste un valor no válido. Por favor intenta de nuevo.`;
  };
};

function resultadoEj2() {
  let nota = parseInt(prompt('Por favor ingrese la nota del alumno (0 - 10).'));
  if (nota >= 0 && nota <= 10) {
    if (nota < 3) {
      alert('Muy deficiente.');
    } else if (nota >= 3 && nota <= 4){
      alert('Insuficiente.');
    } else if (nota >= 5 && nota <=6) {
      alert('Suficiente.');
    } else if (nota === 7) {
      alert('Bien.');
    } else if (nota > 7 && nota < 10) {
      alert('Notable.');
    } else {
      alert('Sobresaliente.');
    };
  } else if (!isNaN(nota)) {
    alert('Número erróneo. Ingrese un número entre 0 y 10.');
  } else {
    alert('Introduce un número válido.');
  };
};

function resultadoEj3() {
  let texto = '';
  let cadena = '';
  while (confirm('Ingrese texto o pulse "Cancelar".') == true) {
    texto = prompt();
    cadena += '-' + texto;
  };
  document.getElementById("resultado3").innerHTML = `La cadena resultante es: ${cadena}`;
};

function resultadoEj4() {
  let num = 0;
  let suma = 0;
  while (confirm('Ingrese números o pulse "Cancelar".') == true) {
    num = parseInt(prompt());
    if (!isNaN(num)) {
      suma += num;
    } else {
      alert('Por favor ingrese sólo números.')
    }
  };
  document.getElementById("resultado4").innerHTML = `La suma de los números ingresados es: ${suma}`;
};

function resultadoEj5() {
  let numeroDni;
  let letraDni;
  let valor;
  const div = 23;
  const maxNum = 99999999;
  const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  while (confirm('Ingrese un número de documento (DNI) o haga click en "Cancelar" para salir.') == true) {
    numeroDni = parseInt(prompt('DNI - entre 0 y 99.999.999'));
    if (numeroDni >= 0 && numeroDni <= maxNum && !isNaN(numeroDni)) {
      valor = numeroDni % div;
      letraDni = letra[valor];
    } else {
      alert('Ingrese un número válido.');
    };
  };
  document.getElementById("resultado5").innerHTML = `La letra correspondiente al número ${numeroDni} es ${letraDni}`;
};

function resultadoEj6() {
  const num = 30;
  let resultado = '';
  for (let i = 1; i <= num; i++) {
    for (let y = 1; y <= i; y++) {
      resultado += [i];
    };
    resultado += '\n';
  };
  document.getElementById('resultado6').innerHTML = `${resultado}`;
};

function resultadoEj7() {
  let num = parseInt(prompt('Ingrese un número - máximo 50.'));
  let resultado = '';
  if (num <= 50) {
    for (let i = num; i > 0; i--) {
      for (let y = 1; y <= i; y++) {
        resultado += [i];
      };
      resultado += '\n';
    };
    document.getElementById('resultado7').innerHTML = `${resultado}`;    
  } else {
    alert('Ingrese un número no mayor a 50.');
  };
};

function resultadoEj8() {
  let num = parseInt(prompt('Ingrese un número - máximo 50.'));
  let resultado = '';
  if (num <= 50) {
    for (let i = 1; i <= num; i++) {
      for (let y = 1; y <= i; y++) {
        resultado += [y];
      };
      resultado += '\n';
    };
    document.getElementById('resultado8').innerHTML = `${resultado}`;
  } else {
    alert('Ingrese un número no mayor a 50.');
  }
};

function resultadoEj9() {
  let limite = 500;
  let resultado = '';
  for (let i = 1; i <= limite; i++) {
    if (i % 4 == 0) {
      resultado += i+' (Multiplo de 4)';
    } else if (i % 9 == 0) {
      resultado += i+' (Multiplo de 9)';
    } else if (i % 5 == 0) {
      resultado += i + '\n-------------------';
    } else {
      resultado += i;
    };
    resultado += '\n';
  };
  document.getElementById('resultado9').innerHTML = `${resultado}`;
};

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7x5 los números irán del 35 al 1.

const resultadoEj10 = function () {
  let filas = parseInt(prompt('Ingrese un número para filas.'));
  let columnas = parseInt(prompt('Ahora, ingrese un número para columnas.'));
  let numTotal = filas * columnas;
  let resultado;
  resultado = '<table class="table table-bordered text-center">';
  for (let i = 0; i < filas; i++) {
    resultado += `<tr>`;
    for (let j = 0; j < columnas; j++) {
      resultado += `<td>${numTotal}</td>`;
      numTotal--;
    };
    resultado += '</tr>';
  };
  resultado += '</table>';
  document.getElementById('resultado10').innerHTML = resultado;
};