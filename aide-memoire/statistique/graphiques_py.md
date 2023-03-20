* `fig = plt.figure(figsize=(25,20))`  changer la taille du graphique.
* `fig, axes = plt.subplots(nrows=1, ncols=3, figsize=(15,5))` sous diviser un graphique en plusieurs cases ou superposer deux graphiques (sans nrows/ncols).
Attention dans ce cas indiquer l'argument : `ax = axes[i]` lorsqu'il n'y a qu'une ligne.

#### Ajouter plusieurs graphiques sur une image

```
fig, axes = plt.subplots(nrows = 2, ncols=1 )
graph_sans = pd.crosstab( data['ligne'], data['colonne'], normalize='index').plot.bar(stacked=True, ax= axes[0])
graph_avec = pd.crosstab( data['ligne'], data['colonne'], normalize='index').plot.bar(stacked=True, ax= axes[1])
```

## Graphique avec pyplot

`from matplotlib import pyplot as pl`
à la fin, on peut forcer l'affichage avec `plt.show()`

* `plot(abscisse, ordonnée, type_point)` Le type de points est obligatoire.
Paramètre : faire une chaîne de caractères 
* L1 couleur `'r'` rouge `'y'` jaune `'b'` bleu
* L2 type de points 
	* `o` gros points
	* `.` petit points 
	* `^` triangle
	* `s` carré
	* `+` croix
* L3 type de lignes :
	* `-` ligne.
	* `--` pointillé.
Exemple : `ro--` points rouges reliés par des traits en pointillé.

#### Nuage de points

`scatter(x,y)` nuage de points.

### Paramètres des axes

* `pl.show()` afficher le graphique.
* `pl.axis([xmin, xmax, ymin, ymax])` changer l'affichage des axes. 
	* `"off"` ne pas afficher d'axe. 	

* `pl.grid(True)` afficher une grille.
* `pl.xticks(rotation=45)` changer la rotation des étiquettes de données.
* `pl.yscale('log')` passer en échelle logarithmique. 

### Etiquettes, libellés et titre

* `pl.xlabel(texte)` libellé axe des abcisses.
* `pl.ylabel(texte)` libellé axe des ordonnées.
* `pl.title(titre)` ajouter un titre.
* `pl.text(x, y, texte)` placer du texte n'importe ou dans la fenêtre.

### Camembert 

`pyplot.pie(valeur, labels=, radius=)`

### Diagramme en barre et histogramme

`pyplot.bar(libelle, valeur, width=, align='edge')` les libellés doivent être au format texte.

### Ajouter plusieurs graphiques à une seule image

* `plt.figure('train', (largeur, hauteur))` créer une image subdiviser.
* `subplot(nb_lignes, nb_col, i+1)` ajouter un graphique à l'image. Les  positions sont numérotées à partir de 1.

### Autres

* `plt.boxplot(vecteur)` boxplot.
* `pl.matshow(mat_cor)` matrice de corrélation.

## Seaborn

Library `import seaborn as sns`

Paramètres :
* `data=data` jeu de données.
* `hue = 'prot_diff'` mettre une couleur pour chaque groupe.
* `color = ` couleur
 
Graphiques :
* `heatmap(protfreq, annot=True)` matrice de température. Paramètres :
	* `annot_kws={"fontsize":8}` taille des annotations.
	* `fmt='.0f'` changer le format des nombres (0 indique le nbre de décimals).
* `histplot(vecteur)` afficher la distribution d'un vecteur quantitatif.
* `ecdfplot(data, x='var')` cumule le nombre d'effectifs.
   *  `complementary=True` inverser le cumule.
* `barplot()` diagramme en barre.

Superposer deux graphiques :
```
fig, ax1 = pl.subplots()
sns.histplot(x=donnee['RT [min]'], ax = ax1)
ax2 = ax1.twinx()
sns.lineplot(x=x, y=y, color = 'r', ax= ax2)
```


#### Ajouter un élément au graphique

* `fig.axvline(1.25)`/`fig.axhline(1.25)` ajouter une ligne verticale/horizontale.
Paramètres : 
* `linestyle=':'` type de lignes (`:` pointillé, `--` tiré ).

### transformation des axes

`graph.set_xscale()` changer le type d'axes (type : `log`, `symlog`, ...).
`graph.get_xticklabels()` récupérer la valeur des axes.

### Modifier la présentation graphique

* `graph.set_xlabel("Colors")` changer le libellé de l'axe (`set_ylabel` pour y).
* `graph.set(xlabel='x-axis label', ylabel='y-axis label')` titre des deux axes.
* `graph.set_title("Colors vs Values")` ajouter un titre.
* `graph.set_xticklabels( fig.get_xticklabels(), rotation=45, horizontalalignment='right')` changer la rotation des libellés.

## Enregister un graphique 

`graphique.get_figure().savefig('fichier.png')` enregistrer un graphique.

Si les libellés sont tronqués.
```
from matplotlib import rcParams
rcParams.update({'figure.autolayout': True})
```

## Diagramme de Venn

`from matplotlib_venn import venn2, venn3`

* `venn2(subsets = (10, 5, 2), set_labels = ('Group A', 'Group B'))`
* `venn3(subsets = (10, 8, 22, 6,9,4,2))`

## Avec pandas

Les dataframe pandas intégrent directement des représentations graphiques.

`data.plot( <x=>, <y=< )`
Type de graphique :
* `area()`
* `density()`
* `line()`
* `pie()`
* `bar()`
* `barh()`
	* Paramètres :
		* `stacked=True` empilé.
* `scatter()`
* `hist()`

Paramètres : 
*  `legend=False` enlever la légende
*  `ax=` déterminer la position du graphique avec les fenetres subdivisées.
