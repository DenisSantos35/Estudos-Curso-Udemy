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

class Cpf{
    constructor(numeroCpf){
        this.numeroCpf = numeroCpf;
        
    }
    
    extrairCpf(){
        let novoCpf = this.numeroCpf.replace(/\D+/g, '');
        let cpfArray = novoCpf.slice(0,-2)
         cpfArray = cpfArray.split('')
        console.log(cpfArray)       
        let digito1 = this.calcularDigito(cpfArray, 10);
        cpfArray.push(digito1)
        let digito2 = this.calcularDigito(cpfArray, 11);
        cpfArray.push(digito2)
        let valido = cpfArray.join('')
        if(valido == novoCpf){
            return true;
        }else{
            return false;
        }
       
    } 
    calcularDigito(valor, x){
       console.log(valor, x)
       let cont = x;
       let val = valor.reduce((somador, numero) => {
            if(cont >= 2){
                 somador = somador + (numero * cont)
                cont = cont - 1
                return somador
           }
           return somador
        },0);
        let digito = 11 - (val % 11);
        console.log(digito)
        if(digito > 9){
            return digito = 0;
        }else{
            return digito
        }
        
             
    }
}
let CPF = '399.717.738-47'
const cpf = new Cpf(CPF)
if (cpf.extrairCpf()){
    console.log(`o CPF ${CPF} é valido`)
}else{
    console.log(`o CPF ${CPF} é invalido`)
}