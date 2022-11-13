
function criaLista(){
    return {
        //atributo
        nome: document.querySelector('.nome'),
        deletar: document.querySelector('.deletar'),
        lista: [],
        storage: 'Nomes',
        pessoas: "",
        resultado: document.querySelector('.resposta'),

        //metodos
        inicia(){
            this.btn();

        },
        btn(){
            document.addEventListener('click', e => {
                const monitoramento = e.target;
                //console.log(monitoramento);
                
                if(monitoramento.classList.contains('botao')){ 
                    if(this.nome.value === " "){
                        return;
                    } else{                
                    this.armazenaLista();
                    this.apagaDisplay();  
                    }                                    
                }              

            });
        },
        armazenaLista(){            
            this.lista.push(this.nome.value);
            //console.log(this.lista);
            this.armazenaStorage(this.storage);
        },
        apagaDisplay(){
            this.nome.value = " ";
            this.nome.focus();
        },
        armazenaStorage(valor){
            this.pessoas = JSON.stringify(this.lista);
            localStorage.setItem(valor, this.pessoas );
            this.transformaLista(this.storage);
        },
        transformaLista(valor){
            localStorage.getItem(valor);
            this.lista = JSON.parse(this.pessoas);            
            this.mostraUsuario(this.lista);  
            
            
        },
        mostraUsuario(valor){
            if(this.nome.value === " "){
                return 
            }
            this.resultado.innerHTML = " ";
            for(let i of valor){                
                console.log(i)
                this.resultado.innerHTML += `<li>${i}</li>`
            }
            
        },
        

    }
}

const listagem = criaLista();
listagem.inicia();




