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

let cpf = '383.716.198-63'; //recebendo cpf
let cpfLimpo = cpf.replace(/\D+/g, '') //exprecao regular tudo que nao for numero substitui por nada
let lista = Array.from(cpfLimpo)
let contador = 10;
let cpfValido = '';

function validacaoCpf(lista){
    lista = lista.reduce((acumulador, valor) => { 
        while(contador >= 2) { 
            acumulador += Number(valor) * contador;
            contador -= 1;   
            cpfValido += valor;
            return acumulador
        }
        return acumulador
    },0);
    lista = 11 - (lista % 11)
    if(lista > 9){
        lista = 0;
    }
    console.log(lista)
    return cpfValido += lista 
}

cpfValido = validacaoCpf(lista);
contador = 11;
const lista2  = Array.from(cpfValido);
cpfValido = '';
cpfValido = validacaoCpf(lista2);


if(cpfLimpo === cpfValido){
    console.log(`O CPF: ${cpf} é valido`)
}else{
    console.log(`O CPF: ${cpf} é invalido`)
}
