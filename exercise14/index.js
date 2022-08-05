/* Crea un nuevo proyecto de Node
- Instala la dependencia HTTP Server en entorno global (https://www.npmjs.com/package/http-server)
- Crea un fichero index.html (utiliza el comando "!")
- Crea un fichero index.js
- Integra el fichero index.js en el html
- Crea un botón en html (<button>Botón</button>)
- Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"
- Crea un script para lanzar un servidor de desarrollo con http-server
- Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente
- Integra jQuery a través del CDN (https://releases.jquery.com/)
- En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery" */

/* const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    alert('Click en el boton');
    console.log('Diste click al boton de enviar')
}); */

//Comprobramos que tenemos vinculado JQUERY en nuestro proyecto y que funciona
$('h1').mouseenter((item) => {
    item.target.style.color = 'red';
})
$('h1').mouseleave((item) => {
    item.target.style.color = 'black';
})

$('#btn').click(() => {
    console.log('Hola Estoy usando JQuery')
})



