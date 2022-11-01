//declacracao de funcao (function hoisting()) => eleva a funcao para o topo do arquivo para executar a mesma; assim para declarar e chamar a funcao pode ser antes ou depois
function falaOi(){
    console.log('olá');
}
falaOi();

//First - Class objects (objetos de prmeira classe) ~> funcao pode ser tratada como dado.
//function expression ~> funcao tem como resultado uma constante de variavel

//cria uma funcao como um dado
const souUmDado = function(){
    console.log('fala oi')
};

//funcao recebendo outra funcao como parametro
function executaFuncao(funcao){
    funcao();
    console.log('Deu certo')
}
executaFuncao(souUmDado); //funcao passando funcao como parametro

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

//passando funcao como dado dentro de set interval e setTimeOut
const tempo = setInterval(function(){
    console.log('sou set interval')
},1000);

setTimeout(function(){
    clearInterval(tempo);
},5000);

//Dentro de um objeto posso ter uma função
const objeto = {
    falar: function() {
        console.log('Estou falando');
    },
    parar(){
        console.log('Parei de falar')
    }
}
 objeto.falar();
 objeto.parar();