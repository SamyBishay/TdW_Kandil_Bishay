// Question 2

function creeTableau(taille){
	let x = new Array(taille);
	for (let i=0;i<x.length;i++){
			x[i]=2**i
	}
	return x
}

let tab = creeTableau(3);
let obj = {prop1: 3, prop2: 2, prop3: 5};

function fonctionPairImpair (x) {
	let y = Object.create(x);
	for (let cle in x) {
		y[cle]+=" est "+(x[cle]%2==0 ? "pair.":"impair.")	
	}
	return(y)
}

console.log(fonctionPairImpair(tab));
console.log(fonctionPairImpair(obj));