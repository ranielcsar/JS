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
   listarTarefas(tarefas);

   log(tarefas);
}

function porID(id) { return (el) => el.id !== id; }

const deletarTarefa = (id) => {
   let novoTarefas = filtrar(tarefas, porID(id));

   tarefas = novoTarefas;

   listarTarefas(tarefas);

   log(tarefas);
}

function concluir(id) {
   return (el) =>
      el.id === id ? ({
         id: id,
         texto: el.texto,
         estaConcluida: !el.estaConcluida
      }) : el
}

const concluirTarefa = (id) => {
   let novoTarefas = mapear(tarefas, concluir(id));

   tarefas = novoTarefas;

   listarTarefas(tarefas);

   log(tarefas);
}


/* ------ CRIANDO ELEMENTOS ------ */
const criarTarefa = ({ id, texto, estaConcluida }) => (
   `
      <li class="${estaConcluida ? 'concluido' : ''}">
         <p>${texto}</p>
         <div class="actions">
            <button class="done" onclick="concluirTarefa(${id})"></button>
            <button class="delete" onclick="deletarTarefa(${id})">x</button>
         </div>
      </li>
   `
)

/* ------ ADICIONANDO ELEMENTOS ------ */
const listarTarefas = (tarefas) => {   
   let lista = document.querySelector('#lista'); 

   let html = mapear(tarefas, criarTarefa);    

   if (tarefas.length === 0)
   {      
      lista.innerHTML = 'Sem tarefas :/';
      lista.style.textAlign = 'center';
   } else {
      lista.style.textAlign = 'left';
      lista.innerHTML = html.join(''); 
   }     
}

const iniciar = () => {
   let add = document.querySelector('#add');
       add.addEventListener('click', adicionarTarefa);

   listarTarefas(tarefas);
}

iniciar();