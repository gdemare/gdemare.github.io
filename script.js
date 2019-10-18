$(document).ready(function() {

    var hauteur = document.getElementsByTagName("nav")[0].offsetHeight + 'px';
    //mementoMenu
    console.log(hauteur);
    document.getElementById("contenu").style.setProperty("margin-top", hauteur);

    function darkStyle(darkStyle) {
        let root = document.documentElement;
        if (darkStyle == true) {
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
root.style.setProperty('--color-gray2','rgb(99,99,102)');
root.style.setProperty('--color-gray3','rgb(72,72,74)');
root.style.setProperty('--color-gray4','rgb(58,58,60)');
root.style.setProperty('--color-gray5','rgb(44,44,46)');
root.style.setProperty('--color-gray6','rgb(28,28,30)');
root.style.setProperty('--color-white','rgb(31,32,34)');
root.style.setProperty('--color-bouton','rgb(105,106,108)');
root.style.setProperty('--color-boutonSelect','rgb(199,200,202)');
root.style.setProperty('--color-nav','rgb(60,61,64)');
root.style.setProperty('--color-menu','rgb(49,56,67)');
root.style.setProperty('--color-write','rgb(236,238,240)');
            return false;
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
root.style.setProperty('--color-gray2','rgb(174,174,178)');
root.style.setProperty('--color-gray3','rgb(199,199,204)');
root.style.setProperty('--color-gray4','rgb(209,209,214)');
root.style.setProperty('--color-gray5','rgb(229,229,234)');
root.style.setProperty('--color-gray6','rgb(242,242,247)');
root.style.setProperty('--color-white','rgb(255,255,255)');
root.style.setProperty('--color-bouton','rgb(246,246,246)');
root.style.setProperty('--color-boutonSelect','rgb(105,106,106)');
root.style.setProperty('--color-nav','rgb(217,217,217)');
root.style.setProperty('--color-menu','rgb(227,228,229)');
root.style.setProperty('--color-write','rgb(36,40,45)');
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
})
