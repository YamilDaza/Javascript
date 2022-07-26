/* ENUNCIADO - EJERCICIO:
Crea un nuevo proyecto de Node
- Configura el proyecto para utilizar los módulos de ES6
- Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
- En el entrypoint index.js, importa el módulo controller.js
- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde */


//Importaciones de arrow function - suma, multiplicacion:
import { suma, multiplica } from './controller.js';
import chalk from 'chalk';

const resulOne = suma(1,2);
const resulTwo = suma(4,5);
const resulMultiplicacion = multiplica(resulOne,resulTwo);
console.log(resulMultiplicacion);

//libreria chalk:
const green = chalk.green;

const blue = chalk.blue;
const yellow = chalk.yellow;
const magenta = chalk.magenta;
const red = chalk.red;

console.log(green(resulMultiplicacion));
console.log(`LIBRERIA: ${yellow('C')} ${magenta('H')} ${blue('A')} ${red('L')} ${green('K')}`)





