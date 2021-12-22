## Opérateur 

`instruction1 | instruction2 ` rediriger la sortie de l'instrution 1 vers la 2

## Les boucles et les conditions

### Boucle For

```
For ($i=0 ; $i -le 10 ; $i++) {
	echo $i
}
```

```
foreach ($i in liste) {
	echo $i
}
```

## Condition 

``` 

If (condition1) { 

} elseif (condition2) { 

} else { 

}
```

## Les variables

### Les variables système

`$PSCommandPath` chemin du script en cours

### Déclarer une variable

`$variable=valeur` créer une variable.
`$variable` appeler une variable.

### Information sur les variables

* `variable.Lenght` taille de la chaine de caractères.
* `liste.Count` nombre d'éléments d'une liste.

## Les commentaires
`<#commentaire#>`
`#commantaire`

### Les chaines de caractères
`texte.LastIndexOf("\")` position du dernier.
`$test.Substring(position)` extrait les caractères la chaine situé après la position.

## Fichiers et dossier 

* `gci` liste des fichiers.
Paramètre : 
  - `-File` lister uniquement les fichiers.
  - `-Recurse` lister en plus les fichiers des sous dossiers. 
* `Get-Item fichier` 
* `select fichier` 
Paramètre :
   - ` -Property` récupérer les propriétés d'un fichier lorsqu'il y en a plusieurs il faut les séparer par un `,` (`fullName`, ` LastWriteTime`).
