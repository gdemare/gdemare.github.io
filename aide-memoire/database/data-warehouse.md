# Système d'Information Décisionnel (SID)

```sequence
Machines
                        _________________           _________________           ______________________
                       | - Fichiers      |         | Operating Data  |         | Entrepôt de Données  |          
Utilisateurs <--OLTP-->| - Bases métiers |--ETL--->| Store (ODS)     |--ETL--->|  Décisionnel (EDD)   |<--OLAP-- Utilisateurs du 
                       |_________________|         |_________________|         |______________________|          Décisionnel

Données

                       - Hétérogènes              - Hétérogènes                 - Homogènes
                       - Redondantes              - Redondantes                 - Non redondantes
                       - Volatiles                - Historisées                 - Historisées
                       - Non agrégées             - Non agrégées                - Agrégées

```

Objectifs d'un DWH : Bénéficier d’une source d’information commune, homogène, normalisée et fiable​

Les quatres fonctions d'un SID :
* Collecter
* Intégrer
* Diffuser
* Présenter

## Outils libre pour documenter le schéma relationnel

[Schema Spy](http://schemaspy.org/)


## Bases métiers 

Les bases métiers sont optimisées pour de l'écriture et la modification des enregistrements (OLTP). 

## Entrêpot de données décisionnel

La base de données est opitmisée pour l'analyse (OLAP).

### Datamart

Entrepôt de données décisionnel spécialisé dans un domaine.

## Extract Transform Load (ETL)

ELT : Les données chargees puis transormees pour utiliser la puissance de traitement de l'EDD.

## Data lake

Stocke des données non structurées contrairement aux bases classiques.

## Les types de données


Système opérationnel
base de données de production

Entrepôt de données

| Datamarts et Entrepôt | Données Décisionnel |
|---|---|
| Spécifique à un métier, usages. | Transversale |

## OnLine Transactional Processiong (OLTP)

### Forme normale (bases de données relationnelles)

Objectif : Normaliser les données pour éviter les anomalies de lecture, la redondance, et la contre performance. Robustesse Cohérence

ecrite peu lu > normaliser le + possible
peu ecrite, lu > améliorer l'accés aux données

limiter les redondances
diminuer la volumétrie
interdire les incohérence

Est-il plus intéressant de créer une table de dimension pour une donnée avec un seul niveau de hiéarchie ?

### Système de Gestion de Base de Données Relationnelle (SGBDR)

## OnLine Analytical Processing (OLAP)

Principaux sont MOLAP et ROLAP.

### Multidimensional OLAP Modèle multidimensionnel

Une table de fait avec les indicateurs entourée de cubes (dimensions) d'un seul niveau.

### Relational OLAP

### Hybrid OLAP

Méthode de gestion de projet

Méthode Merice

Modèle Conceptuel de Données

* Entité : objet à modéliser
* Entité est caractérisée par des porpriétés.
  * Si une des propriété est unique et discriminante elle est nommé identifiant
  * Un individu d'une entité s'appelle une occurence
  * L'association est le lien entre les entités.

Données structurées :
* Texte
* Nombre
* Date/heure

Données non structurées :
* Image
* Son 
* Vidéo

## 

Data lake dépôt de données brutes accessible en lecture seule.

framework 
Hadoop Distributed File System (HDFS) un système de fichiers distribué

Calcul paralléle distribué

Map Reduce 

## Réglémentation Générale pour la Protection des Données (RGPD)   

## Méthodologie d'un projet d'intégration des données

### 
 * 1/ table de dimensions
 * 2/ table de fait
