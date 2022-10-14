/*//declaração de variaveis
const nome = 'Denis Diogo dos Santos' 
let i = 0; //declaração de iterador com inicio em 0
while(i < nome.length){ //enquanto i for menor que a quantidade de incices da constante realiza o loop
    console.log(nome[i]); //imprime a letra indice a indeice
    i++; //soma mais um ao iterador ate estourar a quantidade de indices da constante
}
console.log('>>Fim<<')*/
//Dois tipos de funções para gerar numeros aleatórios
/*function getAleatorio(){
    let numero = Math.floor(Math.random() * 50 + 1);
    return numero;
}

console.log(getAleatorio())*/

function random(max,min){
    const r = Math.random() * (max - min) + min; //random gera um numero de 0 a 1
                                                //A multiplicaçao e para gerar um numero decimal ou centezimal diferente de 0 e 1
    return Math.floor(r); //Math floor arredonda numero para baixo
}
//declaração de valores para ser enviado a função de geração de numeros aleatórios
const min = 1;
const max = 50;
//inicialização de variavel para teste de while e do while
let resultado = 10;
let contador = 0; //contador para ver quantidade de numeros aleatorios gerados ate sair do laço
while(resultado !== 10){ //while executa 0 vezes para sair da função
    resultado = random(min,max); //resultado recbe numero aletório da funçao no nosso caso 1 a 50
    contador += 1
    console.log(resultado)

}
console.log(contador + 'vezes')

//funçao do while eecuta pelo menos 1 vez para sair da função
do{
    resultado = random(min,max);
    console.log(resultado)

}while(resultado !== 10);