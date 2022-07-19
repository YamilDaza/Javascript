/* Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */

//Fecha de hoy
const today = new Date();
console.log(today);

//Fecha del nacimiento
const birth = new Date('October 11, 1998');
console.log(birth);

let cumple;
today > birth ? cumple=true : cumple=false;
console.log(cumple);

const day = birth.getDate();
const month = birth.getMonth();
const year = birth.getFullYear();
console.info(`
    Dia: ${day}
    Mes: ${month +1}
    Anio: ${year}
`)


