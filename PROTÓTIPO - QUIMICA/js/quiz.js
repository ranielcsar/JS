const telaQuiz       = document.getElementById('quiz'),
      botaoSubmeter  = document.getElementById('submeter');

var reacoes = [];

function criarQuiz() {
   var output = [];

   reacoes.forEach(
      (questaoAtual, numeroQuestao) => {

         var respostas = [];

         respostas.push(
            `<label>
               <input type="" name="questao${numeroQuestao}" value="">
               <sub>${questaoAtual[0].string} +</sub>

               <input type="" name="questao${numeroQuestao}" value="">
               <sub>${questaoAtual[1].string} =</sub>

               <input type="" name="questao${numeroQuestao}" value="">
               <sub>${questaoAtual[2].string}</sub>
             </label>
            `
         );         

         output.push(
            `<div class="slide">
               <div class="resposta"> ${respostas.join('')}</div>
             </div>
            `
         );
      }
   );

   telaQuiz.innerHTML = output.join('');
   mostrarSlide(0);
}

function verificarRespostas() {
   var respostas = telaQuiz.querySelectorAll('.resposta');

   reacoes.forEach( (questaoAtual, numeroQuestao) => {
      var inputs = respostas[numeroQuestao].querySelectorAll('input');

      var valores = [];
      inputs.forEach(input => {
         valores.push(input.value);
      });
      
      var r1 = questaoAtual[0].valor,
          r2 = questaoAtual[1].valor,
          r3 = questaoAtual[2].valor;

      var v1 = valores[0],
          v2 = valores[1],
          v3 = valores[2];

      if (v1 == r1 && v2 == r2 && v3 == r3)
      {
         console.log('acertou')
         respostas[numeroQuestao].classList.add('acertou');  
      } else if ( verificarParcial((v1 / r1), (v2 / r2), (v3 / r3)) ) {   
         console.log('parcial')
         respostas[numeroQuestao].classList.add('acertouParcial'); 
      } else {
         respostas[numeroQuestao].classList.add('errou'); 
         console.log('errou')
      }
   });   
}

function verificarParcial(v1, v2, v3) {
   return v1 == v2 && v1 == v3 ? true : false;
}

var anterior = document.getElementById('anterior'),
    proximo  = document.getElementById('proximo');

var slideAtual = 0;

function mostrarSlide(n) {
   var slides = document.querySelectorAll('.slide')

   slides[slideAtual].classList.remove('slideAtual');
   slides[n].classList.add('slideAtual');

   slideAtual = n;

   if (slideAtual == 0)
   {
      anterior.disabled = true;
      anterior.style.opacity = 0.3;
   } else {
      anterior.style.display = 'inline-block';
      anterior.style.opacity = 1;     
      anterior.disabled = false;
   }

   if (slideAtual == slides.length - 1)
   {
      proximo.style.display = 'none';
      botaoSubmeter.style.display = 'inline-block';
   } else {
      proximo.style.display = 'inline-block';
      botaoSubmeter.style.display = 'none';
   }
}

function proximoSlide() {
  mostrarSlide(slideAtual + 1);
}

function slideAnterior() {
  mostrarSlide(slideAtual - 1);
}

botaoSubmeter.addEventListener('click', verificarRespostas);
anterior.addEventListener("click", slideAnterior);
proximo.addEventListener("click", proximoSlide);