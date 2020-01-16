var Email = document.getElementById("emailLogin");
var Senha = document.getElementById("senhaLogin");



var Login = document.getElementById("butãoLogin");


//Verificar se está na tela de Login para não gerar conflitro.
if(Login!=null){
    //Função que serve para autenticar com E-mail e Senha.
        Login.addEventListener('click', function () {
            
            firebase
            .auth()
            .signInWithEmailAndPassword(Email.value, Senha.value)
            .then(function(result) {
                console.log(result);
                alert("Logado na conta " + Email.value);
                Email.value='';
                Senha.value='';
                //Com determinado tempo, o login feito com sucesso encaminha para o index.html.
                setTimeout(function() {
                    window.location.href = "../index.html";
                }, 1000);
                 
            
            })
            .catch(function (error) {
                console.error(error.code);
                console.error(error.message);
                alert("Falha ao logar. O email não existe ou a senha foi digitada errada!");
        });
        
        
        });
        
        
    }

    
    //Função para Deslogar da conta 
function sair(){
  
    firebase.auth().signOut().then(function() {
    console.log('Logout');
    setTimeout(function() {
        location.reload(); 
        }, 1000);
    
  }, function(error) {
    console.error( error );
  });
}