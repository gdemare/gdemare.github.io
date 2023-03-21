Calcul de p-value directement en ligne [BiostaTGV](https://biostatgv.sentiweb.fr/?module=tests)

* H0 : l'hypothèse la plus simple (ou contraignante). Par exemple, les moyennes sont égales.
* H1 : la négation de H0.

p-valeur probabilité d'obtenir une valeur aussi extrême sous l'hypohtèse H0.
En fonction du seuil fixé, il n'est pas possible d'accepter H0 car le risque béta n'est pas estimable càd le risque de rejeté H1 sous l'hypothèse. Le résultat du test est alors :
* On ne peut pas rejeté H0.
* On rejette H0.

On parle de tests paramétriques lorsque les observations suivent une loi statistique et non paramètrique lorsque la loi de répartition n'est pas connue.

* **(1)** indépendance.
* **(2)** égalité des variances.
* **(3)** n>20.
* **(4)** normalité.
* **(5)** effectifs théoriques>5.

## Une distribution

| h0 | Test |
|---|---|
| Normalité | Shapiro-Wilk |
| Pas de valeurs extrêmes | Dixon |
| Pas de valeurs extrêmes | Grubbs |

## Un échantillon et une valeur théorique

| h0 | Condition | Test |
|---|---|---|
| Moyenne | 4 | student (appelé aussi test t) |
| Proportion | Khi2 |
| Variance | Khi2 |

## Paramètre de plusieurs échantillons

| h0 | Taille | Condition | Test |
|---|---|---|---|
| Egalité des moyennes | 2 | 1,2,3 | Test t |
| ____________________ | 2 | | Mann-Whitney |
| ____________________ | n | 1,2,4 ou 3 | ANOVA |
| ____________________ | n | | Kruskal-Wallis |
| Egalité des proportions | k | 4 | Khi2 |
| Egalité des variances | 2 | | Fisher |
| _____________________ | k | 4 | Bartlett |
| _____________________ | k | | Test de Levene |

## Deux distributions

| h0 | Condition | Test |
|---|---|---|
| Même distribution entre une loi et un échantillon | | Kolmogorov-Smirnov |
| __________________ | 1,2,3 ou 4 | Test t |
| __________________ entre deux échantillons | | Wilcoxon-Mann-Whitney |
| Egalités des positions (séries binaires) | | Q de Cochran |

## Corrélation

h0 : indépendance des deux variables

| Type | var | Condition | Test |
|---|---|---|---|
| Linéaire | 2 var quant | | Pearson |
| Rang | 2 var quant | 3,4 | Spearman |
| | 2 var quali | 1,5 | d’association du Khi2 |
| | 2 var quali |  | exact de Fisher |
| | 2 var quali |  | Méthode de Monte Carlo |
| | 1 var quali et 1 var quanti | | ANOVA |
