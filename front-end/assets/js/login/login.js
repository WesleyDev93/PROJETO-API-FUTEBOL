function validaDados () {

    const login = document.querySelector ('.login').value;

    const senha = document.querySelector ('.senha').value;

console.log (senha)

    if (login == 'futebol10' && senha == '123456!') {
        
        alert ('Muito Bem vindo ao Sistema Diretoria');

        location.href = "index.html";
    }else {
        alert ('Sua senha esta errada  -- Tente Denovo!');
    }
}




