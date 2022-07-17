
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

## Numpy

`multiply(tableau, nbre, out=nouv_tableau)` multiplier les valeurs d'un tableau.
`add(5)`


`data.fonction_()` l'unerscore indique que le résultat remplace les données de départ.
### Les tenseurs

library : `torch`

Les tenseurs sont un type de tableau spécialisé pour la modélisation qui sont optimisés pour les GPU.
Les tenseurs sont un type particulier de `numpy`. GPU beaucoup plus rapides. parallèle contre séquentiel bcp plus de coeurs.

Les tenserus sont des tableaux mutlidimentionnelles avec des opérations particulieres.

créer un tenseur :
* `torch.tensor(data)` convertie un numpy en tenseur.
* `data.numpy()` convertie un tenseur en numpy.
* `from_numpy()` convertie en tenseur.
* `ones_like( tenseur )` créer un tenseur de meme dimension.
* `rand_like( tenseur)` créer un tenseur de meme dimension avec des valeurs aléatoire.
* `rand( dimension )` exemple dimension = (2,3,) `ones()` avec des 1 avec des `zeros()` avec des 0.

Paramètre :
	* `dtype=type` préciser le type de variable.

| type | définition  |
|---|---| 
| `torch.float` | |

`cuda.is_available()` Vérifier si le GPU peut être utilisé pour les calculs. Dans le cas de oui il faut `tensor.to('cuda')`

[:, 0] premier colonne 
[...,-1] dernière colonne

`cat( [data1, data2], dim)` fusionner deux data en ligne.

