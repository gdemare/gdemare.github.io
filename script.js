//----------------------------------------------
//script add html
$(document).ready(function() {
    //----------------------------------------------
    // Print the memento menu
    var varMemento = false;
    $("#mementoMenu").hide();
    $("#mementoMenuSpace").hide();
    $("#mementoButton").click(function() {
        if (varMemento == false) {
            $("#mementoMenu").show();
            $("#mementoMenuSpace").show();
            document.getElementById("mementoButton").style.background = "var(--color-grey1)";
            document.getElementById("mementoButton").style.color = "var(--color-black)";
            varMemento = true;
        } else {
            $("#mementoMenu").hide();
            $("#mementoMenuSpace").hide();
            document.getElementById("mementoButton").style.background = "transparent";
            document.getElementById("mementoButton").style.color = "var(--color-white)";
            varMemento = false;
        };
    });
    //----------------------------------------------
    //print sub menu
    function symbolMenu() {
        $("#mementoMenu .open i").addClass('fa-angle-down');
        $("#mementoMenu .open i").removeClass('fa-angle-right');
        $("#mementoMenu .close i").addClass('fa-angle-right');
        $("#mementoMenu .close i").removeClass('fa-angle-down');
    };

    var varMementoMenuSub = false;
    $("#mementoMenu .SubMenuAccess").addClass('close');
    $("#mementoMenu .SubMenuAccess i").addClass('fa');
    symbolMenu();
    $("#mementoMenu .subMenu").hide();
    $("#mementoMenu .SubMenuAccess").click(function() {
        var elment = $(this);
        if (varMementoMenuSub == false) {
            elment.next("#mementoMenu .subMenu").show()
            elment.addClass('open');
            elment.removeClass('close');
            varMementoMenuSub = true;
        } else {
            elment.next("#mementoMenu .subMenu").hide();
            elment.removeClass('open');
            elment.addClass('close');
            varMementoMenuSub = false;
        };
        symbolMenu();
    });
    //----------------------------------------------
    //contenu des onglets
    contenu('applications');
    $("#applications").click(function() {
        contenu('applications');
    });

    $("#statistics").click(function() {
        contenu('statistics');
    });
    $("#links").click(function() {
        contenu('links');
    });

    function contenu(idPage) {
        removeSelect();
        //load statistics sheet
        if (idPage == 'statistics') {
            $("#statistics").addClass('select');
            $("#contenu").load("https://raw.githubusercontent.com/gdemare/gdemare.github.io/master/statistics.html");
        }
        //load application sheet
        else if (idPage == 'applications') {
            $("#contenu").load("https://raw.githubusercontent.com/gdemare/gdemare.github.io/master/applications.html");
        } else if (idPage == 'links')
            $("#contenu").load("https://raw.githubusercontent.com/gdemare/gdemare.github.io/master/liens.html");
        ;
    };

    function removeSelect() {
        $(".select").removeClass("select");
    };
    //----------------------------------------------
    // change the style sheet

    function darkStyle(darkStyle) {
        let root = document.documentElement;
        if (darkStyle == true) {
            root.style.setProperty('--color-blue', 'rgb(64,156,255)');
            root.style.setProperty('--color-blue2', 'rgb(0,14,34)');
            root.style.setProperty('--color-red', 'rgb(255,105,97)');
            root.style.setProperty('--color-white', 'rgb(0,0,0)');
            root.style.setProperty('--color-grey1', 'rgb(24, 24, 24)');
            root.style.setProperty('--color-grey2', 'rgb(40,40,40)');
            root.style.setProperty('--color-grey3', 'rgb(204,204,204)');
            root.style.setProperty('--color-black', 'rgb(255,255,255)');
            root.style.setProperty('--color-orange', 'rgb(255,159,10');
            root.style.setProperty('--color-purple', 'rgb(94,92,230');
            document.getElementById("styleCSS").style.background = "rgb(225,225,255)";
            return false;
        } else {
            root.style.setProperty('--color-blue', 'rgb(0,122,255)');
            root.style.setProperty('--color-blue2', 'rgb(217,235,255)');
            root.style.setProperty('--color-red', 'rgb(255,105,97)');
            root.style.setProperty('--color-white', 'rgb(255,255,255)');
            root.style.setProperty('--color-grey1', 'rgb(243, 243, 243)');
            root.style.setProperty('--color-grey2', 'rgb(215,215,215)');
            root.style.setProperty('--color-grey3', 'rgb(51,51,51)');
            root.style.setProperty('--color-black', 'rgb(0,0,0)');
            root.style.setProperty('--color-orange', 'rgb(255,149,0');
            root.style.setProperty('--color-purple', 'rgb(88,86,214');
            document.getElementById("styleCSS").style.background = "rgb(54,54,54)";
            return true;
        };

    };

    var varStyle = true;
    darkStyle(varStyle);

    $("#styleCSS").click(function() {
        if (varStyle == false) {
            darkStyle(varStyle);
            varStyle = true;
        } else {
            darkStyle(varStyle);
            varStyle = false;
        };
    });
var menFolder = [
  'company',
  'company',
  'company',
  'database',
  'database',
  'database',
  'english',
  'microsoft',
  'microsoft',
  'programming',
  'programming',
  'projects',
  'unix',
  'unix',
  'unix',
  'unix',
  'web',
  'web',
  'web',
  'web'
  ];
  var menFile = [
  'animateur',
  'MOA-MOE',
  'job-interview',
  'data-warehouse',
  'json',
  'sql',
  'verbe',
  'excel',
  'word',
  'java',
  'python',
  'raspberry-wifi',
  'bash',
  'folders-linux',
  'shell',
  'vim',
  'css',
  'html',
  'js',
  'php'
  ];

  //******************************
  // BEGINING load the content of each page
  //******************************
  function loadContenu(idContenu) {
  var menIdLine = menFile.indexOf(idContenu);
  var url = 'https://raw.githubusercontent.com/gdemare/aide-memoire/master/' + menFolder[menIdLine] + '/' + menFile[menIdLine] + '.md';
  var aPromise = fetch(url);
  // Work with Promise object:
  aPromise
  .then(function(response) {
  console.log("OK! Server returns a response object:");
  console.log(response);
  
  if(!response.ok)  {
  throw new Error("HTTP error, status = " + response.status);
  }
  response.text()
  .then(function(myText) {
  document.getElementById('contenu').innerHTML = marked(myText);
  })
  .catch(function(error) {
  // Never happened.
  });
  })
  .catch(function(error)  {
  console.log("Noooooo! Something error:");
  // Network Error!
  console.log(error);
  });
  };
  //******************************
  // END load the content of each page
  //******************************
  for (var i = 0; i <= menFile.length - 1; i++) {
    var nameA = menFile[i];
    $( '#' + nameA ).click( function() {
      idContenu = $(this)[0].id;
      loadContenu(idContenu);
    });
  };
  //******************************
  //statistics
  //******************************
  // dossier, fichier, general, r, sas
var sumaryStat = 
[
  ['data-mining/', 'ACM', 1, 1, 1],
  ['data-mining/', 'ACP', 1, 1, 1],
  ['data-mining/', 'AFC', 1, 1, 1],
  ['data-mining/', 'ANOVA', 1, 1, 1],
  ['data-mining/', 'ARMA', 1, 0, 0],
  ['data-mining/', 'CAH', 1, 1, 1],
  ['data-mining/', 'CDH', 1, 0, 0],
  ['data-mining/', 'SVM', 1, 1, 0],
  ['data-mining/', 'analyse-discriminante', 1, 1, 1],
  ['data-mining/', 'arbre-de-decision', 1, 1, 1],
  ['data-mining/', 'boosting', 1, 0, 0],
  ['data-mining/', 'carte-auto-adaptative', 1, 0, 0],
  ['data-mining/', 'centre-mobiles', 1, 0, 1],
  ['data-mining/', 'centroide', 1, 0, 1],
  ['data-mining/', 'classificateur-baysien', 1, 1, 0],
  ['data-mining/', 'cluestering-variables', 1, 0, 1],
  ['data-mining/', 'esperance-maximisation', 1, 0, 1],
  ['data-mining/', 'foret-aleatoire', 1, 1, 0],
  ['data-mining/', 'lissage-exponentiel', 1, 0, 0],
  ['data-mining/', 'perceptron', 1, 0, 0],
  ['data-mining/', 'predire-evaluer', 0, 1, 0],
  ['data-mining/', 'probleme-correlation', 1, 0, 0],
  ['data-mining/', 'regression-lineaire', 1, 0, 1],
  ['data-mining/', 'regression-logistique', 1, 1, 1],
  ['data-mining/', 'reseaux-neurones', 1, 1, 0],
  ['data-mining/', 'serie-temporelle-simple', 0, 1, 0],
  ['data-mining/', 'serie-temporelle', 1, 0, 0],
  ['methode/', 'cluestering-sans-cible', 1, 0, 0],
  ['', 'automatiser', 0, 1, 1],
  ['', 'carte', 0, 1, 0],
  ['', 'classification', 1, 0, 0],
  ['', 'deploy-Rshinny-shinyapps', 1, 0, 0],
  ['', 'dictionnaire-statistique', 1, 0, 0],
  ['', 'formater-donnees', 0, 1, 1],
  ['', 'graphiques', 0, 1, 1],
  ['', 'manipuler-donnees', 0, 1, 1],
  ['', 'reduction-dimensions', 1, 0, 0],
  ['', 'statistique-descriptive', 0, 1, 1],
  ['', 'tableau-de-bord', 1, 0, 0],
  ['', 'tests', 1, 0, 1]
];


var statLoad = sumaryStat[28];
console.log( url );
var url = 'https://raw.githubusercontent.com/gdemare/aide-memoire/master/' + statLoad[0] + statLoad[1] + '.md';
console.log( url );
});
