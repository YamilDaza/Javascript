/*ENUNCIADO:
Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre 
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/

let namer = '  Yamil';
let lastName = 'Daza  ';
let student = namer.concat(' ',lastName);

let studentCapital = student.toUpperCase();
let studentLower = student.toLocaleLowerCase();

let textLength = student.length;

//1ra opcion para obtener el primer caracter y ultimo de un texto:
let first = namer.slice(0,1);
let second = lastName.slice(lastName.length - 1, lastName.length); //podriamos crear una variable auxiliar donde almacene la longitud de la variable lastName y quede -> lastName.slice(aux -1,aux);

//2da opcion para obtener el primer caracter y ultimo de un texto:
let firstTwo = namer.charAt(0);
let secondTwo = lastName.charAt(lastName.length -1);//podriamos crear una variable auxiliar donde almacene la longitud de la variable lastName y quede -> lastName.charAt(aux -1,aux);

let removeSpaces = student.trim();
let isName = student.includes(namer);
console.log(isName);









