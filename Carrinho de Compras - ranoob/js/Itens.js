/* ------- CRIANDO ITEM ------- */
const criarItem = (item) => (
   `
      <div class="cartao-produto">
         <h1 class="cartao-produto__titulo">${item.titulo}</h1>

         <div class="cartao-produto__imagem ${item.imagem ? '' : 'fake-img'}">
            <img src=${item.imagem} alt='${item.titulo}'/>
         </div>

         <span class="preco__texto">Preço/KG</span>
         <span class="cartao-produto__preco">R$ ${item.preco}</span>

         <button class="cartao-produto__add" onclick="addItem(${item.id})">
            Adicionar ao carrinho
         </button>
      </div>
   `
)

const addItem = (id) => {
   let item = itens.find(item => item.id === id);

   cart.add(item);
   itensTotal();
}

const itensTotal = () => {
   var total = cart.total();
   var menu = document.querySelector('.header__menu');
   var itensTotal = el.criar('div', 'itens-total');

   let divs = menu.querySelectorAll('div');
   divs.forEach(div => el.remover(menu, div));

   itensTotal.innerHTML = total;

   el.anexar(menu, itensTotal); 
}