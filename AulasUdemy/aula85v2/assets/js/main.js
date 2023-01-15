class ValidaFormulario{
    constructor(){
    //atributos
        this.formulario = document.querySelector('.formulario'); //atribui ao objeto formulario o form do html
        this.eventos(); //chama metodo evento
    }
    //metodos
    eventos(){ // metodo para adicionar e monitorar evento
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); //chama metodo e passa o evendo capturado
        });   
    }
    handleSubmit(e){
        e.preventDefault(); //nao envia o formulario ao submeter o form com o botao
        const camposValidos = this.camposSaoValidos(); // captura valor boolean retornada de validacao de campos
        const senhasValidas = this.senhasSaoValidas();// captura valor boolean retornada de validacao desenha
        if(camposValidos && senhasValidas){
            alert('Formulario Enviado')
            Object.defineProperty(this,'enviado',{
                value:this.formulario.submit(),
                enumerable: true,
            } )
            
        }
    }
    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirSenha');
        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Senha e repetir senha precisão ser iguais')
            this.criaErro(repetirSenha, 'Senha e repetir senha precisão ser iguais')
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
        }
        return valid;
    }
    camposSaoValidos(){
        let valid = true; // flag para validacao do formulario
        //condicao que remove o texto de erro a cada vez que e clicado antes de criar um novo texto
        for(let errortext of this.formulario.querySelectorAll('.Error-text')){
            errortext.remove();
        }
        //condicao que checa os campos do formulario
        for(let campo of this.formulario.querySelectorAll('.valor')){ // passa para campo todos os filhos do formulario
            const label = campo.previousElementSibling.innerText; // cria uma label e atribui a tag irmao anterior ao valor que contem o campo
            //condicao que texta se o campo tem algum valor se nao tiver chama o metodo criaErro e mostra a mensagem para o usuario.
            if(!campo.value){
                this.criaErro(campo, `Campo ${label} não pode estar em branco`);
                valid = false; //flag
            }
            //condicao para testar o campo de  cpf, se conter a classe cpf executa o codigo 
            if(campo.classList.contains('cpf')){ // verifica se o campo contem a classe cpf
                
                if(!this.validaCpf(campo)) valid = false; // executa o metodo validaCpf e aguarda um retorno
            }
            //se o campo conter a classe de usuario chama o metodo valida usuario
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
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.' )
            valid = false;
        }
        if(!usuario.match(/[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou numeros');
            valid = false;
        }
        return valid;
    }

    //metodo que recebe o valor do campo no caso cpf
    validaCpf(campo){
        const cpf = new ValidaCpf(campo.value) //cria uma instancia para validacao de cpf e passa o valor contido no campo do cpf

        if(!cpf.valida()){//if o cpf nao for validado cria uma mensagem de erro e retorna na div
            this.criaErro(campo, 'CPF invalido'); //chama metodo de criacao de erro para informar o erro ao usuario
            return false;
        }
        return true;
    }
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('Error-text');
        campo.insertAdjacentElement('afterend', div);
    }
    
    
}

//instancia
const valida = new ValidaFormulario()