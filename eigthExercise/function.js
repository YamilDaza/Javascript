/* Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos */

//Arrow function con retorno implicito de valor true. 
const cumple = () => true;

//Funcion asincronica con promise y setTimeout().
function saludo(){
    return setTimeout(() => {
        console.log('Hola soy una promesa')
    },3000)
}
const miPromesa = new Promise((resolve,reject) => {
    if(true){
        resolve(saludo());
    }else{
        reject();
    }
});
miPromesa
    .then((res) => res)

//Funcion generadora
function* generadora(){
    let indice = 2;
    while(true){
        indice += 2;
        if(indice === 10){
            return indice
        }
        yield indice;
    }
}
const gen = generadora();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);




