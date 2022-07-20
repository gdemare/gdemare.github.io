`data.fonction_()` l'unerscore indique que le résultat remplace les données de départ.

| dataframe | Matrice | Tensor ou jeu de données pour les modèles |
|---|---|---|
| Pandas | Numpy | Pytorch ou Tensor |

`map( fonction, list )` appliquer une fonction aux élements d'un vecteur. Renvoie un objet de type map qu'il faut généralement convertir en liste.

### Les types de variables

`type(objet)` renvoie le type d'objet. Pour l'utiliser dans des conditions, on utilise généralement  `is type` . 

| Fonction  | Définition |
|---|---|
| `str()` | convertie en caractère |
| `list()` | convertie en liste |
| `variable.decode()` | de bytes à normale (byte est signalé par un b avant la valeur.) |

## Pandas (data frame)
Package `import pandas as pd`

`pd.DataFrame()` créer un data frame. Vide lorsqu'il n'y a pas d'argumentss.
Paramètres :
* `index= nom_lignes` 
* `column= nom_colonnes`

`{ "col1" : valeurs, 'col2' : valeurs}`


* `tableau.columns` recuperer le nom des variables.
* `tableau.loc['colonne']`  selectionner un index dans un tableau.

### tableau croisé et modification de variables

* `pivot_table(data, columns='country', values='quantity', index='fruit', aggfunc='sum')` faire un tableau croisé.
Argument `aggfunc` : 
  * `sum` somme de l'indicateur values.
* `melt(data, id_vars='fruit', value_vars=colonnes)` transformer plusieurs variables en une seule.
* `tableau_croise.reset_index()` Transformer un tableau croisé en tableau.

### Ajouter une colonne

* `data["nouvelle"] = valeur` ajout directement.
* `tableau.assign( nomCol = valeur )` 
Pour appliquer des fonctions, il faut utiliser la library numpy.
* `df.insert(position, 'col_name', [value1, value2, value3, ...])`

## Numpy (matrice)

* `np.asarray(matrice)` créer un array.
* `np.empty([lignes,colonnes])` créer un array vide de taille suviantes.

### Opération sur les valeurs

* `multiply(tableau, nbre, out=nouv_tableau)` multiplier les valeurs d'un tableau.
* `add(5)` ajouter 5 à toutes les valeurs.

### Insérer

* `np.append(data, vecteur)` ajouter un dernière colonne. 
* `np.insert( data, position, vecteur)`  ajouter une colonne à une position particulière.

## Les tenseurs

library : `torch`

Les tenseurs sont un type de tableau spécialisé pour la modélisation qui sont optimisés pour les GPU.
Les tenseurs sont un type particulier de `numpy`. GPU beaucoup plus rapides. parallèle contre séquentiel bcp plus de coeurs.

Les tenserus sont des tableaux mutlidimentionnelles avec des opérations particulieres.

Créer un tenseur :
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

## Les images

### Afficher l'image avec plotly à partir d'une matrice

`import matplotlib.pyplot as plt`

```
plt.figure(figsize=(6, 6))
plt.imshow(img, cmap='gray')
plt.axis('off')
plt.show();
```
