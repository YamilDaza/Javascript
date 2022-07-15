/* ENUNCIADO DEL EJERCICIO: 
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */

const listShopping = [
    { buy:'Zapatillas', price: 22.000},
    { buy:'Camisa', price: 7.000},
    { buy:'Pantalon', price: 5.000},
    { buy:'Medias', price: 1.000},
    { buy:'Traje', price: 25.000},
];

//Agregamos un nuevo objeto(item del array) con el metodo .push();
listShopping.push({buy:'Aceite de girasol', price:500});

//Eliminamos ultimo dato agregado del array y podemos acceder a ese dato o valor eliminado en la constante removeItem
const removeItem = listShopping.pop();
// console.log(removeItem);

// console.log(listShopping);

const movies = [
    {title:'NVI Santa Biblia', director:'Charles C. Ryrie', date:1973},
    {title:'Eloquent Javascript', director:'Marjin Haverbeke', date:2018},
    {title:'Fundamentos Programacion', director:'Joyanes Aguilar', date:2020},
];
// Lista filtrada con año de publicacion superior a 2010... -> 
const moviesFilter = movies.filter( item => item.date > 2010);
// console.log(moviesFilter);

//Lista mapeada con los nombres de los directores de cada pelicula
const moviesMap = movies.map((item,index) => `${index +1}-DIRECTOR: ${item.director}`);
// console.log(moviesMap);

//Lista mapeada con los nombres de los titulos de cada pelicula
const moviesMap2 = movies.map((item,index) => `${index +1}-TITLE: ${item.title}`);
// console.log(moviesMap2)

// Lista concatenada de directores(moviesMap) con titulos(moviesMap2) de las peliculas, utilizando concat().
const moviesConcat = moviesMap.concat(moviesMap2);
// console.log(moviesConcat);

//Lista concatenada de directores(moviesMap) con titulos(moviesMap2) de las peliculas, utilizando propagacion.
const moviesProg = [...moviesMap, ...moviesMap2];
console.log(moviesProg);










