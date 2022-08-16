//Obtenemos todos los elementos con la clase parrafo de nuestro HTML
const parrafo = document.querySelectorAll('.parrafo');

// Obtenemos todos los elementos con la clase section de nuestro HTML
const seccion = document.querySelectorAll('section');

// Por cada parrafo le asignamos un evento, utilizando el metodo forEach
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

// Por cada seccion de nuestro HTML le vamos asignar algun evento, utilizando forEach
seccion.forEach((s) => {
    s.addEventListener('dragover',(e) => {
        e.preventDefault();
        console.log('DRAGOVER');
        // Icono que nos aparece por debajo del cursos, cancelado
        e.dataTransfer.dropEffect = 'none';
    });

    s.addEventListener('drop',(e) => {
        console.log('DROP');
        console.log(e.dataTransfer);
    });
}); 





//OPCION PROFESOR

/* const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy por defecto
        // console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
}) */

