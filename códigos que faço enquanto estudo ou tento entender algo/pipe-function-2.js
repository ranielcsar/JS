/*~ - pipe function -  ~*/
const pipe = (...functions) => {  
   return (initialValue) => {      
      return functions.reduce(
         (accumulator, fn) => fn(accumulator),
      initialValue);
   }
}
/*~ ------------------ ~*/

const isOdd  = (n) => n % 2 === 0;
const double = (n) => Math.pow(n, 2);

const map    = (callback) => (array) => array.map(callback);
const filter = (callback) => (array) => array.filter(callback);

const filterMap = (callbackFilter, callbackMap) => pipe(
   filter(callbackFilter),
   map(callbackMap)
);

const filtered = filterMap(isOdd, double)([1, 2, 3, 4, 5, 6]);

console.log(filtered)
