Packages : FactoMineR, factoextra, arules.

```
res.acp = PCA(pop, graph = F)


res.acp\$eig # valeur propres
fviz_eig(res.acp)# histogramme des valeurs propres

res.acp\$var # variables
res.acp\$ind # individus 

# + foncton résumé

fviz_pca_var(res.acp, repel = T, axes = c(1,2), select.var = list(cos2 = 0.4)) # cercle des corrélations
fviz_pca_ind(res.acp, repel = T, axes = c(1,2), select.ind = list(cos2 = 0.6), pointsize = "cos2") # graphique individus
```

