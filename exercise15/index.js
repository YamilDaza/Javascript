/* Crea un nuevo proyecto de Node - LISTO
- Crea un fichero index.html (utiliza el comando "!") - LISTO
- Crea un fichero index.js - LISTO
- Integra el fichero index.js en el html - LISTO
- En el fichero index.js: -
- Crea una variable con tu nombre -
- Crea una variable con tu apellido -
- Crea un objeto con tu nombre y tu apellido - LISTO X4
- Almacena el objeto anterior en la SessionStorage - LISTO
- Almacena el objeto anterior en la LocalStorage - LISTO
- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior - LISTO
- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
- Observa cómo la SessionStorage está vacía
- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado */


const names = 'Yamil';
const lastName = 'Daza';
const people = {
    names,
    lastName,
};
console.log(people);

//Almacenamos el objeto PEOPLE en el sessionStorage como un string, con el metodo JSON.stringify();
sessionStorage.setItem('People',JSON.stringify(people));
//Convertir el string de la instruccion anterior a su tipo de dato original con el JSON.parse();
const getPeople = JSON.parse(sessionStorage.getItem('People'));
console.log('Session Storage -> ' , getPeople);

//Almacenamos el objeto PEOPLE en el localStorage como un string, con el metodo JSON.stringify();
localStorage.setItem('People',JSON.stringify(people));
//Convertir el string de la instruccion anterior a su tipo de dato original con el JSON.parse();
const getPeopleTwo = JSON.parse(localStorage.getItem('People'));
console.log('Local Storage -> ' , getPeopleTwo);

//Crear cookie que caduce en un tiempo determinado

Document.cookie = `PeopleCookie:  ${JSON.stringify(people)}; expires = ${new Date('August 06, 2022, 11:30:15').toUTCString}`;
console.log(Document.cookie)











