function getDados() {
  //* funcao

  //  alert("Ola mundo"); // *msg na tela
  // console.log("ola novamente"); //* msg no console (f12)
  // confirm("Deseja salvar os dados"); // *msg com interação
  // var teste = prompt("Digite um numero"); // *prompt = input do JS / var = criar variavel
  // console.log(teste); // *mostrando oq digitei no prompt
  var nome = document.getElementById("nome"); // *.value = pegar o VALOR
  var email = document.getElementById("email");
  // console.log(nome)
  // console.log(email)

  /*
? = atribuit valor
? == igualdade
? > maior
? < menor
? != diferente
? <= maior oi igual
? >= menor ou igual
? === comparação o tipo de dado  e conteudo 
? !==  conteudo diferente e tipo de dado igual
? ==! conteudos igual e tipo de dado diferente
? !=! diferença de conteudos e se os tipos de dados sao diferentes
*/

  /*
  ! DICA: usar o console.log para descobrir oq a nuva funcao faz

? isNaN() = NotANumber


*/
  if (nome.value == "" || email.value == "") {
    alert("Preencha seus dados");
    if (nome.value == ''){
        nome.style.backgroundColor = '#5c0c06';
    }
    if (email.value == ''){
        email.style.backgroundColor = 'cyan';
    }
  }
}

function setBlockNumber(tecla) {
  console.log(tecla.charCode);
                                // ? charCode -> correlação com Tabela ASCII

    if (tecla.charCode >=48 && tecla.charCode <=57){    
        // ! essa logica faz com oq os numeros nao sejam digitaveis
        // alert("FUNFOU")
        return false;
    }
}
