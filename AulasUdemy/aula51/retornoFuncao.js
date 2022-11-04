//return
//retorna um valor
//termina a funcao
/*
function soma(a, b){
    return Number(a + b);
}
 console.log(soma(5,2));
 let num1 = soma(5,2);

 function soma2(a, b){
    console.log(a + b);
 }

soma2(5, 2);
let num2 = soma2(5,2)

console.log(num1, num2)

document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});

function criaNome(nome, sobrenome){
    return {nome, sobrenome};
}

let nome = criaNome('denis', 'santos');
console.log(nome);
let nome2 = {nome: 'Joao', sobrenome: 'Pedro'}
console.log(nome2)

let gravacao = JSON.stringify(nome);
localStorage.setItem('nome', gravacao);

let recuperacao = localStorage.getItem('nome');
let novaRecuperacao = JSON.parse(recuperacao);

for(let i in novaRecuperacao){
    document.write(i)
}

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto;
}

//
const fala = falaFrase('ola');
const resto = fala('mundo')
console.log(resto);*/
/*
function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadriplica(n){
    return n * 4;
}*/

function criaMultiplicador(multiplicador){
    //multiplicador
    return function multiplicacao(n){
        return n * multiplicador;
    }  
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const uadriplica = criaMultiplicador(4);

console.log(duplica(2), triplica(2), quadriplica(2));
