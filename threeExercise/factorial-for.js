//Calcular el factorial del numero 10 , Factorial de un numero positivo es el producto de todos los numeros naturales anteriores o iguales a el.
let factorial = 10; //en esta variable vamos a indicar de que numero queremos sacar el factorial.
const obtenerFactorial = (fac) => {
    if(fac > 0){
        for (let i = fac -1; i >= 1; i--){
            fac = fac * i;
            //console.log(i,' ',fac); para seguir el paso a paso de las variables i y fac
        };
        return fac;
    }
}
factorial > 0 ? console.log(`El factorial del nro ${factorial} es ${obtenerFactorial(factorial)}`) : console.log('Ingresa un numero mayor a 0');