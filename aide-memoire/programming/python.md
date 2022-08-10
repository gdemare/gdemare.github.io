NB les chemins s'écrivent avec le `/`.

Environement de développement : Jupyter
Changer la couleur de l'environnement jupiter 
```
pip install jupyterthemes
pip install --upgrade jupyterthemes
jt -t chesterish
```

## Configurer Python sur Windows

* Copier le chemin de la licence et des programmes python.
* Panneau de configuration\Système et sécurité\Système > Paramètre système avancé > Variable d'environnement
* Ajouter une variable système 
	* nom : PYTHON_HOME
	* valeur : chemin copié
* Modifier la variable Path
* Ajouter %PYTHON_HOME% 

Répéter l'opération pour le sous dossier library/bin et scripts

`python` démarrer une session python.

### installer un module

* `python -m pip install package` windows
* `pip install package` ubuntu.

## Instructions de bases

## Les matrices

library : `NumPy`
* `a = np.array([ [11,12,13], [21,22,23] ])` déclarer une matrice.
* `np.shape(a)` dimension d'une matrice .

| Opérateur | Définition |
|--|--|
| `a*b` | multiplication |
| `np.dot(a,b)` | produit matriciel (NxM et MxO)|
| `a.T` | transposition |

`np.random.randn(n)` générer n nombres aléatoire.

### Importer des fonctions

* `import package` charger un package complet. Les fonctions sont accessibles par `package.fonction`
* `from package import module` charger un module.
* `module.fonction()` utiliser une fonction d'un module.
* `help(module)`afficher les informations sur un module.
* `from module import partieModule` importer uniquement un sous module.
`*` importer toutes les fonctions.

### les instructions

Les instuctions peuvent être séparées par `;` ou par un saut de ligne.

### commenter le code

* `# commentaire` commentaire sur une seule ligne.
* `"""commentaire"""` commentaire sur plusieurs lignes.
* `début \ suite` d'écrire une instruction sur plusieurs lignes

### Les variables 

`a = valeur` créer et affecter une valeur à une variable.
`a, b = val1, val2` affecter plusieurs variables en même temps.

#### Format de données

* `type(variable)` renvoie le type de variable.

| Fonction | Définition | 
|---|---|
| `list(variable)` | convertir en liste |
| `int()` | convertir en entier |
| `float()` | convertir en float | 
| `str()` | convertir en texte |

* `texte.split('séparateur')` transformer un caractère en liste en fonction d'un séparateur.

#### Vecteurs et listes
`[] = vecteur` et `() = liste` (appelé tupple) Rmq : Les listes ne sont pas modifiables.

* `var[nbre]` extraire une valeur.
* `['valeur']*n` créer une liste à n élément
* `vecteur.append('texte')` ajouter une valeur à un vecteur.
* `vecteur.pop()` supprimer le dernier élément d'un vecteur.
* `(a,b) = (1,3)` donner un nom aux élements de la liste pour pouvoir les appeller comme des variables.
* `liste1 + liste2` concaténer deux listes 
* `len(liste)` taille de la liste.
* `liste = [ val1, val2]` déclarer une liste.
* `liste[]` afficher un élément.
* `del liste[numéro]` supprimer une valeur.
* `liste.append(valeur)`ajouter une valeur.


#### Les dictionnaires

Les dictionnaires sont un objet particulier. L'accés aux valeurs fait par l'id.
* `.get(id)` renvoie la colonne si l'id existe. 
* `.values()` renvoie les valeurs sous forme de liste.
* `.items()` renvoie (id, valeur).
* `.keys()` renvoie la liste des id.

`dict = { 'id' : [val1, val2, val3] }` 

### Texte

| Fonction | définition |
|---|---|
| `chr(nbre)` | convertie un nombre en sa lettre correspondante|
| `len(texte)` | nombre de caractère de la chaine |

#### Expression régulière (regex)

Library `re`

### Les dates
Package : `datetime`

| Fonciton | définition |
|---|---|
| `today()` | aujourd'hui |
| `weekday()` | numéro du jour de la semaine  |


* `datetime.strptime(texte, '%d.%m.%Y')` convertir en date et time.
* `variable.strftime('%Y-%m-%d')` avec un affichage particulier.

### Condition 

```
if condition:
	instruction
elif condition:
	instruction
else:
	instruction
```
#### Les operateurs logiques (booléens)

| Symbole | Opération |
|---|---|
| `and` | et |
| `or` | ou |
| `not condition` | negation |
| `is None` | null |
| `in` | vérifier la présence d'un caractère (appartient). |

Condition : `==`, `>=`, `>`, `!=`

### Les boucles

#### Boucle for

```
for i in séquence:
	instruction
```
Séquence peut etre une liste, `range(a,b)` ou une chaîne de caractères (cela parcourt les lettres).

#### Boucle tant que (jusqu'a que ce soit fausse)

```
while condition:
	instruction
```

### Fonction 

```
def fonction (param1, param2=10):
	instruction
	return valeur
```

`=10` valeur par défaut de la variable.

## Les opérateurs

| Symbole | Opération |
|---|---|
| `+` | addition |
| `-` | soustraction |
| `*` | multiplication |
| `//` | division entière → a // b est le quotient de l'entier a par l'entier b |
| `/` | division avec des nombres flottants |
| `a ** b` | puisance |
| `a % b` | modulo |

### Fonctions mathématiques 

