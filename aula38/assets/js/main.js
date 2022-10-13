//Selecionando uma DIV
const paragrafos = document.querySelector('.paragrafos'); //Seleciona a tag html div por classe

//selecionando todos os paragrafos dentro da DIV
const ps = document.querySelectorAll('p'); // utiliza se querySelectorAll para selecionar todos 
                                            //os elementos e retorna um valor tipo array ps[4]

//pegando estilos computados no bory
//getComputedStyle nao funciona no node e pega os estilos da pagina
//utilza se dentro dos parenteses atraves do DOM a localização que vamos pegar o estilo = document.body
const estilosBody = getComputedStyle(document.body);
//constante que vai armazenar apartir do estilosBody a cor backgroundcolor do browser
const backgroundcolorBody = estilosBody.backgroundColor;

console.log(backgroundcolorBody);

//laço para percorrer o valor contido em cada paragrafo e retorna no console todos os valores
for(let valor of ps){
    console.log(valor);
    //muda estilo css por js no html; no caso mudamos cor de fundo dos paragrafos
    valor.style.backgroundColor = backgroundcolorBody;
    //mudadmos cor das letras dos paragrafos
    valor.style.color = 'white';
}
