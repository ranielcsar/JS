var SONIC_DIREITA  = 1,
    SONIC_ESQUERDA = 2;

function Sonic(contexto, teclado, imagem) {
   this.sheet      = new Spritesheet(contexto, imagem, 3, 8);
   this.lapis      = contexto;
   this.teclado    = teclado;
   this.intervalo  = 60;
   this.velocidade = 10;
   this.andando    = false;
   this.direcao    = SONIC_DIREITA;   
   this.x          = 0;
   this.y          = 0;
}

Sonic.prototype = {
   atualizar: function()
   {
      if (this.teclado.pressionada(SETA_DIREITA))
      {
         if (!this.andando || this.direcao != SONIC_DIREITA)
         {
            this.sheet.linha = 1;
            this.sheet.coluna = 0;
         }

         this.andando = true;
         this.direcao = SONIC_DIREITA;
         this.sheet.proximoQuadro();

         this.x += this.velocidade;
      } else if (this.teclado.pressionada(SETA_ESQUERDA)) {
         if (!this.andando || this.direcao != SONIC_ESQUERDA)
         {
            this.sheet.linha = 2;
            this.sheet.coluna = 0;
         }

         this.andando = true;
         this.direcao = SONIC_ESQUERDA;
         this.sheet.proximoQuadro();

         this.x -= this.velocidade;
      } else {
         if (this.direcao == SONIC_DIREITA)
         {
            this.sheet.coluna = 0;
         } else if (this.direcao == SONIC_ESQUERDA) {
            this.sheet.coluna = 1;
         }

         this.sheet.linha = 0;
         this.andando = false;
      }
   },

   desenhar: function()
   {
      this.sheet.desenhar(this.x, this.y);
   }
}