var contador = 1;

function getDados() {
  //* funcao

  //  alert("Ola mundo"); // *msg na tela
  // console.log("ola novamente"); //* msg no console (f12)
  // confirm("Deseja salvar os dados"); // *msg com interação
  // var teste = prompt("Digite um numero"); // *prompt = input do JS / var = criar variavel
  // console.log(teste); // *mostrando oq digitei no prompt
  let nome = document.getElementById("nome"); 
  let email = document.getElementById("email");
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
  // ? acrescentei a logica do professor

    nome.style.backgroundColor = 'white';
    email.style.backgroundColor = 'white';
  if (nome.value == "" || email.value == "") { // *.value = pegar o VALOR
    alert("Preencha seus dados");
    if (nome.value == ''){
        nome.style.backgroundColor = '#f2a2a2';
          // ? permite alteração de cor no campo nome, caso esteja vazio

    }
    if (email.value == ''){
        email.style.backgroundColor = '#f2a2a2';
          // ? permite alteração de cor no campo email, caso esteja vazio
    }
  }  else {

   
      if ( contador <=4){
        // ? recebe os valor de entrada (input)
        let colunaNome = document.getElementById("nome" + contador);
        let colunaEmail = document.getElementById("email" + contador);

        console.log(colunaEmail);
        console.log(email.value);
        // ? acrescenta na tabela
        colunaNome.innerText = nome.value;
        colunaEmail.innerText = email.value;
        contador++;
      }
    }

  }
/*  
    ! tipos de variaveis:
 
 ? var -> usar no escopo global  (FORA das funcoes)
 ? let -> usar no escopo local (DENTRO das funcoes), nasce e morre APENAS naquele escopo (funcao)
 ? const-> não sofre mudança durante o projeto, podendo ser em ambos escopos (global e local)

*/


function setBlockNumber(tecla) {
  console.log(tecla.charCode);
                                // ? charCode -> correlação com Tabela ASCII

    if (tecla.charCode >=48 && tecla.charCode <=57){    
        // ! essa logica faz com oq os numeros nao sejam digitaveis
        // alert("FUNFOU")
        return false;
    }
}


