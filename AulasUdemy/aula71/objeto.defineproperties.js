//define property - defineProperties

function Produto(nome, preco, estoque){ //constructor function 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave estque ~> sim
        value: estoque, // retorna valor contido no atributo chave estoque, pode ser qualquer coisa function variavel etc
        writable: false, //libera ou nao o valor de value para ser alterado caso true e nao alterado caso false.
        configurable: true, //pode configurar a chave? caso true pode configurar e deletar caso false nao pode configurar nem deletar.
    });
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    });
    Object.defineProperties(this, {
        nome: {enumerable: true, value: nome, writable: true, configurable: false },
        preco: {enumerable: true, value: preco, writable: true, configurable: false},
    });


};

const p1 = new Produto('camiseta', 20.99, 3);
/*
p1.estoque = 10
p1.estoque = 30
delete p1.estoque
console.log(p1)
*/

console.log(Object.keys(p1))

for(let i in p1){
    console.log(i)
}