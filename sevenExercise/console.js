/* - Abre una nueva ventana "about:blank" en Google Chrome
- Abre la consola de desarrollador de Google Chrome (F12)
- Pregunta al usuario cuál es su edad y almacénala en una variable llamada edad */

//Preguntamos la edad al usuario y mediante una entrada(teclado por defecto) se almacena en la variable ageUser
let ageUser = prompt('hello, what is your age?');
//operador ternario, adicional..
ageUser > 18 ? console.log('Eres mayor de Edad') : console.log('No eres mayor de edad');
console.log(ageUser);