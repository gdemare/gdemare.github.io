Importer les bibliothèques
```
from Bio import SeqIO
from Bio import pairwise2
```

## Alignement des séquences

* `SeqIO.parse('alignement.fasta', "fasta")` alignement du fichier fasta.
* `SeqIO.write(align(ali), output, "fasta")` ecrire l'alignement dans un fichier fasta.
Paramètre :
* `show_consensus=True` créer un consensus.

### Visualiser les séquences

Libary `pymsaviz`

* `mv = MsaViz( fichier, wrap_length=60, show_count=True)`
* `mv.savefig("api_example01.png")` sauvegarder et afficher l'image dans un fichier.

Ajouter des fichiers :
* `mv.add_markers([30, (40, 50), 55], color="green", marker="+")` ajouter des repères.
* `mv.add_text_annotation((23, 39), "Libellé", text_color="red", range_color="red")` ajouter un région.
