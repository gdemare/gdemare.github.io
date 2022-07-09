
## Transformer les données
Package `import pandas as pd`

`pd.DataFrame([[]])`
Paramètres :
* `index= nom_lignes` 
* `column= nom_colonnes`


* `pivot_table(data, columns='country', values='quantity', index='fruit', aggfunc='sum')` faire un tableau croisé.
Argument `aggfunc` : 
  * `sum` somme de l'indicateur values.
* `melt(data, id_vars='fruit', value_vars=colonnes)` transformer plusieurs variables en une seule.
* `tableau_croise.reset_index()` Transformer un tableau croisé en tableau.
* `tableau.loc['colonne']`  selectionner un index dans un tableau.

* `tableau.columns` recuperer le nom des variables.

## Ajouter une colonne

* `tableau.assign( nomCol = valeur )` ajouter une colonne à la fin du dataframe.
ou `"colonne" : valeur`.
Pour appliquer des fonctions, il faut utiliser la library numpy.