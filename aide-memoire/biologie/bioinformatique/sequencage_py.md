Importer les bibliothèques
```
from Bio import SeqIO
from Bio import pairwise2
```

## Alignement des séquences

* `SeqIO.parse('alignement.fasta', "fasta")` alignement du fichier fasta.
* `SeqIO.write(align(ali), output, "fasta")` ecrire l'alignement dans un fichier fasta.

### Visualiser les séquences

Libary `pymsaviz`

* `MsaViz( fichier, wrap_length=60, show_count=True)`
* `msa.savefig("api_example01.png")` sauvegarder l'image dans un fichier.
