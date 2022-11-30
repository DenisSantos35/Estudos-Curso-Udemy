function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let novoValor = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        //value: estoque,
        //writable: true,
        configurable: true,
        get: function(){
            return novoValor
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('valor invalido');
                
            }
            novoValor = valor;
            return novoValor;

        }
    });
}
function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '')
            nome = valor;
            return nome;
        }
    };
}

const p1 = new Produto('camisa', 99.99, 15);
p1.estoque = 12
console.log(p1.estoque)

const p2 = criaProduto('Calça');
p2.nome = 'Qualquer coisa'
console.log(p2.nome)