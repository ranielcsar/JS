function Fundo(lapis, imagem) {
   this.lapis      = lapis;
   this.imagem     = imagem;
   this.velocidade = 0;
   this.remendo    = 0;
}

Fundo.prototype = {
   desenhar: function()
   {
      var img = this.imagem;

      // primeira cópia
      var posicaoY = this.remendo - img.height;
      this.lapis.drawImage(img, 0, posicaoY, img.width, img.height);

      // segunda cópia
      posicaoY = this.remendo;
      this.lapis.drawImage(img, 0, posicaoY, img.width, img.height);
   },

   atualizar: function()
   {
      this.remendo += this.velocidade;

      if (this.remendo > this.imagem.height)
      {
         this.remendo = 0;
      }
   }
}