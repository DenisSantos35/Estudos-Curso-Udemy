// ****************************************class****************************************
//criacao de uma classe dispositvo eletronico
class DispositivoEletronico {
    constructor(nome){ //dfine o construtor e passa o nome como parametro;
        this.nome = nome; // cria um atributo para o objeto com valor nome;
        this.ligado = false; //inicializa um novo atributo como falso
    }
    ligar(){ //criaçao de metodo em classe e feito fora do construtor, e e enviado direto para o prototipe.
        if(this.ligado){ //condição para o metodo criado 
            console.log(this.nome + 'Já esta ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(! this.ligado){
            console.log(this.nome + 'Já esta desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('smartphone'); // constante d1 recebe classe e passa parametro 'Smartphone' para nome.

//saidas para usuario.
console.log(d1);
d1.ligar();
console.log(d1);

//para herdar atributos de um pai se utilza extends e o nome do pai seguido de chaves
class Smartphone extends DispositivoEletronico {
    //caso queira criar mais atributos cria se um novo constructor e sempre se passa um super(valor);

    constructor(nome, cor, modelo){
       super(nome); //herda os parametros ja construidos em DispositivoEletronico.
       this.cor = cor; //cria novo atributo para cor;
       this.modelo = modelo; //crai novo atributo para modelo;
    }
};

// instancia Smartphone para d3
const d3 = new Smartphone('Iphone', 'Preto', 'MAC');
d3.ligar()
console.log(d3)

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, temWifi){
        super(nome);
        this.cor = cor; 
        this.temWifi = temWifi;
       }
       ligar(){
        console.log('Voce alterou o metodo ligar do pai DispositivoEletronico')
       }
       inicializar(){
        console.log('Seu ' + this.nome + ' foi inicializado');
       }
}

const d5 = new Tablet('Accer', 'Branco', 'yes');
d5.ligar();
d5.inicializar();
console.log(d5);

// ***************************************constructor********************************************
function DispositivoEletronico2(nome){
    this.nome = nome;
    this.ligado = false;
}
DispositivoEletronico2.prototype.ligar2 = function(){
    if(this.ligado){
        console.log(this.nome + 'já esta ligado');
        return;
    }
    this.ligado = true;
}
DispositivoEletronico2.prototype.desligar2 = function(){
    if(! this.ligado){
        console.log(this.nome + 'Já está desligado');
        return;
    }
    this.ligado = false;
}

const d2 = new DispositivoEletronico2('TV');
console.log()
console.log(d2)

function Tv (nome, ligado, cor, modelo){
    
    DispositivoEletronico2.call(this, nome, ligado);
    this.cor = cor;
    this.modelo = modelo;
}


Tv.prototype = Object.create(DispositivoEletronico2.prototype);
Tv.prototype.constructor = Tv;
Tv.prototype.ligar2 = function(){
    console.log('Voce alterou o metodo ligar de DispositivoEletronico2');
}

const d4 = new Tv('Samsung');
d4.cor = 'Preto'
d4.modelo = 'Galaxy S4'
d4.ligar2();
console.log(d4)