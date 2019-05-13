function soma(a, b) { return a + b; }
function subt(a, b) { return a - b; }
function multi(a, b) { return a * b; }
function divis(a, b) { return a / b; }

function calcular(funcao, a, b) {
    return funcao(a, b);
}

console.log( calcular( soma, 10, 5 ) );
console.log( calcular( subt, 10, 5 ) );
console.log( calcular( multi, 10, 5 ) );
console.log( calcular( divis, 10, 5 ) );
