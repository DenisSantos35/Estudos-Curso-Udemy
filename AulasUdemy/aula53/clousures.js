//Global
//closures e a hablidade de acesso ao escopo lexico da função

function retornaFuncao(nome){
    
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('Denis'); // acesso a tres escopos o her o da mother e o global
const funcao2 = retornaFuncao('Joao');
console.log(funcao);
console.log(funcao2);
console.log(funcao(), funcao2())