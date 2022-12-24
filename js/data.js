// dossier ; sous dossier; chemin; general; r; sas; python
fichiers = [
{ chemin: 'biologie/fidji', general: 1, r: 0, sas:0, py:0},
{ chemin: 'biologie/bioinformatique/sequencage', general: 0, r: 0, sas:0, py:1},
{ chemin: 'biologie/bioinformatique/spectrométrie', general: 0, r: 0, sas:0, py:1},
{ chemin: 'biologie/bioinformatique/traitement-image', general: 1, r: 0, sas:0, py:1},
{ chemin: 'database/business-object', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/data-warehouse', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/json', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/sql', general: 1, r: 0, sas:0, py:0},
{ chemin: 'database/talend', general: 1, r: 0, sas:0, py:0},
{ chemin: 'informatique/dns', general: 1, r: 0, sas:0, py:0},
{ chemin: 'microsoft/batch', general: 1, r: 0, sas:0, py:0},
{ chemin: 'microsoft/excel', general: 1, r: 0, sas:0, py:0},
{ chemin: 'microsoft/outlook', general: 1, r: 0, sas:0, py:0},
{ chemin: 'microsoft/powershell', general: 1, r: 0, sas:0, py:0},
{ chemin: 'microsoft/windows', general: 1, r: 0, sas:0, py:0},
{ chemin: 'microsoft/word', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/java', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/python', general: 0, r: 0, sas:0, py:1},
{ chemin: 'programming/unix/bash', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/unix/folders-linux', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/unix/shell', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/unix/vim', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/web/css', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/web/html', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/web/java-script', general: 1, r: 0, sas:0, py:0},
{ chemin: 'programming/web/php', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/a-voir', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/automatiser', general: 0, r: 1, sas:1, py:0},
{ chemin: 'statistique/carte', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/cluestering-sans-cible', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/corrélation', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/deploy-Rshinny-shinyapps', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/dictionnaire-statistique', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/formater-données', general: 0, r: 1, sas:1, py:1},
{ chemin: 'statistique/graphiques', general: 1, r: 1, sas:1, py:1},
{ chemin: 'statistique/logiciels-statistiques', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/manipuler-données', general: 0, r: 1, sas:1, py:1},
{ chemin: 'statistique/programme-indépendant', general: 0, r: 1, sas:0, py:0},
{ chemin: 'statistique/statistique', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/tableau-de-bord', general: 0, r: 1, sas:0, py:0},
{ chemin: 'statistique/tests', general: 0, r: 1, sas:1, py:0},
{ chemin: 'statistique/text-mining', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/web-scraping', general: 0, r: 0, sas:0, py:1},
{ chemin: 'statistique/classification/ANOVA', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/classification/arbre-de-décision', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/classification/ARMA', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/boosting', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/carte-auto-adaptative', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/centroïde', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/classificateur-baysien', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/classification-info', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/clustering-variables', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/espérance-maximisation', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/forêt-aléatoire', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/lissage-exponentiel', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/perceptron', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/classification/prédire-evaluer', general: 0, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/régression-lineaire', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/classification/régression-logistique', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/classification/SVM', general: 1, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/série-temporelle-simple', general: 0, r: 1, sas:0, py:0},
{ chemin: 'statistique/classification/série-temporelle', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/cluestering/CAH', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/cluestering/CDH', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/cluestering/centres-mobiles', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/cluestering/cluestering-info', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/cluestering/clustering-variables', general: 1, r: 0, sas:1, py:0},
{ chemin: 'statistique/données/imputer-valeurs-manquantes', general: 1, r: 0, sas:0, py:0},
{ chemin: 'statistique/mixte/couche-convulsive', general: 1, r: 0, sas:0, py:1},
{ chemin: 'statistique/mixte/réseau-neurones', general: 1, r: 1, sas:0, py:1},
{ chemin: 'statistique/réduction-dimensions/ACM', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/réduction-dimensions/ACP', general: 0, r: 1, sas:1, py:0},
{ chemin: 'statistique/réduction-dimensions/AFC', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/réduction-dimensions/analyse-discriminante', general: 1, r: 1, sas:1, py:0},
{ chemin: 'statistique/réduction-dimensions/reduction-dimension-info', general: 1, r: 0, sas:0, py:0}
];