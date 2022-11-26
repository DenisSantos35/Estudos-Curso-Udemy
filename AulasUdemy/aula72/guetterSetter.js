//definePropertie ~> guetter e setter
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostrar chave [yes];
        //value: estoque, // valor [contido no atributo estoque];
        //writable: true, // pode alterar [yes];
        configurable: true, //pode apagar [yes];
        get: () => {    //servira apenas para reornar o valor contido dentro de estoque.
            return estoquePrivado;
        },
        set: function(valor){ //o setter vais settar o valor do guetter;
            //console.log(valor)
            //throw new TypeError('mensagem');
            if(typeof valor !== 'number'){
                console.log('ERRO!!! Valor invalido')
                return;
            }
            estoquePrivado = valor;
        }
    });

}
function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            if(typeof valor === 'number'){
                console.log('Erro');
                return
            }
        }
    }
}

const p1 = new Produto('Shirt', 20, 3);
//p1.estoque = 5
console.log(p1);
//para acessar o valor de guetter pegamos a constante que recebe o objeto e o metodo ao qual esta sendo retornado para o guetter
p1.estoque = 1000
console.log(p1.estoque) //3

const p2 = criaProduto('TV');
p2.nome = 'computador   '
console.log(p2.nome)
