### Les packages

* `install.packages("package")`
* `library(dplyr)` 

### Manipuler les fichiers

* `setwd(dossier)` changer le dossier de travail.
* `getwd()` chemin du dossier de tavail.
* `source(fichier)` exécuter un script.

### Les meilleurs packages R

* `rmarkdown` R markdown.
* `tidyverse` intégre les packages les plus populaires pour la science de la donnée.

## Fonctions de base

* `print("Hello")` afficher un message.

## Les vecteurs

### Créer un vecteur

* `c(2, 4, 6)` déclarer un vecteur.
* `2:6`
* `seq(2, 3, by=0.5)`
* `rep(1:2, times=3 ou each=3)` repéter la valeur alternée (1,2,1,2) ou à la suite (1,1,2,2).

### Manipuler les vecteurs 

* `sort(x)` ordonner.
* `rev(x)` renver l'ordre.
* `table(x)` tableau d'effectifs.
* `unique(x)` valeurs uniques
* `c(vec1, vec2)` concaténer deux vecteurs.
* `paste(vec1, vec2)` fusionner deux chaines.

## Fonction
```
nomFonction <- function(x){
  instruction
}
```

## Condition 

```
if ( test_expression1) {
  instruction
} else if ( test_expression2) {
  instruction
} else {
  instruction
}
```

* `assign(nom, valeur)` créer des variables avec une boucle.
* `get(nom)` appeler une variable.

## Boucles

### For 

```
for(i in 1:nrow(g)){
}
```

### While - tant que c'est vrai

## Expressions régulières

* `str_view_all(vecteur, exp_re)` rechercher une expression régulière.
