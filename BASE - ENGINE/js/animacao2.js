const Animacao = (contexto) => {
   var ctx              = contexto,
       sprites          = [],
       processos        = [],
       spritesExcluir   = [],
       processosExcluir = [],
       ultimoCiclo      = 0,
       tempoDecorrido   = 0,
       ligado           = false;
   
   
   const novoSprite = (sprite) => {
      sprites.push(sprite);
      sprite.animacao = this;
   }
   
   const excluirSprite = (sprite) => {
      spritesExcluir.push(sprite);
   }
   
   const novoProcesso = (processo) => {
      processos.push(processo);
   }
   
   const excluirProcesso = (processo) => {
      processosExcluir.push(processo);
   }
   
   const ligar = () => {
      ultimoCiclo = 0;
      ligado = true;
      proximoFrame();
   }
}