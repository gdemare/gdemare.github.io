### Les packages

* `install.packages("package")` installer un package.
* `library(dplyr)` importer un package. 

### Manipuler les fichiers

* `setwd(dossier)` changer le dossier de travail.
* `getwd()` chemin du dossier de tavail.
* `source(fichier)` exécuter un script.

### Les meilleurs packages R

* `rmarkdown` R markdown.
* `tidyverse` intégre les packages les plus populaires pour la science de la donnée.

## Fonctions de base

* `print("Hello")` afficher un message.

## Environnement et variables

* `rm (list=ls ())` supprimer les variables de l'environnement.
* `typeof(var)` renvoie le type de variable.

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
* `paste(vec1, vec2, sep=" ")` fusionner deux chaines.
* `length(vec)` taille du vecteur.

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

## Manipuler les dates

Package : lubridate.

* `as.Date( '2017-10-12', format= )` convertir en date.
* `as_datetime()` convertir en date time.

| Définition | R | Exemple |
|---|---|---|
| Année | `%Y` | 2001 |
| Année | `%y` | 01 |
| Mois | `%m` | 09 |
| Jour | `%d` | 11 |
| Heure | `%H` | 12 |
| Minute | `%M` | 15 |
| seconde | `%S` | 06 |

* `time_length( interval(date1, date2), type )` calculer un âge.
date + ajout calculer une date
* `years(nbre)` année.
* `months(nbre)` mois.
* `days(3)` jour.
* `weekdays(nbre)` jour de la semaine.
* `hours(heure)` heure.
* `format( datetime, format = '')` format d'affichage d'une date et de l'heure.

## Manipuler le texte

* `nchar()` compter le nbre de caractères.
* `substr(text,debut, fin)` extraire une chaine charactère.
* `gsub(schèma, remplacement, variable) ` remplacer un schèma par une nouvelle chaine de caractères.
* `str_count(text, motif)` compter le nombre d'occurence (`stringr`)
* `gsub( pattern ="[.]", "_", "texte à change" )` remplacer un caractère.
* `strsplit(variable, symbole)` séparer une variable en fonction d'un symbole.
* `trim(texte)` supprimer les espaces (package `gdata`).
* `str_to_title(texte)` mettre les premiers caractères en majuscule (package `stringr`).
* `toupper(texte)` mettre les caractères en majuscule.

### Expressions régulières

Library `stringr`

* `str_view_all(vecteur, exp_re)` rechercher une expression régulière.

| Symbole | Définition |
|---|---|
| `*` | une ou plusieurs fois | 
| `.` | jocker |

## Connecter R à une bdd

`library(DBI)`

* `dbListTables(connection)` Liste des tables.

### Connecteur

| Connecteur | Library | |
|---|---|---|
| MySQL | `RMySQL`| `MySQL()` |

### Créer une connexion.

```
dbConnect(MySQL(), paramètre)
on.exit(dbDisconnect(con))
```
Paramètre : 
* `dbname = "smur"`
* `host = "10.60.11.4"`
* `port = 3306`
* `user = "statistique"`
* `password = "statistique"`

* `requete = sqlInterpolate(connection, "SELECT * FROM acte WHERE acte_code = ?id", id = acteId)` créer et controler les variables utilisées dans la requete.
* `dbGetQuery(connection, requete)` exécuter la requete.
