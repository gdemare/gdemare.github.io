$(document).ready(function() {

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
    if (stop == 3 ) {
      loadContenu(lien+'.md', 1, "contenu");
    };
    if (stop == 4 ) {
      loadContenu(lien+'_r.md', 1, "contenu");
    };
    if (stop == 5 ) {
      loadContenu(lien+'_sas.md', 1, "contenu");
    };
    if (stop == 6 ) {
      loadContenu(lien+'_python.md', 1, "contenu");
    };

  });
};

function disparition() {
  document.getElementById("contenu").innerHTML = "";
  document.getElementById("contenuHome").innerHTML = "";
  bgeneral.style.display = "none";
  bpython.style.display = "none";
  bsas.style.display = "none";
  br.style.display = "none";
}

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
  // défaut masquer disparait les boutons
  disparition()

  $('#bgeneral').click(function() {
    loadContenu(lien+'.md', 1, "contenu")});
  $('#br').click(function() {
    loadContenu(lien+'_r.md', 1, "contenu")});
  $('#bsas').click(function() {
    loadContenu(lien+'_sas.md', 1, "contenu")});
  $('#bpython').click(function() {
    loadContenu(lien+'_python.md', 1, "contenu")});

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
  loadContenu(url+"html/accueil.html",0, "contenuHome");
  disparition()
});
$('#couleurs').click(function() {
  loadContenu(url+"html/couleurs.html",0, "contenu");
  disparition()
});
$('#Bnote').click(function() {
  loadContenu(url+"html/notes.md",1, "contenu");
  disparition()
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


function recherche(tableau, id) {
 for (var i = 0; i <= tableau[0].length - 1; i++) {
  if (tableau[2][i] == id) {
    return i
    }
  };
};

});