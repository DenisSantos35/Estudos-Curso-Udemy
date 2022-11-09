//factory functions -> funcoes que retornao objetos

function getObjeto (nome, sobrenome, a, p){
    return {
        nome, //atributo e chamado sem parenteses (.nome)
        sobrenome, // atributo e chamado sem parenteses (.sobrenome)

        //Getter
        get nomeCompleto(){
            const criaNome = `${this.nome} ${this.sobrenome}`;
            return criaNome;
        },

        //Seter
        set nomeCompleto(valor){
            valor = valor.split(' '); //transforma frase em array separado por  espaço
            this.nome = valor.shift(); // faz mesma funcao pop e exclui o primeiro nome do array. busca o  primeiro indice do valor retira do array e armazena no atributo nome do objeto this(pessoa);
            this.sobrenome = valor.join(' '); // separa array valor restante com espaco, retorna para string com espaco as palavras que sobraram e aribui para o atributo this(pessoa) referente a sobrenome.
        },

        /*fala: function(assunto){ //forma de criar um metodo dentro de objeto ou
            return `O ${this.nome} esta ${assunto}.`;
        }*/

        fala(assunto){ //funcao objeto e chamado com parenteses (.fala())
            return `O ${this.nome} esta ${assunto}.`;
        },

        altura: a, //atributo obs.: quando coloca dois pontos(:) apos o atributo e coloca uma palavra esta atribuindo um novo nome para aquele atributo
        peso: p,
        //Getter = quando so queremos obter um valor 

        get imc(){ //funcao objeto e chamado com parenteses (.imc()) obs.: se colocar a palavra get antes do objeto ele passa a ser um atributo com isso para acessar nao se coloca os parenteses = (.imc)
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
    
}

const pessoa = getObjeto('Denis', 'Santos', 1.68, 50);

/*

console.log(pessoa.fala('dizendo Seu imc é igual a:'), pessoa.imc);


console.log(pessoa.nomeCompleto)
const pessoa2 = getObjeto('Luiz', 'Otavio', 1.6, 42);
console.log(pessoa2.fala(`dizendo seu imc é igual a: `), pessoa2.imc);
*/

pessoa.nomeCompleto = 'Joyce Alecrim Pereira'

console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa.fala('dizendo olá'));


const pessoa2 = getObjeto('Marcos', 'Santos', 1.40, 70);
const pessoa3 = getObjeto('Denis', 'Santos', 1.90, 90);
const pessoa4 = getObjeto('Junior', 'Santos', 1.68, 50);

console.log(pessoa2.imc);
console.log(pessoa3.imc);
console.log(pessoa4.imc);


