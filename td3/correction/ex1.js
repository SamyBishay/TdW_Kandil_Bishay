// Comment accéder à l'élément d'identifiant p1
document.getElementById("p1");

// Comment accéder aux éléments de classe classe1
document.getElementsByClassName("classe1");
document.querySelectorAll(".classe1")

// Comment accéder à l'élément header
document.getElementsByTagName("header")[0];
document.getElementsByTagName("h1")[0].parentElement;

// Comment accéder aux paragraphes de classe classe1
document.querySelectorAll("p.classe1");
document.querySelectorAll("main .classe1"); // marche dans ce cas particulier

// Comment accéder aux éléments enfants de main
document.getElementsByTagName("main")[0].children;
document.querySelectorAll("main > *")

// Combien d'enfants l'élément main possède-t-il? combien d'éléments enfants?
document.getElementsByTagName("main")[0].childNodes.length; // 25
document.getElementsByTagName("main")[0].children.length; // 12

// Comment accéder au dernier paragraphe du document?
const listeP=document.getElementsByTagName("p");listeP[listeP.length-1];
document.querySelectorAll("p:last-of-type")[1] // expliquer pourquoi p:last-of-type renvoie 2 éléments
document.getElementsByTagName("main")[0].lastElementChild; 
document.getElementsByTagName("h2")[2].nextSibling.nextSibling; // nextSibling oublié en cours