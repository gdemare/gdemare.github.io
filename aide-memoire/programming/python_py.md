NB : les chemins s'écrivent avec le `/`.

Environement de développement : Jupyter
Changer la couleur de l'environnement jupyter.
```
pip install jupyterthemes
pip install --upgrade jupyterthemes
jt -t chesterish
```

## Extension

`.pyw` fichier python exécutable.

## Configurer Python sur Windows

* Copier le chemin de la licence et des programmes python.
* `Panneau de configuration\Système et sécurité\Système > Paramètre système avancé > Variable d'environnement`
* Ajouter une variable système 
	* nom : `PYTHON_HOME`
	* valeur : `chemin copié`
* Modifier la variable `Path`
* Ajouter `%PYTHON_HOME%` 

Répéter l'opération pour le sous dossier library/bin et scripts

`python` démarrer une session python.

### Installer un module

* `pip install package` installer une bibliothèque. Paramètre
	* `-r package1, package2` installer plusieurs librarys en une seule fois. Pour créer l'installation d'un programme python, il est possible de créer un fichier `requirements.txt` qui contient la liste des library. Il suffit d'exécuter `pip install -r requirements.txt` pour installer tous les modules.

NB : il est possible de stocker le nom des library à utiliser dans un fichier.

Cloner un dossier github : 
```
git clone https://github.com/jkbr/httpie.git
sudo python setup.py install
```

## Créer un module et l'impoter

```
	 ____ 'module1.py' 		
dossier_|
	|____ 'module2.py'
```

Pour importer les fichiers class dans python :

```
sys.path.append('chemin/dossier')
from fichier import class
``` 

#### MàJ des packages

* `pip list --outdated` liste des packages avec des màj disponibles.
* `pip freeze | %{$_.split('==')[0]} | %{pip install --upgrade $_}` maj en passant par le PowerShell.

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

### Les instructions

Les instuctions peuvent être séparées par `;` ou par un saut de ligne.

### Commenter le code

* `# commentaire` commentaire sur une seule ligne.
* `"""commentaire"""` commentaire sur plusieurs lignes.
* `début \ suite` d'écrire une instruction sur plusieurs lignes

### Les variables 

* `a = valeur` créer et affecter une valeur à une variable.
* `a, b = val1, val2` affecter plusieurs variables en même temps.
* `input("afficher")` saisie utilisateur (convertir en nombre la saisie `int(...)`). 

Liste des variables par défaut :
* `%pwd` dossier par défaut.

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

#### Les dictionnaires

* `dict = { 'id' : [val1, val2, val3] }` Déclarer un dictionnaire.
* `dict['id']` + `.seq` pour connaitre une information.

Le dictionnaire est un objet particulier. L'accés aux valeurs fait par l'id.
* `.get(id)` renvoie la colonne si l'id existe. 
* `.values()` renvoie les valeurs sous forme de liste.
* `.items()` renvoie (id, valeur).
* `.keys()` renvoie la liste des id.
* `record_dict["sp"] = record_dict.pop("id")` modifier la clé d'une entrée.
* `.update(reference)` ajouter une nouvelle valeur.

### Texte

| Fonction | définition |
|---|---|
| `chr(nbre)` | convertie un nombre en sa lettre correspondante|
| `len(texte)` | nombre de caractère de la chaine |
| `.lower()` | mettre un texte en minuscule |
| `.upper()` | mettre un texte en majuscule |

#### Expression régulière (regex)

Library `re`. Une expression régulière est déclarée comme `r"expr"`.

`re.search( a_rechercher, texte )` rechercher une expression regex ou un mot.

Variable de sortie : 
* `.group(0)` pour accéder aux résultat de la recherche.
* `.span()` la position.
* `.start()` la première position.
* `.end()` . 

| Symbole | Définition (négation) | 
|---|---|
| `\s` (`\S`) | espace |
| `\d` | chiffre | 
| `\` | caractère d'échappement |
| `*` | n'importe quel symbole plusieurs fois `[2-6]` séq de 2 à 6 |
| `[]` | ecrite l'expression à l'intérieur |
| `^` | position du début |
| `$` | en fin de chaîne |
| `[0-9]{4}` | Nbre de fois qu'apparait un chiffre |
| `\w` | équivalent à [a-zA-Z0-9_] |

### Les dates
Package : `datetime`

| Fonction | définition |
|---|---|
| `date.today()` | aujourd'hui |
| `date.weekday()` | numéro du jour de la semaine  |

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
#### Les opérateurs logiques (booléens)

| Symbole | Opération |
|---|---|
| `and` ou `&` | et |
| `or` ou `|` | ou |
| `not condition` ou `~` | negation |
| `is None` | null |
| `in` | vérifier la présence d'un caractère (appartient). |
| `.endswith("fin")` | se termine par | 
| `pd.isna` ou `np.isnan` | valeur manquante | 

Condition : `==`, `>=`, `>`, `!=`

### Les boucles

#### La boucle for

```
for i in séquence:
	instruction
