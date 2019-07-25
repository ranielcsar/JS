var 
jogar         = document.getElementById('jogar'),
ranking       = document.getElementById('ranking'),
tutorial      = document.getElementById('tutorial'),
balanceamento = document.getElementById('balanceamento');

jogar.addEventListener('click', play);
ranking.addEventListener('click', mostrarRanking);
tutorial.addEventListener('click', iniciarTutorial);
balanceamento.addEventListener('click', teoriaBalanceamento);

var telaInicial = document.getElementById('inicial'),
    telaNiveis  = document.getElementById('niveis'),
    telaJogo  = document.getElementById('jogo');

function iniciar() {
   telaInicial.classList.add('telaAtual');
}

function play() {
   telaInicial.classList.remove('telaAtual');
   telaNiveis.classList.add('telaAtual');
}

function mostrarRanking() {
   console.log('ranking');
}

function iniciarTutorial() {
   console.log('tutorial');
}

function teoriaBalanceamento() {
   console.log('teoria sobre balanceamento');
}