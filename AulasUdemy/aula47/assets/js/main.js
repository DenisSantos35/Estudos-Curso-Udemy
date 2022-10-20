const iniciar = document.querySelector('.iniciar'); //botao iniciar html
const pausar = document.querySelector('.pausar'); //botao pausar html
const zerar = document.querySelector('.zerar'); // botao zerar html
const relogio = document.querySelector('.relogio'); //paragrafo com relogio
let segundos = 0;
let timer;

function getDateSeconds(seconds){ //funçao para passar somente segundos; java script recebe milesimos de segundos.
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pr-br',{
        hours12: false,
        timeZone: 'GMT'
    });
}

//nesta funçao iniciamos o relogio
function iniciarRelogio(){
    timer = setInterval(function (){ //variavel timer recebe a inicilaizaça do set interval
        segundos++;                     // a cada segundo inrementa mais um
        relogio.innerHTML = getDateSeconds(segundos); //formata a variavel segundo para data de hora
    }, 1000);

}

iniciar.addEventListener('click', function(event){  //addeventLidstener click adiciona evento ao clicar o botao realiza a sequenca abaixo.
    relogio.classList.remove('pausado'); //foi criado uma classe na css com nome pausado ao qual ao iniciar o metodo classList.remove = retira a cor red do paragrafo
    clearInterval(timer); // toda vez que clica no botao evita que um evento sobreponha outro
    iniciarRelogio(); //ao clicar iniciar chama a funçao iniciar relogio ao qual soma segundos e cham outra função que formata em relogio
    
});

pausar.addEventListener('click', function (event){ //
    clearInterval(timer);
    relogio.classList.add('pausado');
    
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = getDateSeconds(segundos);
});




