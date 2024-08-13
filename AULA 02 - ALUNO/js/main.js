function getDados() {

    //funcao
    alert("Ola mundo"); // *msg na tela
    console.log("ola novamente"); //* msg no console (f12)
    confirm("Deseja salvar os dados"); // *msg com interação
    var teste = prompt("Digite um numero"); // *prompt = input do JS / var = criar variavel
    console.log(teste); // *mostrando oq digitei no prompt
    var nome = document.getElementById("nome").value; // *.value = pegar o VALOR
    var email = document.getElementById("email").value;
    console.log(nome)
    console.log(email)

    if (nome == ""){
        alert("Preencha o seu  nome")
    }
}