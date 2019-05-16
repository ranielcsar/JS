var padding = 20,
    xoffset = 65,
    yoffset = 20,
    colunas = 5,
    linhas  = 3;

var brickColor = [
   ex.Color.fromHex('#8bc34a'),
   ex.Color.fromHex('#52a8b8'),
   ex.Color.fromHex('#e7bbcb')
];

var larguraBrick = game.drawWidth / colunas - padding - padding / colunas,
    alturaBrick = 30;

var blocos = [];

for (var i = 0; i < colunas; i++) {
   for (var j = 0; j < linhas; j++)
   {
      blocos.push(
         new ex.Actor(
            xoffset + i * (larguraBrick + padding) + padding,
            yoffset + j * (alturaBrick + padding) + padding,
            larguraBrick,
            alturaBrick,
            brickColor[j % brickColor.length]
         )
      );
   }
}

blocos.forEach(function(bloco) {
   bloco.collisionType = ex.CollisionType.Active;

   game.add(bloco);
});