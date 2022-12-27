let mensagem = document.getElementById("mensagem-input");
let outputMensagem = document.getElementById("saida-dom");
let inputMensagem = document.getElementById("mensagem-input");

function trocarLetras() {
  let texto = mensagem.value;

  let resultadoTexto = texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    outputMensagem.innerHTML = '<textarea class="outputMensagem">' +resultadoTexto+ '</textarea>'
    
    inputMensagem.value="";
}


function mensagemCodificada(){
    let textoDecodificado = mensagem.value;

    let resultadoTextoDecodificado = textoDecodificado
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    outputMensagem.innerHTML = '<textarea class="outputMensagem">' +resultadoTextoDecodificado+ '</textarea>'
   
    inputMensagem.value="";

   
    
}

