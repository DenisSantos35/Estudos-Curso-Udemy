/*
const _velocidade = Symbol('_velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade]= 0;
    }
    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor != 'number') return;
        if(valor >= 100 || valor <= 0)return;
        this[_velocidade] = valor
        
    }
    get velocidade(){
        console.log('GETTER')
        return this[_velocidade];
    }
    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
console.log(c1)
for(let valor = 0; valor <= 110;valor++){
    c1.acelerar();
}
c1.velocidade = 88;
console.log(c1.velocidade)
*/

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
    set nomeCompleto(valor){        
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ')

    }
}

const p1 = new Pessoa('Denis', 'Santos')
p1.nomeCompleto = 'Marcos antonio mariano de souza'
console.log(p1.nomeCompleto)