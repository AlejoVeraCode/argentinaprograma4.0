// cuando la pagina se termina de cargar
window.addEventListener ( 'DOMContentLoaded' , () => {


// Mostrar, ocultar menu de mas experiencia


const buttons = document.querySelectorAll('.ver-mas-btn');
const textElements = document.querySelectorAll('.textoOculto');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('mostrarTexto');
  });
});


// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
})
