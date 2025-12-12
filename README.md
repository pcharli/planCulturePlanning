# test cultures dans planning
**Objectif :** tester le positionnement des cultures sur des planches dans un planning

** ATTENTION : ce n'est qu'un test, le planning n'intègre pas les années et autres détails **

## Approche
### Affichage du calendrier
- affichage de trois mois côte à côte
- on connaît la première date du premier mois et la dernière date du dernier mois
- une fonction calcule le nombre de jours entre ces deux dates
- JavaScript récupère la largeur en px du calendrier (largeur des 3 mois)
- on divise cette largeur par le nombre de jours calculés, ce qui donne la largeur en px d'un jour

### Ajout d'une culture sur une planche
- pour chaque culture, on a : start (date), end (date), label (string), planche (number)
- on calcul le nombre de jours entre start et end
- avec ce nombre de jours multiplié par la largeur d'un jour, on connaît la largeur en px pour cette culture
- pour positionner la culture, on calcul le nombre de jours entre start et la première date du planning
- ce nombre de jours sera mis en margin-left (positif ou négatif) multiplié par le nombre de px pour un jour

### Changement de mois
- un click sur la navigation change le mois central
- effacement de toutes les plantations
- repositonnement de toutes les splantations sur les planches en tenant compte de la nouvelle date de départ et du nombre de jours que contiennent les 3 mois affichés


### Si intégration avec une API
- il ne faut récupérer que les plantations :
    - dont la date de fin est suppérieure à la date de début du premier mois affiché
    ou
    - dont la date de début est inférieure à la date de fin du dernier mois affiché