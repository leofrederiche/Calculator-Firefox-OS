$(document).ready(function(){

	// adicionando numeros

	$(".btnCE").click(function(){
		$("#resultado").text("0");
	});

	$(".btnUm").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "1";
			$("#resultado").text(add_number);
		});
	});

	$(".btnDois").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "2";
			$("#resultado").text(add_number);
		});
	});

	$(".btnTres").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "3";
			$("#resultado").text(add_number);
		});
	});

	$(".btnQuatro").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "4";
			$("#resultado").text(add_number);
		});
	});

	$(".btnCinco").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "5";
			$("#resultado").text(add_number);
		});
	});

	$(".btnSeis").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "6";
			$("#resultado").text(add_number);
		});
	});

	$(".btnSete").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "7";
			$("#resultado").text(add_number);
		});
	});

	$(".btnOito").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "8";
			$("#resultado").text(add_number);
		});
	});

	$(".btnNove").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "9";
			$("#resultado").text(add_number);
		});
	});

	$(".btnZero").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + "0";
			$("#resultado").text(add_number);
		});
	});

	$(".btnPonto").click(function(){
		if( $("#resultado").text() == "0" ){
			$("#resultado").text("");
		}
		$("#resultado").text(function( add_number ){
			add_number = $("#resultado").text();
			add_number = add_number + ".";
			$("#resultado").text(add_number);
		});
	});


	// pegando valor e operacao

	var valor1 = 0;
	var valor2 = 0;
	var resultado = 0;
	var operacao = "";

	$(".btnMais").click(function(){
		valor1 = $("#resultado").text();
		operacao = "mais";
		$("#resultado").text("0");
	});

	$(".btnMenos").click(function(){
		valor1 = $("#resultado").text();
		operacao = "menos";
		$("#resultado").text("0");
	});

	$(".btnVezes").click(function(){
		valor1 = $("#resultado").text();
		operacao = "vezes";
		$("#resultado").text("0");
	});

	$(".btnDividir").click(function(){
		valor1 = $("#resultado").text();
		operacao = "dividir";
		$("#resultado").text("0");
	});

	// pegando valor2, operação e exibindo resultado

	$(".btnIgual").click(function(){
		valor2 = $("#resultado").text();
		if (operacao == "mais"){
			resultado = parseFloat(valor1) + parseFloat(valor2);
			$("#resultado").text(resultado);	
		}
		else if (operacao == "menos"){
			resultado = parseFloat(valor1) - parseFloat(valor2);
			$("#resultado").text(resultado);		
		}
		else if (operacao == "vezes"){
			resultado = parseFloat(valor1) * parseFloat(valor2);
			$("#resultado").text(resultado);		
		}
		else if (operacao == "dividir"){
			resultado = parseFloat(valor1) / parseFloat(valor2);
			$("#resultado").text(resultado);		
		}
	});










});