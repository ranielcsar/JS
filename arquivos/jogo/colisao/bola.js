function Bola(contexto) {
   this.contexto = contexto;
   this.x        = 0;
   this.y        = 0;
   this.x_velo   = 0;
   this.y_velo   = 0;
   this.cor      = "gray";
   this.raio     = 10;
}

Bola.prototype = {
   atualizar: function()
   {
      var c = this.contexto;

      if (this.x < this.raio ||
         this.x > c.canvas.width - this.raio)
      {
         this.x_velo *= -1;
      }

      if (this.y < this.raio ||
         this.y > c.canvas.height - this.raio)
      {
         this.y_velo *= -1;
      }

      this.x += this.x_velo;
      this.y += this.y_velo;
   },

   desenhar: function()
   {
      var lapis = this.contexto;

      lapis.beginPath();

      lapis.fillStyle = this.cor;
      lapis.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
      lapis.fill();
   },

   retanguloColisao: function()
   {
      return [
         {
            x: this.x - this.raio,
            y: this.y - this.raio,
            largura: this.raio * 2,
            altura: this.raio * 2
         }
      ];
   },

   colidiuCom: function(sprite)
   {
      if (this.x < sprite.x)
      {
         this.x_velo = -Math.abs(this.x_velo);
      } else {
         this.x_velo = Math.abs(this.x_velo);
      }

      if (this.y < sprite.y)
      {
         this.y_velo = -Math.abs(this.y_velo);
      } else {
         this.y_velo = Math.abs(this.y_velo);
      }
   }
}