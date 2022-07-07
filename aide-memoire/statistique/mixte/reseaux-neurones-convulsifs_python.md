Library `tensorflow`

## Importation d'un dossier d'images

`from tensorflow.keras.preprocessing import image_dataset_from_directory`

ds_train_ = image_dataset_from_directory(
    'pizza/training',
    labels='inferred',
    label_mode='binary',
    image_size=[128, 128],
    interpolation='nearest',
    batch_size=64,
    shuffle=True,
)


## Créer un modèle

1. Créer le modèle avec les couches.
2. Compiler le modèle et définir les indicateurs à minimiser.
3. Entrainer le modèle.

### Couche

```
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    pretrained_base,
    layers.Flatten(),
    layers.Dense(6, activation='relu'),
    layers.Dense(1, activation='sigmoid'),
])
```

`layers.Dense( units, fonction d'activation)` définir une couche.
Fonctions d'activation :
* `relu`
* `sigmoid`
* `softmax`

`model.summary()` récapitulatif des couches du modèle.

### Compiler

```
model.compile(
    optimizer=tf.keras.optimizers.Adam(epsilon=0.01),
    loss='binary_crossentropy',
    metrics=['binary_accuracy']
)
```

### Entrainer le modèle

```
history = model.fit(
    ds_train,
    validation_data=ds_valid,
    epochs=2,
    verbose=0,
)
```
* `epochs=nbre` nbre de fois que l'on effectue l'optimisation sur les données d'entrainement pour ajuster les poids.

### Evaluer le modèle 

`model.evaluate(donnée)` évaluer le modèle.

`history.params` renvoie les paramètres.
`history.history` renvoie l'évolution des indicateurs.

## Sauvegarder et importer un modèle

* `model.save(chemin)` exporter un modèle.
* `keras.models.load_model('path/to/location')` importer un modèle.

## Initialiser les poids

`pretrained_base.trainable = False` garder les poids initialisés. Généralement, le choix des poids de départ ont déjà été optimisés.


## Définir les noyaux

( étape non obligatoire) Les noyaux sont sont les extracteurs de caractéristiques.

### Créer un noyau

```
import learntools.computer_vision.visiontools as visiontools
from learntools.computer_vision.visiontools import edge, bottom_sobel, emboss, sharpen
```

| fonction | détection |
|---|---|
| `edge` | bord |
| `bottom_sobel` | |
| `emboss` | | 
| `sharpen` | |

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

tf.image :
`resize(image, size=[height, width ])` redimensionner l'image.

`tf.squeeze(image).numpy()` 

Reformater l'image pour la rendre compatible avec tensorFlow
```
image = tf.image.convert_image_dtype(image, dtype=tf.float32)
image = tf.expand_dims(image, axis=0)
```

`tf.squeeze(image_filter)` reformater une image pour la rendre affichable.

#### Afficher l'image avec plotly

```
plt.figure(figsize=(6, 6))
plt.imshow(img, cmap='gray')
plt.axis('off')
plt.show();
```

```
conv_fn = tf.nn.conv2d
conv_fn(
    input=image,
    filters=kernel,
    strides=1, # or (1, 1)
    padding='SAME',
)
relu_fn = tf.nn.relu
image_detect = relu_fn(image_filter)
```