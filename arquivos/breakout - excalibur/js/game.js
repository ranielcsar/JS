var game = new ex.Engine({
  width: 800,
  height: 600,
  backgroundColor: ex.Color.fromHex('#323c4d')
})

var plataforma = new ex.Actor(150, game.drawHeight - 40, 200, 20);

plataforma.color = ex.Color.fromHex('#8397b3');

plataforma.collisionType = ex.CollisionType.Fixed;

game.input.pointers.primary.on('move', function(evento) {
   plataforma.pos.x = evento.worldPos.x;
});

game.add(plataforma);

game.start();