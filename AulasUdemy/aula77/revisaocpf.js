function Validacaocpf(cpf){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpf.replace(/\D+/g, '')

        },
    });
}

Validacaocpf.prototype.validacao = function () {
    if(typeof this.cpfLimpo === undefined) return false;    
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencial()) return false;
    const cpfReduzido = this.cpfLimpo.slice(0,-2);
    const digito1 = this.getDigito(cpfReduzido);
    const digito2 = this.getDigito(cpfReduzido + digito1);
    const cpfValidado = cpfReduzido + digito1 + digito2;
    
    return cpfValidado === this.cpfLimpo;
};

Validacaocpf.prototype.isSequencial = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return this.cpfLimpo === sequencia ? true : false
};

Validacaocpf.prototype.getDigito = function(cpfReduzido){
    const arrayCpf = Array.from(cpfReduzido);
    let contador = arrayCpf.length + 1
    let digito = arrayCpf.reduce((acumulador, valor) => {
        acumulador += valor * contador;
        contador--;
        return acumulador;
    },0);
    digito = 11 - (digito % 11)
    return digito > 9 ? '0' : String(digito);
};



const construcaoCpf = new Validacaocpf('399.717738-48');

construcaoCpf.validacao()? console.log(`O CPF ${construcaoCpf.cpfLimpo} é valido`) :
                        console.log(`O CPF ${construcaoCpf.cpfLimpo} é invalido`)