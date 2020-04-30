const criar = () => {
   let itens = store.getState();
   let total = valorTotal();

   let container = document.querySelector('.main-container');

   let html = mapear(itens, criarItens);
       html.push(total);

   container.innerHTML = html.join('');
}


function porID(id) { return (item) => id !== item.id };

const removerItem = (id) => {
   let itens = store.getState();

   let novosItens = filtrar(itens, porID(id));

   store.setState({ carrinho: novosItens });

   criar();
}

const add_remove = (id, action) => {
   let itens = store.getState();

   let novoItem = itens.find(it => id === it.id);

   action === '+' ? novoItem.quantidade++ : novoItem.quantidade--;

   if (novoItem.quantidade === 0) { removerItem(id); return }
   
   let index = itens.findIndex(it => it.id === novoItem.id);

   itens.slice(index, 1);

   store.setState({ carrinho: itens });

   criar();
}