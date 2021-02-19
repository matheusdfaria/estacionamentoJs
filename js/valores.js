document.getElementById('formValor').addEventListener('submit', inserirValores);

function inserirValores(e){
	
	var valores = document.getElementById('valores').value;

	if(!valores){
		
		alert("Preencha todos os campos!");
		return false;
	} 
	var dinheiro = {
		valorObj: valores
	};

	if(localStorage.getItem('patioValor') === null){
		var valoresArray = [];
		valoresArray.push(dinheiro);
		localStorage.setItem('patioValor', JSON.stringify(valoresArray));
	} else {
		var valoresArray = JSON.parse(localStorage.getItem('patioValor'));
		valoresArray.push(dinheiro);
		localStorage.setItem('patioValor', JSON.stringify(valoresArray));
	}

	document.getElementById('formValor').reset();

	mostraValores();

	e.preventDefault();
}

function removeValor(valorObj){
	var patioValor = JSON.parse(localStorage.getItem('patioValor'));
	console.log(patioValor);

	 for(var i = 0 ; i < patioValor.length; i++){
		if(patioValor[i].valorObj == valorObj){
			patioValor.splice(i, 1);
		}
	}

	localStorage.setItem('patioValor', JSON.stringify(patioValor));
	mostraValores();
}

function mostraValores(){
	var valoresArray = JSON.parse(localStorage.getItem('patioValor'));
	var valoresR = document.getElementById('valorR');

	valoresR.innerHTML = '';

	for(var i = 0; i < valoresArray.length; i++){
		var valorObj = valoresArray[i].valorObj;
		
		 valoresR.innerHTML +=  '<tr><td>'+ valorObj +'</td>'+
									'<td><button onclick="removeValor(\''+ valorObj +'\')" class="btn btn-danger">Remover</button></td>'
								+'</tr>';
	}
}