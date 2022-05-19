## manipuler les fichiers 

* `setwd(dossier)` changer le dossier de travail.
* `getwd()` chemin du dossier de tavail.
* `source(fichier)` exécuter un script

## Importer les données

* `read_sas(fichier)` lire des tables SAS (package : haven).
* `read.csv()` lire une table CSV.
* `read_excel(fichier, sheet = "Feuil1" )` importer un fichier xls (package : readxl).
* `write.table(tableau, file = "clipboard", sep = "\t")` copier dans le presse papier.

## Exporter un data
 
* `write.csv(donnée, file = "fichier.csv" )` enregistrer au format csv.
 * `sep = separateur` séparateur., 
 * `row.names = T` nom des lignes.
 * `col.names = T` nom des colonnes.
* `write.xlsl(as.dataframe(donnee), file = "fichier.xlsx", sheetName = "feuille")` enregistrer au format excel (package `xlsx`).

## Manipuler le texte

* `nchar()` compter le nbre de caractères.
* `substr(text,debut, fin)` extraire une chaine charactère.
* `gsub(schèma, remplacement, variable) ` remplacer un schèma par une nouvelle chaine de caractères.
* `str_count(text, motif)` compter le nombre d'occurence. (stringr)
* `gsub( pattern ="[.]", "_", "texte à change" )` remplacer un caractère.
* `strsplit(variable, symbole)` séparer une variable en fonction d'un symbole.
* `trim(texte)` Supprimer les espaces (package : `gdata`).
* `str_to_title(texte)` Mettre les premiers caractères en majuscule (package : `stringr`).
* `toupper(texte)` mettre les caractères en majuscule.

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

format d'affichage d'une date et de l'heure
`format( datetime, format = '')` 

Extraire une information d'une date 
year
month
day
weekday
## Manipuler les données

Package : dplyr, tidyr. résultat1 %>% résultat2 : rediriger le résultat

`pull(data, colonne)` transformer une sortie en vecteur.

## Filtrer

* `filter( condition )` filtrer.
* `slice( numligne )` garder les lignes.
* `sample_frac(iris,0.5,replace = TRUE)` Sélectionne aléatoirement une fraction d'observations
* `sample_n( nligne,replace = TRUE)` Sélectionne aléatoirement n observations
* `slice(10:15)` Sélectionne les lignes selon leur position
* `top_n(nlignes, variable)` Sélectionne et ordonne les n premières observations (ou groupes si les données sont groupées) ( desc() ).
 = decroissant
## Selectionner

* `select( colonne1, colonne2 )` selecionner des colonnes (`-one of(col)` pour enlever une colonne).
* `distinct()` supprimer les doublons.
* `arrange( var1, var2 )` pour mettre en décroisssant `desc(var)`.

|Fonction | Définition |
|---|---|
| `starts_with(debut)` | les variables commançant par... |
| `ends_with(fin)` | les variables finissant par... |
| `contains(chaine)` | contenant la chaine. |

## Réorganiser les données
package : tidyr
* `pivot_wider(names_from = var_devien_colonne, values_from = valeur)` transforme une variable en plusieurs colonnes.
```
# La variable treatment (avec les modalités A, B, C ...) est transformée en colonne (A, B, C D). La valeur est la somme des decrease. Chaque ligne correspond à une valeur de rowpos.
OrchardSprays %>% 
  select(rowpos, treatment, decrease) %>%
  pivot_wider(names_from = treatment, values_from = decrease)
```

## Construire de nouvelles variables

* `mutate( nom=formule )` Appliquer une fonction window à chaque variable.
* `mutate_each(iris, funs(fonction) )` Appliquer une fonction window à chaque variable.
* `transmute( nom=formule )` Construitre une ou plusieurs variables en supprimant les originales.

