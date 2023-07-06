`data.fonction_()` l'unerscore indique que le résultat remplace les données de départ.

| dataframe | Matrice | Tensor ou jeu de données pour les modèles |
|---|---|---|
| Pandas | Numpy | Pytorch ou Tensor |

`map( fonction, list )` appliquer une fonction aux élements d'un vecteur. Renvoie un objet de type map qu'il faut généralement le convertir en liste.
Exemple : `map( ma_fonction, liste )` la fonction est sans parenthèse.

### Les types de variables

* `type(objet)` renvoie le type d'objet. Pour l'utiliser dans des conditions, on utilise généralement  `is type` . 
* `veteur.astype(type)` changer le type d'un vecteur ou d'un tableau (type : `int`, `str`).

| Fonction  | Définition |
|---|---|
| `str()` | convertie en caractère |
| `list()` | convertie en liste |
| `variable.decode()` | de bytes à normale (byte est signalé par un b avant la valeur.) |

### Standariser les données 

`import sklearn.preprocessing`

* `preprocessing.StandardScaler().fit_transform(comparatif)` standariser les données _Attention la standarisation a lieu par colonne (transposer)_ .
* `preprocessing.Normalizer(norm='l1').fit_transform(data)` normaliser les données.

## Pandas (data frame)
Package `import pandas as pd`

* `donnee.dtypes` renvoie le type de données de chaque colonne.
* `donnee.index` nom des lignes.
* `donnee.columns` nom des colones (`data.columns.values` pour ne récupérer que les valeurs et pour renommer les colonnes) .
* `donnee.head()` renvoie les premières lignes du pandaframe.
* `donnee.describe()` tableau récapitulatif des données (moyenne, médiane, écart type,...). Les valeurs manquantes ne sont pas prises en compte.
* `stack(niveau)` modifier les niveaux de données.

créer un jeu de données aléatoire.
```
index = [ np.random.randint(0,len(data)) for i in range(5000)]
export = data.iloc[ index,: ]
```

### Déclarer un tableau Pandas

* `pd.DataFrame({ "col1" : valeurs, 'col2' : valeurs})` créer un data frame. Vide lorsqu'il n'y a pas d'arguments. Paramètres :
	* `index= nom_lignes` 
	* `column= nom_colonnes`
* `dataframe.astype({'Survived': 'float'})` déclarer (à vérif) ou changer le type de variable d'un data frame.
* `data = pd.DataFrame(columns = ['chemin', 'fichier', 'extension'] )` créer un dataframe vide.
* `data_copy = data.copy()` copier un dataframe dans une autre variable. Attention sinon cela créer des dataframes liés.

### Sélectionner et extraire des données

* `tableau['colonne']` sélectionner une colonne.
* `tableau[num_ligne]` sélectionner une ligne (fonctionne avec `debut:fin`).
* `tableau.iloc[nb_row <, nb_col>]` sélectionner en fonction du numéro des lignes et du numéro des colonnes.
* `tableau.loc[nb_row <, nom_col>]` sélectionner en fonction du numéro des lignes et du nom des colonnes.
* `for i in data.index:` parcourir un dataframe grâce au index.
* `for index, row in df.iterrows():` parcourir un dataframe en récupérant directement les valeurs.

_RMQ_ `:` permet de sélectionner tous ce qui se trouve avant ou après (ex : `2:` est équivalent à 2 et après).

### Opération sur les données

Fonctions :
* `pd.cut( vecteur, bins=range(0, 150, 10) )` discrétiser une variable en fonction d'intervalles.
* `pd.qcut(variable, nb_groupe)` discrétiser une variable en créant des groupes d'effectifs uniformes.
* `.fillna(0)` remplacer les valeurs manquantes.
* `.drop_duplicates(keep='last')` supprimer les doublons.
* `.rename(columns=/index={"ancien" : "nouveau"})` renommer une colonne (ou `.columns.values = [col1, col2]`).
Paramètres :
	* `inplace=True` pour remplacer les données.
	* `.set_index('colonne', inplace=True)` mettre une colonne comme index.

Autres fonctions :
* `.apply(fonction, axis=1)` appliquer une fonction sur les données. Rmq pour ajouter la colonne il faut passer par `tableau["colonne"] = `.
Exemple de fonction apply :
```
def present_fct(row):
    if row>7:
        value = 1
    else :
        value =0
    return value
```

#### Les intervalles 

`interval(left, right )`
intervalle.right/.left récupérer la valeur.

### Ajouter des individus

* `data.loc[len(data)] = ["test1", "test2", 'test3']` ajouter une ligne de données.

