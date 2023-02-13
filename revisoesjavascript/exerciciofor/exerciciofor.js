const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
const secao = document.querySelector('.container');
const div = document.createElement('div');


for(let {tag, texto} of elementos){
    //console.log(tag, texto)
    criaElemento(tag, texto)
}

function criaElemento(tag, texto){
    tag = document.createElement(tag);
    tag.innerText = texto
    div.appendChild(tag)    
}
secao.appendChild(div)