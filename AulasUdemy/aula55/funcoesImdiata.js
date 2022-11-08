//IIFE ~> Immediatly Invoked function expression
//este tipo de função toca o escopo global
function qualquerCoisa(){
    console.log('Abaixo invocaremos a funcao após criada')
}
qualquerCoisa();

//este tipo de função não toca o escopo global
//no tipo de funcao alto invocada por não tocar o escopo global as variaveis que são criadas dentro dela não interferem nas variaveis criadas no escopo global
/*
(function (){
    const texto = 'Funcao que não toca escopo global, variavel criada na função';
    console.log(texto);
})();
const texto = 'variavel criada no escopo global';
console.log(texto);
*/

//para criar uma funcao anonima voce cria um () e dentro do parenteses coloca (function{}) e no final fecha com outro parenteses (function{})();

(function(idade, peso, altura){
    const sobrenome = 'Santos';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Denis'));
    }
    falaNome();
    objeto = {idade, peso, altura};
    console.log(objeto);
})(31, 52, 1.69);


