/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const btnToClick = document.getElementById('btnToClick');

btnToClick.addEventListener('click', function (event) {
  console.log('Información del evento click:', event);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputField = document.getElementsById('inputField');
inputField.addEventListener('focus', function (event) {
  const valorInput = event.target.value;
  console.log('Valor del input', valorInput);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

// Selecciona el input por su ID
const inputField = document.getElementById('inputField');

// Añade un evento input al input
inputField.addEventListener('input', function (event) {
  // Obtiene el valor actual del input
  const valorInput = event.target.value;
  // Muestra el valor del input en la consola
  console.log('Valor del input:', valorInput);
});