### Importer 

* `pd.read_csv(fichier, sep="\t")` lire un fichier csv.
* `pd.read_excel(fichier, sheet_name=1/feuille)` lire un fichier excel.
* `pd.ExcelFile( excel )` sinon pour importer un fichier et récupérer des informations.
	* `.sheet_names` renvoie le nom des feuilles d'un fichier Excel. 

### Exporter 

* `tableau.to_csv('fichier.csv', sep='separateur')` exporter un data en csv.
* `tableau.to_excel('fichier.xlsx', sheet_name="feuill")` exporter un data en excel.

Paramètres :
* `index=False` les index.
* `header=True` nom des colonnes.

Pour exporter dans plusieurs feuilles, il faut installer  `pip install xlsxwriter`.
```
writer = pd.ExcelWriter(fichier, engine = 'xlsxwriter')
	input.to_excel(writer, sheet_name="feuille1", index=False, header=True)
	input.to_excel(writer, sheet_name="feuille2", index=False, header=True)
```

### Tableau croisé et modification de variables

* `pd.crosstab( ligne, colonne)` faire un tableau croisé avec deux variables avec la possibilité de calculer la proportion.
	* `normalize='index'` calcul les fréquences.
* `pivot(data, columns='country', values='quantity', index='fruit')` faire un tableau crois sans fonction d'aggrégation. Il faut s'assurer que la transformation ne permet d'obtenir d'une ligne par index. Paramètres :
	* ` margins = True, margins_name='Total'`ajouter une ligne totale.
* `pivot_table(data, columns='country', values='quantity', index='fruit', aggfunc='sum')` faire un tableau croisé avec fonction d'aggrégation.
Argument `aggfunc` : 
  * `sum` somme de l'indicateur values.
  * `count` nombre de lignes.
* `tableau_croise.reset_index()` Transformer un tableau croisé en tableau.
* `melt(data, id_vars='fruit', value_vars=colonnes)` transformer plusieurs variables en une seule.

* `columns.get_level_values(level)` récupérer les valeurs de l'index dans le cas de plusieurs sous catégories.

### Ajouter une variable

* `data["nouvelle"] = valeur` ajouter directement.
* `tableau.assign( nomCol = valeur )` 
Pour appliquer des fonctions, il faut utiliser la library numpy.
* `df.insert(position, 'col_name', [value1, value2, value3, ...])` insérer une colonne à une position.

### Grouper les données

`.groupby(["colonne"])` grouper par.

| Fonction | Définition |
|---|---|
| `.mean()` | moyenne |
| `.median()` | médiane |
| `.std()` | écart type |
| `.size()` | nombre de lignes |
| `.count()` | nombre de lignes |
| `.value_counts()` | tableau effecitf par modalité `normalize=True` renvoie les % |
| `nunique()` | nbre de valeurs unques |

#### Fonction pandas

`.str.rsplit(séparateur)` sépare une chaine de caractères.
Paramètres :
	* `expand=True` créer une variable pour chaque séparation.

### Jointure 

* `pd.merge(gauche, droite, how = type_jointure, on = clé)` joindre deux tables.
Paramètres : 
	* `how = inner/left/right/outer/cross`  outer	est union (ou) et inner est intersection (et).
	* `left_on/right_on=colonne` id de la jonction.
	* `left_index/right_index = True/False` si la clée l'index. 
* `pd.concat([jointure, nvdf])` concaténer deux tableaux avec la même structure. Attention les dataframes sont à déclarer sans "".

### Filtrer

* `.drop(colonnes,axis = 1 )` supprimer une colonne.
* `.sort_values(colonne, ascending=T)` classer les données.
* `.reset_index()` changer l'ordre naturel des lignes.
* `.unique()` liste des valeurs pour une colonne.
* `value_counts()` permet de renvoyer le nombre de lignes uniques.
* `colonne.str.contains("mot")` contient le mot. Paramètres :
	* `na=none` (False)
* `data[ data["colonne"] == True ]` filtrer les données en fonction d'une condition. S'il y a plusieurs conditions, il faut les mettre entre parenthèses.
* `data[ data['colonne'].isin( ['KO_EF_01', 'KO_EF_02', 'KO_EF_03']) ]` in pour les conditions dans un tableau.
* `data.nsmallest(30, 'p value')` top des valeurs les plus faibles.
* `data.nlargest(30, 'p value')` top des valeurs les plus élevées.
   
Vérifier les propriétés d'une colonne :

* `pd.api.types.is_numeric_dtype(colonne)` c'est numériques ?
* `pd.api.types.is_string_dtype` c'est un chaine de caractère ?

