//Função para reiniciar o menu a cada modificação no banco.
function abrir(){
    var mainmenu = document.getElementById("OpcoesMenu");
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
                    resultado+="<li><a href='index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                    resultado+="<li><a onclick='' href='#' class=\"LinkMenu\">Minha Conta</a></li>"
                

                    resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
                    resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li></ul>"
    
    
                    if(item.val().Usuario=="Administrador"){
                        resultado+="<li><a onclick='AprovacaoUsuario()' href='#' class=\"LinkMenu\">Aprovação de Usuários</a></li>"
                        resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"

                    }
                   
    /*
                    //Função para menu de ativo a reserva
                    if (item.val().Ativo==="true"){
                        opcaomenu+="<li class='dropdown-left'><a href='#'> Novas Reservas</a>";
                        opcaomenu+= "<ul class='dropdown1'>";
                        firebase.database().ref('TiposdeEspaco').on('value', function (snapshot) {
                            snapshot.forEach(function (item) {
                                console.log(item.val().TipoEspaco);
                                opcaomenu += "<li><a onclick=\"preencheEspacos('"+item.val().Chave+"');closeMenu();\" href='#' class='link-left'>"+item.val().TipoEspaco+"</a></li>";
                            });
                        });
                        opcaomenu += "</ul>";
                        opcaomenu += "</li>";
                    }*/
                }
             
                mainmenu.innerHTML = resultado;
                mainmobile.innerHTML = resultado2;
            


            
            });
        }); 
            
    
        } else {
            resultado+="<li><a onclick=\"\" class=\"LinkMenu\">Teste</a></li>"
            resultado+="<li><a onclick=\"\" class=\"LinkMenu\">Teste</a></li>"
            resultado+="<li><a onclick=\"\" class=\"LinkMenu\">Teste</a></li>"
            resultado+="<li><a onclick=\"\" class=\"LinkMenu\">Teste</a></li>"
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

