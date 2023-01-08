function teste(){
    console.log('Toda vez que colocar uma funcao global dentro de um constructor so por ter a palavra NEW ela e invocada')
}

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    //metodos de instancia
    aumentarVolume(){
        this.volume += 2;
        
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    //metodo estatico
    //um metodo estatico e criado apartir da function pre estabelecida static.
    //o metodo atribuido com a palavra static somente e acessado pelo objeto pai que o construi nao podendo ser herdado
    static trocaPilha(){ 
        console.log('OK, Vou trocar')
    }
    static chaveDeAcesso(){
        console.log(`A senha é ${Math.random().toFixed(1) * 10}`)
        console.log(this)
    }
    static soma(x,y){
        return x + y;
    }
}

const tv1 = new ControleRemoto('Sansung');
tv1.aumentarVolume();
tv1.aumentarVolume();
console.log(tv1);

const tv2 = new ControleRemoto('LG');
tv2.volume = 15;
tv2.aumentarVolume();
ControleRemoto.trocaPilha();
ControleRemoto.chaveDeAcesso();
console.log(tv2);
console.log(ControleRemoto.soma(5,6));

