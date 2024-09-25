import { dadosCep } from "./dados.js"; // Importa dados do arquivo dados.js

// Recebe o botão de pesquisa do HTML
const botao = document.getElementById('pesquisar');

// Função para validar os dados do CEP
function validarDados() {
    // Recebe o valor da caixa de CEP do HTML e converte para string
    let cep = String(document.getElementById("input-cep").value);
    let status = false; // Inicializa a variável de status como falso

    // Verifica se o campo de CEP está vazio
    if (cep === '') {
        alert('vazio'); // Alerta se o campo estiver vazio
        status = true; // Define status como verdadeiro se o CEP estiver vazio
    // Verifica se o CEP possui mais do que 9 caracteres
    } else if (cep.length > 9) {
        alert("cep invalido"); // Alerta se o CEP for inválido
        status = true; // Define status como verdadeiro se o CEP for inválido
    }
    
    return status; // Retorna o status da validação: verdadeiro se houver erro, falso caso contrário
}

// Função anônima atribuída à variável 'getBuscarCEP'
// Realiza a busca do CEP via dados locais (arquivo dados.js)
const getBuscarCEP = function () { 
    let caixaCep = document.getElementById('input-cep').value;
    let status = false; // Inicializa a variável de status como falso

    // Percorre cada item no array dadosCep.dados
    dadosCep.dados.forEach(function(item) {
        // Verifica se o CEP inserido corresponde ao CEP do item
        if (caixaCep == item.cep) {
            status = true; // Atualiza status para verdadeiro se encontrar o CEP
            setDadosForm(item); // Preenche o formulário com os dados do item encontrado
        }
    });
    
    return status; // Retorna o status da busca: verdadeiro se encontrado, falso caso contrário
};

// Função assíncrona para realizar a busca do CEP via API
const getBuscarCepAPI = async () => { 
    let caixaCep = document.getElementById("input-cep").value; // Pega o CEP do formulário

    // Variável que guarda a URL da API utilizando template literals
    let url = `https://viacep.com.br/ws/${caixaCep}/json/`;
  
    let response = await fetch(url); // Aguarda a resposta do servidor 
    let dados = await response.json(); // Converte a resposta em JSON

    setDadosForm(dados); // Preenche o formulário com os dados recebidos da API
}

// Função para definir os dados do CEP nos campos do formulário
const setDadosForm = (dadosCep) => {
    document.getElementById("logradouro").value = dadosCep.logradouro; // Preenche logradouro
    document.getElementById("estado").value = dadosCep.uf; // Preenche estado (UF)
    document.getElementById("cidade").value = dadosCep.localidade; // Preenche cidade
    document.getElementById("bairro").value = dadosCep.bairro; // Preenche bairro
    document.getElementById("complemento").value = dadosCep.complemento; // Preenche complemento, se houver
}

// Adiciona um evento de escuta (click) no botão de pesquisa
botao.addEventListener("click", function () { 
    if (!validarDados()) { 
         /* if(!getBuscarCEP()){
             Se getBuscarCEP retornar false, significa que não foi possível encontrar o CEP nos dados disponíveis
            alert("Não foi possível achar o CEP"); // Exibe um alerta ao usuário informando que o CEP não foi encontrado
        } */
        getBuscarCepAPI(); // Se a validação não encontrou erros, chama a função para buscar os dados do CEP via API
    }
});