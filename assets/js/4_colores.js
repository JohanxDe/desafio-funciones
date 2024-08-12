function colores(event) {
    event.target.style.backgroundColor = 'black';
}
const divUno = document.getElementById("divUno");
const divDos = document.getElementById("divDos");
const divTres = document.getElementById("divTres");
const divCuatro = document.getElementById("divCuatro");

divUno.addEventListener("click", colores);
divDos.addEventListener("click", colores);
divTres.addEventListener("click", colores);
divCuatro.addEventListener("click", colores);