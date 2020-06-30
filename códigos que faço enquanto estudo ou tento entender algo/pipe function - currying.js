const users = [
   { name: 'jake', age: 20 },
   { name: 'preto', age: 18 },
   { name: 'galeguinho', age: 16 }
]; // meus gatos (my cats)

const pipe = (...functions) => {  
   return (initialValue) => {      
      return functions.reduce(
         (accumulator, fn) => fn(accumulator),
      initialValue);
   }
}

const map    = (callback) => (array) => array.map(callback);
const filter = (callback) => (array) => array.filter(callback);

const has18 = ({ age }) => age >= 18;
const mapByName = ({ name }) => name;

const filterMap = (callbackFilter) => (callbackMap) => pipe(
   filter(callbackFilter),
   map(callbackMap)
);

console.log(
   filterMap(has18)(mapByName)(users)
)