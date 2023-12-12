	$(document).ready(function(){
		var quoteSource=[
	    {
	    	quote:"Te propongo algo... esta semana, no importa la hora, no importa el destino: salgamos a caminar. Ya sea a la esquina, a dar la vuelta manzana, lejos, cerca. Salgamos a caminar y conversar entre nosotros. Incluso podemos hacerlo sin el teléfono. Salimos y vemos hasta donde vamos. No importa el destino, lo importante es la compañía ♥. Luego lo anotamos en la libretita como nos va",
	    	
	    },
		
		{
			quote: "He cocinado para ti. Tu has cocinado <b> muchas más veces </b> para mi. Pero nunca cocinamos juntos, ocupando el mismo espacio. Creo que a ninguno nos gusta pero puede ser interesante trabajar en equipo para hacer algo juntitos, y ver como nos sale. Te propongo que esta semana nos hagamos un tiempito para cocinar juntos, puede salir mal? Sipi, pero ¿Por que no intentarlo? La consigna es buscar una receta entre los dos para hacer ♥ ",
			
	    },

		
	    {
	    	quote:"Se que tu peli favorita es Orgullo y Prejuicio, y tu sabes que la mía es Shrek 2. Pero porque no buscamos una confort-movie para ver juntitos? Comencemos una búsqueda de una peli que nos acerque, una que nunca hayamos visto. Puede salir mal, y ver una peli muy mala pero al menos quedará como anécdota. Apostemos, y luego lo anotamos en la libretita",
	    	
	    },
		
	    {
	    	quote:"(si viste la anterior fingí demencia porque no se había actualizado bien xd) Sabemos que yo soy el chill y vos la butaquera (aunque yo soy mas butaquero pero en la práctica no espiritualmente) y tenemos gustos de música diferente... pero podriamos hacer una lista de reproducción de canciones que nos recuerden momentos especiales y escucharla juntos. Lo bueno de esta actividad es que puede extenderse al infinito, e ir agregando cada vez mas canciones como para hacer un album de fotos pero de canciones (?",
	    	
	    },
		
		{
	    	quote:"Esta te va a gustar: Invitar a amigos para compartir una noche de juegos. Es algo que te encanta y a mi tambien y no hemos tenido muchas oportunidades de hacerlo. Eso no solo nos va a dar diversión y algo para compartir con amigos si no también nos va a poner en un lugar de sociabilidad como pareja, y ya somos una parejita asi que puede ser lindo. Puede ir nacho, joha, shir, fer, cualquiera... incluso tus compañeros de trabajo (?",
		
	    	
	    },
		
		{
		quote:"Esta es mas cursi. Y mas comoda para mi pero bueno que viva la ñoñez: Hagamos una lista de cosas que apreciamos el uno del otro, y luego las compartimos. Tenemos una semana hasta que nos veamos, no podemos decirnos nada al respecto. Luego nos juntamos y nos leemos lo que pensamos el uno del otro y hablamos de cositas lindas desde el amor ♥",
	    		    	
	    },
		
		
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	
	    },
		
		{
	    	quote:"Esta es una idea que te robe jaja. Hagamos un reel juntos! Ya sea de nuestro viaje a cordoba, o alguno que podamos guardar y hacer juntitos. Divertido, para hacer dentro de una casa, afuera, bien vestidos o crotitos. Algo que sea lindo para hacer en pareja que te parece? ♥",
		
	    	
	    },
		
		{
			quote:"Hagamos un picnic!. Podemos hacerlo en el parque o en un lugar al aire libre cercano, llevar algo de comer y pasar un rato agradable juntos. No hay necesidad de planificar demasiado, solo disfrutar el momento. Puedo llevar la guitarra (ahre) o llevamos para terminar una de las pelis que elegimos ver y nunca terminamos, o podemos llevar el parlantecito y escuchar musica o un podcast. Algo asi biem chill, que opinas?"
		},
		
		{
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	
	    },

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			Date.prototype.getWeek = function() {
				var onejan = new Date(this.getFullYear(),0,1);
				var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
				var dayOfYear = ((today - onejan + 86400000)/86400000);
				return Math.ceil(dayOfYear/7)
			};
			var today = new Date();
			var currentWeekNumber = today.getWeek()-43;
			console.log(currentWeekNumber);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[currentWeekNumber].quote;
			var newQuoteGenius = "Semana: " + (currentWeekNumber+1);
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready
