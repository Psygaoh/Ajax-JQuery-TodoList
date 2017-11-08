

	function resultatAppel(data) {
		
		// les variables
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var length1 = data.todoListes[0].elements.length;
		var length2 = data.todoListes[1].elements.length;
		var length3 = data.todoListes[2].elements.length;
		
	/*	console.log(data.todoListes[0].elements.length);
	les vérifications
	*/
		console.log(data);		
	// les titres des listes	
		$("#titre1").empty();
		$("#titre2").empty();
		$("#titre3").empty();
		$("#resultat1").empty();
		$("#resultat2").empty();
		$("#resultat3").empty();
		
		$("#titre1").append(
			"<p class=nameA"+count1+">"+data.todoListes[0].name +"</p>");
		$("#titre2").append(
			"<p class=nameB"+count2+">"+data.todoListes[1].name +"</p>");
		$("#titre3").append(
			"<p class=nameB"+count3+">"+data.todoListes[2].name +"</p>");
			
	// boucle contenu 1		
		while (count1 != length1) {
		$("#resultat1").append(
			"<p class=dataA"+count1+">"+data.todoListes[0].elements[count1] +"</p>");
			count1 ++;
		};
	// boucle contenu 2		
		while (count2 != length2) {
		$("#resultat2").append(
			"<p class=dataB"+count2+">"+data.todoListes[1].elements[count2] +"</p>");
			count2 ++;
		};

	// boucle contenu 3		
		while (count3 != length3) {
		$("#resultat3").append("<img src="+data.todoListes[2].elements[count3]+">");
		//	"<p class=dataB"+count3+">"+data.todoListes[2].elements[count3] +"</p>");
			count3 ++;
		};
	}
	
	
	function resultatErreur(data) {
		$("#resultat1","resultat2","resultat3").empty();
		$("#resultat1","resultat2","resultat3").append("Une erreur est survenue, réessayez plus tard");
	}
	
	function connect(event){
		var todoListes = $("#todoListes").val();
		var login = $("#login").val();
		var password = $("#password").val();
		var monUrl = "http://92.222.69.104:8080/todo/listes/";
		console.log(monUrl);
		$.ajax({
			url: monUrl,
			headers : { "login" : login, "password": password },
			error : resultatErreur
		}).done(resultatAppel);
		;	
	}
	
	