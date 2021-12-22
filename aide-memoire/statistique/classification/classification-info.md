## Objectif

Générer une probabilité d'appartenance à une classe.

## Méthodes

* Classificateur binaire : 
  * Perceptron
  * Régression logistique
  
* Classificateur multi-classes :
  * Analyse discriminante
  * Arbre de décision
  * Boosting
  * Classificateur naïve bayésien
  * Espérance-maximisation (EM)
  * Forêt aléatoire
  * k-plus proches voisins
  * Support Vector Machine (SVM)
  * Réseau de neurones

# Classification supervisée ou modèliser

<mark>Attention aux variables fortement corrélées !</mark> car elles peuvent surpondérer de l'information. Pour palier ce problème, il est conseillé de réaliser la modélisation sur de nouvelles variables obtenues à la suite d'une réduction de dimensions.

## Classification

Obj : générer une probabilité d'appartenance à une classe. 

* Classificateur binaire 
* Perceptron
* Régression logistique
* Classificateur multi-classes 
* Analyse discrimante 
* Arbre de décision
* Boosting
* Classificateur naïve bayésien
* Espérance-maximisation (EM) 
* Forêt aléatoire 
* k-plus proches voisins 
* Support Vector Machine (SVM)
* Réseau de neurones

## Régression

Obj : modéliser une variable quantitative continue. 

* Régression linéaire
* Arbre de régression
* ANalysis Of VAriance (ANOVA) 
* Forêt aléatoire
* Série temporelle
* AutoRegressive Moving Average (ARMA)
* Lissage exponentionel
* Série temporelle simple

## Evalutation des performances d'un modèle

### Matrice de confusion

| |Vrai | Faux |
|---|---|---|
| **Positif** | a | b |
| **Négatif** | c | d |

On note n le nombre d'individus du jeu de test : n = a+b+c+d.

* **Taux d'erreur** ou **taux de mal classé** proportion d'individus mal classé = c+b/n


### Classification binaire (deux classes)

#### Courbe de Receiver Operating Characteristic (ROC)

La courbe de ROC permet d'évaluer la performance de modèles à classification binaire. On ne s'intéresse qu'aux individus classées comme vraies.
Elle représente : 
* le taux de vrai positif (vrai bien classé) en fonction taux de faux positif (vrai mal classé). 
* La performance du modèle en faisant varier le seuil de sensibilité du modèle. Plus le taux de faux postif augmente plus, on diminue la probabilité d'acceptation.

_Area Under the Curve (AUC)_ aire sous la courbe de ROC.

### Courbe de Lift (courbe de gain)
