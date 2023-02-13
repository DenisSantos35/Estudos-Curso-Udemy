/*na função escopo sera atribuido para formulario o formulario do html usando a class */ 
function escopo(){
    let formulario = document.querySelector('.formulario')
    
/* na funçao manipular evento vamos previnir que um evento ocorra com uma submição
    passando parametro evento como objeto*/ 
    function manipularEvento(evento){
        evento.preventDefault();
        
        
/* podemos previnir o evento da seguinte forma tambem
    formulario.onSubmit = funtion manipularEvento(evento){
        evento.prenventDefault
    }
    */
    }
/*addEventListener = siginifica adiciona escutador de eventos
    submit = evento enviar*/
    //form.escutador de evento (tipo de evento, funcao) 
    formulario.addEventListener('submit', manipularEvento); /* */ 
}
escopo();