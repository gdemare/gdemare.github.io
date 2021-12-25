## Concept

Mathématiquement, cette méthode permet d'apporcher n'importe quelle fonction.

Le modèle est formé de plusieurs couches formées de plusieurs neurones. Les couches sont disposées de tels sorte que les données sont transmises vers celle en avale. On distingue les couches :

| une observable | une ou plusieurs cachées | une couche de sortie |
|---|---|---|
| recoit les données brutes en entré | des couches intermédiaires | une couche qui génére la probabilité d'appartenance à la classe |

Les connexions entre les neurones sont appelées synapses. Il en existe de deux types de synapses : 
	* inhibiteur
	* excitateur
Si un neurone pré et post synaptique qui s'excitent ensemble alors ils renforceront leur lien càd le poid synaptique de la synapse qui les relient.

Chaque neurone applique une fonction à la donnée qu'il recoit en entrée. On utilise principalement trois types de fonctions principales :
* Sigmoïde. f(x)=1/(1+e^{-x})
* Unité de rectification linéaire douce. f(x)=ln(1+e^{x})
_Rmq :_ Il existe aussi des fonctions discontinues mais elles posent des problèmes d'optimisation car elles ne sont pas dérivables, par exemple :
* Marche ou heaviside, x<0 alors f(x)=0 et x>=0 alors f(x)=1.
* Unité de rectification linéaire f(x)=0 si x<0 et f(x)=x si x>=0.

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