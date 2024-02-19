// Question 3
let multipleDe = (x, nombre) => x%nombre==0;

console.log(multipleDe(21,4)); // Toujours leur faire vérifier le bon fonctionnement de la fonction
const taille = 20;
const nombreMax = 100;
let nombres = new Array();
for (let i=0;i<taille;i++)
	{
		nombres.push(Math.floor(Math.random() * nombreMax)); // push n'est pas obligatoire mais bien pratique. Le leur signaler.	
	}
console.log(nombres);
console.log(nombres.map(x => x/2));
console.log(nombres.filter(x => multipleDe(x,3)));