| Fonction Window | Description |
|---|---|
| `n` | Nombre de lignes |
| `n_distinct` | nombre de lignes distincts |
| `lead` | Copier avec des valeurs décalées à gauche. |
| `lag` | Copier avec des valeurs décalées à droite. |
| `dense_rank` | Ordonne sans sauts de rangs. |
| `min_rank` | Ordonne avec sauts de rangs. |
| `percent_rank` | Rangs de (min rank) entre [0, 1], |
| `row_number` | Ordonne en affectant aux liens la première position. |
| `ntile` | Divise en n groupes. |
| `between` | Les valeurs sont-elles entre a et b? |
| `cum_dist` | Distribution cumulée |
| `cumall` | Cumul tant que vrai |
| `cumany` | Cumul dès que vrai |
| `cummean` | Moyenne glissante |
| `cumsum` | Somme cumulée |
| `cummax` | Maximum cumulé |
| `cummin` | Minimum cumulé |
| `cumprod` | Produit cumulé |
| `pmax` | Maximum par élément |
| `pmin` | Minimum par élément |

### Faire une opération sur toutes les variables

| Fonction | Defintion |
|---|---|
| `rowSums()` | somme |

## Grouper des données

* `group_by(var)` grouper les observations par la var (toujours suivi de `summarise`).
* `ungroup(iris)` dégrouper le jeu de données.

## Résumer des données

* `summarise( nom = formule)` appliquer une fonction.
* `summarise_each(funs(fonction))` appliquer une fonction à chaque variable.
* `count( variable, wt = valeur)` Dénombre le nombre d'observations de chaque valeur d'une variable.

| Fonction résumé | Défintion |
|---|---|
| `first` | Première valeur d'un vecteur |
| `last` | Dernière valeur d'un vecteur |
| `inth` | Nième valeur d'un vecteur |
| `n` | Nb de valeurs |
| `n_distinct` | Nb de valeurs distinctes |
| `min` | minimum |
| `max` | maximum |
| `mean` | Moyenne |
| `median` | Médiane |
| `sd` | Ecart-type |

## Les jointures

A %>% jointure(B, <by=c( "var1" = "var2")> )
* `inner_join(data)` A et B
* `left_join(data)` A (+ A et B)
* `right_join(data)` B (+ A et B)
* `semi_join(data)` A et pas B.
* `anti_join(data)` B et pas A.
* `full_jon(data)` A ou B.
Option :
* `by = c("col1"="col2")` préciser la jointure.

## Fusions lignes et colonnes

* `bind_rows(ligne)` Ajouter à y comme nouvelles lignes
* `bind_cols(colonne)` Ajoutez à y comme nouvelles colonnes.

## Opérateurs ensemblistes

* `intersect(y,z)` Observations appartenant à y et z
* `setdiff(y,z)` Observations appartenant à y et pas à z
* `union(y, z)` Observations appartenant à y et zou l'un des 2

## Discrétiser des variables

* `discretize( var, categories = nbre groupe, label = )` discrétiser une variable (package : arules).
  * `method = "frequency"` méthode.
  * `categories = nbre` nombre de classes.
* `cut2( var, breaks, minmax=T)` découpe en classe en fonction du verteur borne`(val1;[` (package Hmisc).
* `smbinning(df=data, y="var", x = "var_quanti")` discrétiser de facon optimale les varibles du data pour un score. (packages : smbinning); y doit être de type integer.
  * `$cuts` bornes.
 
## Autres fonctions

* `model.matrix( var1)` dichotomiser un data (tableau disjonctif).
* `na.exclude( data )` supprimer les lignes avec au mois une valeur manquante.
* `case_when(condition1 ~ val1, condition2 ~ val2,...)` fonction équivalente au CASE WHEN en sql.
* `scale(fromage,center=T,scale=T)` centrer et réduire les données.
* `Sys.sleep(seconde)` attendre un nombre de seconde avant la suite de l'exécution.
* `grepl( symbole, variable)` test si le symbole est contenu dans la variable.

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
