Packages : 
```
from sklearn.decomposition import PCA
from matplotlib import pyplot as pl
import numpy as np
import pandas as pd
```

```
normalizeData = StandardScaler().fit_transform(data) #normaliser les données

pca = PCA(n_components=3)
projection = pca.fit_transform(tst)
```

## Description de la ACP

* `pca.explained_variance_ratio_` pourcentage de la variance représentée.
