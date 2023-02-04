// Calculadora de Ale Busi
const calculadora = () => {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const op = document.getElementById('operador').value;
  let resultado;

  if (op === '+') {
    resultado = n1 + n2;
  } else if (op === '-'){
    resultado = n1 - n2;
  } else if (op === '*') {
    resultado = n1 * n2;
  } else if (op === '/') {
    resultado = n1 / n2;
  } else {
    const res = document.getElementById('resultado');
    res.className = 'text-danger';
    res.innerHTML = 'No se ha seleccionado la operación.';
    return;
  };
  const res = document.getElementById('resultado');
  res.classList.remove('text-danger');
  res.classList.add('text-info', 'text-center');
  document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
};



// Calculadora Modelo Avanzado de Ale Busi
let op;

const opResult = (newOp) => {
  op = newOp;
};

document.getElementById('+').addEventListener('click', () => opResult('+'));
document.getElementById('-').addEventListener('click', () => opResult('-'));
document.getElementById('*').addEventListener('click', () => opResult('*'));
document.getElementById('/').addEventListener('click', () => opResult('/'));

const calcular2 = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultado;
  if (op === '+') {
    resultado = num1 + num2;
  } else if (op === '-'){
    resultado = num1 - num2;
  } else if (op === '*') {
    resultado = num1 * num2;
  } else if (op === '/') {
    resultado = num1 / num2;
  } else {
    const res = document.getElementById('resultado');
    res.className = 'text-danger';
    res.innerHTML = 'No se ha seleccionado la operación.';
    return;
  };
  const res = document.getElementById('resultado2');
  res.classList.remove('text-danger');
  res.classList.add('text-info', 'text-center');
  document.getElementById('resultado2').innerHTML = `Resultado: ${resultado}`;
  setTimeout(() => {document.getElementById('calcular').removeEventListener('click', calcular2);
  console.log('Stop')}, 10000);
};

document.getElementById('calcular').addEventListener('click', calcular2);



// JSON

//Objetos notación literal pero de JSON
const userJson = JSON.stringify({
  name: 'Ale',
  lastName: 'Busi'
});

console.log(userJson);
let userNoJson = JSON.parse(userJson);
console.log(userNoJson);



// localStorage   (almacenamiento de manera local)
// Escribir en el localStorage
const naame = 'Ale';
if (localStorage) {
  localStorage.setItem('Persona', naame);
  localStorage.setItem('Persona2', 'Ivan');
  localStorage.setItem('Persona3', userJson);
} else {
  console.log('No local!');
};


// obtener localstorage
console.log(JSON.parse(localStorage.getItem('Persona3')));

// vaciar localStorage
//localStorage.clear();

// eliminar una key específica
localStorage.removeItem('Persona');

// obtener length
console.log(localStorage.length);