//metodos estaticos
//criacao de classe controle remoto
class ControleRemoto {
    constructor(tv){ //torna classe construtora e recebe um parametro tv
        //atributos
        this.tv = tv; //cria atributo tv
        this.volume = 0; //cria atributo volume e inicializa com 0
    }
    //metodo de instancia
    aumentarVolume(){  // metodo para aumentar volume
        this.volume += 2; //volume recbe a cada chamada + 2 e atribui ao atributo o novo valor
    }
    diminuirVolume(){ //metodo para diminuir
        this.volume -= 2; //atributo pega o valor que contem em volume e diminui em 2
    }
    //metodo estatico
    static trocaPilha(){  //para criar um metodo statico que outra funcao noa pode herdar utilizamos a palavra static
        console.log('ok vou trocar.')
    }
    static soma(x, y){
        return x + y;
    }
}

// 
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