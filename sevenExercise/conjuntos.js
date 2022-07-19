/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ; */

const family = ['Belen','Yamil','Justina','Marco','Henry','Cristian','Marcos','Jairo'];
const mySet = new Set(family);
mySet.add('Yamil');
mySet.add('JavaScript');
console.log(family);
console.log(mySet);





