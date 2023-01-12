## Concept

Mathématiquement, cette méthode permet d'apporcher n'importe quelle fonction.

Le modèle est constitué de plusieurs couches formées de plusieurs neurones. Les couches sont disposées de tels sorte que les données sont transmises vers celle en avale. On distingue les couches :

| une observable | une ou plusieurs cachées | une couche de sortie |
|---|---|---|
| recoit les données brutes en entré | des couches intermédiaires | une couche qui génére la probabilité d'appartenance à la classe |

Les connexions entre les neurones sont appelées synapses. Il en existe de deux types de synapses : 
* inhibiteur
* excitateur
Si un neurone pré et post synaptique qui s'excitent ensemble alors ils renforceront leur lien càd le poid synaptique de la synapse qui les relie.

Chaque neurone applique une fonction à la donnée qu'il recoit en entrée. 
On utilise principalement trois fonctions :
* Sigmoïde. f(x)=1/(1+e^{-x})
* Unité de rectification linéaire douce. f(x)=ln(1+e^{x})
_Rmq :_ Il existe aussi des fonctions discontinues mais elles posent des problèmes d'optimisation car elles ne sont pas dérivables, par exemple :
* Marche ou heaviside, x<0 alors f(x)=0 et x>=0 alors f(x)=1.
* Unité de rectification linéaire f(x)=0 si x<0 et f(x)=x si x>=0 (appelé relu).
* tanh fonction qui ressemble à la sigmoid en plus "typée" sur un intervalle de -1 à 1. 

_Rmq :_ on a aussi la fonction softmax qui renvoie la classe avec la plus grande valeur. Elle sert notamment à renvoyer avec plus grande valeur dans le cas d'une classifciation avec plus de deux classes.

Pour faciliter les opérations, les données sont manipulés et transformées dans un objet mathématique appelé matrice.
En général, cnn puis activation puis pooling.

La fonction max pooling réduit la dimension de la matrice d'activation (activation map) en conservant la valeur maximum sur les régions.
Cela permet de réduire l'impact de petits changements qui pourraient se produire dans l'image.

#### Rétropropagation et modification des coefficients

Les coefficients sont ajustés par la descente de gradients stochastiques. Les coefficients sont choisis aléatoirement (stochastiques) et ajustés lorsque le modèle se trompe. L'ajustement se fait en étudiant le sens de variation de chaque neurone qui est déterminé par le calcul de la dérivé partielle. 
_Rmq :_ d'où l'utilité d'avoir des fonctions dérivables.

## Paramètres

| Avantages | Inconvénients |
|---|---|
| pas de paramètres à vérifier | surapprentissage |
| | Demande beaucoup de ressources|

## Echantillonage 

Pour limiter le surapprentissage : autant d'individus de chaque classe pour la prédiction.

## Agrégation de réseaux de neurones

L'agrégation de réseaux de neurones (boosting ou bagging) n'apporte pas un gain significatif de pouvoir prédicteur. La manière même d'élaborer des réseaux de neurones conduit souvent à des poids et des réseaux quasi identique.

## le réseau de neurones

Un réseau de neurones est un empilement de couches. Ils en existent plusieurs notamment les couches :
* base.
* convulsives inspirées de la vision chez les mammifères.
* Pooling qui compresse l'information. Elle est utile notamment après l'utilisation d'une couches convulsives pour ne garder que l'information pertinente. Il en existe deux types : max et moyenne.
* récurrentes adaptées au traitement textuel. Elle garde en mémoire l'ordre notamment celui des mots. 
* Normalisation
* Régularisation complexifie le modèle en créant un bruit aléatoire (Dropout qui met des 0). Contribue a rendre le modèle plus performant et moins sensible au bruit.

### convergeance des poids vers les valeurs optimum 


L'initialisation des poids peut avoir des répercussions importante sur le modèle.
Batch normalisation Soustrait par la moyenne et divise par l'écart type.

Ensemble de méthodes qui permettent aux poids de converger plus rapidement vers les optimum.

Mommentum des poids d'apprentissage permet d'éviter certains minimums locaux trop petit.

### Entrainement du réseau de neurones

Créer des lots de fichiers (batch) qui seront soumis plusieurs fois au modèle.

## Les images : Augmenter le nombre de données et la polyvalence du modèle

Générer un jeu de données d'apprentissage à partir d'un dosssier. Les images créées par des transformations sont ajoutés aux jeux de données (training, validation) tels que :
* Rotations
* Cisaillement
* Changements d'échelle
* Rotation de l'image
* Zoom

## Bibliothèques

Il existe principalement deux bibliothéques pour faire de l'apprentissage profond.

| Library | Développer | avantages |
|---|---|---|
| `torch` pytorch | Méta | beaucoup plus flexible et personalisable |
| `tensorflow` | Google  | plus simple |


## Créer un modèle

1. Créer le modèle avec les couches.
2. Compiler le modèle et définir les indicateurs à minimiser.
3. Entrainer le modèle.
