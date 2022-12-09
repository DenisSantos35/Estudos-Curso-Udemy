// ****************Factory function ******************************************

//mixing => usa coisas aleatorias e um objeto compoe outro objeto
//eclaro a cada constante um objeto especifico;
const falar =  {
    //metodo 1 
    falar (){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    },
};

const beber = {
    //metodo 3
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    },
};

const comer = {
    //metodo 2
    comer(){
        console.log(`${this.nome} ${this.sobrenome} está comendo`);
    }
};

//atribuo a uma constante por spreding ou assign (copia das constantes que contem os objetos)
//sempre criando outro objeto

//const pessoaPrototype = {...falar, ...beber, ...comer};
const pessoaPrototype = Object.assign({}, falar, comer, beber) ; //com object.assign(objetovazio, arg1, arg2, ..., argn); 

//Para criar uma factory function com protoype segue se seguinte lógica.
//cria funcao e passa parametros caso queira criar argumentos
function criaPessoa(nome, sobrenome){
    
    //no return puxamos a constante global atraves do object.create(const global, object{definicoes de propriedade});
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}
const p1 = criaPessoa('Denis', 'Santos')
console.log(p1)




/*


// ****************Factory function ******************************************

//Para criar uma factory function com protoype segue se seguinte lógica.

//cria funcao e passa parametros caso queira criar argumentos
function criaPessoa(nome, sobrenome){
    //declara constante para recber um objeto com todos os metodos
    const pessoaPrototype = {
        //metodo 1 
        falar (){
            console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
        },
        //metodo 2
        comer(){
            console.log(`${this.nome} ${this.sobrenome} está comendo`);
        },
        //metodo 3
        beber(){
            console.log(`${this.nome} ${this.sobrenome} está bebendo`);
        },
    }
    //fora da constante retorna para a funcao um object.create com o nome da constante que 
    //esta recebendo todos os metodos,
    //caso queira criar se atributos coloca se a, cria um objeto, cria se o atributo onde 
    //cada atributo apos dois pontos (:) recebe um outro objeto com os argumentos de defineProperties.
    //value: parametro;
    //configurable: true or false;
    //enumerable: true or false;
    //writable: true or false;
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}
const p1 = criaPessoa('Denis', 'Santos')
console.log(p1)
*/
// ********************* constructor function *********************************************

function CriaPessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

CriaPessoa.prototype.falar2 = function(){
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
};

CriaPessoa.prototype.beber2 = function(){
    console.log(`${this.nome} ${this.sobrenome} está bebendo`);
};

CriaPessoa.prototype.comer2 = function(){
    console.log(`${this.nome} ${this.sobrenome} está comendo`);
}

const p2 = new CriaPessoa('Maria', 'Santos');
console.log(p2)