const nome = document.querySelector('.nome');
const estoque = document.querySelector('.quantidade');
const material = document.querySelector('.material');
const preco = document.querySelector('.preco');


document.addEventListener('click', (e) =>{
const elemento = e.target
    if(elemento.classList.contains('btn')){
        const valido = validacao(nome.value, estoque.value, material.value, preco.value);
        if(valido){        
            function Produto(nome, estoque, material, preco){
                this.nome = nome
                this.estoque = estoque;
                this.material = material;
                this. preco = preco;
            }   
        };  
        const cadastroProduto = new Produto(nome.value, estoque.value, material.value, preco.value);
        console.log(cadastroProduto);       
    }
});

function validacao(nome, estoque, material, preco){
    if(typeof nome === 'number' || nome === ''){
        alert('Digite um produto valido');
        nome.value = '';
        nome.focus();
        return false;
    } 
    if(isNaN(estoque)){
        alert('Digite um estoque valido');
        estoque.value = '';
        estoque.focus();
        return false;
    } 
    if(material.selectedIndex  === 0)return false;
    if(isNaN(preco)){
        alert('Digite um preco valido');
        preco.value = '';
        preco.focus();
        return false;
    } 
    return true;

}
