//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const botonShowme = document.querySelector(".showme");
console.log(botonShowme);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const Myh1 = document.querySelector("#pillado");
console.log(pillado);

//1.3 Usa querySelector para mostrar por consola todos los p

const parrafos = document.querySelectorAll("p");
parrafos.forEach(parrafo => console.log(parrafo));

//1.4 Usa querySelector para mostrar por consola todos los elementos con
//la clase.pokemon

const TodosLosPokemon = document.querySelectorAll(".pokemon");
TodosLosPokemon.forEach(pokemon => console.log(pokemon));

//1.5 Usa querySelector para mostrar por consola todos los elementos con
//el atributo data-function="testMe".

const elementosTestMe = document.querySelectorAll("[data-function='testMe']");
elementosTestMe.forEach(elemento => console.log(elemento));

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe". SOFT PICH*/

const tercerPersonaje = document.querySelectorAll("[data-function='testMe']")[2];
console.log(tercerPersonaje);