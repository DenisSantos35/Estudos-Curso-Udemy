//const lista = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
/*
const elemento = lista.reduce((acumulador, valor, indice, array) => {
    console.log(acumulador);
    return acumulador += valor;
}, 0)

console.log(elemento)
*/

/*
//reduce como filter
//nao fazer isso 
const newelemento = lista.reduce((acumulador, valor, indice, array) => {
    if(valor % 2 === 0){acumulador.push(valor)};
    return acumulador
}, []);

console.log(newelemento);
//fazer isso
const elemento = lista.filter((valor) => {
    return valor % 2 === 0
});

console.log(elemento);
*/

//usando reduce como map
//nao fazer isso

/*
const elementoReduce = lista.reduce((cont,valor) => {
    cont.push(valor*2);
    return cont
}, []);

console.log(elementoReduce)

//mesmo codigo com map
//fazer isso

const elementoMap = lista.map((valor) => {
    return valor * 2;
});

console.log(elementoMap)
*/

/*
//somando pares com reduce
const somaPares = lista.reduce((soma, valor) => {
    if(valor % 2 === 0){
        soma += valor;
    }
    return soma
}, 0);

console.log(somaPares);

//ou
//Somado impares

const somaImpares = lista.reduce((soma, valor) => {
    if(valor % 2 !== 0){
        soma += valor
    }
    return soma
});

console.log(somaImpares)
*/
const pessoas = [
    {nome: 'Luiz', idade: 20},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Denis', idade: 47},
];

const velho = pessoas.reduce((pessoa, valor) => {
    //console.log(pessoa, valor)
    if(pessoa.idade > valor.idade){
        return pessoa
    }
    return valor
    
});

console.log(velho)