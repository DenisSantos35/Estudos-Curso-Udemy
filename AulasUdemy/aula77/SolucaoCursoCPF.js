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
// **********************funcao construtora que valida o cpf*****************************************
function ValidaCpf(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo',{ //definicao de propriedade e criacao de cpfLimpo: [getter]
        enumerable:true, //mostra valor de cpf
        //configurable: false,
        get: function(){
            return cpfEnviado.replace(/\D+/g, ''); //exprecao regular que aplicada ao reduce retira todos os espacos e traços.            
        },
             
   });
}
// *****************************metodo criado para o prototype do ValidaCpf ****************************
// ******valida*******************
/*nesta funcao temos os segunetes passos
    1 - verifica se o valor do argumento cpfLimpo é undefined se for retorna falso e não faz mais nada
    2 - verifica se o tamanho do cpfLimpo é diferente de 11 se for retorna falso
    3 - verifica se o método isSequencia criado no prototype é verdadeiro, se for retorna falso.
    4 - cria um cpf parcial onde e atribuido ao cpfParcial o valor do cpfLimpo da posicao 0 até a posição -2;
    5 - recebe no digito1 o valor retornado pelo metodo criado em creaDigito(parametro=cpfParcial);
    6 - recebe no digito2 o valor retornado pelo metodo criado em creaDigito(parametro=cpfParcial + digito1);
    7 - novoCpf recebe a concatenacao do cpfParcial mais os digitos gerados.
    metodo valida() retorna verdadeiro ou falso apartir da comparação do cpf limpo e do novocpf
*/
ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === undefined) return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    let digito1 = this.creaDigito(cpfParcial);
    let digito2 = this.creaDigito(cpfParcial + digito1);    
    const novoCpf = cpfParcial + digito1 + digito2;
    console.log(novoCpf)
    return novoCpf === this.cpfLimpo;
};
// *************************************creaDigito****************************************************
//Funcaa para receber parte dos numeros do cpf calcular e retornar os digitos.
//criacao de metodo creaDigito dentro do prototye do ValidaCpf
/* passos desta funcao
    1 - creaDigito e passado um parametro de cpfParcial
    2 - e criado um array e atribuido a uma constante => para criar array de uma string
    (Array.from(variavel, ou , constante)); 
    3 - atribui a um contador o tamanho de palavras dentro do array + 1
    4- aplica reduce retornando um unico valor acumulado
    5 - calcula se pra obter o digito do cpf
    6 - retorna o valor do digito caso seja menor que nove e 0 para maior de 9
    7 - atribui ao digito 1 o retorno
    8 - concatenta ao digito 2 e refaz a operacao
*/
ValidaCpf.prototype.creaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let cont = cpfArray.length + 1;
    const valor = cpfArray.reduce((acumulador, valor) => {
        acumulador += Number(valor) * cont;
        cont -=1;
        return acumulador;
    },0)
    const digito = 11 - (valor % 11)
    return digito > 9 ? '0' : String(digito);   
};
// **************************************isSequencia*********************************************
// neste metodo e retornado verdadeiro ou falso para o sequencial do digito que se encontra no indice 0 repetido sequencialmente a quantidade de caracteres do atributo.
/*
    1 - constante sequencia e atribuido o indice 0 repetido o tanto de vezes do tamanho do atributo a ser comparado.
    2 - se o atributo for igual a sequencia e retornado verdadeiro, que no valida fara um retorno falso nao deixando o cpf ser validado.
*/
ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return this.cpfLimpo === sequencia ? true : false
}
// ***************************************************************************************************
// ***********************************atribuicao da constructor function **************************
const cpf = new ValidaCpf('39971773848');
// ************************************************************************************************
// *resposta se o cpf e valido apartir de uma resposta verdadeira ou falsa************************
cpf.valida()? console.log('CPF valido') : console.log('CPF invalido');

console.log(cpf)