

let colorSeleccionado = '';

    // Función para cambiar el color según la tecla presionada
    function cambiarColor(event) {
        const keyDiv = document.getElementById("key");

        // Asigna el color correspondiente según la tecla presionada usando if
        if (event.key.toLowerCase() === 'a') {
            colorSeleccionado = 'pink';
        } 
        else if (event.key.toLowerCase() === 's') {
            colorSeleccionado = 'orange';
        } 
        else if (event.key.toLowerCase() === 'd') {
            colorSeleccionado = 'lightblue';
        } 
        else if (event.key.toLowerCase() === 'q'){
            agregarElemento('purple', contenedor);
        }
        else if (event.key.toLowerCase() === 'w'){
            agregarElemento('gray', contenedor);
        }
        else if (event.key.toLowerCase() === 'e'){
            agregarElemento('brown', contenedor);
        }
        else {
            return; // Si no es 'a', 's', o 'd', no hacer nada
        }

        // Cambiar el color del div al color seleccionado
        keyDiv.style.backgroundColor = colorSeleccionado;
    }
    // Escuchar el evento de tecla presionada en todo el documento
    document.addEventListener("keydown", cambiarColor);

function agregarElemento(color, contenedor) {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.getElementById("contenedor");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    //le damos estilos a dos div creados
    nuevoElemento.style.height = '200px'
    nuevoElemento.style.backgroundColor = color
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
    }