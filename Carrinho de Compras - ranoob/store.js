function createStore() {

   var state = {
      carrinho: []
   }

   return {
      getState: function() {
         let state = JSON.parse( localStorage.getItem('state') );         

         return state;
      },

      setState: function(newState) {
         state = newState;
         localStorage.clear();
         localStorage.setItem('state', JSON.stringify(state.carrinho));
      }
   }
}