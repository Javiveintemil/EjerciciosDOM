//Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

const elementoEliminar = document.querySelector('.fn-remove-me');

// Verificamos si se encontró el elemento
if (elementoEliminar) {
  // Elimina el elemento si se encontró
  elementoEliminar.remove();
}

else {
  console.log('No se encontró ningún elemento con la clase .fn-remove-me.');
}
