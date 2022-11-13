function criaCalculadora(){
    return {
        //atributos
        display: document.querySelector('.display'),        
        
        //metodos        
        inicia (){             
            this.btnClick();
            this.enter();  
                  
        },
        enter(){
            document.addEventListener('keyup', e => {
                if(e.key === 'Enter'){
                    this.resultado();
                }
            });
        },
        btnClick (){
            document.addEventListener('click', e => {
              const el = e.target;
              //console.log(el)
              if(el.classList.contains('btn-number')){
                this.apareceDisplay(el.innerText); // manda valor contido na tag
              }
              if(el.classList.contains('btn-clear')){
                this.clearDisplay();
              }
              if(el.classList.contains('btn-del')){
                this.delteCarac()
              }
              if(el.classList.contains('btn-eq')){
                this.resultado();
              }
            });
        },
        apareceDisplay(valor){
            this.display.value += valor ;
        },
        clearDisplay(){
          this.display.value = " ";
        },
        delteCarac(){
            this.display.value = this.display.value.slice(0, -1);
        },
        resultado(){
            let result = this.display.value;
            console.log(result)
            try{
                result = eval(result)
                if(!result){
                    alert('calculo invalido');
                    return result;
                }
                this.display.value = result
            }catch(e){
                alert('calculo invalido');
                return
            }
        },

    }

}

const calculadora = criaCalculadora();
calculadora.inicia();

