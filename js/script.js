//  Desc : affiche le menu. Le contenu évolue en fonction du filtre séletionner.
// 0 - Par défaut
// 1 - contenu du menu (notamment par défaut) et les boutons du filtre
// 2 - bouton d'ovuerture et de fermeture du menu
// 3 - chevrons des titres 3
// 4 - chargement du contenu
// 5 - bouton notes et home
$(document).ready(function() {

//---------------
// 0. Par défaut
//---------------
const url = 'https://raw.githubusercontent.com/gdemare/gdemare.github.io/master/'

// ajout des variables dossier, dossierSous, fichier
for (var i = 0; i <= fichiers.length - 1; i++) {
  dosFic = fichiers[i].chemin.split('/')
  fichiers[i].dossier = dosFic[0]
  fichiers[i].fichier = dosFic[dosFic.length-1]
  if (dosFic.length == 3) {
    fichiers[i].dossierSS = dosFic[1]
  }
  else { 
    fichiers[i].dossierSS = ''
  }
}

// par défaut charge le général
menu(fichiers.filter(fichiers => fichiers['general']))
chevrons()
chargement("general")
loadContenu(url+"html/accueil.html",0, "contenuHome");

//---------------
// 1. Contenu du menu
//---------------



function menu (data) {
  texte = ""
  for (var i = 0; i <= data.length - 1; i++) {
    ligne = data[i]
    if (i == 0 || (ligne.dossier != data[i-1].dossier) ) {
      texte = titre2(texte, ligne.dossier)
    }
    
    if ( (i == 0 || (ligne.dossierSS != data[i-1].dossierSS)) && ligne.dossierSS != '' ) {
      texte = titre3(texte, ligne.dossierSS)
    }

    texte = file(texte, ligne.fichier, ligne.dossierSS )
  } 
  document.getElementById("menu").innerHTML = texte
}

function titre2 (texte, dossier) {
  return texte + `<h2>${dossier}</h2>`
}

function titre3 (texte, dossierSS) {
  return texte + `<h3 id='${dossierSS}'>${dossierSS}<i class="bx bx-chevron-right"></i></h3></h3>`
}

function file (texte, fichier, classe) {
  if (classe != '') {
    baliseClasse = ` class="${classe}">&ensp;`
  } else {
    baliseClasse = '>'
  }
  return texte + `<li id="${fichier}"${baliseClasse} ${fichier.replace(/-/g, ' ')}</li>`
}

//bouton mode
var modeBtn = ["#btn-general", "#btn-r", "#btn-sas", "#btn-py"]
for (var i = modeBtn.length - 1; i >= 0; i--) {
  $(modeBtn[i]).click( function(){
    var monMode = this.id.substring(4)
    filtre = fichiers.filter(fichiers => fichiers[monMode])
    menu(filtre)  
    mode(this.id)
    chevrons()
    chargement(monMode)
  })
}

function mode (id) {
  document.getElementsByClassName('mode')[0].classList.remove('mode')
  document.getElementById(id).classList.add('mode')
}

//---------------
// 2. bouton menu
//---------------

var nav = document.getElementsByTagName('nav')[0],
    navStyle = window.getComputedStyle(nav),
    navWidth = navStyle.getPropertyValue('width');
nav.style.width = navWidth

$("#Bmenu").click( function(){
  var 
    nav = document.getElementsByTagName('nav')[0],
    navStyle = window.getComputedStyle(nav),
    navDisplay = navStyle.getPropertyValue('display');
    if (navDisplay == "flex") {
      nav.style.display = "none"
    } else {
      nav.style.display = "flex"
    }
});

//---------------
// 3. Chevrons des titres 3
//---------------

h3 = document.getElementById('menu').getElementsByTagName('h3')
for (var i = h3.length - 1; i >= 0; i--) {
  afficher(h3[i].id, "none")
}

function chevrons() {
  h3 = document.getElementById('menu').getElementsByTagName('h3')
  for (var i = h3.length - 1; i >= 0; i--) {
    afficher(h3[i].id, "none")
    $("#" + h3[i].id).click(function() {
      chevron = this.getElementsByTagName('i')[0]
      if (chevron.className == 'bx bx-chevron-down') {
        chevron.classList.remove('bx-chevron-down');
        chevron.classList.add('bx-chevron-right');
        afficher(this.id, "none")
      } else {
        chevron.classList.remove('bx-chevron-right');
        chevron.classList.add('bx-chevron-down');
        afficher(this.id, "flex")
      };
    });
  }
}

function afficher(classname, display) {
  elementsClasses = document.getElementsByClassName(classname)
  for (var i = elementsClasses.length - 1; i >= 0; i--) {
    elementsClasses[i].style.display = display
  }
}

//---------------
// 4. Chargement du contenu
//---------------
function chargement (monMode) {
  li = document.getElementById('menu').getElementsByTagName('li')
  for (var i = li.length - 1; i >= 0; i--) {
    $("#" + li[i].id).click(function() {
      ligne = fichiers.filter(fichiers => fichiers['fichier'] == this.id)
      if (monMode =='general') {chemFic = ligne[0].chemin+'.md'}
      else {chemFic = ligne[0].chemin + '_' + monMode + '.md'}
      loadContenu( url + "aide-memoire/" + chemFic, 1, "contenu")
    });
  }
}

function loadContenu(url, markdown, id) {
  fetch(url).then(response => response.text())
            .then(function(myText) {
                if (markdown==1) {
                  document.getElementById(id).innerHTML = marked.parse(myText);
                  document.getElementById("contenuHome").style.display = "none"
                  document.getElementById("contenu").style.display = "flex"
                } else {
                  document.getElementById(id).innerHTML = myText;
                };
                edit(url);
            })
};

// bouton edit 
function edit (url) {
  var modif = url.replace('raw.githubusercontent.com/gdemare/gdemare.github.io','github.com/gdemare/gdemare.github.io/edit');
  document.getElementById("edit").setAttribute('href', modif);
};

//---------------
// 4. Boutons notes et home
//---------------

$('#Bhome').click(function() {
  home = "flex"
  document.getElementById("contenuHome").style.display = "flex"
  document.getElementById("contenu").style.display = "none"
  edit('https://github.com/gdemare/gdemare.github.io/edit/master/html/accueil.html')
});

$('#Bnote').click(function() {
  loadContenu(url+"html/notes.md",1, "contenu");
});

$('#Bipmc').click(function() {
  loadContenu(url+"html/ipmc.md",1, "contenu");
});

});