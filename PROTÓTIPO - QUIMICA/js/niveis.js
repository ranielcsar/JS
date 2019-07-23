var n1 = document.getElementById('nivel1'),
    n2 = document.getElementById('nivel2'),
    n3 = document.getElementById('nivel3');

var botaoVoltar = document.getElementById('voltar');

n1.addEventListener('click', carregarNivel1);
n2.addEventListener('click', carregarNivel2);
n3.addEventListener('click', carregarNivel3);

botaoVoltar.addEventListener('click', voltar);

function carregarNivel1() {
   console.log('nivel 1 carregado');

   reacoes = [
      [ {string: 'N2'}, {string: 'H2'}, {string: 'NH3' } ],
      [ {string: 'H2'}, {string: 'O' }, {string: 'H2O' } ],
      [ {string: 'Na'}, {string: 'Cl'}, {string: 'NaCl'} ]
   ];

   iniciarNivel();
}

function carregarNivel2() {
   console.log('nivel 2 carregado');
}

function carregarNivel3() {
   console.log('nivel 3 carregado');
}

function voltar() {
   telaInicial.classList.add('telaAtual');
   telaNiveis.classList.remove('telaAtual');
}

function iniciarNivel() {
   telaNiveis.classList.remove('telaAtual');
   telaJogo.classList.add('telaAtual');

   criarQuiz();
}