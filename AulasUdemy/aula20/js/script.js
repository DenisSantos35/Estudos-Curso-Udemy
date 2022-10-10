function manipulacaoFormulario(){
    //primeiro passo chamar formulario e atribuir a uma variavel
    const form = document.querySelector('.formulario');
    //atribuicao de objeto html div
    const resultado = document.querySelector('.resultado');
    //criacao de um array para armazenar envio de formulario
    cadastros = [];


    //segundo passo realizar funçao de monitoramento de evento
    function manipulacaoDeEvento(evento){
        //pede para que o evento seja monitorado e nao ocorra como padrao
        evento.preventDefault();
        //atribuicao de objetos html a variaveis
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        // mostra resultado ao enviar formulario
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`
        //criacao de objeto para armazenar cadastro de pessoas
        const pessoas = {nome: nome, sobrenome: sobrenome, peso: peso, altura: altura}
        // armazenamento de objeto pessoas em array cadastro
        cadastros.push(pessoas);
        //mostra no console o array com cadastros
        console.log(cadastros);

    };
    //chama objeto formulario e adciona um evento lista, submit e chama funcao evento
    form.addEventListener('submit', manipulacaoDeEvento);
    

}
manipulacaoFormulario()