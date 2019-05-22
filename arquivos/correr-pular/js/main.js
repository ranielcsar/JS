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

  lapis.fillRect(el.x, el.y, tamanho, tamanho);
  
  Particulas(el);
  animaParticulas();
}

function instrucoes() {
  lapis.font = tamanho + "px Arial";
  let texto = "Use as setas esquerda/direta para movimentar e cima para pular";
  
  lapis.fillText(texto, largura / 2 - lapis.measureText(texto).width / 2, 30);
}

function loop() {

  lapis.clearRect(0, 0, tela.width, tela.height);
  
  instrucoes();

  mudarDirecao(player);  
  atualizar(player);
  checa_se_saiu_da_tela(player);
  tocou_no_chao(player); 
  
  desenhar(player);
  window.requestAnimationFrame(loop);
}

function iniciar() {
  player = Elemento(50, altura, "#333");
  
  window.requestAnimationFrame(loop);
}

iniciar();