// Lorsqu'on se trouve dans le input, qu'on a écrit du texte et qu'on appui sur la touche entrée : créer une liste
var idCard = 1;

// Rendre les listes triables
$('#app').sortable()
$('#liste').on("keyup", function(e){
    
	// Récupérer la touche qui a été appuyée
	var key = e.keyCode;
	if(key == 13)
	{
		// Vérifier si le champs input n'est pas vide
		var contenu = $('#liste').val();

		if(contenu.length > 0)
		{
			// Il existe du contenu dans le champs input
			// On peut créer la liste
			$('#app').append('<div data-id="'+idCard+'" class="liste liste'+idCard+'"><h2>'+contenu+'</h2><ul></ul><input type="text" data-card="'+idCard+'" id="carte'+idCard+'" placeholder="Ajouter une carte" /></div>');
			idCard++;
			$('#liste').val("");
		}
		
		
	}
});

$(document).on('keyup', 'input', function(e){
	var key = e.keyCode;
	// code 13 = touche entrée
	if(key == 13)
	{
		var contenu = $(this).val();
		// Ajouter la nouvelle carte dans la bonne liste
		$('.liste'+$(this).attr('data-card')+' ul').append('<li>'+contenu+'<span></span></li>');

			$(this).val("");

	}

	$('.liste ul').sortable({
		connectWith: '.liste ul'
	});

	// gère l'ajout de CARTES
	// console.log($(this).attr('data-card'));
})

$(document).on('dblclick', 'li', function(){
	$(this).toggleClass('green');
})

$(document).contextmenu(function(){
	$(this).toggleClass('red');
})



// Rend les listes triables au clique sur le bouton
// $('button').on('click', function(){
// 	$('.liste ul').sortable({
// 		connectWith: '.liste ul'
// 	});
// })