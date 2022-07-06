Préparer avant un Styleguide UI :
  * Pattern Lab
  * [Huge](https://hugeinc.github.io/styleguide)

### variable CSS

```
:root {
  --nom-variable: valeur;
}
```
`var(--main-bg-color)` appeler la variable dans le code.

### selection un element en fonction de sa position

`eleement:position` appliquer des proprietes a un element particulier.
Position : 
* `first-child` premier.
* `last-child` dernier.
* `nth-child(numero)` n-ieme.

### News papers style

* `column-count: nbre;` nombre de colonnes.
* `column-width: taille;` taille des colonnes.
* `column-gap: taille;` espace entre deux colonnes.

## Color

* `rgba(rouge, vert, bleu, transparence)` les trois couleurs primaires (transparence entre 0 et 1).

## Background

* `background-color: couelur;` couleur.
* `background-image: url('liens');` ajouter une image en arrire plan.

* `linear-gradient(direction, couleur1, couleur2)` degradé. (exemple :  `background-image: linear-gradient(to bottom right, red, yellow)` )
Direction :
  * `to right` gauche à droite.

## Effets de transistion

* `transition-duration: 4s;` durée de la transition.
* `transition-delay: 2s;` temps avant le déclenchement de la transition.

## Texte

* `text-decoration: underline;` souligner du texte.
* `font-weight: normal/bold;` police en gras.
* ` text-transform: uppercase;` mettre en capitale.

## Flexbox

### Contenaire
* `display: flex;` activer la propriéte flex.
* `flex-direction: direction;` direction de l'alignement().
Direction :
  * `row`
  * `column`
  * `row-reverse`
  * `column-reverse`
* `flex-wrap: comportement;` comportement des élements lorsqu'il n'y plus de place.
Comportement :
  * `nowrap` pas de retour à la ligne (par défaut).
  * `wrap` les éléments vont à la ligne lorsqu'il n'y a plus la place.
  * `wrap-reverse` les éléments vont à la ligne lorsqu'il n'y a plus la place en sens inverse.
* `justify-content: ;` alignement sur le premier axe.
  * `flex-start`, `flex-end` lignés au début/fin.
  * `center` centre.
  * `space-between` espace entre les éléments sans espace aux extremités.
  * `space-around` espace entre les éléments avec de l'espace aux extremités.
* `align-items: alignement;` alignement sur le deuxième axe.
  * `stretch` les éléments sont étirés sur tout l'axe (valeur par défaut)
  * `flex-start`, `flex-end` alignés au début/fin.
  * `center` alignés au centre.

### contenus

* `flex: valeur;` mesure il peut grossir par rapport aux autres.
* `order: numero` position de l'element.

## Bord

*`border-top-right-radius: radius;` changer l'angle des bordures.

## adapter les proprietes en fonction de la taille de l'ecran

```
@media only screen and (max-device-width:480px) {
  nouvelles proprietes
}
```
### Changer le curseur

`cursor: type;`
Type :
* `pointer` selection.

### Ajouter des espaces

* `&nbsp;` un espace.
* `&ensp;` pour afficher une espace double
* `&emsp;` pour afficher une espace quadruple
* `&nbsp;&nbsp;&nbsp;&nbsp;` pour afficher un caractère de tabulation

### Propriete des tableaux

`border-collapse: collapse/separate;` bord separes ou colles.
