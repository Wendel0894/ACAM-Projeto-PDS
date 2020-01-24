//Função para reiniciar o menu a cada modificação no banco.
function abrir(){
    var mainmenu = document.getElementById("OpcoesMenu");
    var main = document.getElementById("containerPost");
    var resultadopost= "<div class='user-table'>";
    var resultado="<ul class=\"MenuDesktop\">"
    var mainmobile = document.getElementById("OpcoesMenu-Monile");
    var resultado2="<input type=\"checkbox\" id=\"marcadorMenu\"><label for=\"marcadorMenu\" class=\"marc\">&#9776;</label><ul class=\"MenuMob\">"
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log( user );            
        var user = firebase.auth().currentUser;
        var email = user.email;
       

        firebase.database().ref('Usuarios').on('value', function (snapshot) {
            snapshot.forEach(function (item) {
                //Função para menu Administrador
                if(email===item.val().Email){

            

                    if(item.val().Usuario==="Medico" && item.val().Aprovacao===true){
                        alert("oi")
                        resultado+="<li><a href='index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                        resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"
                        resultadopost +="<h1 class=\"TituloPost\">Conta Medico</h1>";
                    }

                    if(item.val().Usuario==="Atendente" && item.val().Aprovacao===true){
                        resultado+="<li><a href='index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                        resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"
                        resultadopost +="<h1 class=\"TituloPost\">Conta Atendente</h1>";
                    }
                
                     if(item.val().Usuario==="Administrador" && item.val().Aprovacao===true){
                        resultado+="<li><a onclick='abrir()' href='' class=\"LinkMenu\">Página Inicial</a></li>"
                        resultado+="<li><a onclick='AprovacaoUsuario()' href='#' class=\"LinkMenu\">Aprovação de Usuários</a></li>"
                        resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"                        

                    }
                    
                    if(item.val().Usuario==="Paciente"){
                            resultado+="<li><a href='index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                            resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"
                            resultadopost +="<h1 class=\"TituloPost\">Conta Paciente</h1>";
                        

                    }
                    if(item.val().Aprovacao===false){
                        resultado+="<li><a href='index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                        resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"
                        resultadopost +="<h1 class=\"TituloPost\">Conta em Avaliação</h1>";
    
                    }

                    
                           
                }
                if(item.val().Desativada==true){
                    resultado+= "<li><a href='index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                    resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"
                    resultadopost +="<h1 class=\"TituloPost\">Conta reprovada</h1>"
                    resultadopost +="<p>Sua conta como funcionário foi reprovada, você pode apagar sua conta e submete um novo cadastro como paciente ou solicitar novamente um cadastro como funcionário</p>"
                    resultadopost += "<center><td><input type=\"button\" value=\"Apagar\" class=\"BotEx\" onclick=\"ApagarConta('"+item.val().Chave+"')\"></td></center>"
                }
                main.innerHTML = resultadopost
                mainmenu.innerHTML = resultado;
                mainmobile.innerHTML = resultado2;
            


            
            });
        }); 
            
    
        } else {
            resultado+="<li><a onclick=\"home()\" class=\"LinkMenu\">Home</a></li>"
       
            resultado+="<li><a href=\"html/Cadastro.html\" class=\"LinkTelaCadastro\">Cadastrar-se</a></li>"
            resultado+="<li><a href=\"html/login.html\" class=\"LinkLogin\">Login</a></li></ul>"
        
            mainmenu.innerHTML = resultado;
        
        
           
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"html/login.html\" class=\"LinkL\">Login</a></li>"
            resultado2+="<li><a href=\"html/Cadastro.html\" class=\"LinkL\">Cadastrar-se</a></li></ul>"
        
            mainmobile.innerHTML = resultado2;
            
        }
      });
    }

    function ApagarConta(key){

        var user = firebase.auth().currentUser;

        user.delete().then(function () {
            firebase.database().ref('/Usuarios/'+key).remove();
            abrir()
        }).catch(function (error) {
            window.alert("Não foi possível remover a sua conta!");
        });

    }

