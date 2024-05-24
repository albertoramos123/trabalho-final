document.getElementById('login-button').addEventListener('click', function() {
    var username = document.getElementById('text').value;
    var password = document.getElementById('password').value;

    // Verifica se o nome de usuário e a senha estão corretos
    if (username === 'seu_usuario' && password === 'sua_senha') {
        window.location.href = 'user1.html'; // Redireciona para a página do usuário
    } else {
        alert('Nome de usuário ou senha incorretos! Por favor, tente novamente.');
    }
});
