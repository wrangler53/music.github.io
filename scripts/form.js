$(document).ready(function() { 		
		var regMail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
		var regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;
		var msg = "Ошибка ввода!";

		//first input
		$("#firstName").blur(function(){
			var nameVal = $(this).val();
			if(($(this).val() == "") || (nameVal.search(regName) === -1)){
				$("#firstInput").addClass("has-error has-feedback");
				$("#firstInput > span").addClass("glyphicon-remove");
				$("#helpBlock1").append(msg);
			}else{
				$("#firstInput").removeClass("has-error has-feedback").addClass("has-success has-feedback");
				$("#firstInput > span").removeClass("glyphicon-remove").addClass("glyphicon-ok");;
			}
		});

		$("#firstName").focus(function(){
			$("#firstInput").removeClass("has-error has-feedback has-success");
			$("#firstInput > span").removeClass("glyphicon-remove glyphicon-ok");
			$("#helpBlock1").html("");
		});

		//second input
		$("#secondName").blur(function(){
			var secNameVal = $(this).val();
			if(($(this).val() == "") || (secNameVal.search(regName) === -1)){
				$("#secondInput").addClass("has-error has-feedback");
				$("#secondInput > span").addClass("glyphicon-remove");
				$("#helpBlock2").append(msg);
			}else{
				$("#secondInput").removeClass("has-error has-feedback").addClass("has-success has-feedback");
				$("#secondInput > span").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			}
		});

		$("#secondName").focus(function(){
			$("#secondInput").removeClass("has-error has-feedback has-success");
			$("#secondInput > span").removeClass("glyphicon-remove glyphicon-ok");
			$("#helpBlock2").html("");
		});

		//e-mail input
		$("#email").blur(function(){ 
			var mailVal = $(this).val();
			if(($(this).val() == "") || (mailVal.search(regMail) === -1)){
				$("#thirdInput").addClass("has-error has-feedback");
				$("#thirdInput > span").addClass("glyphicon-remove");
				$("#helpBlock3").append(msg);
			}else{
				$("#thirdInput").removeClass("has-error has-feedback").addClass("has-success has-feedback");
				$("#thirdInput > span").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			}
		});

		$("#email").focus(function(){
			$("#thirdInput").removeClass("has-error has-feedback has-success");
			$("#thirdInput > span").removeClass("glyphicon-remove glyphicon-ok");
			$("#helpBlock3").html("");
		});


		//checkbox & radio
		$("#checkbox2 , #checkbox1").click(function(){
			if($(this).attr("checked") == 'checked') $(this).removeAttr("checked"); 
			else $(this).attr("checked","checked");
			
			if(($(this).attr("checked") == 'checked') && ($("#checkbox1").attr("checked") == 'checked')){
				$("#optionsRadios2").removeAttr("disabled");
				$("#radioPremium").removeClass("disabled");
			}else{
				$("#optionsRadios2").attr("disabled","disabled");
				$("#radioPremium").addClass("disabled");
			}
		});
});