| Fonction | Définition | 
|---|---|
| `range(nbre1, nbre2 <,pas> )` | créer une liste de nombres. |
| `round(numeric,nbre de decimal)` | arrondir un nombre |
| `max(vecteur)` | maximum |
| `min(vecteur)` | minimum |
| `abs(valeur)` | valeur absolue |

#### Nombre aléatoire

library : `random`

| fonction | défintion |
|---|---|
| `randint(nb1,nb2)` | nbre entier au hasard entre nb1 et nb2 |
| `random()` | nbre aléatoire entre [0;1] |
| `randrange(nbre)` | nbre entier aléatoire entre 0 et nbre|

#### Fonction mathématique

Bibliothèque `math`

| fonction | définition |
|---|---|
| `sin()` | sinus | 
| `cos()` | cosinus |
| `tan()` | tangente |
| `factorial()` | factoriel |

## Le texte

* `print( message1, message2)`afficher un message.
Paramètre :
	* `sep = séparateur` ajouter un séparateur. 
	* `end = text_fin` bloquer le retour à la ligne.
	* `f'texte {variable} texte {var2}'` f rend interprétable la chaine de caractère (remplacement des variables).
* `texte[1:4]` extraire des caracètres d'une chaîne.
* `texte1 + texte2` concaténer du texte

* `print( f"texte {variable}" )` afficher un message en interprétant une variable.

| Caractère | Définition |
|---|---|
| `\'` | Apostrophe |
| `\n` | Retour à la ligne |
| `\\` | backlash (\) |

## ASCII

* `ord('Lettre')` renvoie le code ASCII.
* `chr('ASCII')` renvoie le caractère.

## Autres fonctions utiles

| Fonction | Définition |
|---|---|
| `texte.strip()` | supprimer les espaces.|
| `len(texte)` | nombre de caractères |

## Manipuler les images

### Bibilothèque `skimage` (scikit-image)

`from skimage import io`

* `io.imread("chemin")` importer une image.
* afficher l'image
```
io.imshow(monImage)
io.show 
```
### Bibilothèque `pillow`
Coordonné et position des pixels (x, y) correspont à (largeur, hauteur).
* `Image.open('fichier.jpg')` ouvrir une image.
* `var_img.height` récupérer la hauteur.
* `var_img.width` récupérer la largeur.
* `var_img.getpixel( (x,y) )` récuperer la valeur des coordonnées rgb du pixel.
* `var_img.putpixel( (x,y), (r,g,b))` changer la couleur d'un pixel.
* `afficher_image(image)` afficher l'image.
* `Image.new(mode = 'RGB', size = (x,y))` créer une nouvelle image.

## Sqlite 3

package : `sqlite3`

### connexion à la database

```
conn = sqlite3.connect('base de donnees.db')
c = conn.cursor()
```

`conn.close()` deconnection de la dbb.

### Soumettre une requête

* `c.execute('''requete''')`
* `c.executemany('''requete''', liste)`

Les variables a utiliser dans la requêtes doivent etre declarées par un `?`.
S'l y en a plusieurs, il faut les organiser sous une liste.

NB : Penser à convertir le resultat en liste.

* `conn.commit()` écrire ou modifier la bdd en exécutant la requête.

## Manipuler les fichiers

Package `os` 

| Fonction | Définition |
|---|---|
| `remove(fichier)` | supprimer un fichier. |
| `getcwd()` | dossier actuel. |
| `chdir(dossier)` | changer le dossier par défaut. |
| `listdir()` | liste des dossiers et fichiers d'une répertoire. |
| `mkdir(nom)` | créer un dossier |
| `rmdir(dossier)` | supprimer un dossier |
| `name` | renvoie le nom de l'os actuel |
| `path.exists(chemin)` | existence d'un répertoire ou dossier |
| `path.basename(chemin/fichier)` | renvoie le nom du fichier sans le chemin |
| `path.isfile(fichier)` | vérifier l'existence d'un fichier |
| `shutil.copy(fichier,dossier ou fichier)` | library : `shutil` | 

Package `glob`

* `glob('*.extension')` lister les fichiers.

Package `shutil`

`` copier des fichiers.

### Enregistrer le fichier

```
open('national geographic/index.html', 'w').close()
fichier = open('journal Le Monde/index.html', "a")
fichier.write(index)
fichier.close()
```

### Importer un fichier 

* `open('fichier.txt', 'w', encoding = 'utf-8')` ouvrir un fichier. Rmq : `open` permet de créer un fichier.
L'encoding est généralement ISO-Latin-1 ou utf-8.
Paramètre :
	* `w` (write) pour écrire.
	* `a` ajouter à la fin d'un fichier.
	* `r` (read) lire.
* `fichier.write('text')` ajouter des lignes au fichier (on créer le fichier avec open).
* `fichier.close()` fermer le fichier.

lire le fichier en une seule ligne.

## Ecrire une page html

`from yattag import Doc`
```
doc, tag, text = Doc().tagtext()

doc.asis('<!DOCTYPE html>')
	with tag('head'):
		doc.stag('link', id="pagestyle", href="css/style.css", rel="stylesheet")
	with tag('body'):
		text('afficher')
index = doc.getvalue()
```

* `with tag('baliseHTML'):` balise qui se ferme.
* `oc.stag('baliseHTML')` balise sans fermeture.
ajouter des options :
	* `id=identifiant` ajouter un identifiant.
	* `klass=classe` ajouter une classe.

NB : Possibilite d'inclure des boucles et des conditions à l'interieur du doc.asis

## Convertir Word en Pdf

package `docx2pdf`
* `convert("fichier.docx", destination)` convertir docx en pdf.
