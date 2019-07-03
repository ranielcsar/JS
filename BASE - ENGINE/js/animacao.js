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
      var novoSprites = [],
          novoProcessos = [];

      for (var i in this.sprites)
      {
         if (this.spritesExcluir.indexOf(this.sprites[i]) == -1)
         {
            novoSprites.push(this.sprites[i]);
         }
      }

      for (var i in this.processos)
      {
         if (this.processoExcluir.indexOf(this.processos[i]) == -1)
         {
            novoProcessos.push(this.processos[i]);
         }
      }

      this.spritesExcluir = [];
      this.processoExcluir = [];

      this.sprites = novoSprites;
      this.processos = novoProcessos;
   }
}