const produto = new Object();
produto.nome = 'Caneca';
produto.preco = 1.80
console.log(produto)
const copiaProduto = {...produto};
console.log(copiaProduto)
copiaProduto.nome = 'Abajur'
console.log(copiaProduto, produto)
const copiaProduto2 = Object.assign({}, copiaProduto);
console.log(copiaProduto2)
copiaProduto2.nome = 'Bicicleta'
console.log(copiaProduto, copiaProduto2)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
Object.defineProperty(produto, 'nome',{
    
    enumerable: true,
    value: 'objeto'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

for(let [valor, i] of Object.entries(produto)){
    console.log(valor, i)
}