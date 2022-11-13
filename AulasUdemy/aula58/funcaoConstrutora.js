// funcao construtora ~> constroi objetos
//funcao fabrica ~> fabrica objetos
// construtora ~> sempre iniciar o nome com letra maiuscula ~> Pessoa (new)
function Pessoa (nome, sobrenome){
 //pessoa.nome
    //metodos e atributo disponiveis so dentro da funcao
    const id = 123456789;

    const metodoInterno = function(){
        console.log('sou um metodo interno')
    };

    //metodos e atributos disponiveis fora da funcao
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome + ': criei um metodo com erown function')
    }
}

//para criar nova pessoa usar palavra new

const p1 = new Pessoa('Denis', 'Santos');
const p2 = new Pessoa('Joyce', 'Alecrim');

console.log(p1.nome);
console.log(p2.sobrenome);
p1.metodo();