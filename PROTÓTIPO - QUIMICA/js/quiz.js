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

//botaoSubmeter.addEventListener('click', mostrarResultado);
anterior.addEventListener("click", slideAnterior);
proximo.addEventListener("click", proximoSlide);