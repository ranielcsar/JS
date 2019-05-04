const 
tela = document.getElementById("tela"),
lapis = tela.getContext("2d");

window.addEventListener("resize", redimensionar);

var
tamanho,
largura,
altura;

function redimensionar() {
   largura = window.innerWidth, 
   altura = window.innerHeight;

   tela.width = largura;
   tela.height = altura;

   tamanho = Math.max(Math.floor(largura / 45), Math.floor(altura / 45));
}

redimensionar();