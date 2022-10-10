
    //declaraçao de variavel e atribuição da tag formulario na variavel form
    const form = document.querySelector('#formulario'); 
    

    //manipulaçao do evento HTML
    form.addEventListener('submit',function(e){
        e.preventDefault();
        //declara o recebimento do inputPeso aqui recebe o valor da tag input do html
        //pode se utilizar form ou o evento dentro da funcao no caso (e)
        //se usar o evento (e) segue se a palavra e.target
        const inputPeso = form.querySelector('#peso');    
        const inputAltura = e.target.querySelector('#altura');

        // declaração de variavel para conversao de string para Number e value
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        //nessa condiçao o peso para ser verdadeiro apos a conversao precisa ser um numero
        // se for um numero peso = true; se nao for numero peso false
    
        if(isNaN(peso)){ //condicao contraria do peso; so entrara se o peso for falso
            setResultado('Peso invalido', false);
            return;            
        }
        if(isNaN(altura)){ //condicao contraria do peso; so entrara se o peso for falso
            setResultado('Altura invalido', false);
            return;  
        }
        const imc = getImc(peso,altura);
        const resultado = getNivelImc(imc);
        const msg = `Seu IMC ${imc}, Voce esta ${resultado}`        
        setResultado(msg, true)
    });


    
    // cria funcao para verificar so nivel do imc
    function getNivelImc(valor){
        // cria um vetor com as mensagens
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1',
            'Obesidade Grau 2', 'Obesidade Grau 3'];
        // cria as condçoes para analise do imc
        // colocando os valores em decrescente voceelimina o encadiado e consegue fazer com if simples
        if(valor >= 39.9){
            return nivel[5];
        }
        if( valor >= 34.9){
            return nivel[4];
        }
        if(valor >= 29.9){
            return nivel[3];
        }
        if(valor >= 24.9){
            return nivel[2]            
        }
        if (valor >= 18.5){
            return nivel[1]
        }
        if(valor < 18.5){
            return nivel[0]
        }      
    }
    // cria uma funçao para criar elemeno paragrafo
    function criarParagrafo(){
        const p = document.createElement('p');
        return p       
    }

    // cria uma função para calcular o valor do imc
    function getImc(pes,alt){
        const imc = pes / (alt**2)
        return imc.toFixed(2);
    }

    //cria uma funcao para reornar uma mensagem
    function setResultado(msg, isValid){
        //seleciona a tag div do html e atibui a uma variavel
        const resultado = document.querySelector('#resultado');
        //a vriavel atribuida limpa dados da div html
        resultado.innerHTML = '';
        // cria uma variavel para receber uma funcao de criação de paragrafo
        const p = criarParagrafo();
        // apos criado o elemento e atribuido coloca um valor na variavel 
        if(isValid){
            p.classList.add('valido')
        }
        else{
            p.classList.add('invalido')
        }
        p.innerHTML = msg;
        //determina a variavel como filho da div que esta atribuida ao resultado
        //retorna a mensagem atribuida no começo da funcao
        resultado.appendChild(p);        

               
    }

    

   

