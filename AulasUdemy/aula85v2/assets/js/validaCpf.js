class ValidaCpf{ // cria uma classe para validar o cpf
    constructor(cpfEnviado){ //no construtor recebe o cpf enviado pela instancia
                            //objeto, parametro,
        Object.defineProperty(this,'cpfLimpo',{ //this refere ao construtor ValidaCpf
                                                //cpfLimpo e um atributo criado apartir do object.defineproperty que recebe configurações, seu valor refere ao cpfEnviado recebido no constructor e tratado com replace.
            // configura o atributo cpfLimpo
            writable: false, 
            enumerable: true,
            configurble: false,
            value: cpfEnviado.replace(/\D+/g, ''),
        });
    }
    eSequencia(){
        //retorna a seguinte condição
        //o primeiro valor do cpf limpo e repetido a quantidade de vezes do seu tamanho e comparado se e igual ao cpflimpo retornando vrdadeiro ou falso.
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
    valida(){
        if(!this.cpfLimpo) return false; //caso nao exista valor no cpf limpo retorna falso
        if(typeof this.cpfLimpo !== 'string') return false; // caso cpf limpo não seja string retorna falso
        if(this.cpfLimpo.length !== 11) return false; // caso não tenha 11 caracteres retorna falso
        if(this.eSequencia()) return false; // verifica se o metodo eSequencia retornou verdadeiro ou falso.
        this.geraNovoCpf() //caso tudo acima seja verdadeiro chama este metodo 
        return this.novoCpf === this.cpfLimpo;
    }
    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0,-2); //atribui a cfParcial o valor de cpfLimpo comecando da posicao 0 ate a posicao-2 excluindo os 2 ultimos numeros
        const digito1 = ValidaCpf.geraDigito(cpfParcial); //chama metodo gera digito e passa cpfParcial como parametro e o retorno atribui ao digito1
        const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1) //chama metodo gera digito e passa cpfParcial concatenado com digito1 como parametro e o retorno atribui ao digito2
        this.novoCpf = cpfParcial + digito1 + digito2 //cria atributo novoCpf e atribui a concatenacao do valor contido em novoCpf, digito1 e digito2
        console.log(this.novoCpf)      
    }
    static geraDigito(cpfParcial){
        //maneiras de transformar string em array
        //const cpfArray = cpfParcial.split('');
        //const cpfArray =    Array.from(cpfParcial)
        let reverso = cpfParcial.length + 1 //recebe o tamanho do cpf parcial + 1, no caso do pimeiro digito 10, segundo digito 11
        let soma = 0;       
        for(let valor of cpfParcial){            
            if(reverso >= 2){
                soma = soma + (Number(valor) * reverso);
            }            
            reverso--        
        }
        const digito = 11 - (soma % 11)
        return digito > 9 ? '0' : String(digito);
        
    }
    
}

//instancia a classe
/*
const validaCpf = new ValidaCpf('')
console.log(validaCpf)
if(validaCpf.valida()){
    console.log('CPF Valido')
}else{
    console.log('CPF invalido')
}*/