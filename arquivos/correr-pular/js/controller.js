window.addEventListener("keydown", controle)
window.addEventListener("keyup", controle);

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

function mudarDirecao(el) {
  if (irPara.cima && el.jumping == false)
  {
    el.velocidade_y -= 25;
    el.jumping = true;
  }
  
  if (irPara.esquerda)
  {
    el.velocidade_x -= 0.9;
  }
  
  if (irPara.direita)
  {
    el.velocidade_x += 0.9;
  }
}