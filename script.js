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
            darkStyle(varStyle);
            varStyle = false;
        };
    });
});
