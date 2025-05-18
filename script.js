document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const setorSelecionado = document.querySelector("input[name='setor']:checked").value;
    const mensagem = document.getElementById("mensagem");
    
    const credenciais = {
        "Comercial": { usuario: "CMCL12", senha: "Com&c1@l" },
        "RH": { usuario: "98HR", senha: "RH!@2025" },
        "TI": { usuario: "DEV4567TI", senha: "IT&&||==2025" }
    };

    
    if (usuario === credenciais[setorSelecionado].usuario && senha === credenciais[setorSelecionado].senha) {
        console.log("correto");

        if (setorSelecionado === "Comercial"){
            window.location.href="comercial.html";
            console.log("comercial");
        }
        if (setorSelecionado === "RH"){
            window.location.href="RH.html";
            console.log("RH");
        }
        if (setorSelecionado === "TI"){
            window.location.href="TI.html";
            console.log("TI");
        }
        } else {
            console.log("incorreto")
        mensagem.textContent= "Usuário ou senha incorretos!";
    }
});

