function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let valorEstoque = estoque; //esta recebendo o valor que esta sendo passado em estoque
    console.log(valorEstoque)
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: 'estoque',
        //writable: true,
        configurable: true,
        get: function(){
            //console.log(valorEstoque)
            return valorEstoque;
        },
        
        set: function(valor){
            valorEstoque = valor
            /*if(typeof valor !== 'number'){
                console.log('ERRO, Não é um valor valido...Digite um numero de estoque')
                return
            }*/
            if(isNaN(valor)){
                //console.log('ERRO, Não é um valor valido...Digite um numero de estoque')
                throw new TypeError('ERRO, Não é um valor valido...Digite um numero de estoque')
                
            }
            return valorEstoque            
        }
    });
}
function getProduto(nome,preco,estoque){ //factory function
    return{        
        get nome(){ //cria um atributo de nome e retorna o valor contido em nome
            return nome;
        },
        set nome(valor){ //capitura o valor do getter no caso get nome(); e passa como atributo o novo valor que foi solicitado, atribui se ao atributo nome o valor que esta sendo recebido e modifica - oretornando um novo valor.
            valor = valor.replace('coisa','') //neste caso ele recebeu em seu valor 'qualquer coisa' e cortou coisa e atribui apenas qualquer a valor.
            nome = valor; //o nome recebeu 'qualquer'
            if(typeof valor === 'number'){ //fez se o teste verificando se o valor dentro de valor era numero retornando um throw.
                throw new TypeError('Nome Invalido...');
            }
            return valor //retornou o novo valor contido
        },
        get preco(){
            return preco;
        },
        set preco(valor){
            preco = valor;
            if(isNaN(valor)){
                throw new TypeError('Erro!!! Valor invalido...')
            }
            return preco
        },
        get estoque(){
            return estoque;
        },
        set estoque(valor){
            estoque = valor;
            if(isNaN(valor)){
                throw new TypeError('Erro!!! Valor invalido...')
            }
            return estoque;
        }

    }
}

const p1 = getProduto('shirt', 50.00, 200);
p1.nome = 'qualquer coisa';
p1.preco = 25.90.toFixed(2);
p1.estoque = 40;
console.log(p1.nome, p1.preco, p1.estoque);

console.log(p1)
/*
const p1 = new Produto('Camisa', 3.00, 10);
console.log(p1);
p1.estoque = 'Valor'

console.log(p1.estoque)
*/