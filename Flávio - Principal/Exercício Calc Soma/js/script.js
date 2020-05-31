function calcular(){
/*	let num1 = document.getElementById('num1').value
	let num2 = document.getElementById('num2').value
	if (num1 == '' || num2 == ''){
		alert('Síntese incorreta, por favor preencha os campos numéricos')
		return false;
	}

	num1 = parseInt(num1)
	num2 = parseInt(num2)
	let operacao = parseInt(document.getElementById('operacao').value)
	let caixa_resultado = document.getElementById('resultado')
	switch(operacao){
		case 1:
			caixa_resultado.value = num1 + num2;
			break;
		case 2:
			caixa_resultado.value = num1-num2;
			break;
		case 3:
			caixa_resultado.value = num1*num2;
			break;
		case 4:
			caixa_resultado.value = num1/num2;
			break;
	}*/
	var n1 = Number.parseInt(document.getElementById("1"))
}
function limpar(){
	document.getElementById('num1').value = '';
	document.getElementById('num2').value = '';
	document.getElementById('resultado').value = '';
	document.getElementById('operacao').value = 1;
}