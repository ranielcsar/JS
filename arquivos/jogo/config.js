var 
tamanho, 
altura, 
largura;

function redimensionar()
{
   largura = window.innerWidth;
   altura = window.innerHeight;

   tela.width = largura;
   tela.height = altura;   

   tamanho = Math.max(Math.floor(largura / 40), Math.floor(altura / 35));
}

window.addEventListener('resize', redimensionar);

redimensionar();