document.getElementById("btn_ok").addEventListener("click", additionne)

function additionne (evt){
	let nombre1 = document.getElementById("nb1");
	let nombre2 = document.getElementById("nb2");
	
	console.log(Number(nombre1.value)+Number(nombre2.value)); // « Piège » classique du champ input qui renvoie une chaîne de caractères…
	
	if (evt.shiftKey) {
		console.log("Touche majuscule appuyée");
	}
}