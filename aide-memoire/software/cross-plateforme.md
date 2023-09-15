## Les meilleurs applications 

* [Cryptomator](https://cryptomator.org/), logicel de cryptage spécialisé pour le cloud.
* [Simplenote](https://simplenote.com/), logiciels de prises de notes en markdown.

### Thunderbird

Exporter ses emails dans un fichier : 
* sélectionner le dossier (ou l'email)
* outils > exporter

## Pandoc

Convertir du markdown en word, html, pdf.

`pandoc fichier -o sortie.docx`

grid_tables
`-t markdown-multiline_tables-grid_tables` elimier des extensison dans les convertions.

## Nbconvert

Expoter un fichier ipynl en hmtl ou en pdf :
`jupyter nbconvert --to pdf --no-input fichier.ipynb`

Paramètres :  
* `--to html` en html.
* `--no-input` masquer le code.
* ` --template theme` avec un thème.


## Documentation en markdown

#### Installation 

Installer les packages Python [mkdocs](https://www.mkdocs.org/) et [mkdocs material](https://squidfunk.github.io/mkdocs-material/)

`mkdocs new my-project` créer un projet.

Le fichier de configuation est `mkdocs.yml` :
```
site_name: Mes notes

# mkdocs.yml
theme:
  name: "material"
  features:
    - content.tabs.link

plugins:
  - search
  - mkdocstrings
  - glightbox #pour les images

markdown_extensions:
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
  - admonition
  - pymdownx.details
  - pymdownx.superfences


nav:
  - Méthodes : 
    - Lyse : methodes/lyse.md
    - Précipitation : methodes/precipitation.md
  - Cahier de laboratoire: 
    - FMRP : cahier-laboratoire/FMRP.md
```

`mkdocs serve` exécuter le serveur.

### Le contenu 

Les fichiers de documentations sont à mettre dans le dossier `docs`.

### Markdown langage


### Les boites

Attentin, il faut que la tabulation mesure 4 espaces.

* `!!!` pour une box afficher
* `???` pour une box retrécie.

Type `note`, `info`, `quote`, `example`, `bug`, `danger`, `failure`, `warning`, `question`, `success`, `tip`, `info`, `abstract`, `note`.

1. element1
2. element2

_texte_ italique
__texte__ gras

Tableau

colonne1 | colonne2
---|---
val1 | val2
