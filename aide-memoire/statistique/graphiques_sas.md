## Graphique qualitatif

```
PROC GCHART DATA=table;
	type variable </ option>;
RUN;
```

### Graphiques

Type :
* `VBAR` diagramme en barres/histogramme verticales
* `HBAR` diagramme en barres/histogramme horizontales.
* `PIE` secteur circulaire.
* `STAR`

Argument (ajouter / avant):

* `DISCRETE` évite les regroupement des modalités.
* `LEVELS= n` nombre de classes.
* `MISSING` les valeurs manquantes constitue une modalité.
* `SUBGROUPS = variable` ajouter une variable.
* `EXPLODE = modalité` séparer une modalité d’un diagramme circulaire.

## Boxplot

``` 
PROC BOXPLOT DATA=nomTable;
	PLOT variableQuantitative\*variableQualitative;
	<paramétres>;
RUN;
``` 

### Paramétres

* `INSERT MEAN/MIN/MAX/NMIN/NMAX/NOBS/STDDEV;` encadrer avec les stat générales.
* `INSETGROUP (voir au dessus);` encadré avec les stat par groupes.

## Graphique quantitatif univarié
```
PROC GPLOT <UNIFORM>;
	<TITLE "titre";>
	<type> ordonné*abssice </ option> ;
RUN;
```

Option 
* `UNIFORM` garder les même échelles d’axe.

Paramètre : 

* `BY variable` un graphique ppar modalité de la variable.

### Type :
* `PLOT` nuage de points
* `VBOX` 

Option :
* `HREF/VREF=valeur` tracer une barre horizontale/verticale.
* `OVERLAY` superposer plusieurs graphiques.

## Graphique quantitatif bivariré

```
PROC SGPLOT <option>;
	<type> X=ordonné Y=abssice </ option2> ;
RUN;
```
Paramètre : 
* `TITLE "titre";` titrer.

Options :
* `UNIFORM` 

Type : 
* `BAND X=var UPPER=var LOWER=var` Deux courbes avec l'entre deux rempli.
* `SCATTER X=var Y=var` nuage de points.
* `SERIES X=var Y=var` courbes.
* `STEP X=var Y=var` courbe en escalier.
* `NEEDLE X=var Y=var` diagramme en barre.
* `REG X=var Y=var` courbe des moindres au carrées.
* `LOESS  X=var Y=var` lissage par moyenne mobiles.
* `HBAR/VBAR variable` diagramme en barre.
 
 Options 2 :
 
* `GROUP=var` par groupe de variables.

## Résumer statistique pour un jeu de données

``` 
PROC UNIVARIATE <option>;
	VAR var;
	HISTOGRAM variable </ option>;
RUN;
``` 

Option :

`NORMAL` qqplot.

## Dendrogramme

```
PROC TREE <option>;
	ID libelle;
	HEIGHT taille_branches;
RUN;
```

Options :

* `HAXIS` et `VAXIS` paramétrer les axes avec la AXIS1.
* `HORIZONTAL` afficher horizontal.
* `NCLUSTERS=nbre` nombre de groupes à exporter.
* `OUT=table` exporter les groupes dans une table.

## Présentation du graphique

### Le titre

```
TITLE "text";
```

### Les axes

```
AXISnom <option>;
```

Option : 
* `LABEL=('')` ajouter le titre des ordonnés.
* `ORDER=(val to val by pas)` définir les dimensions d'un axe.
