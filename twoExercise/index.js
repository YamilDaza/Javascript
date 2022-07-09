/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/

const information = {
    name:"Yamil",
    age:23,
    developer:true,
    birth: new Date("1998/10/10 23:10:14"),
    book:{
        title:"Eloquent JavaScript",
        author:"Marjin Haverbeke",
        date: new Date(2018,11,05),
        url:"https://eloquentjavascript.net/",
    },
}
console.log(information.book.date); //Accedemos al objeto principal, dentro de eso accedemos al objeto book y mostramos el atributo date.