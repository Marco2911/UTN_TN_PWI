//Número secreto
let numero_secreto = 7


//Pido un número
let numero_usuario = parseInt(prompt("Adivina un número del 1 al 10"))
console.log (numero_usuario, typeof numero_usuario)


//Si es igual
if (numero_secreto === numero_usuario){
    alert("Felicitaciones, adivinaste correctamente!!");
}

//Si es mayor
else if (numero_secreto < numero_usuario){
    alert("Te pasaste");
}

//Si es menor
else {
    alert("Un poquito mas...");
}