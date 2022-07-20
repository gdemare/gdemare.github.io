## Avec pandas

Les dataframe pandas intégrent directement des représentations graphiques.

`data.plot( x=, y= )`

## Graphique avec pyplot

`from matplotlib import pyplot as pl`
à la fin, on peut forcer l'affichage avec `plt.show()`


* `plot(abscisse, ordonnée, <type_point>)`
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

### Paramètres des axes

* `pyplot.show()` afficher le graphique
* `pyplot.axis([xmin, xmax, ymin, ymax])`

* `pyplot.grid(True)` afficher une grille.

### Etiquettes et libellés

* `pyplot.xlabel(texte)` 
* `pyplot.ylabel(texte)`
* `title(titre)` ajouter un titre
* `text(x, y, texte)` placer du texte n'importe ou dans la fenêtre.

### Camembert 

`pyplot.pie(valeur, labels=, radius=)`

### Diagramme en barre et histogramme

`pyplot.bar(libelle, valeur, width=, align='edge')` Les libellés doivent être au format texte.

### Ajouter plusieurs graphiques à une seule image

* `plt.figure('train', (largeur, hauteur))` créer une image subdiviser.
* `subplot(nb_lignes, nb_col, i+1)` pour ajouter un graphique à l'image. Les  positions sont numéroté à partir de 1.