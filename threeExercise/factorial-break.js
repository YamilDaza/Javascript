//Calcular el factorial(n!) del numero 10 con la estructura while,bifurcacion if y sentencia break:
let factorial = 0;
let productoFactorial = 0;
const obtenerFactorial = (fac) => {
    if(fac > 0){
        let i = fac - 1;
        bucleFactorial: while(i >= 1){
            fac = fac * i;
            if(i === 0){
                break bucleFactorial;
            }
            i--;
        }
        return fac;
    }else{
        return console.log('Ingresa un valor mayor a 0');
    }
};

factorial > 0 ? console.log(`El factorial de "${factorial}" es -> ${obtenerFactorial(factorial)}`) : obtenerFactorial();