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
    constructor(numero){
        this.numero = numero;
    }
    tratando(numero){
        this.numero = numero.replace(/\D+/g, '');
        const novoCpf = this.numero.slice(0,-2)
        this.digito(novoCpf);
        
    }

    digito (novoCpf){
        if(typeof novoCpf !== 'number') return;
        const cpfArray = Array.from(novoCpf);
        console.log(cpfArray);
    }
}

const valido = new Cpf('383.716.198-63')

console.log(valido.tratando('383.716.198-63'))