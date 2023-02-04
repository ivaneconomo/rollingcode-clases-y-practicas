let ciudades = [];
while (confirm('Ingrese nombre de ciudades.')) {
  let ciudad = prompt('Ingrese una ciudad');
  ciudades.push(ciudad);
};
document.write(`El array generado es: ${ciudades} <br>`);
document.write(`La longitud del array es: ${ciudades.length}<br>`);
document.write(`La primera posición es: ${ciudades[0]}<br>
                La tercera posición es: ${ciudades[2]}<br>
                La última posición es: ${ciudades[ciudades.length - 1]}<br>`);
ciudades.push('París');
document.write(`Añadimos en última posición la ciudad "París": ${ciudades}<br>`);
document.write(`El elemento en la segunda posición es: ${ciudades[1]}<br>`);
ciudades.splice(1, 1, "Barcelona");
document.write(`Reemplazamos en la segunda posición por "Barcelona": ${ciudades}<br>`);