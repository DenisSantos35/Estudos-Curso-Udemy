/*
//toda vez que cria um objeto o js chama a funcao new object -> object.prototype
const objA = {
    chaveA: 'A'
    //___proto___: object.prototype
};
const objB = {
    chaveB: 'B'
    //___proto___: object.prototype
};
const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);
*/

//constructor function
function Produto(nome, preco){
    this.nome = nome; //atributo objeto.nome
    this.preco = preco;

}
//constructor.__proto__.metodo = funcao(parametro){comando}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(almento){
     this.preco = this.preco + (this.preco * (almento / 100))
}

//p1 e atribuido a constructor function, com valores produto = camista, preco = 50
const p1 = new Produto('camiseta', 50);
p1.desconto(100); //passa 100 para o mtodo desconto e cria um novo valor dentro do objeto p1
p1.aumento(100);
console.log(p1) // mostra o interior do objeto p1

const p2 = { //cria outro objeto com nome = caneca e preco = 200
    nome: 'Caneca',
    preco: 200
};
//seta dentro de p2, o prototype Produto, assim p2 tem agora acesso aos metodos criado em p1 e reaproveita o metodo.
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(100); //metodo setado de p1 para dentro do prototype de p2
console.log(p2);

//objeto p3 faz a criacao de um objeto setando prototype Produto dentro de p3
const p3 = Object.create(Produto.prototype);
p3.preco = 100 // para que fucnione corretamente o atributo dentro de p3 precisa ter o mesmo nome do prototipo a ser reaproveitado e precisa pelo menos incializar com a criacao do atributo dentro do objeto p3
p3.aumento(50); //eranca de p1 adquirida o setar no object.create
console.log(p3);

//objeto p3 faz a criacao de um objeto setando prototype Produto dentro de p4 e adicionando configuraçoes ao atributo, lembrando que para o funcionamento e necessario que o nome que contem dentro do objeo precisa ter o mesmo nome que p1.
const p4 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },
    preco2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43,
    },
});

p4.aumento(100);
console.log(p4);
