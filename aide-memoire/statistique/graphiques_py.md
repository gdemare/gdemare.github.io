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

* `pyplot.show()` afficher le graphique.
* `pyplot.axis([xmin, xmax, ymin, ymax])` changer l'affichage des axes. 
	* `"off"` ne pas afficher d'axe. 	

* `pyplot.grid(True)` afficher une grille.

### Etiquettes et libellés

* `pyplot.xlabel(texte)` libellé axe des abcisses.
* `pyplot.ylabel(texte)` libellé axe des ordonnées.
* `title(titre)` ajouter un titre.
* `text(x, y, texte)` placer du texte n'importe ou dans la fenêtre.

### Camembert 

`pyplot.pie(valeur, labels=, radius=)`

### Diagramme en barre et histogramme

`pyplot.bar(libelle, valeur, width=, align='edge')` les libellés doivent être au format texte.

### Ajouter plusieurs graphiques à une seule image

* `plt.figure('train', (largeur, hauteur))` créer une image subdiviser.
* `subplot(nb_lignes, nb_col, i+1)` ajouter un graphique à l'image. Les  positions sont numérotées à partir de 1.

### autres

* `plt.boxplot(vecteur)` boxplot.
* `pl.matshow(mat_cor)` matrice de corrélation.

## Seaborn

Library `import seaborn as sns`

Paramètres :
* `hue = 'prot_diff'` mettre une couleur pour chaque groupe.

Graphiques :
* `heatmap(protfreq, annot=True)` matrice de température.
* `displot(vecteur)` afficher la distribution d'un vecteur quantitatif.
* `ecdfplot(data, x='var')` cumule le nombre d'effectifs.
   *  `complementary=True` inverser le cumule.

## Enregister un graphique 

`graphique.get_figure().savefig('fichier.png')` enregistrer un graphique.

Si les libellés sont tronqués.
```
from matplotlib import rcParams
rcParams.update({'figure.autolayout': True})
```
