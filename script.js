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

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectOption(option) {
    alert("Opção selecionada: " + option);
    document.getElementById("myDropdown").classList.remove("show");
}
