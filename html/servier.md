## Tuto R intéressant 
 
* [http://billdenney.github.io/pknca/](http://billdenney.github.io/pknca/), package utilisé en pharmocinétique.
* [Bonnes pratiques git R](https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/) par l'INSEE.
* [Mastering Shiny](https://mastering-shiny.org/index.html) livre de référence sur le développement d'applations Shiny.
* [Les bonne pratiques de développement R](https://docs.sk8.inrae.fr/074-bonnespratiquesR.html) par l'INRAE.
* [Package Bookdown](https://bookdown.org/) ecrire des livres (et de la documentation avec R).

### Packages et autres ressources intéressants

* [Golem](https://github.com/ThinkR-open/golem), optimise le développement des applications shiny.
* [roxygen2](https://github.com/r-lib/roxygen2), doc sur les fonctions R.


* [the Book of Apps for Statistics Teaching (BOAST)](https://educationshinyappteam.github.io/), bouquin portait sur le développement d'applications R Shiny qui semble assez complet.


Recommendation :

Nom des variables explicites : avec des mots séparés par _ en english et en minuscule
Préfix des fichers avec des nombres surtout si il sont appelé chrono
Nom pour des variables et verbe pour les fonctions
Fichiers avec une seule fct > nom fichier = fonction 

Utilise # load data -------------------------
# =============================
Pour séparer le code et les rendre plus facilement lisibles
Package a charger au début du script
Max 80 caractère par ligne
Pour le texte utilisé " à la palce de '
Fonction sans argument = sans ()

Rmd first : Quand le developpement commence par la documentation - Rtask (thinkr.fr) (a lire)
Versioned via git
Documented via rmarkdown
Tester via test that

Éviter setwd()
Utiliser des chemins relatif avec la fonction here() du package here
Usethis::proj_sitrep() permet de vérifier que tous est installer correctement.

Comment nommer les choses explicitement : What They Forgot to Teach You About R - 5  How to name files (rstats.wtf)

Environnement reproductible https://thinkr.fr/dockeriser-application-shiny/

Histoorer les versions 

Sauvegarder et gérer les différentes versions (permet notamment de revenir en arrière en cas de pb).
Garder uentrace de l'historique des modif
Permet un travaill collaboratif en permettant de savoir qui a fait les modfi et pourquoi. Fusionner le travail de plusierus personnes sans perdre de l'information

A utiliser dans le cas de developpement de package R
Transformer un dossier en projet git synchronisé sur Github ou Gitlab - Rtask (thinkr.fr)
https://rtask.thinkr.fr/fr/quand-le-developpement-commence-par-la-documentation/
