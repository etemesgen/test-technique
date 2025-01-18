# Rapport de test technique

## Problématiques et solutions apportées

### 1. Accès à la page de recherche :

- Problème : L'utilisateur ne peut pas accéder à la page de recherche sans saisir un quartier.

- Attendu : Permettre l'accès à la page de recherche sans quartier.

- Solution : L'ajout d'un quartier en paramètre (filtre) devient optionnel pour accéder à la page de recherche.

- Fichiers modifiés : [routes.js](src/router/routes.js), [routes.test.js](test/vitest/__tests__/routes.test.js).

- Branches et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/fix/searchPageAccess), [Commit](https://github.com/etemesgen/test-technique/commit/7c401fa9989cef145ee086357fc853152c3315fa)

### 2. Affichage des biens dans la recherche :

- Problème : Aucun bien n'est visible si aucun quartier n'est sélectionné.

- Attendu : Lorsque aucun quartier n'est sélectionné, afficher l'ensemble des biens.

- Solution : Le filtre de recherche est réinitialisé pour afficher tous les biens par défaut lorsque aucun quartier n'est sélectionné.

- Fichiers modifiés : [SearchPage.vue](src/pages/SearchPage.vue), [SearchPage.test.js](test/vitest/__tests__/SearchPage.test.js).

- Branches et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/fix/showAccomodationSearchPage), [Commit](https://github.com/etemesgen/test-technique/commit/a5fa13e3f19c1e48183e38ddeaaf93a6ebe70b7f)

### 3. Connexion avec mot de passe :

- Problème : Impossible de se connecter avec un mot de passe correct.

- Attendu : Corriger la logique d'authentification pour valider les identifiants corrects.

- Solution : La logique de comparaison de mots de passe est corrigée pour authentifier l'utilisateur correctement.

- Fichiers modifiés : [authenticate-store.js](src/stores/authenticate-store.js), [authenticate-store.test.js](test/vitest/__tests__/authenticate-store.test.js).

- Branches et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/fix/signIn), [Commit](https://github.com/etemesgen/test-technique/commit/6a72c6b5435bc29ea174d2a4eeb7115d4c947b2c)

### 4. Connexion persistante :

- Problème : Après connexion, l'utilisateur est déconnecté en actualisant la page.

- Attendu : Assurer une persistance de la connexion après actualisation.

- Solution : La persistence de la connexion est ajoutée en utilisant le localStorage pour garder l'utilisateur connecté apres l'actualisation de la page.

- Fichiers modifiés : [authenticate-store.js](src/stores/authenticate-store.js), [authenticate-store.test.js](test/vitest/__tests__/authenticate-store.test.js).

- Branches et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/fix/authPersistence), [Commit](https://github.com/etemesgen/test-technique/commit/61189bbc2710713865f128e795117577af5e83d0)

### 5. Accès à la page "Favorites" sans connexion :

- Problème : L'utilisateur peut accéder à la page des favoris via l'URL sans être connecté.

- Attendu : Bloquer l'accès à cette page si l'utilisateur n'est pas connecté.

- Solution : La redirection vers la page des favoris est bloquée, ainsi redirigé vers la page de d'accueil si l'utilisateur n'est pas connecté.

- Fichiers modifiés : [routes.js](src/router/routes.js), [routes.test.js](test/vitest/__tests__/routes.test.js), [HeaderComponent.vue](src/components/HeaderComponent.vue).

- Branches et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/fix/favoritePageAccess), [Commit](https://github.com/etemesgen/test-technique/commit/4559714c69cfa0e8a12fd59eb3beca13c3eb9b78)

### 6. Modal de connexion sur la page "Favorites" :

- Problème : Même connecté, cliquer sur "Favoris" affiche la modal de connexion.

- Attendu : Supprimer l'ouverture de la modal si l'utilisateur est déjà connecté.

- Solution : La modal de connexion n'est pas affichée si l'utilisateur est deja connecté.

- Fichier modifié : [routes.js](src/router/routes.js).

- Branche et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/fix/signInModalDisplayFavoritePage), [Commit](https://github.com/etemesgen/test-technique/commit/3a24a4add8e1650cb20fd38d41ebb9615485b083)

### 7. Filtres de loyer :

- Problème : Les filtres de loyer ne fonctionnent pas correctement.

- Attendu : Corriger les filtres pour qu'ils filtrent les biens en fonction des critères de loyer sélectionnés.

- Solution : La condition et la logique de filtre de loyer min/max est corrigée pour qu'elle filtre les biens en fonction des critères correctement.

- Fichiers modifiés : [search-store.js](src/stores/search-store.js), [search-store.test.js](test/vitest/__tests__/search-store.test.js).

- Branche et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/fix/rentFilter), [Commit](https://github.com/etemesgen/test-technique/commit/099c3a6121d0ee509b373ae99fa86a16225851d9)

### 8. Enregistrement de recherche :

- Problème : Rien ne se passe lorsqu'un utilisateur connecté clique sur "Enregistrer ma recherche".

- Attendu : Vérifier que la fonctionnalité est bien implémentée.

- Solution : La fonctionnalité de sauvegarde de recherche est corrigée, si la recherche à enregistrer est vide alerter l'utilisateur.

- Fichiers modifiés : [search-store.js](src/stores/search-store.js), [search-store.test.js](test/vitest/__tests__/search-store.test.js).

- Branche et Commit lié : [Branche](https://github.com/etemesgen/test-technique/tree/fix/saveSearch), [Commit](https://github.com/etemesgen/test-technique/commit/e9dc4a7b18e1eba2607e664c2a37c6bc98a82a05)

### 9. Suppression de favoris :

- Problème : La suppression d'un favori ne fonctionne pas.

- Attendu : Corriger la fonctionnalité de suppression des favoris.

- Solution : La fonctionnalité de suppression de favoris est corrigée en passant le tableau contenant les données du bien favoris et non seulement leur id en paramètre de la fonction de suppression.

- Fichiers modifiés : [authenticate-store.js](src/stores/authenticate-store.js), [authenticate-store.test.js](test/vitest/__tests__/authenticate-store.test.js), [CardAccommodation.vue](src/components/CardAccommodation.vue).

- Branche et Commit lié : [Branche](https://github.com/etemesgen/test-technique/tree/fix/deleteFavorite), [Commit](https://github.com/etemesgen/test-technique/commit/a1f818952c8faeb58cfcddae9ec64784d9f33bb8)

### 10. Suppression des recherches enregistrées :

- Problème : Le bouton de suppression des recherches enregistrées est manquant.

- Attendu : Ajouter un bouton pour permettre cette suppression et s'assurer que la méthode backend existante soit appelée correctement et qu'elle fonctionne bien.

- Solution : Un bouton de suppression par recherche enregistrée est ajouté et la fonctionnalité de suppression des recherches enregistrées est bien appelée.

- Fichiers modifiés : [CardSavedSearch.vue](src/components/CardSavedSearch.vue), [search-store.test.js](test/vitest/__tests__/search-store.test.js).

- Branche et Commit lié : [Branche](https://github.com/etemesgen/test-technique/commits/feature/deleteSavedSearch), [Commit](https://github.com/etemesgen/test-technique/commit/9c0694efb0653a9d7ea215893e137226d5b6be76)
