Importer les bibliothèques
```
from Bio import SeqIO
from Bio import pairwise2
```

### Alignement des séquences

* `SeqIO.parse('alignement.fasta', "fasta")` alignement du fichier fasta.
* `SeqIO.write(align(ali), output, "fasta")` ecrire l'alignement dans un fichier fasta.