```
Séquence peut etre une liste, `range(a,b)` ou une chaîne de caractères (cela parcourt les lettres).

* `output_list = [print(a, b) for a, b in list( comparaison.columns )]` appliquer une fonction à une liste.


Library : `from itertools import combinations`
`combinations(comparatif.columns, 2)`  combinaison d'éléments d'une liste sans redondance

#### La boucle tant que

Les instructions sont répétées jusqu'a que ce soit la condition devienne fausse.

```
while condition:
	instruction
```

## Fonction et classe

### Déclarer une fonction 

```
def fonction (param1, param2=10):
	instruction
	return valeur
```

`=10` valeur par défaut de la variable.

##### Fonctions mathématiques

```
x = np.linspace(0, 135, 135)
y = list(map( ma_fonction,x))
```

### Déclarer une classe

```
class classe:	
	def __init__ (self):
		self.var1
	def fonction1 (self):
declarer = classe() # invoquer la classe.
```

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

| Fonction | Défintion |
|---|---|
| `randint(nb1,nb2)` | nbre entier au hasard entre nb1 et nb2 |
| `random()` | nbre aléatoire entre [0;1] |
| `randrange(nbre)` | nbre entier aléatoire entre 0 et nbre|
| `gauss(mu, sigma)` | nbre aléatoire par la loi normale | 

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
* `print( f"texte {variable}" )` afficher un message en interprétant une variable.
* `texte[1:4]` extraire des caracètres d'une chaîne.
* `texte1 + texte2` concaténer du texte
* `'séparateur'.join([text1,text2])` concaténer du texte.
* `texte.strip()` supprimer les espaces au début et à la fin.
* `texte.replace('ancien', 'nouveau')` remplacer un caractère.
* `re.split(`\n`, texte )` séparer une chaîne de caractères en fonction d'un motif.

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

Package `from skimage import io`

* `io.imread("chemin")` importer une image.
* `io.imshow(monImage); io.show ` afficher l'image.

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

Package `sqlite3`

### Connexion à la database

```
conn = sqlite3.connect('base de donnees.db')
c = conn.cursor()
```

`conn.close()` deconnection de la dbb.

### Soumettre une requête

* `c.execute('''requete''')`
* `c.executemany('''requete''', liste)`

Les variables à utiliser dans la requête doivent etre declarées par un `?`.
S'il y en a plusieurs, il faut les organiser sous la forme d'une liste.

_NB :_ Penser à convertir le résultat en liste.

* `conn.commit()` écrire ou modifier la bdd en exécutant la requête.

## Les fichiers

### Manipuler les fichiers

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
| `rename( ancien, nouveau)` | renommer un fichier | 

Package `glob`

* `glob('*.extension')` lister les fichiers.

### Enregistrer un fichier

```
open('national geographic/index.html', 'w').close()
fichier = open('journal Le Monde/index.html', "a")
fichier.write(index)
fichier.close()
```

## Alternative

```
with open(dossier + '/data.js', 'w', encoding='UTF8) as file:
	file.write(i)
```
`\n` est le séparateur entre les lignes.

### Importer un fichier 

* `open('fichier.txt', 'w', encoding = 'utf-8')` ouvrir un fichier. _Rmq :_ `open` permet de créer un fichier.
L'encoding est généralement ISO-Latin-1 ou utf-8.
Paramètre :
	* `w` (write) pour écrire.
	* `a` ajouter à la fin d'un fichier.
	* `r` (read) lire.
* `fichier.write('text')` ajouter des lignes au fichier (on créer le fichier avec open).
* `fichier.close()` fermer le fichier.

### Ecrire une page html

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

### Convertir un fichier Word en Pdf

package `docx2pdf`
* `convert("fichier.docx", destination)` convertir docx en pdf.

### Excel en python

Library `import openpyxl`

* `fichier = openpyxl.load_workbook('fichier.xlsx')` charger un fichier excel.
* `mywb = openpyxl.Workbook()` créer un workbook.
* `mywb.get_sheet_names()` afficher les noms des feuilles.
* `mywb.save('NewExcelFile.xlsx')` enregistrer le fichier.
* `wb.create_sheet(index=0, title='1st Sheet')` créer une feuille.

* `mysheet = mywb.get_sheet_by_name('feuill')` sélectionner une feuille.
* `mysheet['F6'] = 'Writing new Value!'` écrire une valeur dans une feuille donnée.

### Créer un fichier Word

Library : `from docx import Document`

* `.add_heading('Titre 1', level=1)`
* `.add_paragraph('blabla...')`
	* `style='List Bullet` liste en puce.
	* `style='List Number'` liste numérotée.
* `.add_picture('monty-truth.png')` ajouter une image.
	`width=Inches(1.25)` taille de l'image
* `.add_page_break()` saut de page.
* `paragraphe.add_run(text) = True`
    * `.italic`, `.bold` italique, gras.
* `.save('word.docx')` enregistrer le document.

#### Ajouter un tableau

```
table = document.add_table(rows=1, cols=2)
hdr_cells = table.rows[0].cells
hdr_cells[0].text = 'quantité'
hdr_cells[1].text = 'Id'

for qty in records.itertuples():
    row_cells = table.add_row().cells
    for j in range(1, len(qty)) :
        row_cells[j-1].text = str( qty[j] )
```

## Interface graphique

### Déclarer une fenêtre 

```
root = tk.Tk()
## éléments de la fenêtre 
root.mainloop()
```

* `root.title('Lanceur web')` ajouter un titre.
* `root.geometry("200x500")` préciser les dimensions de la fenêtre.

### Element de la fenêtre

Bibliothèque à importer `from tkinter import ttk`

1. Déclarer l'élément `bouton = ...`
2. Afficher l'élément `bouton.pack()`

Liste des éléments :
* `ttk.Button(root, text='Unice', command=fonction)` bouton.
* `ttk.Label(root, text="texte")` ajouter du texte.
* `ttk.Entry(root)` zone de saisie.

* `.grid(row=, column=)` position de l'élément.

Paramètres : 
* `width = 30` largeur.

### Choisir un dossier par une fenêtre

Library : `from tkinter import Tk, filedialog`

Fonctionne hors interface tKinter

```
root = Tk()
root.withdraw()
root.attributes('-topmost', True)
open_file = filedialog.askdirectory()
print(open_file)
```
ou `.askopenfilename()`
* `fichier = re.search(r'((?!(/|\\)).)*$' , open_file).group(0)` le fichier.
* `dossier = open_file.replace(fichier, "")` le dossier.

## Autres

### Télécharger des vidéos depuis Youtube

Library `yt-dlp` avec `yt-dlp 'id_youtube'` télécharger dans la meilleur qualité.
* `--merge-output-format mkv --remux mkv` convertir le fichier en mkv. Cela nécessite de télécharger ffmpeg et de déclarer la variable environnement /bin.

## Selenium

Library `selenium`

Chromedriver à télécharger `https://chromedriver.chromium.org/downloads`

```
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

options = Options()
options.binary_location = "C:\\Program Files (x86)\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"
s = Service('C:\\Users\\Guigui\\Downloads\\chromedriver.exe')
driver = webdriver.Chrome(chrome_options=options, service=s) #ouvrir le navigateur
```

* `driver.get(url)` charger une page web.
* `driver.find_element('balise', 'valeur')` sélectionner un élément sur la page.

`from selenium.webdriver.common.by import By` 

| Référence | Définition |
|---|---|
| `CLASS_NAME` | Nom de la classe |
| `CSS_SELECTOR` | Css selector |
| `ID` | Identifiant de la balise |
| `LINK_TEXT` | Texte |
| `PARTIAL_LINK_TEXT` | Morceau de texte |
| `NAME` | Nom de la balise |
| `TAG_NAME` | Balise |
| `XPATH` | Xpath |

Action sur l'élément sélectionner :
* `.send_keys(valeur)` remplir les valeurs.
* `.click` cliquer sur la sélection.

## Convertir un python en application

Library `pyinstaller`

`pyinstaller script.py`
`--noconsole` --w
`--onefile`

## Importer un script python

Library `subprocess`

* `call([sys.executable, 'C:\\temp\\hello2.py'], shell=True)` importer un script python.
* `['java', '-jar', 'temp.jar' param1, param2]` exécuter un script java.

## Nbconvert

Expoter un fichier ipynl en hmtl ou en pdf :
`jupyter nbconvert --to pdf --no-input fichier.ipynb`

Paramètres :
* `--to html` en html.
* `--no-input` masquer le code.
* ` --template theme` avec un thème.
