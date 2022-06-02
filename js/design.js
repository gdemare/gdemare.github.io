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
});

$("#Bfav").click( function(){
  var fav = document.getElementById('fav');
  if( window.getComputedStyle(fav).getPropertyValue('display')=='none' ){
    fav.style.setProperty("display", "grid");
  }
  else {
    fav.style.setProperty("display", "none");
  }
} );

// redimension de la fenetre
window.onresize = menu
function menu(evnt){
  hauteur()
};

hauteur();

function hauteur() {
  var body = document.getElementsByTagName('body')[0],
    style = window.getComputedStyle(body),
    haut = style.getPropertyValue('height');
  document.getElementsByTagName("nav")[0].style.setProperty("height", haut);
  document.getElementsByTagName("section")[0].style.setProperty("height", haut);
};

})
