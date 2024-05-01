//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
// Selecciona la lista ul donde se insertarán los álbumes
const listaAlbums = document.getElementById('listaAlbums');
// Itera sobre el array de álbumes y crea dinámicamente un elemento li para cada uno
albums.forEach(album => {
  // Crea un nuevo elemento li
  const listItem = document.createElement('li');
  // Establece el texto del li como el nombre del álbum actual
  listItem.textContent = album;
  // Agrega el li a la lista ul
  listaAlbums.appendChild(listItem);
});