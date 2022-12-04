//705.484.450-52 070.987.720.03
/*

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10

11 - (237 % 11) = 5 (primeiro digito)
11 - (284 % 11) = 2 (primeiro digito)

Se o numero for maior que 9, consideramos 0
*/
// *********************************************captura elementos html*****************************************
const cpf =  document.querySelector('.cpf');
const btn = document.querySelector('.botao');
const resposta = document.querySelector('.res')
// ************************************declaracao variavel para recebimento cpf********************************
let cpfValido;
// let cpf = '070.987.720'; //recebendo cpf

// ****************************************validacao 1º digito do cpf*******************************************
function cpfParte1(){
    let cpfLimpo = cpf.value.replace(/\D+/g, '') //exprecao regular tudo que nao for numero substitui por nada
    console.log(cpfLimpo);
    let lista = Array.from(cpfLimpo); //trnasforma o cpf limpo em array
    return cpfValido = validacaoCpf(lista, 10); // chama funcao de validacao de digito e passa como parametro o array dentro dalista e o valor do contador para validar o 1º digito.
}

// **********************************************validacao 2º digito cpf******************************************
function cpfParte2(){
    const lista2  = Array.from(cpfParte1()); //pega os valores da validacao do 1º digito e transforma em um novo array e atribui a lista 2
    return cpfValido = validacaoCpf(lista2,11); //chama a funcao validadora de digito passando a lista 2 e o contador igual a 11
}

// **********************************************validacao do 1º e 2º digito para cpf**********************************
function validacaoCpf(lista, cont){
    let contador = cont; //inicia o contador com valor 10 para 1º e 11 para 2° digitos
    let cpfValido = ''; //limpa campo cpfValido
    //junta o calculo em um array atraves de reduce utilizando o acumulador para fazer a somatoria
    lista = lista.reduce((acumulador, valor) => { 
        //enquanto o contador for maior ou igual a 2 faz os calculos, decrementa o contador e concatena os valores em valor
        while(contador >= 2) {  
            acumulador += Number(valor) * contador;
            contador -= 1;   
            cpfValido += valor;
            return acumulador //retorna para que de continuação no calbeck realizado pelo acumulador do reduce
        }
        return acumulador //caso o contador seja maior nao acumula mais e retorna o valor 
    },0);
    //calculo para achar o digito caso seja maior que 9 atribui que vale 0
    lista = 11 - (lista % 11)
    if(lista > 9){
        lista = 0;
    }    
    return cpfValido += lista //retorna a concatenacao incrementado dos digitos 1 e 2 da verificacao
}

// *****************************************Evento de click do botao **********************************
btn.addEventListener('click', () =>{
    cpfParte1(); //ao clicar em enviar chama a primeira pate de validacao do cpf
    const validado = cpfParte2(); //chama a segunda parte de validacao e retorna o valor para a constante validado
    let cpfLimpo = cpf.value.replace(/\D+/g, ''); //transforma em um valor sem pontos e tracos

    //Condicao que compara se o numero digitado e valido após a verificação
    //comparação é feita pelo valor que foi retornado da funcao cpfPate2() e o cpfValidado
    if(cpfLimpo === validado){
        console.log(`O CPF: ${cpf.value} é valido`)
        resposta.innerHTML = `O CPF: ${cpf.value} é valido`

        
    }else{
        console.log(`O CPF: ${cpf.value} é invalido`)
        resposta.innerHTML = `O CPF: ${cpf.value} é invalido`    
    }
    cpf.value = '';
    cpf.focus();
})
/*




*/