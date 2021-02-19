document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);

var horachegada = new Date();

function cadastrarVeiculo(e){
	
	var modeloVeiculo = document.getElementById('modeloVeiculo').value;
	var placaVeiculo = document.getElementById('placaVeiculo').value;

	if(!modeloVeiculo && !placaVeiculo){
		
		alert("Preencha todos os campos!");
		return false;
	}
	if(!modeloVeiculo){
		
		alert("Preencha todos os campos!");
		return false;
	}
	if(!placaVeiculo){
		
		alert("Preencha todos os campos!");
		return false;
	}
	var horaEntrada = horachegada;
	var veiculo = {
		modelo: modeloVeiculo,
		placa: placaVeiculo,
		hora: horaEntrada.getHours(),
		minutos: horaEntrada.getMinutes()
	};

	if(localStorage.getItem('patio') === null){
		var veiculos = [];
		veiculos.push(veiculo);
		localStorage.setItem('patio', JSON.stringify(veiculos));
	} else {
		var veiculos = JSON.parse(localStorage.getItem('patio'));
		veiculos.push(veiculo);
		localStorage.setItem('patio', JSON.stringify(veiculos));
	}

	document.getElementById('formulario').reset();

	mostraPatio();

	e.preventDefault();
}

function removeVeiculo(placa){
	var patio = JSON.parse(localStorage.getItem('patio'));
	console.log(patio);

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].placa == placa){
			patio.splice(i, 1);
		}
	}

	mostraTempo();
	localStorage.setItem('patio', JSON.stringify(patio));
	mostraPatio();
}

function mostraPatio(){
	var veiculos = JSON.parse(localStorage.getItem('patio'));
	var patioResultado = document.getElementById('resultados');

	patioResultado.innerHTML = '';

	for(var i = 0; i < veiculos.length; i++){
		var modelo = veiculos[i].modelo;
		var placa = veiculos[i].placa;
		var hora = veiculos[i].hora;
		var minutos = veiculos[i].minutos;
		 patioResultado.innerHTML += '<tr><td>'+ modelo + '</td>'+
		 							 	  '<td>'+ placa + '</td>' +
		 							 	  '<td>'+ hora + ':' + minutos + '</td>' +
		 							 	  '<td><button onclick="removeVeiculo(\''+ placa +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}

function mostraTempo(){
	var entrada = moment(horachegada).format("DD/MM/YYYY HH:mm:ss");
	var saida = moment().format("DD/MM/YYYY HH:mm:ss");

	var dtChegada = saida;
  	var dtPartida = entrada;

  var ms = moment(dtChegada,"DD/MM/YYYY HH:mm:ss").diff(moment(dtPartida,"DD/MM/YYYY HH:mm:ss"));
  var d = moment.duration(ms);
  //var s = Math.floor(d.asHours()) + "h" + moment.utc(ms).format(" mm") +"m";
  var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

	if(confirm("O tempo de permanência foi: " + s) == true){
		document.location.href = "pagamentos.html";
	}else{
		return false;
	}

	//alert(entrada+"==="+saida);

}




