/*const valores = [2,4,6,8]
valores.shift()
console.log(valores)
valores.pop()
valores.unshift(9)
console.log(valores)*/

/*const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;
const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

const pessoa1 = []; //criaaçao de array
const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}; //criação de objeto

console.log(pessoa2['nome'],pessoa2['idade'])
//ou
console.log(pessoa2.nome.toUpperCase(), pessoa2.idade)*/

/*function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Denis','Santos', 32)
const pessoa2 = criaPessoa('Maria','Vieira', 20)
const pessoa3 = criaPessoa('Joyce','Alecrim', 25)
const pessoa4 = criaPessoa('Lucas','Rodrigues', 13)
const pessoa5 = criaPessoa('Marta','Golveia', 55)
console.log(pessoa1.nome)
console.log(pessoa2.idade)
console.log(pessoa5.sobrenome)*/

const pessoa1 ={
    nome: 'Denis', 
    sobrenome: 'Santos',
    idade: 32,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta dizendo oi!!!`);
        console.log(`A minha idade atual é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++;
    }
    
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

