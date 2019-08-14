var n1 = document.getElementById('nivel1'),
    n2 = document.getElementById('nivel2'),
    n3 = document.getElementById('nivel3');

var botaoVoltar = document.getElementById('voltar');

n1.addEventListener('click', carregarNivel1);
n2.addEventListener('click', carregarNivel2);
n3.addEventListener('click', carregarNivel3);

botaoVoltar.addEventListener('click', voltar);

var reacoes = [];

function carregarNivel1() {
   console.log('nivel 1 carregado');

   reacoes = [
      [ {valor: 2, string: 'N2'}, {valor: 6, string: 'H2'}, {valor: 4, string: 'NH3' } ],
      [ {valor: 4, string: 'H2'}, {valor: 3, string: 'O' }, {valor: 1, string: 'H2O' } ],
      [ {valor: 6, string: 'Na'}, {valor: 9, string: 'Cl'}, {valor: 3, string: 'NaCl'} ]
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

   embaralhar(reacoes);
   criarQuiz();
}

function embaralhar(array) {
   var ultimoNum = 0;

   for (var i in array)
   {
      var random = Math.floor(Math.random() * array.length);
      var auxiliar;
      
      if (ultimoNum == random)
      {
         random = Math.floor(Math.random() * array.length);
      } else {
         auxiliar = array[i];
         array[i] = array[random];
         array[random] = auxiliar;
         
         ultimoNum = random;
      }
   }
}