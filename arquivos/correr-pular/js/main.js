var player,
    gravidade = 1.5,
    friccao = 0.9;

function Elemento(x, y, cor, velY) {
  return {
    x: x,
    y: y,
    cor: cor,
    velocidade_x: 0,
    velocidade_y: (!velY) ? 0 : velY,
    
    tamanho: tamanho,
    jumping: false,

    bateu: function(outro)
    {
      if (outro.x === Math.floor(this.x) && outro.y === this.y)
      {
        return true;
      }

      return false;
    }
  }
}

function atualizar(el) {
  el.velocidade_y += gravidade;
  el.x += el.velocidade_x;
  el.y += el.velocidade_y;
  
  el.velocidade_x *= friccao;
  el.velocidade_y *= friccao;
}

function tocou_no_chao(el) {
  let chao = tela.height - el.tamanho;
  
  // se tocar no chão
  if (el.y > chao)
  {
    el.jumping = false;
    el.y = chao;
    el.velocidade_y = 0;
  }  
}

function checa_se_saiu_da_tela(el) {  
  // sair dos lados
  if (el.x < 0) 
  {
    el.x = tela.width;
  } else if (el.x > tela.width) {
    el.x = 0;
  }
}

function desenhar(el) {
  lapis.fillStyle = el.cor;

  lapis.fillRect(el.x, el.y, el.tamanho, el.tamanho);
}

function loop() {

  lapis.clearRect(0, 0, tela.width, tela.height);

  mudarDirecao(player);  
  atualizar(player);
  checa_se_saiu_da_tela(player);
  tocou_no_chao(player);
  desenhar(player); 

  enemy.forEach(desenhar);
  enemy.forEach(atualizar);
  enemy.forEach(tocou_no_chao);

  enemy.forEach( (el) => {
    if (player.bateu(el))
    {
      el.cor = player.cor;
    }
  });

  window.requestAnimationFrame(loop);
}

function iniciar() {
  player = Elemento(50, altura, "#333");

  criarInimigos();
  
  window.requestAnimationFrame(loop);
}

iniciar();