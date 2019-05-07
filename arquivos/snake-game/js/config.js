const 
tela = document.getElementById("snake"),
lapis = tela.getContext("2d"),
conteudo = document.getElementById("conteudo");

var 
label,
altura, 
largura, 
tamanho,
FPS,
playing,
snake,
fruta;

var tecla = {
   esquerda: 37,
   cima: 38,
   direita: 39,
   baixo: 40
};

window.addEventListener("resize", redimensionar);

function redimensionar() {
   largura = conteudo.offsetWidth, 
   altura = conteudo.offsetHeight;

   tela.width = largura;
   tela.height = altura;   

   tamanho = Math.max(Math.floor(largura / 40), Math.floor(altura / 40));
}

redimensionar();