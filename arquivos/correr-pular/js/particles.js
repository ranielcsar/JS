var particulas = [];

function Particulas(el) {
  var particula = {
    x: el.x,
    y: el.y + tamanho,
    x_velo: Math.random(),
    y_velo: Math.random(),
    tamanho: Math.random() * (tamanho / 2)
  }
  
  if (el.velocidade_x < 0) { particula.x += tamanho };
  
  particulas.push(particula);
  
  if (particulas.length > 30)
  {
    particulas.shift();
  }
}

function animaParticulas() {
  for (let i = 0; i < particulas.length; i++)
  {
    let b = particulas[i];
    
    lapis.beginPath();

    lapis.strokeStyle = player.cor;
    lapis.arc(b.x, b.y, b.tamanho, 0, Math.PI * 2);
    lapis.stroke();
    
    b.x -= b.x_velo * player.velocidade_x;
    b.y -= b.y_velo * 2;
  }
}