/* Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

const data = {
    name:'Yamil',
    lastName:'Daza',
    age:23,
    height:1.79,
    isDeveloper:true,
};

//Variable myAge -> contiene el valor de mi age obtenida del objeto
const myAge = data.age;
console.log(myAge);

//creacion de 2 objetos
const peopleOne = {
    name:'A',
    lastName:'aaa',
    age:20,
    height:1.65,
    isDeveloper:false,
};
const peopleTwo = {
    name:'B',
    lastName:'bbb',
    age:18,
    height:1.85,
    isDeveloper:false,
};
//una nueva lista con los 3 objetos, mis datos y los 2 supuestos amigos.
const newObj = [{...data},{...peopleOne},{...peopleTwo}];
// console.log(newObj);

//nueva lista ordenada de mayor a menor dependiendo la edad.
const orderObj = newObj.sort((a,b) => b.age - a.age);
console.log(orderObj);







