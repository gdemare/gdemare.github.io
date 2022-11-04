 
Objectifs du traitement d'images :
* Suivi de trajectoire.
* Identifier et classer les objets en fonction de leurs caractéristiques.
* Augmenter la visibilité des objets.

## L'image 

Le nombre de bit détermine le nombre de niveau de couleur (exemple : 8bits = 2^8 = 255).
La calibration d'une image est l'opération qui consiste à associer à un pixel une taille.

### Traitement des images en lot

La foncion Stack permet de traiter les images en lot `Image > Stacks > Image to stacks`. Il permet de :
* Appliquer le meme traitement à un lot d'images.
* Sauvegarder dans un seul fichier de type Tiff.

### La couleur

* Propriété de l'image `Image > Propeties`
* Niveau des gris : `Analyse > Histogramm`. Information 
  * `Mode : ` médian de gris.
* Séparer les canaux de couleurs `Image > Color > Spit image`
* Transformer une image en niveau de gris `Image > Type > 8bit`
* Inverser les couleurs `Edit > Inverse`
* Ajouter une échelle : `Analyze > Set scale`
* Etaler la plage de couleurs sur tout le specte (augmente le contraste) `Process > Enhance Contrat`

## Les prétraitements de l'image : les filtres

### Le bruit 

Le numérique de l'image avec des filtres pour atténuer le bruit. Dans `Process > Filter`.

Rmq : il est intéressant d'appliquer plusieurs fois un filtre.

Généralement, on utilise un seul filtre.

Linéaire :
* Mean Filter (augmente le flou l'image).
* Gaussian respect mieux les contours (++).

Non linéraire :
* Median filter (++).
* Morphological filter.

### Binarisation de l'image
 
 Binarisation par seuillage.
 
* Seuillage manuelle `Image > Adjust > Threshold`
* Seuillage automatique `Image > Adjust > Auto threshold...`
* Méthode de binarisation `Process > Make binary`

#### Seuillage automatique

Les plus utilisés :

| Méthode de seuil | Définition | Avg/incon |
|---|---|---|
| Global thresholding | un seuil pour toute l'image | rapide  |
| Local adaptative thresholding | un seuil pour chaque pixel en fontion de son environnement | gourmand en ressources mais performant |

## Analyse des objets sur l'image

* `Analyse > Analyze Particles` analyser les objets par taille et par forme.
* `Process > Binary > Watershed` séparer des objets accolés. Attention s'applique sur les objets en blanc et fond en noir.
* `Analyze > Set measurements` ?????????

## Transformation de Fourrier

Transformation de Fourier : `Process > FTT > FTT`
La transformation de Fourrier sert à :
* La détection de d'orientation spécifique notamment de l'astigmatisme. L'astigmatisme est une déformation de l'image par l'objectif.
