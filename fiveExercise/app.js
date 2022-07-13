/* ENUNCIADO DEL EJERCICIO: 
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript */

let height = 17900;
let heightTwo = 1.79;
let weight = 700.500;
let heightThree = heightTwo.toFixed(1);
let weightTwo = Math.floor(weight);

let cumple; //si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript TIPO BOOLEAN
if(Number.MAX_VALUE + 1 === Number.MAX_VALUE){
    cumple = true;
}















