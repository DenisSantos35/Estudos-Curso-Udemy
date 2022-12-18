/*const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 1;
    }
    get velocidade(){
        return this[_velocidade];
    }
    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100) return;
        if(valor <= 0) return;
        console.log(`setter ${valor}`);
        this[_velocidade] = valor;
    }
    acelerar(){
        //if(typeof this.[_velocidade] !== 'number') return;
        if(this[_velocidade] >= 100)return;
        this[_velocidade]++;
    }
    freiar(){
        if(typeof this[_velocidade] !== 'number') return;
        if(this[_velocidade] <= 0)return;
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
    c1.acelerar();    
}
c1.velocidade = -10;
console.log(c1.velocidade)
c1.velocidade
*/

class Pessoa{
    constructor(nome,sobrenome){
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
        console.log(valor);
    }
}

const p1 = new Pessoa('Denis', 'Santos');
p1.nomeCompleto = 'Maria dos anjos vieira dos santos'
console.log(p1.nomeCompleto)