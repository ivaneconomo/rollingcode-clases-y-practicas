// var msg = 'Hello Com';
// let msg2 = 'Hello Com';
// const msg3 = 'Hello Com';

// console.log(msg);
// console.warn(msg2);
// console.error(msg3);

// console.group('Grupo de valores a mostrar')
// console.log(msg);
// console.log(msg2);
// console.log(msg3);
// console.groupEnd();

// //-----------------------------------------------------

// let user1 = 'Ivan';
// let user2 = 'Ale';
// let user3 = 'Mauro';

let alumnos = ['Ivan', 'Matias', 'Mauro', 'Marcos', 'Rocio'];
let numbers = [101, 200, 300];
console.log(alumnos);

// console.log(alumnos[alumnos.length -1 ]);

// for (let i = 0; i < alumnos.length; i++) {
//   if (typeof(alumnos[i]) == 'number') {
//     alert(`Se encontró un número ${alumnos[i]} en la posición ${i}`)
//   }
// };

// Añadir items a un array (al final).

alumnos.push('Rolling', 'Code');
console.log(alumnos);

// Eliminar el último elemento de un Array.

alumnos.pop();
console.log(alumnos);

// Añadir elemento al comienzo del Array.

alumnos.unshift('Lenovo');
console.log(alumnos);

// Eliminar el primer elemento de un Array-

alumnos.shift();
console.log(alumnos);

// Encontrar el índice de un alumno usando su nombre.

console.log(alumnos.indexOf('Matiaas'));

// const indexOfStudent = alumnos.indexOf('Rocio');
// if (indexOfStudent != -1) {
//   alert(`Se encontró un a ${alumnos[indexOfStudent]} en la posición ${indexOfStudent}`);
// } else {
//   alert('No se encontraron coincidencias.')
// }

// Eliminar un elemento en particular con su posición.

// console.log(alumnos);
// const indexOfStudent = alumnos.indexOf('Rocio');
// if (indexOfStudent != -1) {
//   alert(`Se encontró un a ${alumnos[indexOfStudent]} en la posición ${indexOfStudent} y se ha eliminado.`);
//   alumnos.splice(indexOfStudent, 1);
//   console.log(alumnos);
// } else {
//   alert('No se encontraron coincidencias.')
// }

// Añadir nuevos elementos al Array con splice.

// alumnos.splice(1,0, 'Mariano', 'Romi');
// console.log(alumnos);

// Concatenar 2 Arrays.

let cars = ['fiat', 'peugeot', 'citroen'];
const newArray = alumnos.concat(numbers, cars);
console.log(newArray);

// Determinar si exsite un alumno x en el Array.

console.log(newArray.includes(101));

// Invertir el orden de un Array.

console.log(newArray.reverse());

// Ordenar items en un Array.

console.log(newArray.sort());

// Extraer cierta parte de un Array. (funciona con string)

let studentName = 'Ivancillo';
const sliceado = studentName.slice(0,4);
console.log(sliceado);