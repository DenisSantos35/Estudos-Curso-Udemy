// ***************************class **************************************
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;        
    }
    falar(){
        console.log(`${this.nome} esta falando`)
    }
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}

const p1 = new Pessoa('Denis', 'Santos');
console.log(p1)
// *******************************factory function *****************************************
const fala = {
    falar(){
        console.log(`${this.nome} esta falando`)
    }
}

const falandoPrototype = {...fala}
function criaPessoa(nome, sobrenome){
    return Object.create(falandoPrototype, {
        nome: {value: nome},
        sobrenome: {value:sobrenome}
    });
}

const p2 = criaPessoa('Joyce', 'Alecrim');
console.log(p2)

// ***********************constructor function ****************************************

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.fala2 = function(){
    console.log(`${this.nome} esta falando`);
}

const p3 = new Pessoa2('Maria', 'Anjos');
console.log(p3);

// *****************************factory function *****************************************
const imc = {
    indice(){
        const imc = this.peso / (this.altura ** 2);
        console.log(imc);
    }
}

const imcPessoa = {...imc};
function criaPesso2(nome, sobrenome, altura, peso){
    return Object.create(imcPessoa,{
        nome: {value: nome},
        sobrenome: {value: sobrenome},
        altura: {value: altura},
        peso: {value: peso},
    });
}

const p4 = criaPesso2('Iste', 'pereira', 1.60, 98);

console.log(p4);