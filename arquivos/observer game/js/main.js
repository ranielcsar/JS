window.addEventListener("keydown", moverPlayer);

function desenhar(elemento) {
   lapis.fillStyle = elemento.cor;

   lapis.fillRect(elemento.x, elemento.y, tamanho, tamanho);
}

var 
player,
enemy,
tiro,
observer;

function atualizar() {
   lapis.clearRect(0, 0, largura, altura);

   desenhar(player);
   desenhar(enemy);
}

function moverPlayer(evento) {
   switch (evento.keyCode)
   {
      case 38: 
         player.y -= 5;
         observer.notificar(enemy.y += 5);
         break;
      case 40:
         player.y += 5;
         observer.notificar(enemy.y -= 5);
         break;
      default:
         break;  
   }
}

function iniciar() {
   player = new Elemento((altura / 2), 'player', '#186697');
   enemy = new Elemento((altura / 2), 'enemy', '#191919');

   observer = new Observador();

   observer.add(enemy);

   setInterval(atualizar, FPS);
}

iniciar();