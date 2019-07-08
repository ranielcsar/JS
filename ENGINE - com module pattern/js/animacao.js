function Animacao(contexto) {

   return (function(c) {
      var 
      contexto        = c,
      sprites         = [],
      processos       = [],
      spritesExcluir  = [],
      processoExcluir = [],
      ultimoCiclo     = 0,
      tempoDecorrido  = 0,
      ligado          = false;

      function novoSprite(sprite)
      {
         sprites.push(sprite);
         sprite.animacao = this;
      }

      function excluirSprite()
      {
         spritesExcluir.push(sprite);
      }

      function novoProcesso()
      {
         processos.push(processo);

         processo.animacao = this;
      }

      function excluirProcesso()
      {
         processoExcluir.push(processo);
      }

      function ligar()
      {
         ultimoCiclo = 0;
         ligado = true;
         proximoFrame();
      }

      function desligar()
      {
         ligado = false;
      }

      function proximoFrame()
      {
         if (!ligado) return;

         var agora = new Date().getTime();

         if (ultimoCiclo == 0) { ultimoCiclo = agora; }      
         tempoDecorrido = agora - ultimoCiclo;

         contexto.clearRect(
            0, 0,
            contexto.canvas.width,
            contexto.canvas.height
         );

         for (var i in sprites)
         {
            sprites[i].atualizar();
         }

         for (var i in sprites)
         {
            sprites[i].desenhar();
         }

         for (var i in processos)
         {
            processos[i].processar();
         }

         processarExclusoes();      
         ultimoCiclo = agora;

         requestAnimationFrame( function() {
            proximoFrame();
         });
      }

      function processarExclusoes()
      {
         sprites = sprites.filter(s => {
            return spritesExcluir.indexOf(s) == -1;
         });

         processos = processos.filter(p => {
            return processoExcluir.indexOf(p) == -1;
         });

         spritesExcluir  = [];
         processoExcluir = [];
      }

      return {
         novo: novoSprite,
         excluir: excluirSprite,
         processo: novoProcesso,
         on: ligar,
         off: desligar
      }

   })(contexto);   
}