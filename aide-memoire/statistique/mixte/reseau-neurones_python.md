Library `tensorflow`

## Créer un modèle

1. Créer le modèle avec les couches.
2. Compiler le modèle et définir les indicateurs à minimiser.
3. Entrainer le modèle.

### Couche

```
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([ layer1, layer2])
```

Les couches 
* `layers.Flatten()`
    * `input_shape=(28,28)` ou `[1]`  taille des données en entrés. 
* `layers.MaxPool2D`
* `layers.Dense( units, activation= fonction)` couche la plus simple.  une couche. units correspond aux nombres de sorties.
	Fonctions d'activation :
	* `relu`
	* `sigmoid` utile notamment pour renvoyer une probabilité pour les classificateurs binaires.
    * `softmax` renvoie la valeur la plus élevée (notamment pour les classificateurs avec plus de deux classes).
* `layers.Conv2D(filters=64, kernel_size=3, activation="relu", padding='same')`
* `layers.Dropout`

_Rmq :_ il est possible d'appler les fonctions d'activation par `tf.nn.fonction`.

`model.summary()` récapitulatif des couches du modèle.

### Compiler

```
model.compile(
    optimizer=,
    loss='binary_crossentropy',
    metrics=['binary_accuracy']
)
```
Optimizer, le type de correction appliqué au modèle :
* `tf.keras.optimizers.Adam()`
    * `epsilon=0.01` valeur de la correction des poids.
* `'adam'`
* `'sgd'` 
* `'rmsprop'`

Loss, l'indicateur a prendre en compte améliorer le modèle : 
* `sparse_categorical_crossentropy` plusieurs classes.
* `binary_crossentropy` deux classes.
* `mean_squared_error` minimise l'erreur au carré.

Metrics :
* `accuracy` AUC pour cela il faut un jeu de données de validation (fit avec `validation_data`).
* `binary_accuracy`


## Apprendre, évaluer et prédire

### Entrainer le modèle

`model.fit( ds_train, epochs=2 )`
* `epochs=nbre` nbre de fois que l'on effectue l'optimisation sur les données d'entrainement pour ajuster les poids.
* `verbose=0/1` afficher les informations.
* `validation_data=donnée` 

### Evaluer le modèle 

`model.evaluate(données, valeurs)` évaluer le modèle.

`history.params` renvoie les paramètres.
`history.history` renvoie l'évolution des indicateurs.


### Prédiction ou prévision

`model.predict([])`

## Sauvegarder et importer un modèle

* `model.save(dossier_model)` exporter un modèle.
* `keras.models.load_model('path/to/location/dossier_model')` importer un modèle.


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

`import matplotlib.pyplot as plt`

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

# Les données en entré

## Sans BatchDataSet  

`np.array(, type=float)`

## BatchDataset

batch = lot

Pour accéder aux données d'un batchdataset il faut `.unbatch`

`donnee.class_names` donne le nom des classes.
### Image batch

BatchData

`donnee.take(nb)` créer un échantillon de nbx32 images.

Générer un jeu de données d'apprentissage à partir d'un dosssier. Les images créées par des transforamtions sont ajoutés aux jeux de données (training, validation) tels que :
* Rotations
* Cisaillement
* Changements d'échelle
* Rotation de l'image
* Zoom

``` 
from keras.preprocessing.image import ImageDataGenerator
# apprentissage
training_datagen = ImageDataGenerator(rescale=1./255) # normalisation
train_generator = training_datagen.flow_from_directory(
    dossier,
    target_size = (150,150),
    class_mode = 'categorical' ou binary)
# validation


```

## Importation d'un dossier d'images

Les classes sont celles du nom des dossiers.

`from tensorflow.keras.preprocessing import image_dataset_from_directory`

```
donnee = image_dataset_from_directory(
    dossier,
)
``` 

* `labels='inferred'`
* `label_mode='binary'`
* `image_size=[128, 128]` prétraitement qui re.
* `interpolation='nearest'`
* `batch_size=64`
* `shuffle=True`
* `color_mode="rgb" ou "grayscale" ou "rgba"` reformater en entrée.
ds_train.

```
import matplotlib.pyplot as plt

for images, labels in donnee.take(1):
    for i in range(10):
        plt.imshow(images[i].numpy().astype("uint8"))
        plt.axis('off')
```

## AUCUNE IDEE

```
AUTOTUNE = tf.data.AUTOTUNE
donnee = donnee.prefetch(buffer_size=AUTOTUNE)
```