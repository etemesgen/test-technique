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

### 3. Connexion avec mot de passe :

- Problème : Impossible de se connecter avec un mot de passe correct.

- Attendu : Corriger la logique d'authentification pour valider les identifiants corrects.

- Solution : La logique de comparaison de mots de passe est corrigée pour authentifier l'utilisateur correctement.

- Fichiers modifiés : [authenticate-store.js](src/stores/authenticate-store.js), [authenticate-store.test.js](test/vitest/__tests__/authenticate-store.test.js).

### 4. Connexion persistante :

- Problème : Après connexion, l'utilisateur est déconnecté en actualisant la page.

- Attendu : Assurer une persistance de la connexion après actualisation.

- Solution : La persistence de la connexion est ajoutée en utilisant le localStorage pour garder l'utilisateur connecté apres l'actualisation de la page.

- Fichiers modifiés : [authenticate-store.js](src/stores/authenticate-store.js), [authenticate-store.test.js](test/vitest/__tests__/authenticate-store.test.js).

### 5. Accès à la page "Favorites" sans connexion :

- Problème : L'utilisateur peut accéder à la page des favoris via l'URL sans être connecté.

- Attendu : Bloquer l'accès à cette page si l'utilisateur n'est pas connecté.

- Solution : La redirection vers la page des favoris est bloquée, ainsi redirigé vers la page de d'accueil si l'utilisateur n'est pas connecté.

- Fichiers modifiés : [routes.js](src/router/routes.js), [routes.test.js](test/vitest/__tests__/routes.test.js), [HeaderComponent.vue](src/components/HeaderComponent.vue).

### 6. Modal de connexion sur la page "Favorites" :

- Problème : Même connecté, cliquer sur "Favoris" affiche la modal de connexion.

- Attendu : Supprimer l'ouverture de la modal si l'utilisateur est déjà connecté.

- Solution : La modal de connexion n'est pas affichée si l'utilisateur est deja connecté.

- Fichier modifié : [routes.js](src/router/routes.js).

### 7. Filtres de loyer :

- Problème : Les filtres de loyer ne fonctionnent pas correctement.

- Attendu : Corriger les filtres pour qu'ils filtrent les biens en fonction des critères de loyer sélectionnés.

- Solution : La condition et la logique de filtre de loyer min/max est corrigée pour qu'elle filtre les biens en fonction des critères correctement.

- Fichiers modifiés : [search-store.js](src/stores/search-store.js), [search-store.test.js](test/vitest/__tests__/search-store.test.js).

### 8. Enregistrement de recherche :

- Problème : Rien ne se passe lorsqu'un utilisateur connecté clique sur "Enregistrer ma recherche".

- Attendu : Vérifier que la fonctionnalité est bien implémentée.

- Solution : La fonctionnalité de sauvegarde de recherche est corrigée, si la recherche à enregistrer est vide alerter l'utilisateur.

- Fichiers modifiés : [search-store.js](src/stores/search-store.js), [search-store.test.js](test/vitest/__tests__/search-store.test.js).

### 9. Suppression de favoris :

- Problème : La suppression d'un favori ne fonctionne pas.

- Attendu : Corriger la fonctionnalité de suppression des favoris.

- Solution : La fonctionnalité de suppression de favoris est corrigée en passant le tableau contenant les données du bien favoris et non seulement leur id en paramètre de la fonction de suppression.

- Fichiers modifiés : [authenticate-store.js](src/stores/authenticate-store.js), [authenticate-store.test.js](test/vitest/__tests__/authenticate-store.test.js), [CardAccommodation.vue](src/components/CardAccommodation.vue).
