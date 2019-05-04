function Elemento(y, tipo, cor) {
   this.y = y;
   this.tipo = tipo;
   this.cor = cor;

   if (tipo === 'player') {
      this.x = 0;
   } else if (tipo === 'enemy') {
      this.x = largura - tamanho;
   }
}