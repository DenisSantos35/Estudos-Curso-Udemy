// **********Funcao fabrica*************************************
function criaCalculadora(){
    return {
        //*******Atributos***************************************
        display: document.querySelector('.display'),


        //*******metodos*****************************************
        inicia(){ //inicialização calculadora
            this.display.focus();
            this.clickBotoes();   
            this.pressEnter();        
        },
        pressEnter(){
            this.display.addEventListener('keyup', e => {
                
                if(e.key === 'Enter'){

                    this.resultado();
                }
                if(e.keyCode === 27){
                    this.clearDisplay();
                }
                
            });
        },
        clickBotoes(){ // monitoramento de clicks no botoes
            //aqui o this e a calculadora
            document.addEventListener('click', e => {   //
                const botao = e.target;
                console.log(botao);
                //console.log(this)
                if(botao.classList.contains('btn-num')){
                    this.btnParaDisplay(botao.innerText);                    
                }
                if(botao.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(botao.classList.contains('btn-del')){
                    this.apagarCaracter(botao.innerText);
                }
                if(botao.classList.contains('btn-eq')){
                    this.resultado();
                }
                
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        },
        clearDisplay(){
            this.display.value = " ";
        },
        apagarCaracter(valor){
            this.display.value = this.display.value.slice(0, -1); //slice(primeiro indice, reverso)
        },
        resultado(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(conta === 0){
                    this.display.value = String(conta);
                }
                else if(!conta){
                    alert('Conta invalida')
                    return
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta invalida');
                return;
            }
        
        },
        

    };
}
// *********calculadora recebe factory function
const calculadora = criaCalculadora();

// **********inicialização da calculadora
calculadora.inicia();