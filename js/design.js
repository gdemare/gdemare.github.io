$(document).ready(function() {

// bouton menu
$("#Bmenu").click( function(){
  var menu = document.getElementsByTagName('nav')[0],
    style = window.getComputedStyle(menu),
    affiche = style.getPropertyValue('display');
  if( affiche=='block' ){
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
  largeur()
} );

// redimension de la fenetre
window.onresize = menu
function menu(evnt){largeur()};

largeur();

function largeur() {
  var menu = document.getElementsByTagName('nav')[0],
    fantome = document.getElementById('fantome'),
    style = window.getComputedStyle(menu),
    affiche = style.getPropertyValue('display'),
    headerHaut = document.getElementsByTagName("header")[0].offsetHeight + 'px',
    navLarg = menu.offsetWidth + 'px';
  document.getElementsByTagName("section")[0].style.setProperty("margin-top", headerHaut);
  document.getElementById('fantome').style.setProperty("width", navLarg);
  document.getElementsByTagName("nav")[0].style.setProperty("top", headerHaut);
  if( affiche=='none' ){
    fantome.style.setProperty("width", "0px");
  }
  else {
    var largeur = menu.offsetWidth + 'px';
    fantome.style.setProperty("width", largeur);
  }
};

})
