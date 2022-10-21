const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function getSegundos(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12 : false,
        timeZone: 'GMT'
    });   
}


iniciar.addEventListener('click', function (){ 
    clearInterval(timer);
    relogio.classList.remove('pausado');    
    timer = setInterval(function (){           
        segundos++;         
        relogio.innerHTML = getSegundos(segundos);
    },1000);      
});

pausar.addEventListener('click', function (){
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function (){
    clearInterval(timer);
    relogio.classList.remove('pausado');
    segundos = 0;
    relogio.innerHTML = getSegundos(segundos);
});

