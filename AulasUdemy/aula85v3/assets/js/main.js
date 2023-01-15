class ValidaFormulario{
    constructor(){
        this.fomulario = document.querySelector('.formulario'); //
        this.eventos();
    }
    eventos(){
        this.fomulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhaValida = this.senhaSaoValidas();
        if(camposValidos && senhaValida){
            this.fomulario.submit();
            
        }
    }
    senhaSaoValidas(){
        let valid = true;
        const senha = this.fomulario.querySelector('.senha');
        const repetirSenha = this.fomulario.querySelector('.repetirSenha');
        const tamanhoSenha = senha.value;
        if(senha.value !== repetirSenha.value){
            this.mensagemErro(senha, 'Senha e repetir senha precisam ser iguais.')
            this.mensagemErro(repetirSenha, 'Senha e repetir senha precisam ser iguais.')
            valid = false;
        }
        if(tamanhoSenha.length > 12 || tamnahoSenha.length < 6 ){
            this.mensagemErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');
            valid = false;
        }
        return valid;   
    }
    camposSaoValidos(){
        let valid = true;
        for(let errorText of this.fomulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for(let campo of this.fomulario.querySelectorAll('.valida')){
            let label = campo.previousElementSibling.innerHTML
            if(!campo.value){
                this.mensagemErro(campo, `O campo ${label} esta vazio`);
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;        
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false; 
            }
           
           
        }       
        return valid;
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length > 12 || usuario.length < 3){
            this.mensagemErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if(!usuario.match(/^[a-zA-z0-9]+$/g)){
            this.mensagemErro(campo, 'Usuario precisa conter apenas letras e/ou numeros')
            valid = false;
        }
        return valid;

    }
    validaCpf(campo){
        let valid = true;
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valida()){
            this.mensagemErro(campo,'CPF invalido');
            valid = false
        }
        return valid;
        
    }
    
    mensagemErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();