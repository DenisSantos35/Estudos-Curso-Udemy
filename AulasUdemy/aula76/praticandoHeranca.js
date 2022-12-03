const nome = document.querySelector('.nome');
const estoque = document.querySelector('.quantidade');
const material = document.querySelector('.material');
const preco = document.querySelector('.preco');


document.addEventListener('click', (e) =>{
    const elemento = e.target
    
    if(elemento.classList.contains('btn')){
        function Produto(nome, estoque, material, preco){
            this.nome = nome
            this.estoque = estoque;
            this.material = material;
            this. preco = preco;
        }   
         
    const cadastroProduto = new Produto(nome.value, estoque.value, material.value, preco.value);
    console.log(cadastroProduto);
        
    }
});

