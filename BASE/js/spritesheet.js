function Spritesheet(lapis, imagem, linhas, colunas) {
   this.lapis        = lapis;
   this.img          = imagem;
   this.numLinhas    = linhas;
   this.numColunas   = colunas;
   this.intervalo    = 0;
   this.linha        = 0;
   this.coluna       = 0;
   this.fimCiclo     = null;
}

Spritesheet.prototype = {
   proximoQuadro: function()
   {
      var agora = new Date().getTime();

      if (!this.ultimoTempo) { this.ultimoTempo = agora; }

      if (agora - this.ultimoTempo < this.intervalo) { return; }

      if (this.coluna < this.numColunas - 1)
      {
         this.coluna++;
      } else {
         this.coluna = 0;

         if (this.fimCiclo) { this.fimCiclo(); }
      }

      this.ultimoTempo = agora;
   },

   desenhar: function(x, y)
   {
      var larguraQuadro = this.img.width / this.numColunas,
          alturaQuadro  = this.img.height / this.numLinhas;

      this.lapis.drawImage(
         this.img,
         larguraQuadro * this.coluna,
         alturaQuadro * this.linha,
         larguraQuadro, alturaQuadro,
         x, y,
         larguraQuadro, alturaQuadro
      );
   }
}