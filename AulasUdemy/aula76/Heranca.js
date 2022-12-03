//produto -> aumento, desconto
//camiseta = Cor, caneca = material
// *************************************Criacao Produto******************************************
function Produto(nome, preco){ //criacao de uma constructor function
   this.nome = nome; //recebe nome
   this.preco = preco //recebe preco
}
Produto.prototype.aumento = function (quantia){ //aumento criado dentro do prototype de Produto
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia){ //desconto criado dentro do prptotype de Produto
    this.preco -= quantia;
};

const produto = new Produto('gen', 111);

// ************************************Criacao Camiseta *****************************************
function Camiseta(nome, preco, cor){ //funcao criada para camiseta
    Produto.call(this, nome, preco) //recebe os parametros do objeto produto o nome e o 
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); // seta dentro de Camiseta atraves da criacao de objeto  o prototype
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10)

// ***************************************criacao caneca***************************************
function Caneca(nome, preco, material, estoque){  //cria funcao caneca
    Produto.call(this, nome, preco);    //herda de produto(this), nome e preco
    this.material = material;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function (valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
   
}
//primeiro lincar 
Caneca.prototype = Object.create(Produto.prototype); 
Caneca.prototype.constructor = Caneca;
//depois cria
const caneca = new Caneca('Grande', 21.50, 'Plastico', 5);
caneca.estoque += 0.14
caneca.desconto(13);

// *****************************************Criacao talheres*************************************
function Talheres(nome, preco, material){
    Produto.call(this, nome, preco); //herda de produto o nome e o preco
    this.material = material;
}
Talheres.prototype = Object.create(Produto.prototype)
Talheres.prototype.constructor = Talheres
const talheres = new Talheres('Garfo', 7.89, 'Inox');

talheres.aumento(10) //utilizando o setter

console.log(produto);
console.log(camiseta);
console.log(caneca, caneca.estoque); //utilizando o getter
console.log(talheres);

