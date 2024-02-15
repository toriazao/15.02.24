-3
function verificarLogin() {
    let txtlogin = document.getElementById
    let txtsenha = document.getElementById

    let login = "teste";
    login = "teste2";
    let senha = "teste";

    if (txtlogin.value == login && txtsenha.value == senha) {
        console.log("Logado com sucesso!");
    } else {
        console .log("Login ou senha incorretos! Digite e tente novamente.")
    }
}