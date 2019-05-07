var enemy = [];

function criarInimigos() {
   for (let i = 0; i < 8; i++)
   {
      enemy.push( Elemento((i + 1) * (tamanho * 5), 0, '#b491f6', -2) );
   }
}