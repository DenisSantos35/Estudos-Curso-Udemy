//produto - aumento e desconto
//Camista = cor, caneca = material

//constructor function - construindo produto
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//criacao de metodo aumento e desconto fora da funcao e adicionando ao prototype da funcao produto
Produto.prototype.aumento = function (valor){
    this.preco += valor;
    return this.preco;
}

Produto.prototype.desconto = function (valor){
    this.preco -= valor;
    return this.desconto;
}

//criacao de nova constructor function para camiseta - com heranca de nome e preco de Produto
//utiliza se de onde queremos herdar no caso a heranca vira de produto
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

//Adicionar a heranca aumento e desconto de Produto em constructor Camiseta a  
//faz se a criacao atribuindo a Camiseta
Camiseta.prototype = Object.create(Produto.prototype);

//apos a criacao dentro do constructor Camiseta - faz com que o proóprio Camiseta seja o constructor do metodo.
Camiseta.prototype.constructor = Camiseta;

//Sobrescrevendo o prototype aumento

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

//criacao de novo constructor function para Material - com heranca de preco e produto
function Material(nome, preco, material){
    Produto.call(this,nome, preco);
    this.material = material;
}

//Adicionar a heranca aumento e desconto de Produto em constructor Material
Material.prototype = Object.create(Produto.prototype); 
//apos a criacao dentro do constructor Camiseta - faz com que o proóprio Camiseta seja o constructor do metodo.
Material.prototype.constructor = Material;

//constructor Caneca com guetter e setter
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    //criando guetter e setter - dentro de setter nao precisa de return
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: ()=> estoque,
        set: (valor) => {
            if(typeof valor !== 'number') return;
            estoque = valor;
        },
    });
}
//para minha Caneca Adiciona ao prototiype a criacao de um novo objeto
Caneca.prototype = Object.create(Produto.prototype);
//faca com que minha caneca seja consttutora do mertodo herdado de produto
Caneca.prototype.constructor = Caneca;



//atribuindo a Camiseta 
//atribuicao a constante produto o novo objeto(constructor function); 
const produto = new Produto('Camiseta', 10.00);
//atribuicao a constante camiseta o novo objeto(constructor function);
//atribuindo para camiseta a heranca de produto
const camiseta = new Camiseta('Polo', 18.90, 'Azul');
//atribuicao a constante materiao o novo objeto(constructor function);
const material = new Material('regata', 59, 'Seda');
//atribuicao a constante caneca o novo objeto(constructor function);
const caneca = new Caneca('caneca', 5.00, 'Aluminio', 8)



//saida para usuario
produto.aumento(10)
console.log(produto);
camiseta.aumento(10);
console.log(camiseta);
material.aumento(10);
console.log(material)
caneca.estoque = 30
console.log(caneca,'estoque = ' + caneca.estoque);
