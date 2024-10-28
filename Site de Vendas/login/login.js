function validateForm() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');

    // Limpar mensagens de erro anteriores
    emailError.textContent = '';
    senhaError.textContent = '';

    let valid = true;

    if (email === "") {
        emailError.textContent = "Por favor, preencha o campo de email.";
        valid = false;
    }

    if (senha === "") {
        senhaError.textContent = "Por favor, preencha o campo de senha.";
        valid = false;
    }

    if (valid) {
        // Submit the form or proceed with login
        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar o código para enviar o formulário ou lidar com o login
    }
}

