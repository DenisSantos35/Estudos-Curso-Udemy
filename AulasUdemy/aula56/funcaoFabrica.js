/*
function criaPessoa(nome = 'joyce', sobrenome = 'pereira', peso = 100, altura = 1.60){
    nome;
    peso;
    altura;
    sobrenome; 
    console.log(nome, sobrenome, altura, peso)
    return {
        nome: 'Denis',
        sobrenome: 'Santos',
        peso: 80,
        fala (assunto){
            return `Nome ${this.nome} ${this.sobrenome} pesa ${this.peso} diz ${assunto} `
        },
        altura: 1.80, 
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return `Seu imc é de ${indice.toFixed(2)}`
        }


    }   
}

const p1 = criaPessoa();
//console.log(p1)
const mensagem = p1.fala('Hello!!');
//console.log(mensagem)

console.log(mensagem, p1.imc);

const localWeb = JSON.stringify(p1);
console.log(localWeb);

localStorage.setItem('Pessoa', localWeb);


function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        peso,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){            //console.log(valor)
                valor =  valor.split(' ');
                //console.log(lista);
                this.nome = valor.shift();
                //console.log(valor);
                this.sobrenome = valor.join(' ')

        },
        fala: function (assunto){
            return `Nome ${this.nome} ${this.sobrenome} pesa ${this.peso} diz ${assunto} `
        },
        altura, 
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return `Seu imc é de ${indice.toFixed(2)}`
        }
    }
}

const pessoa = criaPessoa('Denis', 'Santos');
pessoa.nomeCompleto = 'Joyce Alecrim Pereira';
console.log(pessoa.nomeCompleto);
pessoa.nomeCompleto = 'Joao inacio da silva'
console.log(pessoa.nomeCompleto);

const pessoa = criaPessoa('Denis', 'Santos', 60, 1.68);
const pessoa2 = criaPessoa('Joyce', 'Alecrim', 70, 1.72);
const indiceCorporal = pessoa.imc;
console.log(`${pessoa.fala(': Quero saber meu imc?')}`)
console.log(`${pessoa2.fala('')} ${pessoa.imc}`)


const cadastro = JSON.stringify(pessoa);
const cadastro2 = JSON.stringify(pessoa2);

localStorage.setItem('cadastro', cadastro);
localStorage.setItem('cadastro2', cadastro2);

const conversaoCadastro = localStorage.getItem('cadastro');
const conversaoCadastro2 = localStorage.getItem('cadastro2');

const resultado = JSON.parse(conversaoCadastro);
const resultado2 = JSON.parse(conversaoCadastro2);

console.log(resultado)
for( let i in resultado){
    document.write(resultado[i])
    document.write(' ')
}
document.write('<br>')
for( let i in resultado2){
    document.write(resultado2[i])
    document.write(' ')
}
*/



