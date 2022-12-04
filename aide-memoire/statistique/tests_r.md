* **(1)** indépendance.
* **(2)** égalité des variances.
* **(3)** n>20.
* **(4)** normalité.
* **(5)** effectifs théoriques>5.

## Une distribution

| h0 | Test | R |
|---|---|---|
| Normalité | Shapiro-Wilk | `shapiro.test(x)` |
| Pas de valeurs extrêmes | Dixon | |
| Pas de valeurs extrêmes | Grubbs | |

## Un échantillon et une valeur théorique

| h0 | Condition | Test | R |
|---|---|---|---|
| Moyenne | 4 | T | |
| Proportion | Khi2 | |
| Variance | Khi2 | |

## Paramètre de plusieurs échantillons

| h0 | Taille | Condition | Test | R |
|---|---|---|---|---|
| Egalité des moyennes | 2 | 1,2,3 | Test t | |
| ____________________ | 2 | | Mann-Whitney | |
| ____________________ | n | 1,2,4 ou 3 | ANOVA | |
| ____________________ | n | | Kruskal-Wallis | |
| Egalité des proportions | k | 4 | Khi2 | |
| Egalité des variances | 2 | | Fisher | |
| _____________________ | k | 4 | Bartlett | `bartlett.test()` |
| _____________________ | k | | Test de Levene | |

## Deux distributions

| h0 | Condition | Test | R |
|---|---|---|---|
| Même distribution | | Kolmogorov-Smirnov | |
| __________________ | 1,2,3 ou 4 | Test t | 
| __________________ | | Mann-Whitney |
| Egalités des positions (séries binaires) | | Q de Cochran |

## Corrélation

h0 : indépendance des deux variables

| Type | var | Condition | Test | R |
|---|---|---|---|---|
| Linéaire | 2 var quant | | Pearson | |
| Rang | 2 var quant | 3,4 | Spearman | |
| | 2 var quali | 1,5 | d’association du Khi2 | `chisq.test(table(x,y))` |
| | 2 var quali |  | exact de Fisher | |
| | 2 var quali |  | Méthode de Monte Carlo | |
| | 1 var quali et 1 var quanti | | ANOVA | |
