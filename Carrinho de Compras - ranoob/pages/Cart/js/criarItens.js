const criarItens = (item) => (
   `  <div class="item">
         <h2 class="item__titulo">${item.titulo}</h2>
         <div class="item__imagem">
            <img src=${item.imagem}>
         </div>

         <span class="item__preco">Total: <b>R$ ${subTotal(item)}</b></span>

         <div class="item__quantidade">
            <button class="item__quantidade-btn" onclick="add_remove(${item.id}, '-')">-</button>
            <p id="item__qnt">${item.quantidade}</p>
            <button class="item__quantidade-btn" onclick="add_remove(${item.id}, '+')">+</button>
         </div>

         <button class="item__btn-remover" onclick="removerItem(${item.id})">Remover item</button>
      </div>
   `
)

const subTotal = (item) => {
   let total = 0;

   let preco = item.preco.replace(',', '.');

   total = parseFloat(preco) * item.quantidade;

   let subtotal = total.toString().replace('.', ',');

   return subtotal;
}

const valorTotal = () => {   
   let itens = store.getState();
   let total = 0;

   for (let i in itens) {
      let preco = itens[i].preco.replace(',', '.');

      total += parseFloat(preco) * itens[i].quantidade;
   }

   let valor = total.toString().replace('.', ',');

   let html = `
      <div class="preco__total">
         <p>Valor total da compra: <b>R$ ${valor}</b></p>
      </div>
   `;

   return html;
}