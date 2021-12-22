Package `bs4` et `requests`

## Charger les library

```
import requests
from bs4 import BeautifulSoup
```

## Recuperer la page

```
page = requests.get("https://www.")
soup = BeautifulSoup(page, 'html.parser')
```
Obtenir le code html d'une page web. Dans le cas ou l'url ne se termine pas pas .html ajouter `page.text`.

## Filtrer les elements

* `find( filtre )` trouver le premier element. Le resultat est une variable
* `findAll( filtre)` ou `find_all()` trouver tout les elements. Le resultat est une liste.

### Condition possible

| Code | Element | Exemple |
|---|---|---|
| `id='id'` ou `class_='classe'` | id ou classe |  |
| `'baliseHtml'` | balise Html | `'section'` |
|`'baliseHtml', {'class' : 'classe'}` | balise avec la classe |  |

Plusieurs elements
* `[ element1, element2 ]` ou 
* `{ element1, elelemt 2 }` unique

sommaire.find('a', {'class' : 'teaser__link'}, href=True)
lien['href']

## Recuperer le contenu de la balise

`element.get_text()` Recuperer le contenu de la balise.

