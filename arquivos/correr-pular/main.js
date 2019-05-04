window.addEventListener("keydown", controle)
window.addEventListener("keyup", controle);

var obj,
    gravidade = 1.5,
    friccao = 0.9;

function Elemento(x, y) {
  return {
    jumping: false,
    x: x,
    y: y,
    tamanho: tamanho,
    
    velX: 0,
    velY: 0
  }
}

function controle(evento) {  
  var ativar = (evento.type === "keydown") ? true : false;
  
  switch (evento.keyCode) {
    case 37:
      irPara.esquerda = ativar;
      break;
    case 38:
      irPara.cima = ativar;      
      break;
    case 39:
      irPara.direita = ativar;
      break;
  }
}

var irPara = {
  esquerda: false,
  direita: false,
  cima: false
}

function mudarDirecao() {
  if (irPara.cima && obj.jumping == false)
  {
    obj.velY -= 20;
    obj.jumping = true;
  }
  
  if (irPara.esquerda)
  {
    obj.velX -= 0.9;
  }
  
  if (irPara.direita)
  {
    obj.velX += 0.9;
  }
}

function atualizar() {
  obj.velY += gravidade;
  obj.x += obj.velX;
  obj.y += obj.velY;
  
  obj.velX *= friccao;
  obj.velY *= friccao;

  checarLimites();
}

function checarLimites() {
  let chao = tela.height - obj.tamanho;
  
  // se tocar no chão
  if (obj.y > chao)
  {
    obj.jumping = false;
    obj.y = chao;
    obj.velY = 0;
  }
  
  // sair dos lados
  if (obj.x < 0) 
  {
    obj.x = tela.width;
  } else if (obj.x > tela.width) {
    obj.x = 0;
  }
}

function desenhar() {
  lapis.clearRect(0, 0, tela.width, tela.height);
  
  lapis.fillStyle = "#C6E2FF";
  lapis.fillRect(obj.x, obj.y, obj.tamanho, obj.tamanho);
}

function loop() {  
  mudarDirecao();
  
  atualizar();  
  
  desenhar();
  
  window.requestAnimationFrame(loop);
}

function iniciar() {
  obj = Elemento(20, 50);  
  
  window.requestAnimationFrame(loop);
}

iniciar();