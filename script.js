$(document).ready(function() {

  var hauteurNav = document.getElementsByTagName("nav")[0].offsetHeight + 'px',
      largeurMenu = document.getElementById("menu").offsetWidth - 1 + 'px';
  document.getElementsByTagName("nav")[0].style.setProperty("left", largeurMenu);
  document.getElementById("page").style.setProperty("margin-left", largeurMenu);
  document.getElementById("page").style.setProperty("margin-top", hauteurNav);

  // changer les couleurs
  $("#styleCSS").click( function() {
    if ($(this)[0].className.indexOf("dark") == -1) {
      $(this).addClass("dark");
      document.getElementById('page').style.boxShadow = "none";
    } else {
      $(this).removeClass("dark");
      document.getElementById('page').style.boxShadow = "-5px 0px 10px rgb(243,243,243)";
    }
    dark();
  });

  dark();
  function dark() {
    var root = document.documentElement;
    if ( document.getElementById("styleCSS").className.indexOf("dark") != -1 ) {
    root.style.setProperty('--color-blue','rgb(64,156,255)');
    root.style.setProperty('--color-blue2','rgb(0,14,34)');
    root.style.setProperty('--color-green','rgb(48, 209, 88)');
    root.style.setProperty('--color-indigo','rgb(94,92,230)');
    root.style.setProperty('--color-orange','rgb(255,159,10)');
    root.style.setProperty('--color-pink','rgb(255,55,95)');
    root.style.setProperty('--color-purple','rgb(191,90,242)');
    root.style.setProperty('--color-red','rgb(255,69,58)');
    root.style.setProperty('--color-teal','rgb(100,210,255)');
    root.style.setProperty('--color-yellow','rgb(255,214,10)');
    root.style.setProperty('--color-gray','rgb(142,142,147)');
    root.style.setProperty('--color-boiteH2','rgb(209,209,214)');
    root.style.setProperty('--color-write','rgb(236,238,240)');
    root.style.setProperty('--color-bouton','rgb(44,44,46)');
    root.style.setProperty('--color-nav','rgb(55,54,63)');
    root.style.setProperty('--color-boite','rgb(55,54,63)');
    root.style.setProperty('--color-fond','rgb(33,32,42)');
    root.style.setProperty('--color-titre','rgb(99,99,102)');
    root.style.setProperty('--color-degrade1','rgb(0,122,255)');
    root.style.setProperty('--color-degrade2','rgb(64,156,255)');
    root.style.setProperty('--color-fondMenu','rgb(29,27,38)');
  } else {
    root.style.setProperty('--color-blue','rgb(0,122,255)');
    root.style.setProperty('--color-blue2','rgb(217,235,255)');
    root.style.setProperty('--color-green','rgb(52,199,89)');
    root.style.setProperty('--color-indigo','rgb(88,86,214)');
    root.style.setProperty('--color-orange','rgb(255,149,0)');
    root.style.setProperty('--color-pink','rgb(255,45,85)');
    root.style.setProperty('--color-purple','rgb(175,82,222)');
    root.style.setProperty('--color-red','rgb(255,59,48)');
    root.style.setProperty('--color-teal','rgb(90,200,250)');
    root.style.setProperty('--color-yellow','rgb(255,204,0)');
    root.style.setProperty('--color-gray','rgb(142,142,147)');
    root.style.setProperty('--color-boiteH2','rgb(50,50,54)');
    root.style.setProperty('--color-write','rgb(118,118,119)');
    root.style.setProperty('--color-bouton','rgb(232,232,232)');
    root.style.setProperty('--color-nav','rgb(247,247,250)');
    root.style.setProperty('--color-boite','rgb(255,255,255)');
    root.style.setProperty('--color-fond','rgb(247,247,250)');
    root.style.setProperty('--color-titre','rgb(180,185,190)');
    root.style.setProperty('--color-degrade1','rgb(0,179,255)');
    root.style.setProperty('--color-degrade2','rgb(76,216,254)');
    root.style.setProperty('--color-fondMenu','rgb(247,247,250)');
  };
};
  
// modifier
$( '#modifier' ).click( function() {
  if (document.getElementsByClassName("selection")[0] != null) {
    var url = 'https://github.com/gdemare/gdemare.github.io/edit/master/index.html' ;
    window.open(url);
  };
});

})
