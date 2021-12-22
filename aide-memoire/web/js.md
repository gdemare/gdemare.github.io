Boite a asutces
* Sublime Text snippet HTML/CSS/JS Prettify.
* Pas sensible au espace.
* L'indentater structurer le code pour le rendre plus lisible.
* conseil appeler le script à la avant la fermetur de body.

## Exécuter un programme Node.js
`node script.js` exécuter un programme node.js

## Inserer du code dans un fichier Html

```
<script paramètre >
  code JS;
<script>
```

 Paramètre :
 * `src="fichier.js"` appeler un fichier.
 * `type=` préciser le langage pour html.
 
## Les commentaires

* `// commentaire` et `/ *commentraire*/` commenter le code.
* isoler le code jS pour éviter d'être interpréter en html.
```
<!--
instruction 
//-->
```

## Les variables

* `var myVariable <, myVaraible2>;` déclarer une variable.
* `myVariable = valeur;` attribuer une valeur à la variable.
* `var myVariable = valeur;` déclarer et attribuer une valeur à une variale.
* `typeof myVariable;` tester l'existence d'une variable
* `\'` caractère d'échappement pour les apportphe.s
* `var tableau = ['val1', 'val2']` creer un tableau.

Boléen true/false;

| Opérateur | Signe |
|---|---|
| addition | + |
| soustraction | - |
| multiplication | * |
| division | / |
| modulo | % |

* `alert('message')` afficher une boîte de dialogue contenant un message.
* `'chaine1' + 'chaine2'` concaténer des chaine de caractère.
* `prompt('messsage')` boite d'interaction avec l'utilisateur. la réponse se stocke dna sune variable qu'il faut déclarer.
* `console.log(texte a afficher)` afficher du texte dans la console.

| Opérateur | Signification |
|---|---|
| == | égal à |
| != | différent de |
| === | contenu et type égal à |
| !== | contenu ou type différent de |
| > | supérieur à |
| >= | supérieur ou égal à |
| < | inférieur à | 
| <= | inférieur ou égal à |

| type de variable | defintion |
|---|---|
| `XMLHttpRequest();` | varibable fichier html | 

### les conditions

```
if (conditon) {
    instruction;
} else if (condition) {
    instruction;
} else {
    instruction;
}
```

* `confirm('message')` boite d'interaction ave cl'utilisateur OK et annuler.
* `number++;` incrémenter.

### Les boucles

```
 for (i = 0; condition; i++) {
 }
```

### Fonction

```
function fonction(parametre1, parametre2){
  instruction
}
```

### Fonction utiles

| fonction | defintion |
|---|---|
| `.getElementsByTagName("type")` | obtenir l'id de l'element d'un certain type de balise Html |
| `.getElementsByClassName("classe")` | obtenir l'id de l'element avec le nom valeur |
| `.getElementById("id")` | obtenir l'id de l'element avec le nom valeur |

Conseil : utiliser une boucle for pour parcourrir les items.

###  et Ajax

Ajouter la librairie au code html [Google Api](https://developers.google.com/speed/libraries/).

`id.style.backgroundColor = "grey"`

| Fonction | defintion |
|---|---|
| `.hide()` | cacher un element |
| `.show()` | afficher un element |
| `.setAttribute("style", "code CSS")` |
| `.classList.add("classe")` | ajouter la classe à l'element |
| `.classList.remove("classe")` | supprimer la classe de l'element |
| `.open("GET", file, true)` | charger la page.|
| `.load(fichier)` | charger du code html.|
| `.innerHTML = "nouveau contenu"` | ajouter du contenu Html.|
| `write('text')` | ecrire du texte non interprété.|
| `.addClass += "classe"`  | ajouter une nouvelle classe |
| `.append("ajout")` | Ajouter du contenu a la fin d'une div |

### Creer une variable en CSS

`element.style.setProperty("--ma-variable",valeur);`

### Convertir un fichier markdown en html

library marked
```
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

`marked(text)` convertir du markdown en html.

### Flech charger un fichier

Exemple
```
var aPromise = fetch(url);
 
  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);
 
        if(!response.ok)  {
            throw new Error("HTTP error, status = " + response.status);
        }
 
        response.text()
          .then(function(myText) {
               document.getElementById('contenu').innerHTML = marked(myText);
          })
          .catch(function(error) {
             // Never happened.
          });
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        // Network Error!
        console.log(error);
    });
```

## Fonction
```
function focntion(parametre1) {
  instruction
}
```

### Les tableaux

ligne = colonne.
* `tableau.indexOf("Apple");` recherche d'une valeur.
* `tableau.push(valeur);` ajouter une ligne a la fin.
* `tableau = [ [1a,b1], [2a, 2b] ]` tableau multidimesionnel.

## Opérateur logique
| Opérateur | Définition |
|---|---|
| `&&` | et | 
| `|` | ou |

`null` en java script

| Fonction | Definition|
|---|---|
| `length` | taille de la chaine de caractère |
| `indexOf("texte")` | renvoie la position de la 1er chaine de caracère sinon -1 |
| `search("texte")` | renvoie les positons de la chaine de caractère |

## Extraire une chaine de caractère

| fonction | définition |
|---|---|
| `slice(start, end)` | extraire une chaine de caractère |
| `substring(start, <end>)` | extraire une chaine de caractère jusqu'a la fin |
| `substr(start, length)` | extraire une chaine de caractère jusqu'au début |

## Récupérer les propriétés d'un objet.

```
var element = document.getElementById('image_1'),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('top');
```

### Requête json

#### Réquête synchrone

```
const fs = require('fs');
let fichier = fs.readFileSync('fichier.json'),
    data = JSON.parse(fichier);
```

* `data.colonne[cellule]` selectionner une ligne. 

# Click action 

```
$("#fermer").click( function() {
  action
})
```

* `$(this).` acceder directement a l'element.

# modifier la propriete d'une classe,...

`changeRule('balise', 'css;')`
