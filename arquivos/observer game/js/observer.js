function Observador() {
   this.observers = [];
}

Observador.prototype.add = function(observer) {
   this.observers.push(observer);
};

Observador.prototype.remove = function(observer) {
   this.observers.splice(observer, 1);
};

Observador.prototype.notificar = function(data) {
  this.observers.forEach(obs => data);
};