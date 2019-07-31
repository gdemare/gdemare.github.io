//----------------------------------------------
//script add html
$(document).ready(function() {
    //----------------------------------------------
    // Print the memento menu
    var varMemento = false;
    $("#mementoMenu").hide();
    $("#mementoButton").click(function() {
        if (varMemento == false) {
            $("#mementoMenu").show();
            varMemento = true;
        } else {
            $("#mementoMenu").hide();
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
            root.style.setProperty('--color-blue2', 'rgb(30, 40, 50)');
            root.style.setProperty('--color-red', 'rgb(255,105,97)');
            root.style.setProperty('--color-write', 'rgb(225,225,230)');
            root.style.setProperty('--color-h', 'rgb(255,255,255)');
            root.style.setProperty('--color-page', 'rgb(28,28,30)');
            root.style.setProperty('--color-border', 'rgb(58,58,60)');
            root.style.setProperty('--color-nav', 'rgb(0,0,0)');
            document.getElementById("styleCSS").style.background = "rgb(225,225,255)";
            return false;
        } else {
            root.style.setProperty('--color-blue', 'rgb(0,122,255)');
            root.style.setProperty('--color-blue2', 'rgb(235, 245, 255)');
            root.style.setProperty('--color-red', 'rgb(255,59,48)');
            root.style.setProperty('--color-write', 'rgb(51,51,51)');
            root.style.setProperty('--color-h', 'rgb(0,0,0)');
            root.style.setProperty('--color-page', 'rgb(250,250,250)');
            root.style.setProperty('--color-border', 'rgb(209,209,214)');
            root.style.setProperty('--color-nav', 'rgb(255,255,255)');
            document.getElementById("styleCSS").style.background = "rgb(54,54,54)";
            return true;
        };

    };

    var varStyle = false;
    varStyle = darkStyle(varStyle);

    $("#styleCSS").click(function() {
        if (varStyle == false) {
            darkStyle(varStyle);
            varStyle = true;
        } else {
            document.getElementById("styleCSS").style.background = "white";
            darkStyle(varStyle);
            varStyle = false;
        };
    });
});
