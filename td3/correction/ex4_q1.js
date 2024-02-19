// renvoie 5 car la liste possède aussi des nœuds enfants de type texte (retours à la ligne+tabulation)
console.log(document.getElementById("listecommissions").childNodes.length);
// renvoie 2 car il n'y a que 2 li, éléments enfants
console.log(document.getElementById("listecommissions").children.length);

document.getElementById("btn_add").addEventListener("click", ajout);
document.getElementById("btn_supp").addEventListener("click", function () {
	let liste = document.getElementById("listecommissions");
	if (liste.lastElementChild) liste.removeChild(liste.lastElementChild)	
});

function ajout(evt) {
	let newLi = document.createElement("li");	
	let newText = document.createTextNode("texte"); 
	newLi.appendChild(newText);
	document.getElementById("listecommissions").appendChild(newLi);
}