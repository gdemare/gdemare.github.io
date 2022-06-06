$(document).ready(function() {

// dossier ; sous dossier; fichier; general; r; sas; python
donnee = [
    //['company',null,'animateur',1,0,0,0],
    ['company', null, 'job-interview', 1, 0, 0, 0],
    ['company', null, 'MOA-MOE', 1, 0, 0, 0],
    ['database', null, 'business-object', 1, 0, 0, 0],
    ['database', null, 'data-warehouse', 1, 0, 0, 0],
    ['database', null, 'json', 1, 0, 0, 0],
    ['database', null, 'sql', 1, 0, 0, 0],
    ['database', null, 'talend', 1, 0, 0, 0],
    ['english', null, 'verbe', 1, 0, 0, 0],
    ['environnement', null,'erosion-biodiversite',1,0,0,0],
    ['environnement', null,'dictionnaire-ecologie',1,0,0,0],
    ['microsoft', null, 'batch', 1, 0, 0, 0],
    ['microsoft', null, 'excel', 1, 0, 0, 0],
    ['microsoft', null, 'outlook', 1, 0, 0, 0],
    ['microsoft', null, 'powerShell', 1, 0, 0, 0],
    ['microsoft', null, 'windows', 1, 0, 0, 0],
    ['microsoft', null, 'word', 1, 0, 0, 0],
    ['programming', null, 'java', 1, 0, 0, 0],
    ['programming', null, 'python', 1, 0, 0, 0],
    ['projects', null, 'raspberry-wifi', 1, 0, 0, 0],
    ['statistique', 'reduction-dimensions', 'reduction-dimension-info', 1, 0, 0, 0],
    ['statistique', 'reduction-dimensions', 'ACM', 1, 1, 1, 0],
    ['statistique', 'reduction-dimensions', 'AFC', 1, 1, 1, 0],
    ['statistique', 'reduction-dimensions', 'analyse-discriminante', 1, 1, 1, 0],
    ['statistique', 'cluestering', 'CAH', 1, 1, 1, 0],
    ['statistique', 'cluestering', 'cluestering-info', 1, 0, 0, 0],
    ['statistique', 'cluestering', 'CDH', 1, 0, 0, 0],
    ['statistique', 'cluestering', 'clustering-variables', 1, 0, 1, 0],
    ['statistique', 'classification', 'classification-info', 1, 1, 0, 0],
    ['statistique', 'classification', 'ANOVA', 1, 1, 1, 0],
    ['statistique', 'classification', 'ARMA', 1, 0, 0, 0],
    ['statistique', 'classification', 'SVM', 1, 1, 0, 0],
    ['statistique', 'classification', 'arbre-de-decision', 1, 1, 1, 0],
    ['statistique', 'classification', 'boosting', 1, 0, 0, 0],
    ['statistique', 'classification', 'carte-auto-adaptative', 1, 0, 0, 0],
    ['statistique', 'classification', 'centroide', 1, 0, 1, 0],
    ['statistique', 'classification', 'classificateur-baysien', 1, 1, 0, 0],
    ['statistique', 'classification', 'esperance-maximisation', 1, 0, 1, 0],
    ['statistique', 'classification', 'foret-aleatoire', 1, 1, 0, 0],
    ['statistique', 'classification', 'lissage-exponentiel', 1, 0, 0, 0],
    ['statistique', 'classification', 'perceptron', 1, 0, 0, 0],
    ['statistique', 'classification', 'predire-evaluer', 0, 1, 0, 0],
    ['statistique', 'classification', 'probleme-correlation', 1, 0, 0, 0],
    ['statistique', 'classification', 'regression-lineaire', 1, 0, 1, 0],
    ['statistique', 'classification', 'regression-logistique', 1, 1, 1, 0],
    ['statistique', 'classification', 'serie-temporelle-simple', 0, 1, 0, 0],
    ['statistique', 'classification', 'serie-temporelle', 1, 0, 0, 0],
    ['statistique', 'mixte', 'reseaux-neurones', 1, 1, 0, 0],
    ['statistique', null, 'cluestering-sans-cible', 1, 0, 0, 0],
    ['statistique', null, 'automatiser', 0, 1, 1, 0],
    ['statistique', null, 'carte', 1, 1, 0, 0],
    ['statistique', null, 'corrélation', 1, 0, 0, 0],
    ['statistique', null, 'deploy-Rshinny-shinyapps', 1, 0, 0, 0],
    ['statistique', null, 'dictionnaire-statistique', 1, 0, 0, 0],
    ['statistique', null, 'formater-donnees', 0, 1, 1, 0],
    ['statistique', null, 'graphiques', 1, 1, 1, 1],
    ['statistique', null, 'manipuler-donnees', 0, 1, 1, 1],
    ['statistique', null, 'programme-indépendant', 0, 1, 0, 0],
    ['statistique', null, 'statistique', 1, 0, 0, 0],
    ['statistique', null, 'statistique-descriptive', 0, 0, 1, 0],
    ['statistique', null, 'tableau-de-bord', 0, 1, 0, 0],
    ['statistique', null, 'tests', 0, 1, 1, 0],
    ['statistique', null, 'text-mining', 1, 0, 0, 0],
    ['statistique', null, 'web-scraping', 0, 0, 0, 1],
    ['unix', null, 'bash', 1, 0, 0, 0],
    ['unix', null, 'folders-linux', 1, 0, 0, 0],
    ['unix', null, 'shell', 1, 0, 0, 0],
    ['unix', null, 'vim', 1, 0, 0, 0],
    ['web', null, 'css', 1, 0, 0, 0],
    ['web', null, 'html', 1, 0, 0, 0],
    ['web', null, 'java-script', 1, 0, 0, 0],
    ['web', null, 'php', 1, 0, 0, 0]
];

//******************************
// instruction par début
//******************************
for (var i = 0; i <= donnee.length - 1; i++) {
  var position =donnee[i][0] + '/'; 
  if (donnee[i][1]==null) {
    position = position + donnee[i][2]
  } else {
    position = position + donnee[i][1] + '/' + donnee[i][2]
  };
  donnee[i][donnee[i].length] = position;
};

content = transposer(donnee);

// contenu du menu
var menu =  document.getElementsByTagName('nav')[0],
  menuHtml = menu.innerHTML,
  classe = "",
  menu = new Array();

for (var i = 0; i <= content[0].length - 1; i++) {

  if (i == 0) { //première ligne
    condition = true;
    condition2 = content[1][i] != null;
  } else { //le reste
    condition = content[0][i] != content[0][i - 1];
    condition2 = content[1][i] != content[1][i - 1] && content[1][i] != null
  };
  classe = content[0][i];
  if (condition) {
    menuHtml = menuHtml + '<h2>' + classe.replace(/-/g, ' ') + "</h2>";
  };
  if (condition2) {
    menuHtml = menuHtml + '<div id="' + content[1][i] + '" >' + content[1][i].replace(/-/g, ' ') + '<i class="lni lni-chevron-right"></i></div>';
  };

  var langage = "";
  if (content[4][i] == 1) { langage = langage + '<span class="r"></span>'; };
  if (content[5][i] == 1) { langage = langage + '<span class="sas"></span>'; };
  if (content[6][i] == 1) { langage = langage + '<span class="python"></span>'; };

  if (content[1][i] !== null) {
    classe = content[1][i];
    libelle = '&ensp;' + content[2][i].replace(/-/g, ' ');
    menuHtml = menuHtml + '<div class="' + classe + '" id=' + content[2][i] + ' style = "display:none;">' + libelle + langage + "</div>";
  } else {
    libelle = content[2][i].replace(/-/g, ' ');
    menuHtml = menuHtml + '<div id=' + content[2][i] + '>' + libelle + langage + "</div>";
  };
};
document.getElementsByTagName('nav')[0].innerHTML = menuHtml; 

// chevron pour le menu
var menuSub = content[1].filter(onlyUnique),
  menuSub = menuSub.filter(x => !!x);
for (var i = 0; i <= menuSub.length - 1; i++) {
  $("#" + menuSub[i]).click(function() {
    menuSub = $(this)[0].id;
    angle = $("#" + menuSub + " i");
    if (angle[0].className == 'lni lni-chevron-down') {
      angle.removeClass('lni-chevron-down');
      angle.addClass('lni-chevron-right');
      valeur = 'none';
    } else {
      angle.removeClass('lni-chevron-right');
      angle.addClass('lni-chevron-down');
      valeur = 'flex';
    };
    var elems = document.getElementsByClassName(menuSub);

    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = valeur;
    };
  });
}

//********************** selection*******************************

var url = 'https://raw.githubusercontent.com/gdemare/gdemare.github.io/master/' 

// charger les pages et ajouter la classe sélection
for (var i = 0; i <= content[0].length - 1; i++) {
  $('#' + content[2][i]).click(function() {
    if (document.getElementsByClassName("selection")[0] != null) {
      $('.selection').removeClass('selection');
    };
    $(this)[0].className = $(this)[0].className + " selection";
    var id = $(this)[0].id;
    recherche(id);
    bouton(id);
    var page = donnee[recherche(content, id)];
    var stop = 0;
    for (var j = 6; j>2 ;  j--) {
      if (page[j] == 1) {stop = j;};
    };
    var lien = url+ 'aide-memoire/' + page[7];
    if (stop == 3 ) {loadContenu(lien+'.md', 1, "contenu")};
    if (stop == 4 ) {loadContenu(lien+'_r.md', 1, "contenu")};
    if (stop == 5 ) {loadContenu(lien+'_sas.md', 1, "contenu")};
    if (stop == 6 ) {loadContenu(lien+'_python.md', 1, "contenu")};

  });
};

// selection permet de générer les boutons
function bouton(selection) {
  var onglet = document.getElementById(selection).id,
    actuel = donnee[recherche(content, onglet)],
    somme = actuel[3]+actuel[4]+actuel[5]+actuel[6],
    bgeneral = document.getElementById("bgeneral"),
    bpython = document.getElementById("bpython"),
    bsas = document.getElementById("bsas"),
    br = document.getElementById("br"),
    lien = url + 'aide-memoire/' + actuel[7];
  // défaut masquer
  bgeneral.style.display = "none";
  bpython.style.display = "none";
  bsas.style.display = "none";
  br.style.display = "none";

  $('#bgeneral').click(function() {loadContenu(lien+'.md', 1, "contenu")});
  $('#br').click(function() {loadContenu(lien+'_r.md', 1, "contenu")});
  $('#bsas').click(function() {loadContenu(lien+'_sas.md', 1, "contenu")});
  $('#bpython').click(function() {loadContenu(lien+'_python.md', 1, "contenu")});

  // affiche les boutons s'il y a plusieurs liens
  if (somme>1 ) {
    if (actuel[3] == 1 ) {
      bgeneral.style.display = "flex"
    } else {bgeneral.style.display = "none"};
    if (actuel[4] == 1 ) {
      br.style.display = "flex";
    } else {br.style.display = "none"};
    if (actuel[5] == 1 ) {
     bsas.style.display = "flex"
    } else {bsas.style.display = "none"};
    if (actuel[6] == 1 ) {
      bpython.style.display = "flex"   
    };
  };
};

loadContenu(url+"html/accueil.html",0, "contenuHome");

$('#Bhome').click(function() {
  document.getElementById("contenu").innerHTML = "";
  loadContenu(url+"html/accueil.html",0, "contenuHome");
});
$('#couleurs').click(function() {
  document.getElementById("contenu").innerHTML = "";
  document.getElementById("contenuHome").innerHTML = "";
  loadContenu(url+"html/couleurs.html",0, "contenu");
});
$('#Bnote').click(function() {
  document.getElementById("contenu").innerHTML = "";
  document.getElementById("contenuHome").innerHTML = "";
  loadContenu(url+"html/notes.md",1, "contenu");
});

//************fonction***************//
function edit (url) {
  var modif = url.replace('raw.githubusercontent.com/gdemare/gdemare.github.io','github.com/gdemare/gdemare.github.io/edit');
  document.getElementById("edit").setAttribute('href', modif);
};

// charger le contenu des pages
function loadContenu(url, markdown, id) {
  console.log(url)
  var aPromise = fetch(url);
  // Work with Promise object:
  aPromise
      .then(function(response) {
          if (!response.ok) {
              throw new Error("HTTP error, status = " + response.status);
          }
          response.text()
              .then(function(myText) {
                if (markdown==1) {
                  document.getElementById(id).innerHTML = marked.parse(myText);
                  document.getElementById("contenuHome").innerHTML = "";
                } else {
                  document.getElementById(id).innerHTML = myText;
                };
                edit(url);
              })
              .catch(function(error) {
                  // Never happened.
              });
      })
      .catch(function(error) {
          console.log("Noooooo! Something error:");
          // Network Error!
          console.log(error);
      });
};

// transposer le tableau
function transposer(tableau) {
  var transposition = new Array(tableau[0].length);
  for (var i = 0; i < tableau[0].length; i++) {
    transposition[i] = [];
    for (var j = 0; j < tableau.length; j++) {
      transposition[i][j] = tableau[j][i];
    };
  };
  return transposition
};

// animation menu déroulant
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
};

function recherche(tableau, id) {
 for (var i = 0; i <= tableau[0].length - 1; i++) {
  if (tableau[2][i] == id) {
    return i
    }
  };
};

});