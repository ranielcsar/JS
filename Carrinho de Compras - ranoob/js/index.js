var store = createStore();
var cart = Cart();

const el = Elemento();

const iniciar = () => {

   let container = document.querySelector('.main-container');

   let html = mapear(itens, criarItem);

   container.innerHTML = html.join('');
}

iniciar();