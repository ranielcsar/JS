function Colisor() {

   return (function() {
      var
      sprites         = [],
      spritesExcluir  = [],
      aoColidir       = null;

      function novoSprite(sprite)
      {
         sprites.push(sprite);
         sprite.animacao = this;
      }

      function excluirSprite()
      {
         spritesExcluir.push(sprite);
      }

      function processar()
      {
         var jaTestados = {};

         for (var i in sprites) {
            for (var j in sprites)
            {
               if (i == j) { continue; } // não colidir com ele mesmo

               // gerar string única (id)
               var id1 = stringUnica(sprites[i]);
               var id2 = stringUnica(sprites[j]);

               if (!jaTestados[id1]) { jaTestados[id1] = []; }
               if (!jaTestados[id2]) { jaTestados[id2] = []; }

               if (!(jaTestados[id1].indexOf(id2) >= 0 ||
                     jaTestados[id2].indexOf(id1) >= 0))
               {
                  testarColisao(sprites[i], sprites[j]);

                  jaTestados[id1].push(id2);
                  jaTestados[id2].push(id1);
               }
            }
         }

         processarExclusoes();
      }

      function testarColisao(sprite1, sprite2)
      {
         var ret1 = sprite1.retanguloColisao();
         var ret2 = sprite2.retanguloColisao();

         colisoes:
         for (var i in ret1) {
            for (var j in ret2)
            {
               if (retangulosColidem(ret1[i], ret2[j]))
               {
                  sprite1.colidiuCom(sprite2);
                  sprite2.colidiuCom(sprite1);

                  if (aoColidir) { aoColidir(sprite1, sprite2); }

                  break colisoes;
               }
            }
         }
      }

      function retangulosColidem(ret1, ret2)
      {
         return (ret1.x + ret1.largura) > ret2.x &&
                ret1.x < (ret2.x + ret2.largura) &&
                (ret1.y + ret1.altura) > ret2.y  &&
                ret1.y < (ret2.y + ret2.altura);
      }

      function stringUnica(sprite)
      {
         var str = '';
         var retangulos = sprite.retanguloColisao();

         for (var i in retangulos)
         {
            str += 'x:' + retangulos[i].x + ',' + 
                   'y:' + retangulos[i].y + ',' + 
                   'l:' + retangulos[i].largura + ',' + 
                   'a:' + retangulos[i].altura + '\n'; 
         }

         return str;
      }

      function processarExclusoes()
      {
         sprites = sprites.filter(s => {
            return spritesExcluir.indexOf(s) == -1;
         });

         spritesExcluir = [];
      }

      return {
         novo: novoSprite,
         excluir: excluirSprite,
         aoColidir
      }

   })();
}