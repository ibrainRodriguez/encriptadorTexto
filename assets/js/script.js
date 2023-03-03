// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// variables
const textArea = document.querySelector(".text-area");
const textMensaje = document.querySelector(".textMensaje");
let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
let mensajeNoEncontrado = document.querySelector(".mensajeNoEncontrado");
let parrafoNoMensaje = document.querySelector(".parrafoNoMensaje");
let imagenNoMensaje = document.querySelector(".imagenNoMensaje");
let ocultarBtnCopiar = document.querySelector(".ocultarBtnCopiar");

//botones
let $encriptar = document.getElementById("btnEncriptar");
let $desencriptar = document.getElementById("btnDesencriptar");
let $copiar = document.getElementById("btnCopiar");


// eventos
$encriptar.addEventListener('click', btnEncriptar);
$desencriptar.addEventListener('click', btnDesencriptar);
$copiar.addEventListener('click', btnCopiar);


// funciones
function convertirTextoMinusculas(mensajeEncriptado) {
    return mensajeEncriptado.toLowerCase();
}

function encriptar(mensajeEncriptado) {

    mensajeEncriptado = convertirTextoMinusculas(mensajeEncriptado);

    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (mensajeEncriptado.includes(matrizCodigo[i][0])) {
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return mensajeEncriptado;

}

function desencriptar(mensajeDeserncriptado) {

    mensajeDeserncriptado = convertirTextoMinusculas(mensajeDeserncriptado);

    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (mensajeDeserncriptado.includes(matrizCodigo[i][1])) {
            mensajeDeserncriptado = mensajeDeserncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return mensajeDeserncriptado;
}

function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    if (textEncriptado != "") {
        textArea.value = "";
        mensajeNoEncontrado.style.display = "none";
        parrafoNoMensaje.style.display = "none";
        imagenNoMensaje.style.display = "none";
        textMensaje.style.display = "block";
        ocultarBtnCopiar.style.display = "block";
        textMensaje.value = textEncriptado;
    }
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar(textArea.value);
    if (textDesencriptado != "") {
        mensajeNoEncontrado.style.display = "none";
        parrafoNoMensaje.style.display = "none";
        imagenNoMensaje.style.display = "none";
        textMensaje.style.display = "block";
        ocultarBtnCopiar.style.display = "block";
        textMensaje.value = textDesencriptado;
        textArea.value = "";
    }
    
}

function btnCopiar() {
    const textMensajeCopiado = document.querySelector(".textMensaje");
    textMensajeCopiado.select();
    document.execCommand('copy');
}

