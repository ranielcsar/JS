const Observador = () => {
   var observers = [];

   function add(observer) {
      observers.push(observer);
   }

   function remove(observer) {
      observers.splice(observer, 1);
   }

   function notificar(data) {
      observers.forEach(obs => data);
   }

   return {
      add,
      remove,
      notificar
   }
}