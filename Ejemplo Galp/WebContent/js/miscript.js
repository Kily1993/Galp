/**
 * 
 */


function contador() {
	if (i < 100) {
		i = i + 10;
	} else {
		i = "Llenar Deposito";
	}

	var btn = document.getElementById("boton");
	btn.value = "Importe " + i + "$";
}

function restablecer(){
	i=0;
	var btn = document.getElementById("boton");
	btn.value = "Importe ";
	
}




$(document).ready(function() {
	var i = 0;
	$("#tarjeta").hide();
	$("#efectivo").hide();
	
	$("#botontarjeta").on("click", function() {
		$("#tarjeta").show();
		$("#efectivo").hide();
	});
	$("#botonefectivo").on("click", function() {
		$("#efectivo").show();
		$("#tarjeta").hide();
	});

});
