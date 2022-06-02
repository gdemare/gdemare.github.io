* `Alt + Entré` retour à la ligne dans une cellule.
* `"symbole`caractère d'échappement.

### Protéger les données

* "Révision" > "Protéger la feuille" Une feuille.
* "Révision" > "Protéger le classeur" Un classeur.
* "Affichage" > "Figer..." Figer une ligne ou un colonne.

#### Une cellule

1. sélectionner les cellules a garder déverrouiller
2. clic droit, « Format de cellule » dans l’onglet « Protection »
3. décocher « Verrouillé », puis « OK »
4. aller dans « Révision » Protéger la feuille »

## Opérateurs logiques

* `ET(condition1;condition2)` Et
* `OU(condition1;condition2)` Ou
* `ESTVIDE(cellule)` teste si la cellule est vide.
* `NON()` négation. 

## Les conditions

* `SI([condition];[condition vrai];[condition fausse])` exemple: SI(cell=<14;0;cell-13)
* `RECHERCHEV(valeur;zone;numéro; valeur_proche)` renvoyer la valeur de la colonne numéro de la ligne.
* `RECHERCHEH(valeur;zone;numéro; valeur_proche)` renvoyer la valeur de la ligne numéro de la colonne.

## Manipuler les dates

* `AUJOURDHUI()` afficher la date du jour.
* `DATE(année;mois;jour)` construire une date.
* `JOUR(date)` extraire le jour.
* `MOIS(date)` extraire le mois.
* `ANNEE(date)` extraire l'année.
* `JOURSEM(date;type)` numéroter les jours de la semaine.

Type :
  * `1` dimanche=1 samedi=7
  * `2` lundi=1 dimanche=y
  * `3` lundi=0 dimanche=1
  * `NO.SEM(date; type)` numéroter les semaines. Type :
  * `1` dimanche le premier jour de la semaine
  * `2` lundi le premier jour de la semaine

* `NO.MOIS(date;type)`
Type :
  * `1` dimanche le premier jour de la semaine
  * `2` lundi le premier jour de la semaine\
 
 * `TEXTE(date;code)` afficher le nom du mois ou du jour.

| code | definition |
|---|---|
| `"jjj"` | jour |
| `"mmm"` | mois |

* `DATEDIF(date1;date2;code)` age entre deux date (NB : date1=<date2).

| Code | Definition|
|---|---|
| `"y"` | années |
| `"m"` | mois |
| `"d"` | jours |
| `"ym"` | mois, une fois les années soustraite |
| `"yd"` | jours, une fois les années soustraites |
| `"md"` | jours, une fois les années et mois soustraits |

### Ajouter une nombre d'années, mois, jours

```
DATE(ANNEE(A2)+B2;MOIS(A2);JOUR(A2))
```

## Formater du texte

| Fonction | Définition |
|---|---|
| `MINUSCULE(text)` | mettre le texte en minuscule |
| `MAJUSCULE(test)` | mettre le texte en majuscule |
| `NOMPROPRE(text)` | mettre une majuscule à la première lettre des mots |
| `STEXT()` | |
| `NBCAR(text)` | compter le nombre caractère |

## Supprimer un tableau

1. onglet creation tableau
2. Creation
3. Convertir en plage

## Les heures

`TEMPS(heure;minute;seconde)` déclarer une heure.
Les opérateurs fonctionnent directement. 
Calculer un nombre d'heures. Il faut formater la case en `[h]:mm;@` sinon le total ne peut pas dépasser 24 heures.
