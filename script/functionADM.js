

//Função para listar todos os usuários cadastrados menus o administrador logado;
function AprovacaoUsuario(){
    var user = firebase.auth().currentUser;
    var email = user.email;
    var main = document.getElementById("containerPost");
    var resultado = "<div class='user-table'>";
    resultado +="<h1 class=\"TituloPost\">Aprovação de Usuarios:</h1>";
    resultado += "<table>";
    resultado += "<tr><th>Nome</th><th>Email</th><th>Nível</th></tr>"
    //Listando todos os Usuários
    firebase.database().ref('Usuarios').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
            if(email!=item.val().Email){
                if(item.val().Aprovacao==false){
            resultado += "<tr>"
            resultado += "<td>"+ item.val().Nome +"</td>";
            resultado += "<td>"+ item.val().Email +"</td>";
            resultado += "<td>"+ item.val().Usuario +"</td>";
            
          
        
            resultado += "<td><input type=\"button\" value=\"Aprovar\" class=\"BotAp\" onclick=\"Aprovar('"+item.val().Chave+"')\"></td>";
            resultado += "<td><input type=\"button\" value=\"Reprovar\" class=\"BotEx\" onclick=\"Reprovar('"+item.val().Chave+"')\"></td>";

            resultado += "</tr>";
        }
        }});
    });
    setTimeout(function() {
        resultado += "</table>";
        resultado += "</div>";
        main.innerHTML = resultado;
    }, 1000);


}

function Aprovar(key){
    Aprovacao = true,
    firebase.database().ref('/Usuarios/' + key).update({
    
        Aprovacao: Aprovacao,
                  
    });
    alert("Aprovado com sucesso!");
    AprovacaoUsuario()
    abrir()
}


function Reprovar(key){

    
        var Users = {
            Nome : "Conta Desativada",
            Desativada: true,
            key: key,
          };
    

        firebase.database().ref('/Usuarios/'+ key).remove();

        firebase.database().ref().child('Usuarios/'+key).set(Users);
    alert("Removido com sucesso!");
    AprovacaoUsuario()
    abrir()
}