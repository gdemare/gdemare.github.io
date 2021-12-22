# Shiny
```
library(shiny)
library(shinydashboard)

ui = dashboardPage(...)

server = function(input, output) {
    contenu
  }
shinyApp(ui = ui, server = server) #executer l'application
```

# Interface utilisateur

```
dashboardPage(
  contenu
)
```

* `title = titre` titrer l'application
* `skin = couleur` theme utilisé.

### Entête

`dashboardHeader(title = "titre", titleWidth = largeur)`

### Menu

`dashboardSidebar(width = largeur, title = titre)`
Ajouter un onglet :

```
sidebarMenu(
        menuItem(text = "onglet", tabName = "onglet")
      )
```

## Corps de la page

```
dashboardBody(
    fluidRow(contenu)
)
```

`tabItems(contenu)` page

```
tabItems(
  tabItem(tabName = onglet, contenuOnglet)
)
```
créer un onglet.
Parametres :
* `badgeLabel = nom, badgeColor = couleur` Ajouter un badge
* `disable = TRUE` desactiver la barre.

### Contenu des onglets
#### Panneau de saisie

mainPanel() principale
sidebarPanel() saisie

| Code | Type |
|---|---|
|`box()` | classique |
|`infoBox()` | texte statique |
|`tabBox()`| valeur |
|`valueBox()`| valeur dynamique |

```
tabBox(
  title = titre,
  tabPanel(title = "titre", tableOutput("nomTable"))
) 
``` 
boite avec un tableau.

Arguments :
* `title = titre`
* `footer = pied de la page`
* `width = largeur`
* `color = couleur`

Pour rendre une valeur dynamique avec valueBox

```
output$nom <- renderValueBox({  
    valueBox(a completer)
})
```
## zone de saisie

type(inputId = id, ....) 
input$id

| R | bibliotheque | Type |
|---|---|---|
| `actionButton()` | | bouton | 
| `checkboxInput()` | | |
| `checkboxGoupInput()` | | |
| `dateInput()` | | |
| `dateRangeInput()` | | |
| `fileInput(nomFicher, text, multiple = FALSE)` | | importer un fichier |
| `numericInput()` | | | 
| `paswordInput()` | | | 
| `colourInput()` | `colourpicker` | |
| `radioButtons()` | | |
| `selectInput()` | | liste a choix multiple |
| `sliderInput()` | | barre de défilement |
| `textInput()` | | |
| `textAreaInput()` | | zone de saisie de texte.

Option :
    * `label = 'titre'` texte a afficher.

# Server

```
server = function(input, output) {
  output$nom = resultat
}
```

Les sorties doivent être stockées dans la variable

| code server | rendu | code ui |
|---|---|---|
|`renderText({texte})`| texte | `textOutput('variable')` |
| `renderPlot({graphique})`| graphique | `plotOutput('variable')` |
| `renderTable({tableau})`| tableau | `tableOutput('variable')` |
| `renderDataTable({dataFrame})` | donnees (package `DT`) | `dataTableOutput('variable')` |
| `renderPlotly({graphique})` | donnees | `plotlyOutput('variable')` |

`renderPrint(variable)`

```
renderDataTable({ }, options = list(scrollX = TRUE))
```
si l'affichage depasse de l'écran.

## variable réactive

`variable = reactive(valeur de la variable)` actualiser la rapport en fonction de la variable.
`variable()` utiliser une variable reactive.
`eventReactive(input$action, {variable})` réactive variable à la suite d'un evenement.

## liste interactive utilisant une variable reactivie

```
ui :
  uiOutput$interaction
```

server :
```
  filterGenre = reactive(genre)
  output$interaction_slider = renderUI({
    selectInput("select", label = "Select box", 
                choices = as.list(genre)$genre_label, selected = 1)
```

# Selection sur un tableau
library(DT)
```
output$tableau <- DT::renderDataTable({ 
 instruction
})
input$tableau_rows_selected # indice des lignes selectionnées
```

`selection = valeur`
    * `single` une seule ligne.

# Récupérer des données depuis une page Html vers R

`session$clientData$url_protocol`

# Inserer des sorties R dans une page HTML

`ui = htmlTemplate(filename = "page.html", sortie1, entree1)`

NB : ajouter `server <- function(input, output, session) {`

`{{ sortie }}` dans le fichier HTML.

# Flexdashboard (Rmarkdown)

`library(flexdashboard)`

[Flexdashboard](https://rmarkdown.rstudio.com/flexdashboard/)

```
output: 
    theme: theme
```

| Theme | Couleur | Commentaire |
|---|---|---|
| default | bleu |
| bootstrap | gris blanc |
| cerulean | bleu relief |
| journal | saumon | New time roman |
| flatly | vert turquoise | 
| readable | blanc |
| spacelab | bleu blanc relief |
| united | bordeau |
| lumen | blanc |
| paper | bleu | ++
| sandstone | vert moche | |
| simplex | rouge | |
| yeti | bleu | |

`runtime: shiny` intégrer du code shiny (nécessite un server shiny).

### Ajouter une box et des onglets

```
Column {data-width=600}` préciser la largeur de la colonne.
-------------------------------------
``` 
séparateur de colonnes/lignes. Lorsque l'on spécifie une largeur il faut 

```
Page 4 {data-navmenu="Menu B"}
=====================================
```
 Ajouter des pages de naviguations.

* `.tabset .tabset-fade` ajouter des onglets à une box.

### Afficher tableau et valeur box

`knitr::kable(data)` Afficher une table
`valueBox(comments, icon = "fa-comments")` ajouter une valeur box.
