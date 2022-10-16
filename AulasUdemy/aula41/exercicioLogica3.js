//Escreva uma funcao que recebe um numero e
//retorne o seguinte:
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//Numero Não é divisivel por 3 e 5 = Retorna o próprio numero
//Chegar se o numero é realmente um numero
//Use a função com numeros de 0 a 100

/* Minha resposta
let resposta;
function numero(num){
    if (num % 3 === 0 && num % 5 !==0){
        resposta = 'Fizz';
    }else if(num % 3 !== 0 && num % 5 === 0){
        resposta = 'Buzz';
    }else if(num % 3 === 0 && num % 5 === 0){
        resposta = 'FizzBuzz';
    }else if(num % 3 !== 0 && num % 5 !== 0 || isNaN(num)){
        resposta = num;
    }
    return resposta
}
let fim = 100;
console.log(numero('Denis'))

for(let i = 0; i <= fim; i++){
    console.log(i, ` = ${numero(i)}`);
}*/

//resposta udemi
function FizzBuzz(numero){
    if(typeof numero !== 'number') return numero;  //testa se o typo do numero e diferente number
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 ===0) return 'Buzz';
    return numero;
}

console.log(FizzBuzz('a'));
for(let i = 0; i <= 100; i++){
    console.log(i, `= ${FizzBuzz(i)}`)
}