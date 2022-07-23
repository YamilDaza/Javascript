/* Crea un nuevo proyecto de Node
- Instala la dependencia Winston
- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch */

function comprobar (valor) {
    if(typeof valor === 'string'){
        return valor.toUpperCase();
    }else{
        throw new Error(`El valor pasado es de tipo ${typeof valor}, y tiene que ser de tipo STRING`);  
    }
}

const text = 'Hi, My name is Yamil, I am Developer'

try {
    const c = comprobar(text); //Probar como parametros cualquier tipo de dato para ir viendo el flujo del programa
    console.log(c)
    console.log('Se ejecuto de manera correcta');
} catch (error) {
    console.log('Ups, ocurrio el siguiente error:')
    console.log(error);
}



