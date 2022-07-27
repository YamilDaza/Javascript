/* Enunciado -> Practica de POO:
Crea un nuevo fichero JS que contenga las siguientes líneas
- Una clase llamada "Estudiante" que tenga:
- Una variable llamada nombre
- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
- Crea una nueva instancia de "Estudiante"
- Haz la llamada al método obtenDatos */

console.log('Practica POO:');

//Clase de estudiante - student
class Student {
    constructor(name, course){
        this.name = name;
        this.course = course;
    };

    //Metodo Saludo
    greeting(){
        console.log(`Hi, my name is ${this.name}, and I am developer [${this.course}]`);
    }

    //Metodo Obtener Data
    getData(){
        return{
            name: this.name,
            course: this.course,
        }
    }
};

class NewStudent extends Student {
    constructor(name,course,country){
        super(name,course);
        this.country = country;
    }

    greeting(){
        super.greeting();
        console.log(`I am from ${this.country}`);
    }
}

const peopleOne = new Student('Yamil',['JavaScript','HTML','CSS']);
// console.log(peopleOne);
console.log(peopleOne.getData());
// console.log(peopleOne.greeting());

const newPeople = new NewStudent('Yamil',['JavaScript','HTML','CSS'],'Buenos Aires');
console.log(newPeople.greeting());
















