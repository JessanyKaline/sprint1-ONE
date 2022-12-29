let mensagem = document.getElementById("mensagem-input");
let outputMensagem = document.getElementById("saida-dom");
let inputMensagem = document.getElementById("mensagem-input");

function trocarLetras() {
  let texto = mensagem.value;

  let resultadoTexto = texto

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  outputMensagem.innerHTML =
    '<textarea class="outputMensagem">' + resultadoTexto + "</textarea>";

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
    "</textarea>";

  inputMensagem.value = "";
}
