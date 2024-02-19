const var_const = 1;
let var_let;
var var_var;


function creer_tableau_puiss(taille){
    let tab = [];
    for(let step = 0; step<taille; step++){
        tab[step]= 2**step;
        //console.log(tab[step]);
    }
    return tab;
}


let tab=creer_tableau_puiss(5);
console.log(tab);
let obj = {prop1: 3,prop2: 2,prop3: 5};

function obj_mm_taille(obj){
    let taille = Object.keys(obj).length;
    let res= {};
    let tab_keys = Object.keys(obj);
    let values = Object.values(obj);
    
    for(let i =0; i<taille;i++){
        if (values[i]%2==0){
            let str = values[i].toString();
            str.concat(" est pair");
            res = Object.assign(tab_keys[i], str);
        }

        else{
            let str = values[i].toString();
            str.concat(" est impair");
            res = Object.assign(tab_keys[i], str);       
        }
    }
    return res;
}
function objtaille(obj){
    let obj2 = Object.create(obj);
    for (key in obj2){
        if (obj[key]%2==0){
            obj2[key] += " est pair"; 
        }
        else{
            obj2[key] += " est impair"; 
        }
    }
    return obj2;
}

let obj2 = objtaille(obj);
console.log(obj2);

function multiple(x,nb){
    return(x%nb == 0);
}

function rand_tab20(){
    let tab = [];
    let i;
    for(let step = 0; step<20; step++){
        i = 99*Math.random();
        i=Math.floor(i);
        tab[step]= i;
    }
    return tab;
}

let tab3 = rand_tab20();
console.log(tab3);  
function moitie(tab){
    for(let i =0; i<20;i++){
        tab[i]=tab[i]/2;
    }
    return tab;
}
console.log(moitie(tab3));

