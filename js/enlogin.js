
function verificaLogin(){
	
	var login = document.getElementById('login').value;
	var senha = document.getElementById('senha').value;

	if(!login && !senha){
		
		alert("Preencha todos os campos!");
		return false;
	}
	if(!login){
		
		alert("Preencha todos os campos!");
		return false;
	}
	if(!senha){
		
		alert("Preencha todos os campos!");
		return false;
	}
	if(login == "matheus" && senha == "123"){
		alert("logado!");
		window.location.href="index.html";
		return true;
	}
	if(login == "matheus" && senha ==="123" ){
		alert("Senha incorreta");
		return false;
	}	
	else{
		alert("Usuário ou Senha Incorreta!")
		return false;
	}
}
