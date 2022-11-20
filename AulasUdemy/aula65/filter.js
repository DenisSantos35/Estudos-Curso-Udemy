//filter, map, reduce
// filter => sempre retornarao um array com a mesma quantidade de elementos ou menos.
/*
//retorne os numeros maiores que 10
// indices       0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor){
    console.log(valor)
    //sempre que for retornar boolean se for uma condição retorne a condição pois ela própria se define em verdadeira ou falsa
    return valor > 10;

    //nesta situacao temos uma condicao; toda vez que uma condição for retornar verdadeira nao tem a necessidade de gerar a condição com if como vemos abaixo, basta simplesmente retornar a própria codição que mostrara se é verdadeira ou falsa
    
    if(valor > 10){
        return true;
    } else{
        return false;
    }
}

//nesta funcao filter estamos passando o array e o metodo filter, dentro do parenteses o proprio filter esta executando item a item dos valores contido em numeros, passando para a funcao que retornam verdadeiro ou falso.
//se retornar como verdadeiro o filter retorna para um array e atribui para a variavel.
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
//Retorne nome das pessoa que tem 5 letras ou mais
//retorne as pessoas com mais de 520 anos
//retorne as pessoas cujo nome termine com a

const nome = ['Denis', 'Diego', 'Joyce', 'Maria'];

function callbec(nome){
    console.log(nome)
    return nome.indexOf('D') === 0;
    
}
const nomesFiltrados = nome.filter(callbec);
console.log(nomesFiltrados);
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Denis', idade: 47},
];
/*
const filtro = pessoas.filter((valor,indice) => {
   return valor.nome.length >= 5;
});
console.log(filtro);
*/
console.log(pessoas);
const filtro = pessoas.filter(valor => valor.nome.length >= 5);
console.log(filtro);

const filtroIdade = pessoas.filter(valor => valor.idade > 50);
console.log(filtroIdade);

//endsWith('a') => verifica se o fim da string termina com a letra
const nomeTermA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));

console.log(nomeTermA);
/*

const palavras = 'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animado, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais ( HTML e CSS ) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.';

const lista = palavras.split(' ');
console.log(lista);

function callbeck(valor){
    return valor.indexOf('m') === 0;

}
//     constante  array.filtro(funcao a ser chamado)
const filtrado = lista.filter(callbeck);
console.log(filtrado);
*/
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbeck(valor){
    return valor > 10;
}

const numFiltrado = numeros.filter(callbeck);
console.log(numFiltrado);
*/
/*
const numFiltrado = numeros.filter(function(valor){
    return valor > 10;
});

const numFiltrado = numeros.filter( valor => valor > 10);
console.log(numFiltrado);
//        constante  atribui  array.filtro(funcao(item do array, indice do array, array completo))
const numerosFiltrados = numeros.filter((valor,indice, array) => {
    console.log(`${indice} = ${valor} => ${array}`); 
    return  valor > 10;

});
*/