const 
tela = document.getElementById("tela"),
lapis = tela.getContext("2d"),
conteudo = document.getElementById("conteudo");

window.addEventListener("resize", redimensionar);

var 
FPS = 1000 / 15,
tamanho,
largura,
altura;

function redimensionar() {
   largura = conteudo.offsetWidth, 
   altura = conteudo.offsetHeight;

   tela.width = largura;
   tela.height = altura;   

   tamanho = Math.max(Math.floor(largura / 45), Math.floor(altura / 40));
}

redimensionar();