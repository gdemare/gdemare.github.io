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

// dossier ; sous dossier; fichier; general; r; sas; python
content = [
['company',null,'animateur','1','0','0','0'],
['company',null,'MOA-MOE','1','0','0','0'],
['company',null,'job-interview','1','0','0','0'],
['database',null,'data-warehouse','1','0','0','0'],
['database',null,'json','1','0','0','0'],
['database',null,'sql','1','0','0','0'],
['english',null,'verbe','1','0','0','0'],
['microsoft',null,'excel','1','0','0','0'],
['microsoft',null,'outlook','1','0','0','0'],
['microsoft',null,'word','1','0','0','0'],
['programming',null,'java','1','0','0','0'],
['programming',null,'python','1','0','0','0'],
['projects',null,'raspberry-wifi','1','0','0','0'],
['statistique','data-mining','ACM','1','1','1','0'],
['statistique','data-mining','ACP','1','1','1','0'],
['statistique','data-mining','AFC','1','1','1','0'],
['statistique','data-mining','ANOVA','1','1','1','0'],
['statistique','data-mining','ARMA','1','0','0','0'],
['statistique','data-mining','CAH','1','1','1','0'],
['statistique','data-mining','CDH','1','0','0','0'],
['statistique','data-mining','SVM','1','1','0','0'],
['statistique','data-mining','analyse-discriminante','1','1','1','0'],
['statistique','data-mining','arbre-de-decision','1','1','1','0'],
['statistique','data-mining','boosting','1','0','0','0'],
['statistique','data-mining','carte-auto-adaptative','1','0','0','0'],
['statistique','data-mining','centre-mobiles','1','0','1','0'],
['statistique','data-mining','centroide','1','0','1','0'],
['statistique','data-mining','classificateur-baysien','1','1','0','0'],
['statistique','data-mining','cluestering-variables','1','0','1','0'],
['statistique','data-mining','esperance-maximisation','1','0','1','0'],
['statistique','data-mining','foret-aleatoire','1','1','0','0'],
['statistique','data-mining','lissage-exponentiel','1','0','0','0'],
['statistique','data-mining','perceptron','1','0','0','0'],
['statistique','data-mining','predire-evaluer','0','1','0','0'],
['statistique','data-mining','probleme-correlation','1','0','0','0'],
['statistique','data-mining','regression-lineaire','1','0','1','0'],
['statistique','data-mining','regression-logistique','1','1','1','0'],
['statistique','data-mining','reseaux-neurones','1','1','0','0'],
['statistique','data-mining','serie-temporelle-simple','0','1','0','0'],
['statistique','data-mining','serie-temporelle','1','0','0','0'],
['statistique','methode','cluestering-sans-cible','1','0','0','0'],
['statistique',null,'automatiser','0','1','1','0'],
['statistique',null,'carte','0','1','0','0'],
['statistique',null,'classification','1','0','0','0'],
['statistique',null,'deploy-Rshinny-shinyapps','1','0','0','0'],
['statistique',null,'dictionnaire-statistique','1','0','0','0'],
['statistique',null,'formater-donnees','0','1','1','0'],
['statistique',null,'graphiques','0','1','1','0'],
['statistique',null,'manipuler-donnees','0','1','1','0'],
['statistique',null,'reduction-dimensions','1','0','0','0'],
['statistique',null,'statistique-descriptive','0','1','1','0'],
['statistique',null,'tableau-de-bord','1','0','0','0'],
['statistique',null,'tests','1','0','1','0'],
['unix',null,'bash','1','0','0','0'],
['unix',null,'folders-linux','1','0','0','0'],
['unix',null,'shell','1','0','0','0'],
['unix',null,'vim','1','0','0','0'],
['web',null,'css','1','0','0','0'],
['web',null,'html','1','0','0','0'],
['web',null,'js','1','0','0','0'],
['web',null,'php','1','0','0','0']];


function loadContenu(url) {
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

function getCol(matrix, col){
 var column = [];
 for(var i=0; i<matrix.length; i++){
    column.push(matrix[i][col]);
 }
 return column;
}

var mementoMenuHtml = "";
var classe = "";

var menu = new Array();
for (var i = 0; i <= content.length - 1; i++) {
  
  if (i==0) { 
    condition = true;
    condition2 = content[i][1] != null;
  } else { 
    condition = content[i][0]!=content[i-1][0];
    condition2 = content[i][1]!=content[i-1][1] && content[i][1]!=null
  };
  
  classe = content[i][0];

  if (condition) {
    mementoMenuHtml = mementoMenuHtml + "<div id="+content[i][0]+'><i class="fa fa-angle-right"></i>&ensp;'+content[i][0]+"</div>";
    menu[menu.length] = content[i][0];
  };
  if (condition2) {
    mementoMenuHtml = mementoMenuHtml + '<div class="'+ classe +'" id="' + content[i][0] + content[i][1]+ '" style="display: none;">&ensp;<i class="fa fa-angle-right"></i>&ensp;'+content[i][1]+"</div>";
    menu[menu.length] = classe + content[i][1];
  };

  if (content[i][1] !== null ) {
    classe = classe + content[i][1];
    libelle = '&ensp;&ensp;&ensp;&ensp;'+content[i][2];
  } else {
    libelle = '&ensp;&ensp;&ensp;'+content[i][2];
  };
  mementoMenuHtml = mementoMenuHtml + '<div class="'+ classe +'" id=' + content[i][2]+ ' style="display: none;">'+ libelle +"</div>";
};
document.getElementById('mementoMenuBox').innerHTML = mementoMenuHtml;

// ouvrir et fermer le menu
for (var i = 0; i <= menu.length - 1; i++) {
  $("#" + menu[i]).click(function() {
    menu = $(this)[0].id;
    angle = $("#" + menu + " i");
    if (angle[0].className == 'fa fa-angle-down') {
      angle.removeClass('fa-angle-down');
      angle.addClass('fa-angle-right');
      valeur = 'none';
    } else {
      angle.removeClass('fa-angle-right');
      angle.addClass('fa-angle-down');
      valeur = 'block';
    };
    var elems = document.getElementsByClassName(menu);
    for (var i=0;i<elems.length;i+=1){
      if (elems[i].className == menu) {
        elems[i].style.display = valeur;
      };
    };
  });
}

// charger les pages
for (var i = 0; i <= content.length - 1; i++) {
  $( '#' + content[i][2] ).click( function() {
    id = getCol(content, 2);
    var fichier;
    for (var i = 0; i <= content.length - 1; i++) {
      if (id[i] == $(this)[0].id) {
        if (content[i][1] !== null) {
            fichier = content[i][0] + '/' + content[i][1];
          } else {
            fichier = content[i][0]
          };
        fichier = fichier + '/' + content[i][2] + '.md';
      }
    };
    url = 'https://raw.githubusercontent.com/gdemare/aide-memoire/master/' + fichier;
    loadContenu(url);
  });
};

});
