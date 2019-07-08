function Spritesheet(lapis, imagem, linhas, colunas) {

   return (function(ctx, img, rows, cols) {
      var
      lapis        = ctx,
      imagem       = img,
      numLinhas    = rows,
      numColunas   = cols,
      intervalo    = 0,
      linha        = 0,
      coluna       = 0,
      fimCiclo     = null;

      function proximoQuadro()
      {
         var agora = new Date().getTime();

         if (!ultimoTempo) { ultimoTempo = agora; }

         if (agora - ultimoTempo < intervalo) { return; }

         if (coluna < numColunas - 1)
         {
            coluna++;
         } else {
            coluna = 0;

            if (fimCiclo) { fimCiclo(); }
         }

         ultimoTempo = agora;
      }

      function desenhar(x, y)
      {
         var larguraQuadro = imagem.width / numColunas,
             alturaQuadro  = imagem.height / numLinhas;

         lapis.drawImage(
            imagem,
            larguraQuadro * coluna,
            alturaQuadro * linha,
            larguraQuadro, alturaQuadro,
            x, y,
            larguraQuadro, alturaQuadro
         );
      }

   })(lapis, imagem, linhas, colunas);
}