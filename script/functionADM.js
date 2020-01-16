

//Função para listar todos os usuários cadastrados menus o administrador logado;
function AprovacaoUsuario(){
    var user = firebase.auth().currentUser;
    var email = user.email;
    var main = document.getElementById("post");
    var resultado = "<div class='user-table'>";
    resultado+="<h2>usuários cadastrados</h2>";
    resultado += "<table>";
    resultado += "<tr><th>Nome</th><th>Email</th><th>Moderador</th><th>Administrador</th></tr>"
    //Listando todos os Usuários
    firebase.database().ref('Usuarios').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
            if(email!=item.val().Email){
            resultado += "<tr>"
            resultado += "<td>"+ item.val().Nome +"</td>";
            resultado += "<td>"+ item.val().Email +"</td>";
            if (item.val().Moderador==="true"){
                resultado += "<td class='positivo'></td>";
            } else{
                resultado += "<td class='negativo'></td>";
            }
            if (item.val().Administrador==="true"){
                resultado += "<td class='positivo'></td>";
            }else{
                resultado += "<td class='negativo'></td>";
            }

            resultado += "<td><a onclick=\"editargerencia('"+item.val().Chave+"')\" href='#'>Editar</a></td>";
            resultado += "</tr>";
        }
        });
    });
    setTimeout(function() {
        resultado += "</table>";
        resultado += "</div>";
        main.innerHTML = resultado;
    }, 1000);

}