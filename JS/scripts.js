// querySelector
// Arroja 0 o 1 elementos
const heading = document.querySelector(".header__texto h2"); 
heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].classList.add("nueva-clase");
enlaces[0].classList.remove("nueva-clase");

//getElementById
const heading2 = document.getElementById("heading");

//Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");
//Agregar el href
nuevoEnlace.href = "nuevo-enlace";
//Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual"
//Agregar el clase
nuevoEnlace.classList.add("navegacion__enlace");
//Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

//Eventos
window.addEventListener("load", function() { //load espera a que todos los archivos cargen
    console.log(1);
});

window.onload = function() { //Es lo mismo qur load
    console.log (2);
}

document.addEventListener("DOMContentLoaded", function() { //Solo espera a que el HTML cargue
    console.log(3)
})

window.onscroll = function() {
    console.log("scrolling...");
}

//Seleccionar elementos y asociarles eventos
// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(evento) {
    // evento.preventDefault();
    // console.log("enviando formulario...")
// });

//Eventos de los Inputs y Textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

//Evento de submit
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    // Validar el formulario
    const { nombre, email, mensaje } = datos;
    if (nombre == '' || email == '' || mensaje == '') {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return; //Corta la ejecución del código
    }
    mostrarAlerta("Mensaje enviado correctamente")
})

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("alerta")
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}