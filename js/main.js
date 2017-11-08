
		
function test(data){
		var nblist = data.todoListes.length;
		console.log(nblist);
			for (i = 0 ; i < nblist ; i++){
				var titre =  "#titre"+i;
				var resultat = "#resultat"+i;
				var nbdiv = $("classtitle").length;
				var tLenght = data.todoListes[i].elements.length;
				console.log("titre"+titre);console.log("resul"+resultat);console.log("nbdiv"+nbdiv);console.log("length"+tLenght);		
				
				if (nbdiv != nblist){
					$("#content").append(
					"<div>" "test"+i+"</div>");
					console.log("nbdivchange"+nbdiv);
				};
			} ;
}
				
/*
	function resultatAppel(data) {
		
	}
	
	function resultatErreur(data) {
		$("#resultat1","resultat2","resultat3").empty();
		$("#resultat1","resultat2","resultat3").append("Une erreur est survenue, réessayez plus tard");
	}
	
	*/
	function connect(event){
		var todoListes = $("#todoListes").val();
		var login = $("#login").val();
		var password = $("#password").val();
		var monUrl = "http://92.222.69.104:8080/todo/listes/";
		console.log(monUrl);
		$.ajax({
			url: monUrl,
			headers : { "login" : login, "password": password },
			//error : resultatErreur
	
		}).done(test);//.done(resultatAppel);
		;
	}	