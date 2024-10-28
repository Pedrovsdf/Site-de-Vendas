// Adiciona um evento de 'submit' ao formulário de contato
document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos de nome, email e mensagem
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se todos os campos estão preenchidos
    if (nome && email && mensagem) {
        // Exibe mensagem de sucesso
        document.getElementById('resposta').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('resposta').style.color = 'green'; // Muda a cor para verde
    } else {
        // Exibe mensagem de erro se algum campo estiver vazio
        document.getElementById('resposta').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('resposta').style.color = 'red'; // Muda a cor para vermelho
    }

    // Limpa os campos após o envio
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
});