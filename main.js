
function escopo() {

    submit()

    function submit() {
        const formulario = document.querySelector('.dados')
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            salvaDados();
        });
    };
    function salvaDados() {
        const nome = document.querySelector('.nome').value
        const sobrenome = document.querySelector('.sobrenome').value
        const peso = document.querySelector('.peso').value
        const altura = document.querySelector('.altura').value
        const idade = document.querySelector('.idade').value
        criaMensagem(nome, sobrenome, idade, peso, altura);
    };

    function criaMensagem(nome, sobrenome, idade, peso, altura) {
        const mensagem = document.querySelector('.mensagem');
        mensagem.innerHTML = `Olá, ${nome} ${sobrenome}! Aqui vão seus dados: 
    <br> Você tem ${idade} anos. 
    <br> Você pesa ${peso}kg. 
    <br> Você tem ${altura} de altura.`
    };
};

escopo();
