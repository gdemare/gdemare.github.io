## Installer ubuntu en dual boot en partageant des fichiers avec Windows

1. Désactiver la sécurité dans le Bios.
2. Installer Windows.
3. Avec le logiciel gestionnaire de disques, créer une partition :
  * pour les fichiers partagés, formater en nts.
  * pour Ubuntu (au moins 50 Go), sans formatage.
4. Lancer l'installation d'Ubuntu avec Dual Boot.
5. Modifier l'ordre des programmes de boot en mettant, la partition efi en premier.

## Logiciels

Disponibles dans la logitèque Ubuntu :

* Brave, navigateur internet sans pub.
* Dessin de Romain F T, logiciel de dessins très simple.
* Mailspring, client email.
* Visual code
* Vlc, lecteur multi média.

Disponible sur le site internet de l'entreprise :

* Crytpomator
* Dropbox

## Ajouter un dépôt

1. Ouvrir `Logiciels et mises à jour`
2. Autres logiciels et Ajouter, le lien vers le dépôt.

Il est possible de le faire directement en ajouter une ligne au fichier : 
`/etc/apt/sources.list`

* [dropbox](https://www.dropbox.com/install-linux)

## Ajouter le programme pour personnaliser gnome

### gnome-shell-extension-manager

Extensions a ajouter :

* Clipboard Indicator, pour avoir l'historique des copiés.

## Flathub

[Flathub](https://flathub.org/) logithèque avec les applications en appimage. 

* Cryptomator, logiciel de cryptage spécialisé pour le cloud.
* Github, pour gérer les fichiers github.
* Raisonnance, Music, (gnome music) lecteur musique.

`flatpak install flathub org.gnome.Music` exemple d'installation par le terminal.

## Logiciel par défaut

* `gnome-text-editor` éditeur de texte.


`sudo dpkg -i package` installer un package deb.
