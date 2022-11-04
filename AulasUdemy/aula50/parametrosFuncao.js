// funcao com palavra function tem uma palavra reservada arguments que sustenta todos os argumentos enviados.

/*
function funcao(a, b, c){
    let soma = 0;
    let valor = arguments
    for(let i of valor){
        soma = soma + i;
    }
    console.log(soma, a, b, c);
}
console.log(funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
*/

/*
// em javaScript quando se passa menos valores que parametros os parametros que não receberam numeros recebem undefined
function funcao(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}

funcao(1, 2, 3);*/

//Se passar mais parametros e menos valor e executar um calculo retorna NaN pois nao e executavel calculo de numero e undefined.
/*
function funcao(a, b){
    //modo antigo de resolver problema para esse calculo
    //b = b || 0;
    console.log(a + b);
}

funcao(2);

//solucao para problema acima atribuir valores para os parametros caso nao envie para eles nenhum valor eles assumem os valores atribuidos.
function funcao(a, b = 2, c = 4){
    //modo antigo de resolver problema para esse calculo
    //b = b || 0;
    console.log(a + b + c);
}

funcao(2, 10);

//para pular um parametro enviamos undefined no parametro que queremos pular
function funcao(a, b = 2, c = 4){
    //modo antigo de resolver problema para esse calculo
    //b = b || 0;
    console.log(a + b + c);
}

funcao(2, undefined, 10);

//para executar com parametros por desetruturacao de objeto
function funcao({nome, sobrenome, idade}){
    //modo antigo de resolver problema para esse calculo
    //b = b || 0;
    console.log(nome, sobrenome, idade);
}
let objeto = {nome:'Denis', sobrenome:'Santos', idade: 31}

funcao(objeto);

//para desestruturação com array
function funcao([valor1, valor2, valor3]){
    //modo antigo de resolver problema para esse calculo
    //b = b || 0;
    console.log(valor1, valor2, valor3);
}
let vetorArray = [10, 30, 50]

funcao(vetorArray);

//similaridade de funcao podemos fazer função passando aray para um valor 
function conta(operador, acumulador, numeros){
    
    if(operador === '+'){
        for(let i of numeros){
            acumulador += i;
        }
    }
    console.log(acumulador);
}

conta('+', 0, [20, 30, 40, 50]);
//ou podemos tirar os valores de dentro do array e passar com rest operator(...)

function conta2(operador, acumulador, ...numero){
    
        for(let i of numero){
            if(operador === '+') acumulador += i;
            if(operador === '-') acumulador -= i;
            if(operador === '*') acumulador *= i;
            if(operador === '/') acumulador /= i;
        }   
    
    console.log(acumulador);
}
conta2('/', 1, 20, 30, 40, 50);

//com functio expression
const conta3 = function(operador, acumulador, ...numero){
    
    for(let i of numero){
        if(operador === '+') acumulador += i;
        if(operador === '-') acumulador -= i;
        if(operador === '*') acumulador *= i;
        if(operador === '/') acumulador /= i;
    }   

console.log(acumulador);
};
conta3('+', 1, 20, 30, 40, 50);

//com arow function argumets nao funciona com arrow function
const conta4 = (operador, acumulador, ...numero) => {
    
    for(let i of numero){
        if(operador === '+') acumulador += i;
        if(operador === '-') acumulador -= i;
        if(operador === '*') acumulador *= i;
        if(operador === '/') acumulador /= i;
    }   

console.log(acumulador);
};
conta4('+', 1, 20, 30, 40, 50);*/

// uma solucao pra pegar todos os argumentos na chamada de funcao e a seguinte
//usa rest operator antes do paramento assim se pega todos os parametos 

const conta5 = (...args) => {
    console.log(args);
};
conta5('+', 1, 20, 30, 40, 50);

