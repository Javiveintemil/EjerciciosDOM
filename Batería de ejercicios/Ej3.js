//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.

const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const listaPaises = document.getElementById('lista-paises');
paises.forEach(pais => {
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = pais;
  listaPaises.appendChild(nuevoItem);
});

//1.2 Elimina el elemento que tenga la clase.fn - remove - me.

const elementosAEliminar = document.querySelectorAll('.fn-remove-me');
elementosAEliminar.forEach(elemento => {
  elemento.parentNode.removeChild(elemento);
});

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data - function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrintHere = document.querySelector('div[data-function="printHere"]');
const lista = document.createElement('ul');
cars.forEach(car => {
  const listItem = document.createElement('li');
  listItem.textContent = car;
  lista.appendChild(listItem);
});
divPrintHere.appendChild(lista);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const contenedor = document.getElementById('contenedor');

countries.forEach(country => {
  const nuevoDiv = document.createElement('div');
  const titulo = document.createElement('h4');
  titulo.textContent = country.title;
  const imagen = document.createElement('img');
  imagen.src = country.imgUrl;
  imagen.alt = country.title;

  nuevoDiv.appendChild(titulo);
  nuevoDiv.appendChild(imagen);
  contenedor.appendChild(nuevoDiv);

});

/*1.5 Basandote en el ejercicio anterior.Crea un botón que elimine el último 
elemento de la serie de divs.*/

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const contenedor = document.getElementById('contenedor');

countries.forEach(country => {
  const nuevoDiv = document.createElement('div');
  const titulo = document.createElement('h4');
  titulo.textContent = country.title;
  const imagen = document.createElement('img');
  imagen.src = country.imgUrl;
  imagen.alt = country.title;

  nuevoDiv.appendChild(titulo);
  nuevoDiv.appendChild(imagen);
  contenedor.appendChild(nuevoDiv);

});

const botonEliminarUltimo = document.getElementById('eliminarUltimo');

botonEliminarUltimo.addEventListener('click', function () {
  const divs = contenedor.querySelectorAll('div');
  const ultimoDiv = divs[divs.length - 1];
  if (ultimoDiv) {
    contenedor.removeChild(ultimoDiv);
  }
  else {
    console.log('No hay más elementos para eliminar.');
  }
});

/*1.6 Basandote en el ejercicio anterior.Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const contenedor = document.getElementById('contenedor');

function crearDiv(country) {
  const nuevoDiv = document.createElement('div');
  const titulo = document.createElement('h4');
  titulo.textContent = country.title;
  const imagen = document.createElement('img');
  imagen.src = country.imgUrl;
  imagen.alt = country.title;
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';

  botonEliminar.addEventListener('click', function () {
    contenedor.removeChild(nuevoDiv);
  });
  nuevoDiv.appendChild(titulo);
  nuevoDiv.appendChild(imagen);
  nuevoDiv.appendChild(botonEliminar);
  return nuevoDiv;
}

countries.forEach(country => {
  const nuevoDiv = crearDiv(country);
  contenedor.appendChild(nuevoDiv);
});
