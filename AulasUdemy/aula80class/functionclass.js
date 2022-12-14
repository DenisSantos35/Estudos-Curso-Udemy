//class function
class Pessoa{ //ciacao de classe comeca com class e nome para classe e abre um objeto.
    constructor(nome, sobrenome){ //delara um constructor(parametros)
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //na classe diferente da constructor fuction voce pode declarar os metodos direto que eles sao direcionados para o prototype da classe.
    falar(){
        console.log(`${this.nome} esta falando ola`);
    }
    comer(){
        console.log(`${this.nome} esta comendo`);
    }
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
}


//instanciar pessoa
const p1 = new Pessoa('Denis', 'Santos')
console.log(p1.falar())


//constructor function
function Pessoa1(nome, sobrenome){
    this.nome = nome ;
    this.sobrenome = sobrenome;    
}
Pessoa1.prototype.falar = function(){
    console.log(`${this.nome} esta falando ola`);
};
Pessoa1.prototype.comer = function(){
    console.log(`${this.nome} esta comendo`);
};
Pessoa1.prototype.beber = function(){
    console.log(`${this.nome} esta bebendo`);
};


//instanciar pessoa2
const p2 = new Pessoa1('Joyce', 'Alecrim');
const p3 = new Pessoa1('Marcia', 'Alecrim');
console.log(p2)
console.log(p3)