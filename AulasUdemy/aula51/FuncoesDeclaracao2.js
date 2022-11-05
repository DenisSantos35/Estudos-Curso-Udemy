//return 
//retorna um valor 
//termina a função
/*
//Neste caso a funcao tem um retorno e podemos capturar o valor
function soma(a, b){
    return a + b;
}

let valor = soma(2, 5);

//Neste caso a funcao nao retorna valor apena mostra o resultado para o usuario porem se a funcao for capturada teremos valor undefined
function soma2(a, b){
    console.log(a + b);
}

let valor2 = soma2(2, 5);

console.log(valor, valor2);
*/

/*
//Neste caso a funcao pega qualquer local do html e ao ser clicado muda a cor de fundo 
document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});
*/

/*
//Neste caso criamos um objeto utilizando uma funcao e passando o key; e retornando o value
//?Na variavel temos o itens completo
function pessoa(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}
let pessoas = pessoa('Denis', 'Santos');
console.log(pessoas);
//objeto literal sem funcao
let pessoas2 = {nome: 'Denis', sobrenome: 'Santos'};
console.log(pessoas2)
*/

/*
//funcoes mais complexas
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}
let comeco = falaFrase('ola');
let resto = comeco('mundo');

console.log(resto)
*/

/*
function criaMultiplicador(multiplicador){
    //multiplicador
    console.log(multiplicador, 'valor mutiplicador');
    return function(n){
        console.log('valor n', n , 'valor multiplicado', multiplicador);
        return  n * multiplicador;
    };
}

const duplica = criaMultiplicador(2); // duplica esta recebendo a funcao retornada ao criaMultiplicador
                                        //diplica vira uma funcao
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica, 'valor duplica recebido');
console.log(duplica(2)); // como duplica e a funcao dentro da funcao multiplicador
                        //se eu passar um valor ela enviara o valor e retornara 
console.log(triplica(2));
console.log(quadriplica(2));
*/

// ou seja duplica é a mesma coisa que
const multiplicador2 = 2;
const duplica2 = function(n){
    return n * multiplicador2
}
console.log(duplica2);
console.log(duplica2(2));