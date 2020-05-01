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
   cartIcon();
}

const cartIcon = () => {
   var total = cart.total();
   var menu = document.querySelector('.header__menu');

   let html =`
      <a href="pages/Cart/index.html">
         ${ total === 0 ? '' : `<div class="itens-total">${total}</div>` }
         <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png"/>
      </a>
   `
   menu.innerHTML = html;
}