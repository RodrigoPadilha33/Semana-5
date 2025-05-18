document.getElementById("converter").addEventListener("click", function() {
    const numeroInput = document.getElementById("numero").value;
    const resultadoDiv = document.getElementById("resultado");

    
    if (!numeroInput || isNaN(numeroInput)) {
        resultadoDiv.innerHTML = "Por favor, insira um número válido!";
        return;
    }

    
    const numeroDecimal = parseInt(numeroInput, 10);
    const numeroBinario = numeroDecimal.toString(2);

    
    resultadoDiv.innerHTML = `O número ${numeroDecimal} em binário é: ${numeroBinario}`;
});