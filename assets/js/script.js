
// se crea funcion que reciba como parametro verde
function pintar(color = 'green') {
    ele.style.backgroundColor = color;
}
// Seleccionamos elementos "ele1"
const ele = document.getElementById("ele1");

// Añade un event listener para manejar el elemento
ele.addEventListener("click", function() {
    // Llama a la función pintar pasando "yellow" como color si no tiene argumento tomara el color del parametro
    pintar('yellow');
});



