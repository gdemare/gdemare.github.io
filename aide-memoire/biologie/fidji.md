calibrer 

Objectifs du traitement d'images :
* suivi et définition de trajectoire.
* Indentifier et classer des objets en fonction de leurs caractéristiques.
* Augmenter la visibilité des objets.

## L'image 

Le nombre de bit détermine le nombre de niveau de couleur (exemple : 8bits = 2^8 = 255).

La calibration d'une image est l'opération qui consiste à associer à un pixel une taille.

## La couleur

`Image > Propeties`

Niveau des gris : `Analyse > Histogramm`
Information 
`Mode : ` médian de gris.

Séparer les canaux de couleurs : `Image > Color > Spit image`

`Image > Type > 8bit` Transformer une image en niveau de gris.

Inverser les couleurs : `Edit > Inverse`

Ajouter une échelle : `Analyze > Set scale`

Etaler la plage de couleurs sur tout le specte (augmente le contraste) : `Process > Enhance Contrat`

Stack images réunir les images : `Image > Stacks > Image to stacks`
Permet notamment d'appliquer une fonction à tout le stack.
peut être sauvegarder dans un seul fichier de type Tiff.

## Les filtres 

Prétraitement numérique de l'image avec des filtres pour atténuer le bruit. Dans `Process > Filter`.

Rmq : il est intéressant d'appliquer plusieurs fois un filtre.

Généralement, on utilise un seul filtre.

Linéaire :
* Mean Filter (augmente le flou l'image).
* Gaussian respect mieux les contours (++).

Non linéraire :
* Median filter (++).
* Morphological filter.

Seuillage détermine un seuil pour chaque pixel. Les plus utilisés :

| Méthode de seuil | Définition | Avg/incon |
|---|---|---|
| Global thresholding | un seuil pour toute l'image | rapide  |
| Local adaptative thresholding | un seuil pour chaque pixel en fontion de son environnement | gourmand en ressources mais performant |

`Image > Adjust > Threshold`


## Analyse

### Par taille et forme 

`Analyse > Analyze Particles`

### Séparer des objets accolés

`Process > Binary > Watershed`

Attention s'applique sur les objets en blanc et fond en noir.


Appliquer si nécessaire la fonction watersheld


Transformation de Fourier : `Process > FTT > FTT`
La transformation de Fourrier sert :
* D'idée à la détection de d'orientation spécifique notamment de l'astigmatisme. L'astigmatisme est une déformation de l'image par l'objectif.

Quantification :

1 - stack
2 - seuil pour mettre les particules en noir et diminuer le fond.
