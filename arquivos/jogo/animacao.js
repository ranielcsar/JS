function Animacao(contexto) {
   this.contexto = contexto;
   this.sprites = [];
   this.ligado = false;
}

Animacao.prototype = {
   novoSprite: function(sprite)
   {
      this.sprites.push(sprite);
   },

   ligar: function()
   {
      this.ligado = true;
      this.proximoFrame();
   },

   desligar: function()
   {
      this.ligado = false;
   },

   proximoFrame: function()
   {
      if (!this.ligado) return;

      this.contexto.clearRect(0, 0, largura, altura);

      for (var i in this.sprites)
      {
         this.sprites[i].atualizar();
      }

      for (var i in this.sprites)
      {
         this.sprites[i].desenhar();
      }

      var anime = this;
      requestAnimationFrame( function() {
         anime.proximoFrame();
      });
   }
}