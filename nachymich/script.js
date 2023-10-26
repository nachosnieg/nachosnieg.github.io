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
	    	quote:"¿Cuándo fue la última vez que dieron un paseo sin rumbo fijo? Caminar juntos puede dar lugar a conversaciones significativas y descubrir nuevas perspectivas. La actividad de esta semana es dar un paseo juntos a donde sea",
	    	
	    },
		
		{
	    	quote:"Believe you can and you're halfway there.",
	    	
	    },
		
		{
	    	quote:"Believe you can and you're halfway there.",
	    	
	    },
		
		
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }

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

