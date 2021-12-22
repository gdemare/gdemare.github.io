## Tests non paramètriques

```
PROC NPAR1WAY <option>;
VAR var_quanti;
CLASS var_quali;
RUN;
```

### Paramétre

* `BY`
* `WHERE condition` filtrer le jeu de données avant les tests.
* `D` afficher les graphiques (nécéssite ODS GRAPHICS).
* `KS` Kolmogorov-Smirnov.

### Options :

* `PLOTS` afficher les graphiques associés aux tests.
