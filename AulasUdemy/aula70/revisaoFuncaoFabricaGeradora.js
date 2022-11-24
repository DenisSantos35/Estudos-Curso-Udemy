function Calculo(valor1, valor2){
    this.soma = (valor1, valor2) =>{
        return valor1 + valor2;
    };
    this.multiplicacao = (valor1, valor2) => {
        return valor1 * valor2;
    };
    this.dividir = (valor1, valor2) => {
        if(valor2 !== 0){
            return valor1 / valor2
        }else{
            return 'Erro!!! Não existe divisão por zero'
        }
    }

}

const calcular = new Calculo()

function* Geradora(){
    yield console.log(calcular.soma(10,12));
    yield console.log(calcular.multiplicacao(15,23));
    yield console.log(calcular.dividir(25, 5));
}

const gerarFuncao = Geradora();
console.log(gerarFuncao.next().value);
console.log(gerarFuncao.next().value);
console.log(gerarFuncao.next().value);



