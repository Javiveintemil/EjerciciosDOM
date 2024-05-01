//1.1 Inserta dinamicamente en un html un div vacio con javascript.

const elementosAInsertar = document.querySelectorAll('.fn-insert-here');

elementosAInsertar.forEach(elemento => {
  const nuevoDiv = document.createElement('div');

  elemento.appendChild(nuevoDiv);
});

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const elementosAInsertar2 = document.querySelectorAll('.fn-insert-here');

elementosAInsertar2.forEach(elemento => {
  const nuevoDiv = document.createElement('div');
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = 'Soy un párrafo dentro de un div!';
  nuevoDiv.appendChild(nuevoParrafo);
  elemento.appendChild(nuevoDiv);
});

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//  loop con javascript.

const elementosAInsertar3 = document.querySelectorAll('.fn-insert-here');

elementosAInsertar2.forEach(elemento => {
  const nuevoDiv = document.createElement('div');
  for (let i = 0; i < 6; i++) {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Párrafo ${i+1}';
    nuevoDiv.appendChild(nuevoParrafo);
  }

  elemento.appendChild(nuevoDiv);
});

//1.4 Inserta dinamicamente con javascript en un html una p con el texto
// 'Soy dinámico!'.

const container = document.querySelectorAll('.fn-insert-here');
const nuevoParrafo = document.createElement('p');

nuevoParrafo.textContent = 'Soy dinámico';
container.appendChild(nuevoParrafo);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2InsertHere = document.querySelector('h2.fn-insert-here');
h2InsertHere.textContent = 'Wubba Lubba dub dub';

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');
apps.forEach(app => {
  const listItem = document.createElement('li');
  listItem.textContent = app;
  lista.appendChild(listItem);
});

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementosAEliminar = document.querySelectorAll('.fn-remove-me');
elementosAEliminar.forEach(elemento => {
  elemento.parentNode.removeChild(elemento);
});

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//  Recuerda que no solo puedes insertar elementos con .appendChild.

const segundoDiv = document.getElementById('segundoDiv');
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Voy en medio!';
segundoDiv.parentNode.insertBefore(nuevoParrafo, segundoDiv);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//  .fn-insert-here*/

const divAInsertar = document.querySelectorAll('div.fn-insert-here');
divAInsertar.forEach(elemento => {
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = 'Voy dentro!';
  nuevoParrafo.appendChild(parrafoAInsertar);
});


