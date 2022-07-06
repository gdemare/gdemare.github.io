Library `tensorflow`

## Couche

```
from tensorflow import keras
from tensorflow.keras import layers
```

```
model = keras.Sequential([
    pretrained_base,
    layers.Flatten(),
    layers.Dense(6, activation='relu'),
    layers.Dense(1, activation='sigmoid'),
])
```

`layers.Dense( units, fonction d'activation)` définir une couche.
Fonctions d'activiation :
* `relu`
* `sigmoid`

## Initialiser les poids

`pretrained_base.trainable = False` garder les poids initialisés. Généralement, le choix des poids de départ ont déjà été optimisés.

## Entrainer le modèle

```
optimizer = tf.keras.optimizers.Adam(epsilon=0.01)
model.compile(
    optimizer=optimizer,
    loss='binary_crossentropy',
    metrics=['binary_accuracy'],
)
```

## Définir les noyaux

( étape non obligatoire) Les noyaux sont sont les extracteurs de caractéristiques.


## Définir les noyaux

( étape non obligatoire) Les noyaux sont sont les extracteurs de caractéristiques.

### Les noyaux

```
import learntools.computer_vision.visiontools as visiontools
from learntools.computer_vision.visiontools import edge, bottom_sobel, emboss, sharpen
```

| fonction | détection |
|---|---|
| `edge` | bord
| bottom_sobel |
| emboss |
| sharpen |

`tf.constant(matrice)` définir un noyau (généralement matrice carrée impaire).

```
# Reformater pour rendre le noyau applicable.
kernel = tf.reshape(kernel, [*kernel.shape, 1, 1])
kernel = tf.cast(kernel, dtype=tf.float32)
```


### Lire les images 

tf.io :
* `read_file(image)`
* `decode_jpeg(image, channels=1)`
* 

tf.image :
`resize(image, size=[height, width ])` redimensionner l'image.

`tf.squeeze(image).numpy()`

Reformater l'image pour la rendre compatible avec tensorFlow
```
image = tf.image.convert_image_dtype(image, dtype=tf.float32)
image = tf.expand_dims(image, axis=0)
```

#### Afficher l'image avec plotly

```
plt.figure(figsize=(6, 6))
plt.imshow(img, cmap='gray')
plt.axis('off')
plt.show();
```