var tarefas = [];

/* ------ FUNÇÕES DA LISTA ------ */
const adicionarTarefa = () => {
   let input = document.querySelector('#textInput');
   let texto = input.value;

   if (texto === '') { return };   

   let tarefa = {
      id: tarefas.length + 1,
      text: texto,
      isComplete: false
   }

   input.value = '';
   tarefas.push(tarefa);
   atualizarLista(tarefas);

   console.log(tarefas);
}

const deletarTarefa = (id) => {
   let novoTarefas = tarefas.filter(tarefa => tarefa.id !== id);

   tarefas = novoTarefas;

   atualizarLista(tarefas);

   console.log(tarefas);
}

const concluirTarefa = (id) => {
   let novoTarefas = tarefas.map(tarefa =>
      tarefa.id === id ? ({
         id: id,
         text: tarefa.text,
         isComplete: !tarefa.isComplete
      }) : tarefa
   );

   tarefas = novoTarefas;

   atualizarLista(tarefas);

   console.log(tarefas);
}


/* ------ CRIANDO ELEMENTOS ------ */
const criarEl = (el) => document.createElement(el);
const anexarEl = (parent, child) => parent.appendChild(child);

const criarBotao = (classe) => {
   let button = criarEl('button');

   classe ? button.classList.add(classe) : '';

   return button;
}

const criarTarefa = (tarefa) => {
   const { id, text, isComplete } = tarefa;

   let li = criarEl('li');
   let p = criarEl('p');
   let div = criarEl('div');
   let done = criarBotao('done');   
   let del = criarBotao('delete');   

   p.innerHTML = text;
   div.classList.add('actions');
   del.innerHTML = 'x';

   isComplete ? li.classList.toggle('concluido') : '';

   done.onclick = function() { concluirTarefa(id) };
   del.onclick = function() { deletarTarefa(id) };

   anexarEl(li, p);
   anexarEl(div, done);
   anexarEl(div, del);
   anexarEl(li, div);

   return li;
}

/* ------ ADICIONANDO ELEMENTOS ------ */
const listarTarefas = (tarefas) => {   
   const lista = document.querySelector('#lista');   

   if (tarefas.length === 0)
   {      
      lista.innerHTML = 'Sem tarefas. :/';
      lista.style.textAlign = 'center';
   } else {
      lista.innerHTML = '';
      lista.style.textAlign = 'left';
   }

   tarefas.forEach(tarefa => {
      let t = criarTarefa(tarefa);

      anexarEl(lista, t);
   });        
}

const atualizarLista = (novaLista) => {
   var lista = document.querySelector('#lista');
   var lis = lista.querySelectorAll('li');

   lis.forEach(li => lista.removeChild(li));

   listarTarefas(novaLista);
}

listarTarefas(tarefas);