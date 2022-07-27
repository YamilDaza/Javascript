/* ENUNCIADO:
Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función */

function numero(num){
    const listaFibonnaci = [1,1];
    let operacion = 0;
    for(let i=2; i < num; i ++){
        operacion = listaFibonnaci[i -1] + listaFibonnaci[i-2];
        listaFibonnaci.push(operacion);
    };
    return listaFibonnaci;
}

const lista = numero(6);
console.log(lista);


