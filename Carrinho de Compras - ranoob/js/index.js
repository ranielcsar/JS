var store = createStore();
var cart = Cart();

const mapear = (array, callback) => array.map(callback);
const log = (obj) => console.log(obj);

const iniciar = () => {
   let container = document.querySelector('.main-container');

   let html = mapear(itens, criarItem);

   cartIcon();

   container.innerHTML = html.join('');
}

iniciar();