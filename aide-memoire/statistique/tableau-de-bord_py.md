Package `streamlit`

# Exécuter streamlite

* `streamlit hello` première excution de steamlit.
* `streamlit run fichier` exécuter un projet streamlit.

`import streamlit as st`

### importer un fichier 

`file = st.file_uploader("Please choose a file")`
`data = pd.read_excel(file)`

#### Module pour créer un bouton pour afficher les données 

```
if st.checkbox('Show raw data'):
    st.subheader('Raw data')
    st.write(data)
```

`st.title('ACP')` titre 

## Plotly 

`import plotly.express as px`
`px.scatter(df, x=, y="sepal_length", color="species")`

acp_fig = px.scatter(acp, x = acp.columns.values[0], y = acp.columns.values[1], color = acp.index.values.astype(str), title="PCA Graphics")
st.plotly_chart( acp_fig )
* `theme=None` 
* `use_container_width=True` 

pd.api.types.is_numeric_dtype
is_string_dtype

px.bar(data_canada, x='year', y='pop') diagramme en barre la fonction counte le nombre de lignes.

columns.get_level_values(level) récupérer les valeurs de l'index.

Ajouter un panneau qui se déplit :
with st.expander("See explanation"):
    st.write(\"\"\"
        The chart above shows some numbers I picked for you.
        I rolled actual dice for these, so they're *guaranteed* to
        be random.
    \"\"\")
    st.image("https://static.streamlit.io/examples/dice.jpg")


st.divider() ajotue run barre horizontale.

px.imshow([[1, 20, 30],
                 [20, 1, 60],
                 [30, 60, 1]]) heatmap.


`st.multiselect(text, valeur possible, valeur par défaut)`