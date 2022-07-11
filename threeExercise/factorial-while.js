//Calcular el factorial(n!) del numero 10 con la estructura while:
let factorial = 10;
const obtenerFactorial = (fac) => {
    let i = fac - 1;
    while(i >= 1){
        fac = fac * i;
        i--;
    }
    return fac;
};
factorial > 0 ? console.log(`El factorial de "${factorial}" es -> ${obtenerFactorial(factorial)}`) : console.log('Ingresa un numero mayor a 0');