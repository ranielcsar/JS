var cores = [
   '#663366', 
   '#FF0033', 
   '#28285A', 
   '#00FFB9'
]

function corRandom(cores) {
   return cores[Math.floor(Math.random() * cores.length)];
}

function Inimigo(contexto) {
   this.lapis   = contexto;
   this.cor     = corRandom(cores);
   this.x       = 0;
   this.y       = 0;
   this.tamanho = 12;
   this.raio    = 20;
   this.velo    = 0;
   this.bolas   = [];
}

Inimigo.prototype = {
   atualizar: function()
   {
      if (this.x > this.lapis.canvas.width - this.tamanho) { this.x = 0 };

      this.x += this.velo;

      this.bolas.forEach(b => {
         b.angulo += Math.PI / 90;

         b.x = this.raio * Math.cos(b.angulo) * Math.PI + this.x;
         b.y = this.raio * Math.sin(b.angulo) * Math.PI + this.y;
      });
   },

   desenhar: function()
   {
      var c = this.lapis;    

      // bola central
      c.beginPath();
      c.fillStyle = "#333";
      c.arc(this.x, this.y, 5, 0, Math.PI * 2);
      c.fill();

      // bola rodando
      this.bolas.forEach(b => {
         c.beginPath();
         c.fillStyle = this.cor;
         c.arc(b.x, b.y, this.tamanho, 0, Math.PI * 2);
         c.fill();
      }); 
   },

   criaBolas: function(quantidade) {
      for (var i = 0; i < quantidade; i++)
      {
         var angulo = (i / (quantidade / 2)) * Math.PI;

         var x = this.raio * Math.cos(angulo) + this.x,
             y = this.raio * Math.sin(angulo) + this.y;

         var bola = {
            x: Math.floor(x),
            y: Math.floor(y),
            angulo: angulo           
         };

         this.bolas.push(bola);
      }
   } 
}