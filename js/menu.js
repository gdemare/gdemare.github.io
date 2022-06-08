$(document).ready(function() {


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

});