### Graphiques directement depuis pandas

Library `import matplotlib.pyplot as plt`

* `tableau.plot( x='col1', y='col2')` afficher un graphique.

### Statistique

* `data.corr()` matrice de corrélation.
* `data.cov()` matrice de covariance.

## Numpy (matrice et vecteur)

* `.shape` dimension (ligne, colonne,...)
* `np.asarray(matrice)` créer un array.
* `np.empty([lignes,colonnes])` créer un array vide de taille suviantes.
* `np.transpose(matrice)` transposer.
* `np.maxtrix(vec1, vec2)` matrice ligne1=vec1, ligne 2=vec2. 
* `np.zeros(shape=(5,5))` matrice de zéro.
* `np.ones()` matrice de 1.
* `np.diag(vecteur ou matrice, position )` deux fonctions :
	* diagonaliser un vecteur en matrice la position indique la colonne où commencer la diagonalisation.
	* renvoie la diagonale.
* `np.reshape( donnee, (dimension) )`
 * `order='C'` préciser la facon de réordonnées les éléments. `'F'` 
* `np.unique()` renvoie les valeurs uniques.
* `np.sign(nbre)` renvoie le signe.

### Opération sur les valeurs

* `multiply(tableau, nbre, out=nouv_tableau)` multiplier les valeurs d'un tableau.
* `matmul(mat1, mat2)`produit matriciel.
* `add(5)` ajouter 5 à toutes les valeurs.

### Insérer

* `np.append(data, vecteur)` ajouter un dernière colonne. 
* `np.insert( data, position, vecteur)`  ajouter une colonne à une position particulière.

### Statistique

`np.corrcoef( x, y)` coefficient de corrélation de Pearson.

### Fonctions mathématiques 

| Fonction | Définition |
|---|---|
| `np.log(x, base)` | logarithme |
| ` ` | exponentielle |

## Les tenseurs

Library : `torch`

Les tenseurs sont un type de tableau spécialisé pour la modélisation qui sont optimisés pour les GPU.
Les tenseurs sont un type particulier de `numpy`. GPU beaucoup plus rapides. parallèle contre séquentiel bcp plus de coeurs.
Les tenseurs sont des tableaux mutlidimentionnels avec des opérations particulières.

#### Optimisation des opérations sur les tenseurs

L'apprentissage sur les tenseurs peut être accélérer en utilisant la puissance des cartes graphiques.

`cuda.is_available()` Vérifier si le GPU peut être utilisé pour les calculs. Dans le cas de oui il faut
`tensor.to('cuda')`

### Déclarer un tenseur à partir de données 

Il faut créer une classe avec les caractéristiques :

```
class donnee(torch.utils.data.Dataset):
    
    def __init__(self):
     	# déclarer les données en séparant données explicative et la variable à prédire.
        self.x = lot.get(clés[1])
        self.y = lot.get(clés[1])
        
    def __getitem__(self, index):
    	# renvoie les variables explicatives et celle expliqué
        return self.x[index], self.y[index] 
    
    def __len__(self):
    	# renvoie la dimension
        return len( self.x )
```

Library `torch.utils.data.`

* `train, test = random_split(dataset, [20000, 5000])` créer un jeu de test et d'apprentissage à partir d'un tenseur.
* `torch.utils.data.DataLoader(dataset = donnee())` transformer un data en tensor.
Paramètres de DataLoader :
	* `batch_size=nbre` taille des lots.
	* `shuffle=True` répartir aléatoirement les individus.

### Convertir en tenseur

Library : `torch`

* `tensor(data)` convertie un numpy en tenseur.
* `data.numpy()` convertie un tenseur en numpy.
* `from_numpy()` convertie en tenseur.
* `ones_like( tenseur )` créer un tenseur de meme dimension.
* `rand_like( tenseur)` créer un tenseur de meme dimension avec des valeurs aléatoire.
* `rand( dimension )` exemple dimension = (2,3,) `ones()` avec des 1 avec des `zeros()` avec des 0.

Paramètre :
* `dtype=type` préciser le type de variable.

| Type | Définition  |
|---|---| 
| `torch.float` | décimaux |
| `torch.int32` | entiers | 

* `tenseur.dtype` affiche le type de data de chaque champs du tenseur.

## Les images

### Afficher l'image avec plotly à partir d'une matrice

`import matplotlib.pyplot as plt`

```
plt.imshow(img)
plt.axis('off')
plt.show()
```

* `imshow(numpy)`
Paramètre : 
`cmap='gray'` en valeur de gris
