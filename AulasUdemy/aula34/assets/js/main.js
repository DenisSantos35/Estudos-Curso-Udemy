//Array com elementos para crição de tags
const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //indice 0
    {tag: 'div', texto: 'Frase 2'}, //indice 1
    {tag: 'footer', texto: 'Frase 3'}, //indice 2
    {tag: 'section', texto: 'Frase 4'} // indice 3
];
//constante que atriuem tags do html para uma constante em javascript
const selecao = document.querySelector('.container'); //referente a section do html
const div = document.createElement('div') //referente a div que sera criada por js dentro do section

//laco de repeticao para criacao de tags
for(i = 0; i < elementos.length; i ++){ // elementos.length = 3 indices
    //let frase = elementos[i]['texto']    //frase recebe a cada repeticao um texto do objeto elemento

    //envia para a funcao criacao de elemento o valor que contem a tag e o valor que contem o texto a cada laço de repetição, e cria o elemento
    //criandoElemento(elementos[i]['tag'], frase); 

    //adiciona valores a cada laço as variaveis tag e texto por desetruturação, e esse valores armazenado sao passados para a funcao que a cada laço cria uma nova tag
    let {tag, texto} = elementos[i];
    criandoElemento(tag,texto) ;          
}

//funcao para criação de tags e frazes dentro das tags
function criandoElemento(elemento, frase){ //recebe o elemento = tag e a frase = texto do objeto um a um
    let tags = document.createElement(elemento); //cria um elemento a partir do valor passado no objeto

    //existem 3 formas de retornar a mensagem para as tags criadas

    //tags.innerHTML = frase; //por inneHTML
    //tags.innerText = frase; //por innerText e
    let textoCriado = document.createTextNode(frase); // por createTextNode(variavel)
    tags.appendChild(textoCriado); //por criacao de texto node e obrigatorio discriminar de quem sera o filho do texto criado; no nosso caso criamos a tag e atribuimos o texto como filho da tag

    //declamos que as tags criadas vai ser filho da constante div ou seja; estaram dentro da div
    div.appendChild(tags);
}
//declamos que a constante div criada vai ser filho da constante selecao ou seja; estara dentro da selecao
selecao.appendChild(div);





