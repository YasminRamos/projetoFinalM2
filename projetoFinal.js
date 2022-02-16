//validação de e-mail
$(document).ready(function() {
	$("p").hide();
	$('#verificar-email').click(function(){
		//desabilitando o submit do form
		$("form").submit(function () { return false; });
		//atribuindo o valor do campo
		var sEmail	= $("#email").val();
		// filtros
		var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
		// condição
		if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
			$("p").show().removeClass("ok").addClass("erro")
			.text('Por favor, informe um email válido.');
		}else{
			$("p").show().addClass("ok")
			.text('Email informado está correto!');
		}
	});
	$('#email').focus(function(){
		$("p.erro").hide();
	});
});	

