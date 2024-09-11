import { dadosCep } from "./dados.js";
// importando do arquivo dados.js

// Recebe o botão pesquisa do HTML no JS
const botao = document.getElementById('pesquisar');

// Função tradicional para validar os dados do CEP
function validarDados(){
    // Recebe a caixa de CEP do HTML
    let cep = String(document.getElementById("input-cep").value);
    let status = false; // Variável booleana (true/false) para controle de validação

    // Validando se o campo de CEP está vazio
    if (cep === ''){
        alert('vazio');
        status = true; // Define status como verdadeiro se o CEP estiver vazio
    // Validando se o CEP possui mais do que 9 caracteres
    } else if (cep.length > 9){
        alert("cep invalido");
        status = true; // Define status como verdadeiro se o CEP for inválido
    }
    
    // Retorna o status da validação: verdadeiro se houver erro, falso caso contrário
    return status;
}

// Função anônima atribuída à variável 'getBuscarCEP'
const getBuscarCEP = function (){ 
    // Supondo que dadosCep.dados é um array de objetos
dadosCep.dados.forEach(function(item){
    // Para cada objeto 'item' no array dadosCep.dados, execute a função fornecida

    console.log(item.logradouro); 
    // Exibe o valor da propriedade 'logradouro' do objeto 'item' no console
    // 'logradouro' pode ser um endereço, rua ou outra informação dependendo da estrutura dos dados
});

    console.log(dadosCep.dados[0].logradouro);
}

// Adiciona um evento de escuta (click) no botão pesquisa
botao.addEventListener("click", function (){ // Função de callback chamada quando o botão é clicado
    if (!validarDados()){ // Verifica se a função validarDados() retorna false (ou seja, se não há erros de validação)
        // Se validarDados() retornar false (indica que o CEP é válido e não há erros), 
        //a condição '!validarDados()' será verdadeira
        getBuscarCEP(); // Chama a função getBuscarCEP para processar o CEP, pois a validação foi bem-sucedida
    }
    
});


/*  
 modelos de funcoes:

    - tradicional : function(){...};
    - arrow =
    - anonima = const getBuscarCEP = function (){...}





*/
