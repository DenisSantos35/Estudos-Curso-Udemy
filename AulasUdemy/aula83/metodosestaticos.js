//metodos estaticos

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //metodo de instancia
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    //metodo estatico
    static trocaPilha(){
        console.log('ok vou trocar.')
    }
    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('Samsung');
const controle2 = new ControleRemoto('LG');
console.log(controle1)
for(let i = 0; i <= 8; i++){
    controle1.aumentarVolume();
    controle2.diminuirVolume();
}
console.log(controle1);
console.log(controle2);
ControleRemoto.trocaPilha()
console.log(Math.random());
const soma = ControleRemoto.soma(10, 20);
console.log(soma)

class ControleCarrinho extends ControleRemoto {
    constructor(tv,cor){
        super(tv);  
        this.cor = cor;

    }
}

const c2 = new ControleCarrinho('maclarem', 'prata');
console.log(c2)