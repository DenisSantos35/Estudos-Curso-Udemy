function formulario(){
    // declarar objeto formulario para uma variavel
    const form = document.querySelector(".formulario");
    const msg = document.querySelector('.resultado');
    const dados = [];

    //destativar evento com preventDefault
    function eventoFormulario(evento){
        
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        const pessoas = {nome: nome, sobrenome: sobrenome, peso: peso, altura: altura};
        dados.push(pessoas);
        console.log(dados);   

        msg.innerHTML += `<p>Nome: ${nome}; Sobrenome: ${sobrenome}; 
        Peso: ${peso}; Altura${altura}<p/>  `
  
    }      
    form.addEventListener('submit', eventoFormulario);  

}
formulario()