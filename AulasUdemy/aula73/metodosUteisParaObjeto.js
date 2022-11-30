// ja vimos
/*
object.keys (retorna chaves)
object.freeze (congela o objeto)
object.defineProperties (define varia propriedades)
object.defineProperty (definie uma propriedade)
*/

/*
object.values (retorna o valor do objeto e pode ser iteravel)
object.entries (retorna chave e o valor dentro de um array; podendo fazer destruturcao [chave, valor])
object.assign (des, any) (objeto de destino {}, objeto a ser copiado, {chave: outro objeto})
object.getOwnPropertyDescripitor(o, 'prop') (retorna as propriedades de uma chave de um objeto)
...(spread)(copia por espalhamento dentro de outro objeto)
*/

/* ************************************{...spred}*******************************************
//se elaborar um objeto e atrbuir ele a uma variavel sem espalhamento ambos ficaram sincronizados e tudo que acrescentar em um sera acrecenado em outro...
const produto = new Object();
produto.nome = 'caneca';
produto.preco = 1.80;
console.log(produto);
//para que um não fique sincronizado com o outro utilizamos spred {...objeto}, assim fazemos apenas uma copia e tudo que alteramos em um e independente do outro
const outraCoisa = {...produto};
console.log(outraCoisa)
produto.estoque = 10
outraCoisa.sobrenome = 'Santos'
delete produto.preco
console.log(outraCoisa, produto);
************************************************************************************************ */
/*
// ***********************************Object.assign({}) ***************************************

const produto = {nome: 'produto', preco: 1.80}
const caneca = Object.assign({}, produto, {material: 'vidro'});
produto.material = 'Porcelana'
produto.preco = 2.00.toFixed(2)
console.log(caneca)
console.log(produto)

// *********************************************************************************************
*/
/*
// ***************pior forma manual caso precise de apena uma propriedade**********************
const produto = new Object();
produto.nome = 'Produto';
produto.preco = 5.98;
produto.estoque = 3;

const caneca = {nome: produto.nome, estoque: produto.estoque};
console.log(caneca);
*/

/*
// *********************************object.keys, object.freeze***********************
const produto = {nome: 'copo', preco: 1.38}
Object.freeze(produto);
produto.nome = 'xicara'
console.log(produto)
console.log(Object.keys(produto))
*/

// ******************************Object.getOwnPropertyDescriptor*********************
/*
const produto = {nome: 'Talher', preco: 10.28, estoque: undefined };

Object.defineProperty(produto, 'estoque', {
    value: 20,
    enumerable: false,
    writable: false,

})
produto.estoque = 20
console.log(Object.getOwnPropertyDescriptor(produto, 'estoque'));
*/
// ******************************object.values*****************************************
/*
const produto = {nome: 'Talher', preco: 10.28, estoque: 30 };

console.log(Object.values(produto));
console.log(Object.keys(produto));
console.log(Object.entries(produto))
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}

for(let valor of Object.keys(produto)){
    console.log(valor)
}

for(let valor of Object.values(produto)){
    console.log(valor)
}
*/
const lista = ['Arroz', 'feijao', 'carne', 'salada'];
console.log(lista)
const [valor1, valor2, ...valor3] = lista //destruturacao sequencial e spred pega o restante
console.log(valor2)
