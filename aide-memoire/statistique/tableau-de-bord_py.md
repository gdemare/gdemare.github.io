# Streamlit

Package `streamlit`

## Exécuter streamlite

* `streamlit hello` première excution de steamlit.
* `streamlit run fichier` exécuter un projet streamlit.

`import streamlit as st`

## Titre et texte


`st.divider()` ajouter run barre horizontale.
`st.subheader('Raw data')` ajouter un sous titre.
`st.header('Raw data')` ajouter un sous titre.
`st.title('ACP')` titre 

## Elements de strucutres (boites, menu dépliants)

#### importer un fichier 

`file = st.file_uploader("Please choose a file")`
`data = pd.read_excel(file)`

#### Panneau dépliant

Ajouter un panneau qui se déplit :
```
with st.expander("See explanation"):
    st.write(\"\"\"
        The chart above shows some numbers I picked for you.
        I rolled actual dice for these, so they're *guaranteed* to
        be random.
    \"\"\")
    st.image("https://static.streamlit.io/examples/dice.jpg")
```

#### Module pour créer un bouton pour afficher les données 

```
if st.checkbox('Show raw data'):
    st.subheader('Raw data')
    st.write(data)
```

### Input 

`st.multiselect(text, valeur possible, valeur par défaut)`

### Graphique plotly

```
acp_fig = px.scatter(acp, x = acp.columns.values[0], y = acp.columns.values[1], color = acp.index.values.astype(str), title="PCA Graphics")
```
Il faut charge le graphique dans une variable.

`st.plotly_chart( acp_fig )` Afficher un graphique. Paramètres :
    * `theme=None` 
    * `use_container_width=True` 

### Boutons download

`st.download_button(label = 'Download data', data = prc_common_mat.to_csv(), file_name = 'common-percentage.csv')` bouton de téléchargement de ficher.

# Plotly : les graphiques interactifs

`import plotly.express as px`


* `px.scatter(df, x=, y="sepal_length", color="species")`
* `px.bar(data_canada, x='year', y='pop')` diagramme en barre la fonction counte le nombre de lignes.
* `px.imshow(table)` heatmap. Paramètres :
    * `zmin=0, zmax=100` changer le min et le max de la légende.
    * `color_continuous_scale='Greens'` changer la palette de couleur 

Paramètres généraux :

* `title = 'titre'`
* `color = variable_groupe`

### Modifier les axes 

`common_heatmap.update_xaxes( tickangle = 50)` changer l'orientation des étiquettes.

