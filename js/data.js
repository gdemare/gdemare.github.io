// dossier ; sous dossier; chemin; general; r; sas; python
fichiers = [
{ chemin: 'database/json', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/sql', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/data-warehouse', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/talend', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/business-object', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/java', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/python', general: 0, r: 0, sas:0, py:1},
{ chemin: 'programmation/r', general: 0, r: 1, sas:0, py:0},
{ chemin: 'programmation/unix/bash', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/unix/folders-linux', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/unix/vim', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/unix/shell', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/web/html', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/web/java-script', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/web/css', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programmation/web/php', general: 1, r: 0, sas:0, py:0},
{ chemin: 'biologie/fidji', general: 1, r: 0, sas:0, py:0},
{ chemin: 'biologie/bioinformatique/sequencage', general: 0, r: 0, sas:0, py:1},
{ chemin: 'biologie/bioinformatique/traitement-image', general: 1, r: 0, sas:0, py:1},
{ chemin: 'biologie/bioinformatique/MS-proteomique', general: 0, r: 0, sas:0, py:1},
{ chemin: 'biologie/bioinformatique/spectrométrie', general: 0, r: 0, sas:0, py:1},
{ chemin: 'statistique/dictionnaire-statistique', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/RN-pytorch', general: 0, r: 0, sas:0, py:1},
{ chemin: 'statistique/a-voir', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/statistique', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/carte', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/automatiser', general: 0, r: 0, sas:1, py:0},
{ chemin: 'statistique/web-scraping', general: 0, r: 0, sas:0, py:1},
{ chemin: 'statistique/tests', general: 1, r: 1, sas:1, py:1},
{ chemin: 'statistique/corrélation', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/operation-data', general: 1, r: 0, sas:0, py:1},
{ chemin: 'statistique/réseau-neurones', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/couche-convulsive', general: 1, r: 0, sas:0, py:1},
{ chemin: 'statistique/RN-tensor-flow', general: 0, r: 0, sas:0, py:1},
{ chemin: 'statistique/programme-indépendant', general: 0, r: 1, sas:0, py:0},
{ chemin: 'statistique/logiciels-statistiques', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/tableau-de-bord', general: 0, r: 1, sas:0, py:1},
{ chemin: 'statistique/graphiques', general: 1, r: 1, sas:1, py:1},
{ chemin: 'statistique/text-mining', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/formater-données', general: 0, r: 1, sas:1, py:1},
{ chemin: 'statistique/deploy-Rshinny-shinyapps', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/lois-statistiques', general: 0, r: 0, sas:0, py:1},
{ chemin: 'statistique/manipuler-données', general: 0, r: 1, sas:1, py:1},
{ chemin: 'statistique/cluestering-sans-cible', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/réduction-dimensions/analyse-discriminante', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/réduction-dimensions/AFC', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/réduction-dimensions/ACM', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/réduction-dimensions/ACP', general: 1, r: 1, sas:1, py:1},
{ chemin: 'statistique/réduction-dimensions/reduction-dimension-info', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/données/imputer-valeurs-manquantes', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/série-temporelle', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/boosting', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/ARMA', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/série-temporelle-simple', general: 0, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/classificateur-baysien', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/classification-info', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/perceptron', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/SVM', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/forêt-aléatoire', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/régression-lineaire', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/espérance-maximisation', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/prédire-evaluer', general: 0, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/clustering-variables', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/ANOVA', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/classification/régression-logistique', general: 1, r: 1, sas:1, py:1},
{ chemin: 'statistique/classification/centroïde', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/arbre-de-décision', general: 1, r: 1, sas:1, py:1},
{ chemin: 'statistique/classification/carte-auto-adaptative', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/lissage-exponentiel', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/cluestering/cluestering-info', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/cluestering/centres-mobiles', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/cluestering/CDH', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/cluestering/clustering-variables', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/cluestering/CAH', general: 1, r: 1, sas:1, py:1},
{ chemin: 'software/word', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/batch', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/outlook', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/premiere-pro', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/ubuntu', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/powershell', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/autres-programmes', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/windows', general: 1, r: 0, sas:0, py:0},
{ chemin: 'software/excel', general: 1, r: 0, sas:0, py:0}
];