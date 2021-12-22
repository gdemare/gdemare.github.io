* **(1)** indépendance.
* **(2)** égalité des variances.
* **(3)** n>20.
* **(4)** normalité.
* **(5)** effectifs théoriques>5.

## Une distribution

| h0 | Test | R |
|---|---|---|
| normalité | Shapiro-Wilk | shapiro.test(x) |
| pas de valeurs extrêmes | Dixon | |
| pas de valeurs extrêmes | Grubbs | |

## Un échantillon et une valeur théorique

| h0 | Condition | Test | R |
|---|---|---|---|
| moyenne | 4 | T | |
| proportion | Khi2 | |
| variance | Khi2 | |

## Paramètre de plusieurs échantillons

| h0 | Taille | Condition | Test | R |
|---|---|---|---|---|
| égalité des moyennes | 2 | 1,2,3 | Test t | |
| égalité des moyennes | 2 | Mann-Whitney | |
| égalité des moyennes | n | 1,2,4 ou 3 | ANOVA | |
| égalité des moyennes | n Kruskal-Wallis | |
| égalité des proportions | k | 4 | Khi2 | |
| égalité des variances | 2 | Fisher | |
| égalité des variances | k | 4 Bartlett | bartlett.test() |
| égalité des variances | k | Test de Levene | |

## Deux distributions

| h0 | Condition | Test | R |
|---|---|---|---|
| même distributions | | Kolmogorov-Smirnov | |
| même distributions | 1,2,3 ou 4 | Test t | 
| même distributions | | Mann-Whitney |
| égalités des positions (séries binaires) | | Q de Cochran |

## Corrélation

h0 : indépendance des deux variables

| Type | var | Condition | Test | R |
|---|---|---|---|---|
| Linéaire | 2 var quant | | Pearson | |
| Rang | 2 var quant | 3,4 | Spearman | |
| | 2 var quali | 1,5 | d’association du Khi2 | chisq.test(table(x,y)) |
| | 2 var quali |  | exact de Fisher | |
| | 2 var quali |  | Méthode de Monte Carlo | |
| | 1 var quali et 1 var quanti | | ANOVA | |
