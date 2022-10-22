//capturar dados do html
const relogio = document.querySelector('.relogio');
//const iniciar = document.querySelector('.iniciar');
//const pausar = document.querySelector('.pausar');
//const zerar = document.querySelector('.zerar');
function relogio(){
    let segundos = 0;
    let timer;

    document.addEventListener('click', function(e){
        const elemento = e.target; //target mostra o elemento ao qual esta sendo clicado e salva na variavel
        if(elemento.classList.contains('zerar')){
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00'
            relogio.classList.remove('pause');
        }
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pause');
        }
        if(elemento.classList.contains('iniciar')){
            clearInterval(timer); 
            initHour();
            relogio.classList.remove('pause');
        }


    })

    //funcao para formatar horario 
    function getHorario(segundos){
        const data = new Date(segundos * 1000 ); //segundos = 0 pega data inicio 1970 as 21:00
        return data.toLocaleTimeString('pt-br',{
            hour12 : false,
            timeZone : 'UTC'
        });
    }
    function initHour(){
        return timer = setInterval(function(){
            segundos++;         
            relogio.innerHTML = getHorario(segundos)
        },1000);
    }
    /*
    //monitorar eventos dos botoes
    iniciar.addEventListener('click', function(){ 
        clearInterval(timer); 
        initHour();
        relogio.classList.remove('pause');     
        
    });

    pausar.addEventListener('click', function(){
        clearInterval(timer);
        relogio.classList.add('pause');
    });
    zerar.addEventListener('click', function(){
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pause');

    });*/
}
relogio();
