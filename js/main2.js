document.getElementById('formulario1').addEventListener('submit', cadastrarClientes);
function cadastrarClientes(e){
	
	var nomeCliente = document.getElementById('nomeCliente').value;
	var telCliente = document.getElementById('telCliente').value;
	var categoria = document.getElementById("categoriaCliente").value;

	if(!nomeCliente && !telCliente){
		
		alert("Preencha todos os campos!");
		return false;
	}if(!nomeCliente){
		
		alert("Preencha todos os campos!");
		return false;
	}if(!telCliente){
		
		alert("Preencha todos os campos!");
		return false;
	} 
	
	var cliente = {
		nome: nomeCliente,
		telefone: telCliente,
		cate: categoria
	};

	if(localStorage.getItem('patio1') === null){
		var clientes = [];
		clientes.push(cliente);
		localStorage.setItem('patio1', JSON.stringify(clientes));
	} else {
		var clientes = JSON.parse(localStorage.getItem('patio1'));
		clientes.push(cliente);
		localStorage.setItem('patio1', JSON.stringify(clientes));
	}

	document.getElementById('formulario1').reset();

	mostraClientes();

	e.preventDefault();
}
function removeClientes(nome){
	var patio1 = JSON.parse(localStorage.getItem('patio1'));
	console.log(patio1);

	 for(var i = 0 ; i < patio1.length; i++){
		if(patio1[i].nome == nome){
			patio1.splice(i, 1);
		}
	}

	localStorage.setItem('patio1', JSON.stringify(patio1));
	mostraClientes();
}
function mostraClientes(){
	var clientes = JSON.parse(localStorage.getItem('patio1'));
	var patio1Resultado = document.getElementById('resultados1');

	patio1Resultado.innerHTML = '';

	for(var i = 0; i < clientes.length; i++){
		var nome = clientes[i].nome;
		var telefone = clientes[i].telefone;
		var cate = clientes[i].cate;
		patio1Resultado.innerHTML += '<tr><td>'+ nome + '</td>'+
		 							 	  '<td>'+ telefone + '</td>' +
		 							 	  '<td>'+ cate + '</td>' +
		 							 	  '<td><button onclick="removeClientes(\''+ nome +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}




