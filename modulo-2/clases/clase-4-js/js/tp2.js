const age = parseInt(prompt('Ingresá tu edad.'));
if (!isNaN(age)) {
  if (age >= 18) {
    alert('Podes pasar.');
  } else {
    alert('No pasan menores de 18 años.');
  }
} else {
  alert('No te hagas el bobina, ingresá tu edad.');
};