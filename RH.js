document.getElementById("buttonRH").addEventListener("click", function() {
    event.preventDefault();
    const tabelasite = document.getElementById("tabela");
    
    const tabela = `
        <table border="1">
            <tr>
                <th>Nome</th>
                <th>Setor</th>
                <th>Cargo</th>
                <th>Salário</th>
            </tr>
            <tr>
                <td>Ana Souza</td>
                <td>RH</td>
                <td>Analista de Recursos Humanos</td>
                <td>R$ 5.500,00</td>
            </tr>
            <tr>
                <td>Marcos Lima</td>
                <td>RH</td>
                <td>Gerente de RH</td>
                <td>R$ 8.200,00</td>
            </tr>
            <tr>
                <td>Juliana Freitas</td>
                <td>RH</td>
                <td>Assistente de RH</td>
                <td>R$ 3.800,00</td>
            </tr>
        </table>
    `;

    
    tabelasite.innerHTML = tabela;
});

