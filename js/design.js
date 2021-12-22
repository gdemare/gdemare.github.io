$(document).ready(function() {

// ajuste le contenu et le menu
document.getElementsByTagName("nav")[0].style.setProperty("top", document.getElementsByTagName("header")[0].offsetHeight + 'px')
document.getElementById('fantome').style.setProperty("width", document.getElementsByTagName('nav')[0].offsetWidth + 'px')
document.getElementsByTagName("section")[0].style.setProperty("margin-top", document.getElementsByTagName("header")[0].offsetHeight + 'px')


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

function largeur() {
  var menu = document.getElementsByTagName('nav')[0],
    style = window.getComputedStyle(menu),
    affiche = style.getPropertyValue('display'),
    fantome = document.getElementById('fantome');
  if( affiche=='none' ){
    fantome.style.setProperty("width", "0px");
  }
  else {
    var largeur = menu.offsetWidth + 'px';
    fantome.style.setProperty("width", largeur);
  }
};

})
