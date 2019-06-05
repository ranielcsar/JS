var
DIRECAO_ESQUERDA = 1 
DIRECAO_DIREITA  = 2;

function Heroi(lapis, teclado, animacao) {
   this.lapis = lapis;
   this.teclado = teclado;
   this.animacao = animacao;
   this.x = 60;
   this.y = altura - tamanho;

   this.direcao = DIRECAO_DIREITA;
}

Heroi.prototype = {
   atualizar()
   {
      if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0)
      {
         this.direcao = DIRECAO_ESQUERDA;
         this.x -= 10;
      } else if (this.teclado.pressionada(SETA_DIREITA) &&
        this.x < largura - tamanho) {
            this.direcao = DIRECAO_DIREITA;
            this.x += 10;
      }
   },

   desenhar()
   {
      this.lapis.fillStyle = "#c33";
      this.lapis.fillRect(this.x, this.y, tamanho, tamanho);
   },

   atirar()
   {
      var tiro = new Bola(this.lapis);
            tiro.x = this.x + 10;
            tiro.y = this.y + 10;
            tiro.raio = 3;
            tiro.cor = "white";

      if (this.direcao == DIRECAO_ESQUERDA)
      {
         tiro.x_velo = -15;
      } else {
         tiro.x_velo = 15;
      }

      this.animacao.novoSprite(tiro);
   }
}