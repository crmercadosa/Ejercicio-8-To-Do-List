const agregarBtn = document.getElementById("agregar");
const contenedor = document.querySelector(".contenedor");

agregarBtn.addEventListener("click", agregarTarea);

function agregarTarea(evento) {
    //CREAR LOS ELEMENTOS
    const nuevaTarea = document.createElement("div");
    nuevaTarea.className = "tarea";

    const inputTarea = document.createElement("input");
    inputTarea.type = "text";
    inputTarea.placeholder = "Escribe la tarea a realizar";

    const checkBtn = document.createElement("button");
    checkBtn.className = "cbe";
    checkBtn.innerHTML = "&#10004;";

    const editarBtn = document.createElement("button");
    editarBtn.className = "cbe";
    editarBtn.innerHTML = "&#9998;";

    const borrarBtn = document.createElement("button");
    borrarBtn.className = "cbe";
    borrarBtn.innerHTML = "&#10006;";

    //AGREGAR BOTONES
    nuevaTarea.appendChild(inputTarea);
    nuevaTarea.appendChild(checkBtn);
    nuevaTarea.appendChild(editarBtn);
    nuevaTarea.appendChild(borrarBtn);
    contenedor.insertBefore(nuevaTarea, agregarBtn.parentNode);

    //FUNCIONES BOTONES
    checkBtn.addEventListener("click", function() {
        tareaCumplida(inputTarea, checkBtn);
    });
    editarBtn.addEventListener("click", function() {
        editarTarea(inputTarea);
    });

    inputTarea.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            inputTarea.blur();
        }
    });

    borrarBtn.addEventListener("click", function() {
        borrarTarea(nuevaTarea);
    });
}

function tareaCumplida(inputTarea, checkBtn) {
    inputTarea.classList.toggle("cumplida");
    if (inputTarea.classList.contains("cumplida")) {
        checkBtn.innerHTML = "&#8635;";
    } else {
        checkBtn.innerHTML = "&#10004;";
    }
}

function editarTarea(inputTarea) {
    inputTarea.focus();
}

function borrarTarea(nuevaTarea) {
    nuevaTarea.remove();
}