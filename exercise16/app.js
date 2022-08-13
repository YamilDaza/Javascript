//Obtenemos todos los elementos con la clase parrafo de nuestro HTML
const parrafo = document.querySelectorAll('.parrafo');

//Obtenemos todos los elementos con la clase section de nuestro HTML
const seccion = document.querySelectorAll('section');

//Por cada parrafo le asignamos un evento, utilizando el metodo forEach
parrafo.forEach((p) => {
    p.addEventListener('dragstart', (e) => {
        const contentParrafo = e.target.textContent
        console.log(`- Iniciando... Arrastrando al parrafo: ${contentParrafo}`)
        p.classList.add('dragging');
    });

    p.addEventListener('dragend', (e) => {
        const contentParrafo = e.target.textContent
        console.log(`- Finalizando... parrafo: ${contentParrafo}`)
        p.classList.remove('dragging');
        p.classList.add('visibility');
    });
});

//Por cada seccion de nuestro HTML le vamos asignar algun evento, utilizando forEach
seccion.forEach((s) => {
    s.addEventListener('dragover',(e) => {
        e.preventDefault();
        console.log('DRAGOVER');
        //Icono que nos aparece por debajo del cursos, cancelado
        // e.dataTransfer.dropEffect = 'none';
    });

    s.addEventListener('drop',(e) => {
        console.log('DROP');
        console.log(e.dataTransfer);
    });
});




