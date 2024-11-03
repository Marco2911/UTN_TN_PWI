const textHiddenHTML = document.getElementById('text-hidden');
const btnMostrarHTML = document.getElementById('btn-mostrar');

function toggleText() {
    let estaOculto = textHiddenHTML.classList.contains('hidden')
    btnMostrarHTML.innerText = estaOculto ? 'Ver menos' : 'Ver más' /* btnMostrarHTML.textContent = textHiddenHTML.classList.contains('hidden') ? 'Ver mas' : 'Ver menos'; */
    textHiddenHTML.classList.toggle('hidden');
}

btnMostrarHTML.addEventListener('click', toggleText)
