class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get fala(){
        return console.log(this.nome + ' ' + this.sobrenome + ' ' + 'esta falando')
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function (){
    return console.log(this.nome + ' ' + this.sobrenome + ' ' + 'esta falando')
}

const p1 = new Pessoa('Denis', 'Santos');
const p2= new Pessoa2('Joyce', 'Alecrim');
console.log(p1.fala)
console.log(p1.nome, p1.sobrenome)

console.log(p2.falar())
console.log(p2.nome, p2.sobrenome)