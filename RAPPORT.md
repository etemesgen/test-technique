# Rapport de test technique

## Problématiques et solutions apportées

### 1. Accès à la page de recherche :

- Problème : L'utilisateur ne peut pas accéder à la page de recherche sans saisir un quartier.

- Attendu : Permettre l'accès à la page de recherche sans quartier.

- Solution : L'ajout d'un quartier en paramètre (filtre) devient optionnel pour accéder à la page de recherche.

- Fichiers modifiés : [routes.js](src/router/routes.js), [routes.test.js](test/vitest/__tests__/routes.test.js).
