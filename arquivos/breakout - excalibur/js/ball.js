var bola = new ex.Actor(100, 300, 20, 20);

bola.vel.setTo(100, 250);

bola.collisionType = ex.CollisionType.Passive;

bola.on('precollision', function(evento) {
   if (blocos.indexOf(evento.other) > -1)
   {
      evento.other.kill();
   }


   var intersection = evento.intersection.normalize();

   if (Math.abs(intersection.x) > Math.abs(intersection.y))
   {
      bola.vel.x *= -1;
   } else {
      bola.vel.y *= -1;
   }
})

bola.on('postupdate', function() {
   if (this.pos.x < this.getWidth() / 2)
   {
      this.vel.x *= -1;
   }

   if (this.pos.x + this.getWidth() / 2 > game.drawWidth)
   {
      this.vel.x *= -1;
   }

   if (this.pos.y < this.getHeight() / 2)
   {
      this.vel.y *= -1;
   }
})

bola.draw = function(lapis, delta) {
   lapis.fillStyle = "#ff0033";
   lapis.beginPath();

   lapis.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);

   lapis.closePath();
   lapis.fill();
}

bola.on('exitviewport', function() {
  alert('Você perdeu!');
})

game.add(bola);