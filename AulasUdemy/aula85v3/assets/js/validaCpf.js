class ValidaCpf{
    constructor(cpfEnviado){
        this.cpfEnviado = cpfEnviado;
        Object.defineProperty(this, 'cpfLimpo',{
            value: cpfEnviado.replace(/\D+/g,''),
            enumerable: true,
            configurable: false,
            writable: false
        });
    }
    valida(){
        if(! this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11)return false;
        if(this.esequencia()) return false;
        const validado = this.geraNovoCpf();
        return validado;
    }
    esequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
        const cpf = cpfSemDigitos + digito1 + digito2;
        return cpf === this.cpfLimpo;

    }
    static geraDigito(cpfSemDigitos){
        let reverso = cpfSemDigitos.length + 1;
        let somatoria = 0;
        for(let valor of cpfSemDigitos ){
            somatoria += (reverso * Number(valor));
            reverso--
        }
        const digito = 11 - (somatoria % 11);
        return digito > 9 ? '0' : String(digito);
    }

}
/*
const validaCpf = new ValidaCpf('383.716.198-62');
if(validaCpf.valida()){
    console.log(`O CPF ${validaCpf.cpfEnviado} é valido`)
}else{
    console.log(`O CPF ${validaCpf.cpfEnviado} é invalido`)
}*/