function CadastroPaciente(){

  var Usuario = "Paciente";

  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";

  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Paciente</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"nome\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"datadenascimento\" placeholder=\"Data de Nascimento:\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"sus\" placeholder=\"SUS:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" id=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senha\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senhaconfirmar\" placeholder=\"Confirmar Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" class=\"botãoCadastro\"></div>";
  resultado+="</div>"
  main.innerHTML = resultado;
}


function CadastroMedico(){


  var Usuario = "Medico";

  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Médico</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"nome\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"crm\" placeholder=\"CRM\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"especialização\" placeholder=\"Especialização:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" id=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senha\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senhaconfirmar\" placeholder=\"Confirmar Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" class=\"botãoCadastro\"></div>";
  resultado+="</div>"
  main.innerHTML = resultado;

}

function CadastroAtendente(){

  var Usuario = "Atendente";
  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Atendente</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"nome\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" id=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senha\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senhaconfirmar\" placeholder=\"Confirmar Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" class=\"botãoCadastro\"></div>";
  resultado+="</div>"
  main.innerHTML = resultado;
  
}

function CadastroADM(){

  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Administrador</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"nome\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" id=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senha\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senhaconfirmar\" placeholder=\"Confirmar Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" onclick=\"UserAdministrador()\" class=\"botãoCadastro\"></div>";
  resultado+="</div>"
  main.innerHTML = resultado;
}


function UserAdministrador(){



//Variaveis  
var Usuario = "Administrador";
var Nome = document.getElementById("nome");
var CPF = document.getElementById("cpf");
var EmailPuro = document.getElementById("email");
var Senha = document.getElementById("senha");
var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");


//Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
   // Cadastrar.addEventListener('click', function () {
      
        if (Senha.value==ConfirmacaodeSenha.value) {
            var Minusculo = EmailPuro.value;
            var Email = Minusculo.toLowerCase()
            var chave = firebase.database().ref().child('Usuarios').push().key;
            var Users = {
                Nome : Nome.value,
                Email : Email,
                CPF: CPF.value,
                Chave: chave,
                Usuario: Usuario,
              };
        firebase
        .auth()
        .createUserWithEmailAndPassword(EmailPuro.value, Senha.value)
        .then(function() {
            firebase.database().ref().child('Usuarios/'+chave).set(Users);

        alert(EmailPuro.value + " - Conta cadastrada com sucesso!");
        Nome.value="";
        CPF.value="";
        EmailPuro.value="";
        Senha.value="";
        ConfirmacaodeSenha.value="";
      /*  setTimeout(function() {
            window.location.href = ;
        }, 1000);*/

    })

    .catch(function (error) {
        // Handle Errors here.
        console.error(error.code);
        console.error(error.message);
        firebase.database().ref('Usuários').on('value', function (snapshot){
            snapshot.forEach(function (item){ 
        if(EmailPuro.value==item.val().Email){
            alert("Esse email já foi usado em uma conta cadastrada no ACAM."); 
        }
        else{
            alert("Falha ao cadastrar, falta dados a serem preenchidos!");
        }
        // ...

            })
        }
        )})
}
    else{
        alert("Senhas imcompativeis!");
    }
//})
}

 

