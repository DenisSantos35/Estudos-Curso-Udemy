// **********************************class*************************************
class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' Dispositivo já esta ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(! this.ligado){
            console.log(this.nome + 'Dispositivo desligado');
            return;
        }
        this.ligado = false;

    }
}
const d1 = new DispositivoEletronico('Smartphone');
console.log(d1)
d1.ligar()
console.log(d1)
d1.ligar();
console.log(d1)

class Smartphone extends DispositivoEletronico{}

const s1 = new Smartphone('iphone');
console.log();
console.log(s1);
s1.ligar();
console.log(s1)
console.log();

// *********************************************constructor*******************************************
function DispositivoEletronico2(nome){
    this.nome = nome;
    this.ligado = false;
}
DispositivoEletronico2.prototype.ligar2 = function(){
    if(this.ligado){
        console.log(this.nome + ' Já esta ligada');
        return;
    }
    this.ligado = true;
}

DispositivoEletronico2.prototype.desligar2 = function(){
    if(! this.ligado){
        console.log(this.nome + ' Já esta desligado');
        return;
    }
    this.ligado = false;
}

const d2 = new DispositivoEletronico2('TV');
console.log(d2)
d2.ligar2()
console.log(d2)

function Tv(nome, ligado){
    DispositivoEletronico2.call(this, nome, ligado);
}

Tv.prototype = Object.create(DispositivoEletronico2.prototype);
Tv.prototype.constructor = Tv;

const televisao = new Tv('Samsung');
console.log();
console.log(televisao)
televisao.ligar2();
console.log(televisao)
console.log();
