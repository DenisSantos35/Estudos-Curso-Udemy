/*
Java script e baseado em prototipos para passar propriedades e metodos de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez ,
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo(_proto_)
que vem da propriedade prototypeda função construtora que foi usada para cria - lo. Quando 
temtamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este
membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até
encontrar (ou não) tal membro.
*/



// Construtora - modulo (calsse)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Original =>' + this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.idade = function(){
    const data = new Date();
    const nascimento = data.getFullYear() - prompt('digite sua idade');
    return nascimento;
}

//Pessoa.prototype === pessoa1__proto____;
const pessoa1 = new Pessoa('Denis', 'Santos'); //<= Pessoa = Funcao construtora
const data = new Date(); // <= Date = Funcao construtora
const pessoa2 = new Pessoa('Joyce', 'Alecrim');//person2 = constructor function
//Pessoa.prototype.estouAqui = 'Hahahahah....'
//Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
console.log(Pessoa.prototype)
console.dir(pessoa1);
console.dir(data);

/*
//intância
const pessoa1 = new Pessoa('Denis', 'Santos'); // Person1 = constructor function
const pessoa2 = new Pessoa('Joyce', 'Alecrim');//person2 = constructor function

console.dir(pessoa1);
console.dir(pessoa2);
*/



