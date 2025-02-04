// app.js
let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim(); // Obtener el valor y eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    amigos.push(nombre); // Agregar el nombre al array
    nombreInput.value = ""; // Limpiar el campo de entrada

    // Actualizar la lista en el HTML
    actualizarListaAmigos();
}


function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // 1. Obtener el elemento de la lista
    lista.innerHTML = ""; // 2. Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) { // 3. Iterar sobre el arreglo
        const amigo = amigos[i];
        const nuevoLi = document.createElement("li"); // 4. Crear nuevo elemento de lista
        nuevoLi.textContent = amigo; // Asignar el nombre del amigo al elemento <li>
        lista.appendChild(nuevoLi); // Agregar el elemento <li> a la lista <ul>
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. ¡Añade amigos primero!");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;
}