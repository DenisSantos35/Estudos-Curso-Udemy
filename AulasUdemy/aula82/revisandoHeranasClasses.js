class DispositivoEletronico{
    constructor(nome){
        //atributios
        this.nome = nome; //Atributo para receber nome do produto
        this.ligado = false; //Atributo para receber estado do produto
    }
    //metodos
    ligar(){ //metodo para ligar dispositivo
        if(this.ligado){
            console.log(`${this.nome} ja ligado`);
            return;
        }
        this.ligado = true;
    }
    desligar(){ // metodo para desligar dispositivo
        if(! this.ligado){
            console.log(`${this.nome} ja desligado`);
            return;
        }
        this.ligado = false;
    }
}
const _cor = Symbol('cor')

class Smartphone extends DispositivoEletronico{ //extends faz com que a nova classe herde da classe pai seus atributos e metodos.
    constructor(nome,cor, modelo){ //para criar novo atributo e necessario criar um constructor, passar nosparenteses os paramentos herdados da classe pai, chamar um super atribuindo os parametros da classe pai  criar os novos atribuos e metodos
        super(nome);
        this[_cor] = cor;
        this.modelo = modelo;
    }
    get cor(){
        console.log('Guetter')
        return this[_cor];
    }
    set cor(valor){
        this[_cor] = valor;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('Olha, você alterou o metodo ligar');
    }
    falaoi(){
        console.log(`${this.nome} esta falando ola`)
    }

}

const d1 = new DispositivoEletronico('SmartPhone');
const s1 = new Smartphone('Samsung', 'Azul', 'Galaxy S10');
const tb = new Tablet('Ipad', true)

console.log(d1)
console.log()
s1.ligar()
s1.cor = 'rose'
console.log(s1.cor)
console.log(s1)
console.log()
tb.temWifi = false;
console.log(tb)
tb.ligar()
tb.falaoi()