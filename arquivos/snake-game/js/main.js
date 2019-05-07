window.addEventListener("keydown", moverCobra);

function moverCobra(evento)
{
   checkInit(evento);

   switch (evento.keyCode)
   {
      case tecla.esquerda:
      case 65:      
         snake.direcao = [-1, 0];
         break;

      case tecla.cima:
      case 87:
         snake.direcao = [0, -1];
         break;

      case tecla.direita:
      case 68:
         snake.direcao = [1, 0];
         break;

      case tecla.baixo:
      case 83:
         snake.direcao = [0, 1];
         break;
   }
}

function checkInit(evento)
{
   if (!playing &&
   (evento.keyCode == tecla.esquerda ||
    evento.keyCode == tecla.cima     || 
    evento.keyCode == tecla.direita  || 
    evento.keyCode == tecla.baixo    ||
    evento.keyCode == 65    ||
    evento.keyCode == 87    ||
    evento.keyCode == 68    ||
    evento.keyCode == 83)) 
   {
      playing = true;
   }
}

function novoJogo()
{
   snake = new Snake();

   fruta = new Fruta();

   label = new playLabel();

   playing = false;

   console.log(snake)
}

function playLabel()
{
   this.text = "Pressione qualquer SETA";
   this.ou = "ou";
   this.text2 = "W, A, S, D para jogar! :D";

   this.draw = function()
   {
      lapis.fillStyle = "#e5d9c4";
      lapis.font = tamanho + "pt Arial";
      lapis.fillText(this.text, largura / 2 - lapis.measureText(this.text).width / 2, altura / 2.3);
      lapis.fillText(this.ou, largura / 2 - lapis.measureText(this.ou).width / 2, altura / 1.8);
      lapis.fillText(this.text2, largura / 2 - lapis.measureText(this.text2).width / 2, altura / 1.5);
   }
}

function iniciaJogo()
{
   FPS = 13;

   novoJogo();
   rodarJogo();
}

function rodarJogo()
{
   atualiza();
   desenhaJogo();
   checaParedes();
   comeuFruta();
   colisao(snake.body);

   setTimeout(rodarJogo, 1000 / FPS); // divide 1000 (milissegundos) por 13 (FPS)
}

function comeuFruta()
{
   if (snake.comeu(fruta))
   {
      let cabecaX = snake.body[0][0];
      let cabecaY = snake.body[0][1];

      fruta = new Fruta();

      snake.body.push([cabecaX, cabecaY]);
   }
}

function desenhaJogo()
{
   lapis.clearRect(0, 0, largura, altura); // limpa tela

   snake.draw();

   if (!playing)
   {
      label.draw();
   } else {
      fruta.draw();
   }
}

function atualiza()
{
   snake.update();
}

function checaParedes()
{
   let cabecaX = snake.body[0][0];
   let cabecaY = snake.body[0][1];

   // esquerda
   if (cabecaX * tamanho > largura)
   {
      snake.body[0][0] = 0;
   }

   // direita
   if (cabecaX * tamanho < 0)
   {
      snake.body[0][0] = Math.floor(largura / tamanho);
   }

   // cima
   if (cabecaY * tamanho < 0)
   {
      snake.body[0][1] = Math.floor(altura / tamanho);
   }

   // baixo
   if (cabecaY * tamanho > altura)
   {
      snake.body[0][1] = 0;
   }
}

function colisao(array)
{
   let x = array[0][0];
   let y = array[0][1];
}

iniciaJogo();