//funcao callbeck
/*
function meuNome(nome){    
    return nome
}


function sobrenome(sobrenome, callbeck){
    return callbeck('denis') + sobrenome
}
console.log(sobrenome('Santos', meuNome));
*/

//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar Tudo)
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11,15,22,27];
const somaPares = numeros.filter(valor => valor % 2 === 0 );
console.log(somaPares);
const dobraValor = somaPares.map(valor => valor * 2);
console.log(dobraValor);
const resultado = dobraValor.reduce((acumulador, valor) => {
    acumulador +=valor;
    return acumulador;
},0);
console.log(resultado);
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11,15,22,27];
const resultado = numeros
    .filter((valor) => valor % 2 === 0)
    .map((valor) => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor);

console.log(resultado)
