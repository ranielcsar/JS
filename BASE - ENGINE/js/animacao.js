function Animacao(contexto) {
   this.contexto        = contexto;
   this.sprites         = [];
   this.processos       = [];
   this.spritesExcluir  = [];
   this.processoExcluir = [];
   this.ultimoCiclo     = 0;
   this.tempoDecorrido  = 0;
   this.ligado          = false;
}

Animacao.prototype = {
   novoSprite: function(sprite)
   {
      this.sprites.push(sprite);
      sprite.animacao = this;
   },

   excluirSprite: function(sprite)
   {
      this.spritesExcluir.push(sprite);
   },

   novoProcesso: function(processo)
   {
      this.processos.push(processo);

      processo.animacao = this;
   },

   excluirProcesso: function(processo)
   {
      this.processoExcluir.push(processo);
   },

   ligar: function()
   {
      this.ultimoCiclo = 0;
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

      var agora = new Date().getTime();

      if (this.ultimoCiclo == 0) { this.ultimoCiclo = agora; }      
      this.tempoDecorrido = agora - this.ultimoCiclo;

      this.contexto.clearRect(
         0, 0,
         this.contexto.canvas.width,
         this.contexto.canvas.height
      );

      for (var i in this.sprites)
      {
         this.sprites[i].atualizar();
      }

      for (var i in this.sprites)
      {
         this.sprites[i].desenhar();
      }

      for (var i in this.processos)
      {
         this.processos[i].processar();
      }

      this.processarExclusoes();      
      this.ultimoCiclo = agora;
      
      var anime = this;
      requestAnimationFrame( function() {
         anime.proximoFrame();
      });
   },

   processarExclusoes: function()
   {
      this.sprites = this.sprites.filter(s => {
         return this.spritesExcluir.indexOf(s) == -1;
      });

      this.processos = this.processos.filter(p => {
         return this.processoExcluir.indexOf(p) == -1;
      });

      this.spritesExcluir  = [];
      this.processoExcluir = [];
   }
}