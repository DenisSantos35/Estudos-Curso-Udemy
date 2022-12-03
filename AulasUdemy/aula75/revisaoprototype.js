/*
const objA= {
    chaveA: 'Foi setado em objB o objA agora consigo acessar com objB.chaveA',
}



const objB = {
    chaveB: 'E possivel acessar esse objeto pelo objeto c caso seja setado'
}

const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB)

console.log(Object.getPrototypeOf(objC))
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
 Produto.prototype.desconto = function (desc){
    return this.desconto = (this.preco * (desc / 100));
 }

 Produto.prototype.vfFinal = function (valor){
    return this.valorFinal = this.preco - (this.preco * (valor / 100)) ;
 }

const p1 = new Produto('camisa', 59.99);
p1.desconto(10)
console.log(p1)

const p2 = new Object()
p2.nome = 'caneca'
p2.preco = 300
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10);
p2.vfFinal(10);

console.log(p2)
