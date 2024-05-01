//Utiliza el array para crear dinamicamente una lista ul > li
//de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
// Array con los nombres de los lugares
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Selecciona el div donde se insertará la lista
const divPrintHere = document.querySelector('div[data-function="printHere"]');

// Crea un elemento ul
const listaUl = document.createElement('ul');

// Itera sobre el array de lugares y crea un elemento li para cada uno
places.forEach(place => {
  // Crea un nuevo elemento li
  const listItem = document.createElement('li');
  // Establece el texto del li como el nombre del lugar actual
  listItem.textContent = place;
  // Agrega el li a la lista ul
  listaUl.appendChild(listItem);
});

// Inserta la lista dentro del div printHere
divPrintHere.appendChild(listaUl);
