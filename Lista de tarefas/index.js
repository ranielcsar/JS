var tarefas = [];

/* ------ FUNÇÕES DA LISTA ------ */
const adicionarTarefa = () => {
   let input = document.querySelector('#textInput');
   let texto = input.value;

   if (texto === '') { return };   

   let tarefa = {
      id: tarefas.length + 1,
      texto: texto,
      estaConcluida: false
   }

   input.value = '';
   tarefas.push(tarefa);
   atualizarLista(tarefas);

   log(tarefas);
}

const deletarTarefa = (id) => {
   let novoTarefas = tarefas.filter(tarefa => tarefa.id !== id);

   tarefas = novoTarefas;

   atualizarLista(tarefas);

   log(tarefas);
}

const concluirTarefa = (id) => {
   let novoTarefas = tarefas.map(tarefa =>
      tarefa.id === id ? ({
         id: id,
         texto: tarefa.texto,
         estaConcluida: !tarefa.estaConcluida
      }) : tarefa
   );

   tarefas = novoTarefas;

   atualizarLista(tarefas);

   log(tarefas);
}


/* ------ CRIANDO ELEMENTOS ------ */
const el = Elemento();

const criarTarefa = (tarefa) => {
   const { id, texto, estaConcluida } = tarefa;

   let novaTarefa = el.criar('li');
   let tarefaTexto = el.criar('p');
   let actions = el.criar('div', 'actions');
   let done = el.criar('button', 'done');   
   let del = el.criar('button', 'delete');   

   tarefaTexto.innerHTML = texto;
   del.innerHTML = 'x';

   estaConcluida ? el.adicionarClasse(novaTarefa, 'concluido') : '';

   done.onclick = function() { concluirTarefa(id) };
   del.onclick = function() { deletarTarefa(id) };

   el.anexar(tarefaTexto, novaTarefa);
   el.anexar(done, actions);
   el.anexar(del, actions);
   el.anexar(actions, novaTarefa);

   return novaTarefa;
}

/* ------ ADICIONANDO ELEMENTOS ------ */
const listarTarefas = (tarefas) => {   
   let lista = document.querySelector('#lista');   

   if (tarefas.length === 0)
   {      
      lista.innerHTML = 'Sem tarefas :/';
      lista.style.textAlign = 'center';
   } else {
      lista.innerHTML = '';
      lista.style.textAlign = 'left';
   }

   tarefas.forEach(tarefa => {
      let t = criarTarefa(tarefa);

      el.anexar(t, lista);
   });        
}

const atualizarLista = (novaLista) => {
   var lista = document.querySelector('#lista');
   var lis = lista.querySelectorAll('li');

   lis.forEach(li => el.remover(li, lista));

   listarTarefas(novaLista);
}

const iniciar = () => {
   let add = document.querySelector('#add');
       add.addEventListener('click', adicionarTarefa);

   listarTarefas(tarefas);
}

iniciar();