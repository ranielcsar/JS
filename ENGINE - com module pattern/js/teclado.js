var ESPACO        = 32,
    SETA_ESQUERDA = 37,
    SETA_CIMA     = 38,
    SETA_DIREITA  = 39,
    SETA_BAIXO    = 40,
    ENTER         = 13;

function Teclado(elemento) {

  return (function(el) {
     var pressionadas   = [];
         disparadas     = [];
         funcoesDisparo = [];

     el.addEventListener('keydown', function(evento)
     {
        var tecla = evento.keyCode;
        pressionadas[tecla] = true;

        if (funcoesDisparo[tecla] && !disparadas[tecla])
        {
           disparadas[tecla] = true;
           funcoesDisparo[tecla]();
        }
     });

     el.addEventListener('keyup', function(evento)
     {
        pressionadas[evento.keyCode] = false;
        disparadas[evento.keyCode]   = false;
     });

     function pressionada(tecla)
     {
        return pressionadas[tecla];
     }

     function disparou(tecla, funcao)
     {
        funcoesDisparo[tecla] = funcao;
     }

     return {
        apertou: disparou,
        press: pressionada
     }

  })(elemento);
} 