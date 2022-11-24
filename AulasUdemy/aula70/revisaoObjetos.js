//Literal de um objeto {}
const obj = {
    nome: 'Denis',   //key = nome
    sobrenome: 'Santos',  //key sobrenome    
};

/*
//para acssar as chaves utilisamos notacao de ponto
console.log(obj.nome);
console.log(obj.sobrenome);
//ou tambem podemos utilizar notacao de colchetes
//na notacao de colchetes observa que precisa que a chave selecionada venha entre aspas
console.log(obj['nome']);
console.log(obj['sobrenome']);
//ou podemos tambem acessar sem aspas se atribuirmos a chave a uma variavel
const nom = 'nome';
const sobre = 'sobrenome';
console.log(obj[nom]);
console.log(obj[sobre]);
*/

/*
//podemos utilisar o construtor de objetos new object();
const pessoa = new Object();
pessoa.nome = 'Joyce';
pessoa.sobrenome = 'Alecrim'
console.log(pessoa) //{ nome: 'Joyce', sobrenome: 'Alecrim' }
//para apagar uma chave do objeto utilizamos delete objeto.chave;
//delete pessoa.sobrenome
console.log(pessoa)//{ nome: 'Joyce' }

//criacao de metodos dentro de objetos
pessoa.mensagem = function(){
    console.log(`O ${this.nome} ${this.sobrenome} esta falando oi`)
}
pessoa.mensagem();
pessoa.idade = 32;
console.log(pessoa);
pessoa.getDataNascimento = function(){
    const data = new Date();    
    return data.getFullYear() - this.idade
};
//console.log(pessoa.getDataNascimento());
//iteracao para ver as chaves do objeto

for(let key in pessoa){
    console.log(key, "=" , pessoa[key])
}
*/
//factory function cria objeto / constructor function / class

function Pessoa(nome, sobrenome, idade, endereco, telefone){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.endereco = endereco;
    this.telefone = telefone;

    //para travar todo o objeto se colocarmos this dentro do object.freeze(this); não consegiuiremos alteraro objeto 
    //Object.freeze(this);
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome} de idade ${this.idade} anos, morador do end.: ${this.endereco}, telefone para contato
        ${this.telefone}`;
    }
};
//palavra new cria um objeto vazio {}
//palavra this atrela o objeto a ele
const p1 = new Pessoa('Denis', 'Santos',31,'Rua Higino Archetti Netto','(16) 98834-1171');
//para travar o objeto uilizamos os metodos object.freeze(constante);
//Object.freeze(p1);
p1.nome = 'Marcos';
p1.sobrenome = 'Antonio';
const p2 = new Pessoa('Maria', 'Silva', 35, 'Rua dos Ventos', '(16) 99664-4889' );
/*console.log(p1);
console.log(p1.nomeCompleto());
console.log(p2)
console.log(p2.nomeCompleto())
*/
p1.fala = function(){
    return 'oi'
}


console.log(p1);

/*
function criaObjeto(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
    return
};

const objeto2 = criaObjeto('Denis', 'Santos');

console.log(objeto2.nomeCompleto)
*/