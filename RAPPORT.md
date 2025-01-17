# Rapport de test technique

## Problématiques et solutions apportées

### 1. Accès à la page de recherche :

- Problème : L'utilisateur ne peut pas accéder à la page de recherche sans saisir un quartier.

- Attendu : Permettre l'accès à la page de recherche sans quartier.

- Solution : L'ajout d'un quartier en paramètre (filtre) devient optionnel pour accéder à la page de recherche.

- Fichiers modifiés : [routes.js](src/router/routes.js), [routes.test.js](test/vitest/__tests__/routes.test.js).

### 2. Affichage des biens dans la recherche :

- Problème : Aucun bien n'est visible si aucun quartier n'est sélectionné.

- Attendu : Lorsque aucun quartier n'est sélectionné, afficher l'ensemble des biens.

- Solution : Le filtre de recherche est réinitialisé pour afficher tous les biens par défaut lorsque aucun quartier n'est sélectionné.

- Fichiers modifiés : [SearchPage.vue](src/pages/SearchPage.vue), [SearchPage.test.js](test/vitest/__tests__/SearchPage.test.js).
