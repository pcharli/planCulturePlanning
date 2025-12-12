# test cultures dans planning
**Objectif :** tester le positionnement des cultures sur des planches dans un planning

## Approche
### Affichage du calendrier
- affichage de trois mois côte à côte
- on connaît la première date du premier mois et la dernière date du dernier mois
- une fonction calcule le nombre de jourd entre ces deux dates
- JavaScript récupère la largeur en px du calendrier (largeur des 3 mois)
- on divise cette largeur par le nombre de jours calculé. on connaît la largeur d'un jour

### Ajout d'une culture sur une planche
- pour chaque culture, on a : start (date), end (date), label (string), planche (number)
- on calcul le nombre de jour entre start et end
- avec ce nombre de jour multiplié par la largeur d'un jour, on connaît la largeur en px pour cette culture
- pour positionner la culture, on calcul le nombre de jours entre start et start du planning
- ce nombre de jours sera mis en margin-left multimlié par le nombre de px pour un jour

### Changement de mois
- nettoyage de toutes les plantations
- repositonnement de toutes les splantations sur les planches en tenant compte de la nouvelle date de départ et du nombre de jours que contiennent les 3 mois affichés


### Si intégration avec une API
- il faut récupérer que les plantations qui :
    - dont la date de fin est suppérieure à la date start du premier mois affiché
    ou
    - dont la date de début est inférieure à la date end du dernier mois affiché