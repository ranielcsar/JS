var animar = (function() {
   var tela = document.getElementById('tela'),
       ctx  = document.querySelector('canvas').getContext('2d');

   ctx.canvas.width  = tela.offsetWidth;
   ctx.canvas.height = tela.offsetHeight;

   var sprites         = [],
       spritesExcluir  = [];
       ligado          = false,
       tempoDecorrido  = 0,
       ultimoCiclo     = 0;

   function novoSprite(sprite)
   {
      sprites.push(sprite);
      sprite.lapis = ctx;
      sprite.animar = this;
   }

   function excluirSprite(sprite)
   {
      spritesExcluir.push(sprite);
      console.log(sprite)
   }

   function ligar()
   {
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

      ctx.clearRect(
         0, 0,
         ctx.canvas.width,
         ctx.canvas.height
      );

      for (var i in sprites)
      {
         sprites[i].atualizar();
      }

      for (var i in sprites)
      {
         sprites[i].desenhar();
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
   }

   return {
      novo: novoSprite,
      excluir: excluirSprite,
      on: ligar,
      off: desligar
   }

})();