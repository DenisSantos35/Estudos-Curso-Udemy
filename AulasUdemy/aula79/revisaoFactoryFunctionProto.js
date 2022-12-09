const falar = {
    falar(){
        console.log(`${this.nome} esta falando`)
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`)
    }   
};

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}
const pessoaPrototype = {...falar,...comer, ...beber}

function criaPessoa(nome, sobrenome){
    
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
        
    
}

const p1 = criaPessoa('Denis', 'Santos');
const p2 = criaPessoa('Maria', 'Anjos');
console.log(p1.comer());
console.log(p2.beber());

function CriaPessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;    
};

CriaPessoa2.prototype.fala = function (){
    console.log(`${this.nome} esta falando`)
}


const p3 = new CriaPessoa2('luiz', 'otavio');
console.log(p3.fala())

function CriaPessoa3(nome, sobrenome, idade){
    CriaPessoa2.call(this, nome, sobrenome);
    this.idade = idade;
}

CriaPessoa3.prototype = Object.create(CriaPessoa2.prototype);
CriaPessoa3.prototype.constructor = CriaPessoa3;
CriaPessoa3.prototype.fala = function(){
    console.log(`${this.nome} esta falando que tem ${this.idade} anos`)

}

const p4 = new CriaPessoa3('Joyce', 'Alecrim', 25);

console.log(p4.fala())