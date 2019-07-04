function Quadrado(x ,y) {
   return {
      x: x,
      y: y,

      desenhar: function()
      {
         this.lapis.fillStyle = "#222";
         this.lapis.fillRect(this.x, this.y, 30, 30);
      },

      atualizar: function()
      {
         this.x += 5;

         if (this.x > this.lapis.canvas.width)
         {
            this.animar.excluir(this);
            this.animar.novo( Quadrado(0, this.y) );
         }
      }
   }
}