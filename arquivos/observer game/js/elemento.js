const Elemento = (y, tipo, cor) => {
   var y = y;
   var tipo = tipo;
   var cor = cor;
   var x;

   if (tipo === 'player') {
      x = 0;
   } else if (tipo === 'enemy') {
      x = largura - tamanho;
   }

   return {
      x, y,
      tipo,
      cor
   }
}