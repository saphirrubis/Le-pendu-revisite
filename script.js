"use strict";
const body = document.querySelector('body');
let mots = ["javascript",
"callback",
"fonction",
"recurcive",
"responsive",
"serveur",
"navigateur",
"script",
"index",
"style",
"document",
"body",
"boucle",
"condition",
"tailwind",
"socket",
"react",
"express",
"nodejs",
"vuejs",
"angular",
"useeffect",
"usestate",
"import",
"export",
"formik",
"routing",
"routing",
"router",
"server",
"http",
"symfony",
"variable"];
let di = parseInt(Math.random() * mots.length);
let mot = mots[di];
let lettreMot = Array.from(mot);
let MauvaiseL = [];
let lettreTouvee= [];
let lettreJouer = [];
let resteVie = 8;
let fini = false;

for (let i = 0; i < lettreMot.length; i++) {
    if (lettreMot[i] == "-"){ lettreTouvee.push(true)}
    else {lettreTouvee.push(false)};
}

function affichage() {
    let aff = "";
    for (let i = 0; i < lettreTouvee.length; i++) {
        if (lettreTouvee[i]) {
            aff += " " + lettreMot[i];
        } else {
            aff += " _";
        }
    }
    let mls = "";
    for (let i = 0; i < MauvaiseL.length; i++) {
       
        if (i >= 0) {
            mls += " "
            mls += " " + MauvaiseL[i]
         
        }
    }
    let ljs = "";
    for (let i = 0; i < lettreJouer.length; i++) {
        if (i >= 0) {
            ljs += " ";
            ljs += " " + lettreJouer[i];
        }
    }
    document.getElementById("mot").innerHTML= aff;
    document.getElementById("vie").innerHTML = "Vous avez " + resteVie + " vies."
    document.getElementById("ml").innerHTML = "Mauvaises lettres : " + mls;
    document.getElementById("lj").innerHTML = "Lettres jouées : " + ljs;
}

function lettre(l) {
    let lB = true;
    if (fini) {
        lB = false;
        alert("Game Over, vous voulez rejouer click sur jouer");
        console.log(lB)
    } else if (lettreJouer.includes(l)) {
        
        alert("Cette lettre est déjà jouée !");
        lB = false;
    } else {
        lettreJouer.push(l);
    }
    if (lB) {
        let trouve = false;
        for (let i = 0; i < lettreMot.length; i++) {
            if (lettreMot[i] == l) {
                lettreTouvee[i] = true;
                trouve = true;
            }
        }
    if (!trouve) {
        if (!(l in MauvaiseL)) {
            MauvaiseL.push(l);
            resteVie -= 1; 
                switch (resteVie) {
                    case 8:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0)";
                        break;
                    case 7:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0.125)";
                        break;
                    case  6:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0.250)";
                        break;
                    case  5:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0.375)";
                        break;
                    case  4:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0.5)";
                        break;
                    case  3:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0.625)";
                        break;
                    case 2:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0.75)";
                        break;    
                    case  1:
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0.875)";
                        break;
                    case 0 :
                        document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 1)";
                        break; 
            }
            }
        }

affichage();  
    if (resteVie <= 0) {
            alert("Le mot était : " + mot);
            fini = true;
        }
let victoire = true;
    for (let i = 0; i < lettreTouvee.length; i++) {
        if (!lettreTouvee[i]) {
            victoire = false;
            }
        }
        if (victoire) {
            alert("Vous avez Gagné !");
            
            fini = true;
        }
    }
}
function rejouer() {
    di = parseInt(Math.random() * mots.length)
    mot = mots[di];
    lettreMot = Array.from(mot);
    MauvaiseL = [];
    lettreTouvee= [];
    lettreJouer = [];
    document.getElementsByClassName("cache")[0].style.backgroundColor ="rgba(255, 0, 0, 0)"

    for (let i = 0; i < lettreMot.length; i++) {
        if (lettreMot[i] == "-") lettreTouvee.push(true);
        else lettreTouvee.push(false);
    }

    resteVie = 8;
    fini = false;
    affichage();
}
affichage();