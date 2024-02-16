-3
function verificarLogin() {
    let txtlogin = document.getElementById('txtLogin');
    let txtsenha = document.getElementById('txtSenha');

    let login = "teste";
    login = "teste2";
    let senha = "teste";

    if (txtlogin.value == login && txtsenha.value == senha) {
        console.log("Logado com sucesso!");
    } else {
        console .log("Login ou senha incorretos! Digite e tente novamente.")
    }
}