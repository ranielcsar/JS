const Cart = () => {
   var carrinho = [];

   const add = (item) => {
      if (carrinho.length === 0 || !carrinho.find(it => item.id === it.id))
      {
         item.quantidade++;
         carrinho.push(item);
      } else {
         let novoItem = carrinho.find(it => item.id === it.id);
             novoItem.quantidade++;
         
         let index = carrinho.findIndex(it => it.id === novoItem.id);

         carrinho.slice(index, 1); 
      }    

      log(carrinho)

      setStore(carrinho);
   }

   const setStore = (cart) => { store.setState({ carrinho: cart }); }

   const calculoTotal = () => {
      let total = 0;

      carrinho.forEach(item => total += item.quantidade);

      return total;
   }

   return {
      add,
      total: calculoTotal
   }
}