const Elemento = () => {

   const criar = (el, classe) => {
      let element = document.createElement(el);

      classe ? element.classList.add(classe) : '';

      return element;
   }   

   const anexar = (child, parent) => parent.appendChild(child);

   const remover = (child, parent) => parent.removeChild(child);

   const adicionarClasse = (el, classe) => el.classList.add(classe);

   const removerClasse = (el, classe) => el.classList.remove(classe);

   return {
      criar,
      anexar,
      remover,
      adicionarClasse,
      removerClasse
   }
   
}

const log = (obj) => console.log(obj);

const filtrar = (array, callback) => array.filter(callback);

const mapear = (array, callback) => array.map(callback);