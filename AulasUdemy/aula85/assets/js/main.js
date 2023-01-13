class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario'); //captura a classe do formulario
        this.eventos(); // chama o metodo eventos
    }
    //metodos
    eventos(){
        //criacao de um evento para o formulario, todo vez que o button com type submit for clicado monitore
        this.formulario.addEventListener('submit',e => {
            this.handleSubmit(e); //quando for clicado chama o metodo e passa o evento qu foi capturado
        })
    }
    handleSubmit(e){
        e.preventDefault(); //previne para que não envie o formulario quando o botão for clicado
         const camposValidos = this.camposSaoValidos(); //chama metodo
        
    }
    camposSaoValidos(){
        let valid = true;
        for(let campos of this.formulario.querySelectorAll('.validar')){
            const label = campos.previousElementSibling.innerText;
            if(!campos.value){
                this.criaErro(campos, `Campo ${label} não pode estar em branco`);
                valid = false;
            }
        }
    }
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();