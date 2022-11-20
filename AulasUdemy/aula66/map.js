//dobre os numeros
//map consegue ao retornar mudar o valor para o novo array mudar o valor de dentro do array
//map tera sempre o mesmo tamanho original
//map quando for utilizado se for gerar uma nova constante fazer sempre uma copia pois se nao fizer a copia voce aterara o objeto inicial
// cont newObjeto = {...objetoOriginal}
/*
//indice         0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const listaDobro = numeros.map(valor => valor * 2);
console.log(listaDobro)
*/

//array com objtos dentro 
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Denis', idade: 47},
];
/*

//utilizacao de map para retornar apenas o nome do objeto
const novaPessoa = pessoas.map(valor => valor.nome);
console.log(novaPessoa)
const filtroNome = novaPessoa.filter(valor => valor.endsWith('a'));
console.log(filtroNome)



//utilizacao do map para deletar o nome e retornar apena o objeto idade
const idade = pessoas.map((obj) => {
    delete obj.nome;
    return obj
});
*/
//quando for retornar uma eronFunction objeto envolva o objeto entrecolchete para que seja reconhecido momo objeto
const idade2 = pessoas.map((obj) => ({idade: obj.idade}));
//console.log(idade2);
// ou 

const comIds = pessoas.map(function(obj, indice){
    const newObj = {... obj};
    newObj.id = (indice + 1) * 1000;
    return newObj;
});
console.log(comIds)
console.log(pessoas)
 /*
const novaIdade = pessoas.map(valor => valor.idade);
console.log(novaIdade);
const filtroIdade = novaIdade.filter(valor => valor > 50);
console.log(filtroIdade)
*/