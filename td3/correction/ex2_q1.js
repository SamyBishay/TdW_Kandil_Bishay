// Question 1
var var_var="chaine_var";
let var_let="chaine_let";
const var_const="chaine_const";

var_var="Chaine_var";
var_let="Chaine_let";
// var_const="Chaine_const"; // Erreur
try {
	var_const="Chaine_const"
	throw (erreur)
}
catch (erreur) {
	console.error("Oups : "+erreur.message)
}