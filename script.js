const mensagem = document.getElementById("mensagem-input");
const outputMensagem = document.getElementById("saida-dom");
const btnCopiar = document.getElementById("botao-copiar");


function trocarLetras() {
  let texto = mensagem.value;

  let resultadoTexto = texto

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  outputMensagem.innerHTML =
    '<textarea class="outputMensagem">' +
    resultadoTexto +
    "</textarea>" +
    '<button id="botao-copiar" onclick="copiar()">Copiar</button>';

  inputMensagem.value = "";
}

function mensagemCodificada() {
  let textoDecodificado = mensagem.value;

  let resultadoTextoDecodificado = textoDecodificado

    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  outputMensagem.innerHTML =
    '<textarea class="outputMensagem">' +
    resultadoTextoDecodificado +
    "</textarea>" +
    '<button id="botao-copiar" onclick="copiar()">Copiar</button>';;

  inputMensagem.value = "";
}

function copiar (){
  let textoCopiado = document.querySelector(".outputMensagem");
  navigator.clipboard.writeText(textoCopiado.value);
  alert("Mensagem copiada com sucesso!");
};
