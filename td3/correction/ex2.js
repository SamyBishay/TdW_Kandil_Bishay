// Question 1
var var_var="chaine_var";
let var_let="chaine_let";
const var_const="chaine_const";

var_var="nChaine_var";
var_let="nChaine_let";
// var_const="nChaine_const"; // Erreur
try {
	var_const="nChaine_const"
	throw (erreur)
}
catch (erreur) {
	console.error("Oups : "+erreur.message)
}