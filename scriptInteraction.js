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
    var varMementoMenuSub = false;
    $("#mementoMenu .subMenu").hide();
    
    var SubMenuAccess = document.getElementsByClassName("SubMenuAccess");
    for (var i = SubMenuAccess.length - 1; i >= 0; i--) {
    	var elment = SubMenuAccess[i];
    	elment.innerHTML = '<i class="fa fa-angle-right"></i> &ensp;' + elment.innerHTML;
    }

    $("#mementoMenu .SubMenuAccess").click(function() {
        if (varMementoMenuSub == false) {
            $(this).next("#mementoMenu .subMenu").show()
            varMementoMenuSub = true;
        } else {
            $(this).next("#mementoMenu .subMenu").hide();
            varMementoMenuSub = false;
        };
    });
    //----------------------------------------------
    //show and hide chapter
    var varPart = false;
    $(".part .chapter").hide();
    $(".part h2").click(function() {
        if (varPart == false) {
            $(this).next(".part .chapter").show();
            varPart = true;
        } else {
            $(this).next(".part .chapter").hide();
            varPart = false;
        };
    });