/*
dados primitivos(imutaveis)- string, number, boolean, undefined, null (bigint, symbol)
valores primitivos sao valores copiados

referencia - (mutavel) - arrays, object, fuction
valores passados por referencia - apontam para o mesmo lugar na memoria
para se fazer a copia utiliza se [...variavel a ser copiada]
*/
const cadastro = {nome: 'Denis', idade: 25, peso: 60}
const dados = {...cadastro}
console.log(dados, cadastro)
dados.nome = 'Maria'
dados.idade = '43'
console.log(dados, cadastro)




/*
#############################################################
//para copiar no caso de array utiliza[...variavel a ser copiada]
let a = ['Denis', 'Maria', 'Joao']
let b = [...a]
console.log(a, b)
b.push('Joyce')
console.log(a, b)
###########################################################
let a = [1, 2, 3];
let b = a;
console.log(a, b)
a.push(4)
console.log(a, b)
b.pop();
console.log(a,b)
###########################################################
//          01234
let nome = 'Denis'
console.log(nome[2])
let nome1 = ['Denis', 'Santos', 'Lucas']
console.log(nome1.slice(2))
############################################################

let A = 'a';
let b = A;
console.log(A, b)

A = 'outra coisa'
console.log(A, b)*/