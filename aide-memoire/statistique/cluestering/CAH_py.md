```
from sklearn.cluster import AgglomerativeClustering

y_pred = AgglomerativeClustering(n_clusters = 3).fit_predict(data.acp_pep_unique.iloc[:,:-1])
```
