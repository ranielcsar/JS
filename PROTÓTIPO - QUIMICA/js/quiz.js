const telaQuiz       = document.getElementById('quiz'),
      botaoVerificar = document.getElementById('verificar');
      botaoVerificar.style.display = 'none';

var slides;

function criarQuiz() {
   var output = [];


   reacoes.forEach(
      (questaoAtual, numeroQuestao) => {

         var respostas = [];

         function sinal(n) {
            var valor = questaoAtual.length;           

            if (n == 1 && valor >= 3)
            {
               return '→';
            }

            if (valor == 2 && n == 0)
            {
               return '→';
            }

            if (n == valor - 1) {               
               return '';
            } else {
               return '+';
            }
         }

         for (var i in questaoAtual)
         {
            respostas.push(
              `<input type="" name="questao${numeroQuestao}" required>
               <sub>${questaoAtual[i].string} ${sinal(i)}</sub>
              `
           ); 
         }

         var valor = questaoAtual.length;
         var tipo;

         if (valor == 4)
         {
            tipo = 'campos-4';
         } else {
            tipo = '';
         }        

         output.push(
            `<div class="slide">
              <form>
                 <div class="resposta ${tipo}">${respostas.join('')}</div>
              </form>
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
      
      var valoresQuestao = questaoAtual.map(questao => questao.valor);

      if (estaVazio(valores))
      {
         return;

      } else if ( comparar(valores, valoresQuestao) ) {

         slides[numeroQuestao].classList.add('acertou');

      } else if ( verificarParcial(valores, valoresQuestao) ) {   
         
         slides[numeroQuestao].classList.add('acertouParcial'); 

      } else {

         slides[numeroQuestao].classList.add('errou');          
      }    
   });   
}

function estaVazio(array) {
   for (var i in array)
   {
      if (array[i] == '')
      {
         return true;
      }
   }
}

function comparar(array1, array2) {   
   var resultado;
   var contador = 0;
   
   for (var i in array1)
   {
      if (array1[i] == array2[i])
      {
         contador++;
      }
   }
   
   if (contador == array1.length)
   {
      resultado = true;
   } else {
      resultado = false;
   }
   
   return resultado;
}

function verificarParcial(array1, array2) {

   var resultado = [];

   for (var i in array1)
   {
      resultado.push( Math.abs(array1[i] / array2[i]) );
   }

   var primeiroValor = resultado[0];
   var acertou = 0;

   for (var i in resultado)
   {
      if (resultado[i] == primeiroValor)
      {
         acertou++;
      }
   }

   return acertou === resultado.length ? true : false;
}

var anterior = document.getElementById('anterior'),
    proximo  = document.getElementById('proximo');

var slideAtual = 0;

function mostrarSlide(n) {
   slides = document.querySelectorAll('.slide');

   slides[slideAtual].classList.remove('slideAtual');
   slides[n].classList.add('slideAtual');

   slideAtual = n;

   if (slideAtual == 0)
   {
      anterior.disabled = true; 
      botaoVerificar.style.display = 'inline-block';     
      anterior.style.opacity = 0.3;
   } else {
      anterior.style.display = 'inline-block';
      anterior.style.opacity = 1;     
      anterior.disabled = false;
   }

   if (slideAtual == slides.length - 1)
   {
      proximo.style.opacity = 0.3;
      proximo.disabled = true;
   } else {
      proximo.style.display = 'inline-block';
      proximo.disabled = false;
      proximo.style.opacity = 1;
   }
}

function proximoSlide() {
  mostrarSlide(slideAtual + 1);
}

function slideAnterior() {
  mostrarSlide(slideAtual - 1);
}

addEventListener('keydown', function(evento) {
  if (evento.keyCode == 13)
  {
    verificarRespostas();
  }
});

botaoVerificar.addEventListener('click', verificarRespostas);
anterior.addEventListener("click", slideAnterior);
proximo.addEventListener("click", proximoSlide);