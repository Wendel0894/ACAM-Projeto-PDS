function CadastroADM(){


  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<form action=\"Pagina-Cadastro\" method=\"post\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro<br>Cadastro Administrador</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" class=\"botãoCadastro\"></div>";
  resultado+="</form></div>"
  main.innerHTML = resultado;
}

function CadastroAtendente(){

  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<form action=\"Pagina-Cadastro\" method=\"post\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Atendente</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" class=\"botãoCadastro\"></div>";
  resultado+="</form></div>"
  main.innerHTML = resultado;
  
}


 
function CadastroMedico(){

  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<form action=\"Pagina-Cadastro\" method=\"post\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Médico</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"CRM\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"Especialização:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" class=\"botãoCadastro\"></div>";
  resultado+="</form></div>"
  main.innerHTML = resultado;

}

function CadastroPaciente(){

  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<form action=\"Pagina-Cadastro\" method=\"post\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Médico</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"Data de Nascimento:\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" placeholder=\"SUS:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" class=\"botãoCadastro\"></div>";
  resultado+="</form></div>"
  main.innerHTML = resultado;
  console.log("Paciente")
}