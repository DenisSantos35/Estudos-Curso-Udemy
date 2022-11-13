// **********Funcao construtora*************************************
function CriaCalculadora(){
    //atributos
    this.display = document.querySelector('.display');
    
    
    //metodos
    this.inicia = () => {
        this.display.focus();
        this.textoEntrada();
        this.calculadora();
        this.calculadoraEnter();
    }
    this.textoEntrada = () =>{
        setTimeout(() => {
            this.display.value = `Denis Santos`            
        }, 1000);
        setTimeout(() => {
            this.limpa();           
        }, 3000);
    }
    this.calculadoraEnter = function(){
        document.addEventListener('keyup', (e) => {
            //console.log(e)
            if(e.key === 'Enter'){
                this.realizaConta();
            }
            if(e.key === 'Escape'){
                this.limpa()
            }
            if(e.key === 'Backspace'){
                this.limpaCarac();
            }
        })
    }
    this.calculadora = () => {
        document.addEventListener('click', (e) => {
            const elemento = e.target;
            //console.log(elemento);
            if(elemento.classList.contains('btn-num')){
                this.adicionaDisplai(elemento.innerText)
            }
            if(elemento.classList.contains('btn-clear')){
                this.limpa();
            }
            if(elemento.classList.contains('btn-del')){
                this.limpaCarac();
            }
            if(elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }
        });
    }
    this.adicionaDisplai = (valor) => {
        //console.log(valor);
        this.display.value += valor;
    }
    this.limpa = function(){
        this.display.value = " ";
    }
    this.limpaCarac = () => {
        this.display.value = this.display.value.slice(0,-1);
    }
    this.realizaConta = function(){
        let conta = this.display.value;
        try{
            if(!conta){
                conta = eval(conta);
                alert('calculo invalido');
                return;
            }
            this.display.value = eval(conta);
        }catch (e){
            alert('ERRO!!! Calculo invalido');
        }
    }

}

const calculadora = new CriaCalculadora();
calculadora.inicia();
