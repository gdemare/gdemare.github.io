
## Transformer les donnees
package `panda`

* `pivot_table(data, columns='country', values='quantity', index='fruit', aggfunc='sum')` faire un tableau croise.
Argument `aggfunc` : 
  * `sum` somme de l'indicateur values.
* `tableau.columns` recuperer le nom des variables.
* `melt(data, id_vars='fruit', value_vars=colonnes)` transforme plusieurs variables en une seule.
* `tableau_croise.reset_index()` Transformer un tableau croise en tableau.
