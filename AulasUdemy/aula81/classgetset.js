/*const __velocidade = Symbol('_velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[__velocidade] = 0;
    }
    get velocidade(){
        console.log('Guetter')
        return this[__velocidade]
    }
    set velocidade(valor){
        console.log('Setter')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[__velocidade] = valor;
    }
    acelerar(){
        if(this[__velocidade] >= 100) return;
        this[__velocidade]++;       
    }
    freiar(){
        if(this[__velocidade] <= 0) return;
        this[__velocidade]--; 
    }
}

const carro = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
   carro.acelerar();
}
//carro.velocidade = 82;
console.log(carro.velocidade)
*/
//cria uma classe pessoa
class Pessoa {
    //define o construto da classe e os atributos
    constructor(nome, sobrenome){
        this.nome = nome; //atributos
        this.sobrenome = sobrenome;        
        }
        //invocado quando chamado no console p1.nomeCompleto
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
        //seta o novo valor par o guetter
        set nomeCompleto(valor){
            valor = valor.split(' '); //pega o valor da string e transforma em array
            console.log(valor);        //[ 'Denis', 'Diogo', 'dos', 'Santos' ]
            this.nome = valor.shift(); //xclui o primeiro valor do array e adiciona em nome
            console.log(valor) //[ 'Diogo', 'dos', 'Santos' ] excluiu o primeiro indice
            console.log(this.nome) // Denis foi adicionado a this.nome
            this.sobrenome = valor.join(' ') //pega o valor contido em array tira e separa por espaco
            console.log(valor) //[ 'Diogo', 'dos', 'Santos' ] valor que restou
            console.log(this.sobrenome) //Diogo dos Santos ~> retirou do array e separou por espaco.
        }
}

const p1 = new Pessoa('Denis', 'Santos');
p1.nomeCompleto = 'Denis Diogo dos Santos'
//p1.sobrenome = 'Anjos'
console.log(p1.nomeCompleto)