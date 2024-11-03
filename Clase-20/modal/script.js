const btnRegisterHTML = document.getElementById('btn-register')
const modalHTML = document.querySelector('.modal-container')
const btnCloseModalHTML = document.querySelector('.btn-close')

function openModal (){
    modalHTML.classList.remove('hidden')
}
function closeModal (){
    modalHTML.classList.add('hidden')
}


btnRegisterHTML.addEventListener('click', openModal)
btnCloseModalHTML.addEventListener('click', closeModal)