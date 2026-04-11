# Button Design System

Famille de composants Button React évolutive, construite autour de couches partagées, de variantes et de design tokens.

## Stack
- React
- TypeScript
- SCSS
- Design tokens

## Lancer le projet

Installer les dépendances :

```bash
npm install
```

## Choix techniques

### Composition par couches
Le système repose sur une architecture en couches où chaque composant ajoute une responsabilité claire :

- `ButtonBase` : socle HTML, alignement, focus, disabled et styles communs
- `TextButtonBase` : structure commune des boutons textuels (size, icônes, badge)
- `Button` : application des variants textuels standards
- `GroupButton` : composition split avec action secondaire
- `IconButton` : branche spécialisée pour l’icon-only

Cette approche permet :
- d’éviter un composant monolithique
- de limiter la duplication
- de faire évoluer l’architecture selon les responsabilités réellement observées
- de garder une API claire par famille de boutons

### Évolution de l’architecture
L’architecture initiale partait d’une séparation conceptuelle des variants :

- `ButtonBase` portait le socle commun aux variants `primary` et `secondary`
- `TextButtonBase` ajoutait la structure commune des boutons textuels, y compris `destructive`
- `Button` apportait le variant spécifique `ghost`

Le fait que `GroupButton` n’expose volontairement pas `ghost` dans son API publique rendait naturel le choix d’une branche parallèle à `Button`.

Cette lecture conduisait à l’arbre initial suivant :

ButtonBase
├── TextButtonBase
│   ├── Button
│   └── GroupButton
└── IconButton

L’idée était de considérer `Button` et `GroupButton` comme deux spécialisations parallèles de la branche textuelle :
- `Button` avec l’ensemble des variants textuels
- `GroupButton` avec une API restreinte à `primary`, `secondary` et `destructive`

Pendant l’implémentation, l’analyse des responsabilités réelles a montré que `GroupButton` partageait aussi toute la logique visuelle et comportementale de `Button` sur sa zone principale :
- skins de variants textuels
- états visuels
- disabled
- gestion des icônes
- badge
- cohérence des borders et du focus

J’ai donc fait évoluer l’architecture pour composer `Button` dans `GroupButton`, tout en conservant la restriction publique du variant `ghost`.

L’arbre final devient :

ButtonBase
├── TextButtonBase
│   └── Button
│       └── GroupButton
└── IconButton

### Typage TypeScript
Les props sont structurées par niveaux de responsabilité avec :
- des `interface` pour les objets extensibles
- des `type` unions pour les variants, states et sizes

### Design tokens
Les espacements, radius, variantes et styles typographiques suivent les tokens observés dans le design system Figma.

## Architecture

Cette section synthétise l’architecture cible retenue après les itérations décrites précédemment.
ButtonBase
├── TextButtonBase
│   └── Button
│       └── GroupButton
└── IconButton

## Rôles et responsabilités

### 1. ButtonBase

**Rôle :** socle visuel et comportemental minimal commun à toute la
famille.

**Responsabilités :** 
- socle commun aux variants `primary` et `secondary`
- états visuels communs 
- tokens communs : 
    - `gap` 
    - `corner radius` 
- structure de base du conteneur 
- alignement, transitions, focus, disabled

**Ne gère pas :** 
- texte 
- `size` 
- padding textuel 
- `leadingIcon` / `trailingIcon` 
- `badge` 
- logique icon-only spécifique

> `ButtonBase` porte le socle commun, pas la logique spécifique des branches textuelles ou icon-only.

### 2. TextButtonBase

**Rôle :** socle structurel des boutons textuels.

**Responsabilités :** 
- tout ce qui vient de `ButtonBase` 
- socle textuel commun aux variants textuels, dont `destructive`
- prop `size` 
- logique de contenu textuel 
- `leadingIcon` 
- `trailingIcon` 
- `badge` 
- padding textuel 
- mapping `size -> typo` 
- disposition texte + icônes + badge

**Ne gère pas :** 
- variant `ghost` 
- logique d'addon / split 
- logique icon-only 
- variants alpha

> `TextButtonBase` isole toute la grammaire commune des boutons textuels, indépendamment des variants visuels appliqués dans les couches supérieures.

### 3. Button

**Rôle :** bouton textuel standard.

**Responsabilités :** 
- tout ce que fait `TextButtonBase` 
- ajout du variant spécifique `ghost`
- rendu du bouton textuel simple

**Ne gère pas :** 
- addon 
- action secondaire 
- logique icon-only

> `Button` est la version standard du bouton textuel simple.

### 4. GroupButton

**Rôle :** bouton textuel composé avec action secondaire.

**Responsabilités :** 
- réutilisation de `Button` pour la zone principale
- restriction de l’API aux variants :
  - `primary`
  - `secondary`
  - `destructive`
- structure en deux zones 
- `addonIcon` 
- action principale + action secondaire 
- séparateur visuel 
- wrapper du groupe et radius global
- focus partagé via `:focus-within`
- disabled global du split button


**Ne gère pas :** 
- variant `ghost` 
- variants alpha 
- logique icon-only

> `GroupButton` est une spécialisation textuelle pour les usages split tout en restreignant son API aux variants réellement définis dans le design system.

### 5. IconButton

**Rôle :** bouton icon-only autonome.

**Responsabilités :** 
- tout ce que fait `ButtonBase` 
- prop `icon` 
- variants : 
    - `primary` 
    - `secondary` 
    - `alphaLight` 
    - `alphaDark` 
- padding spécifique
- boîte carrée 
- centrage propre

**Ne gère pas :** 
- size textuelle 
- texte 
- `leadingIcon` 
- `trailingIcon` 
- `badge` 
- split

> `IconButton` est une branche parallèle spécialisée pour l'icon-only.

## Gestion des variantes

### Variants textuels
- `primary`
- `secondary`
- `ghost`
- `destructive`

### Variants groupés
- `primary`
- `secondary`
- `destructive`

### Variants icon-only
- `primary`
- `secondary`
- `alphaLight`
- `alphaDark`

## Principes de conception

- faire monter les responsabilités progressivement par couche (`ButtonBase` → `TextButtonBase` → spécialisations)
- garder une API publique explicite par famille de boutons, même lorsque l’implémentation interne est plus riche
- privilégier la composition lorsqu’une proximité fonctionnelle réelle apparaît pendant l’implémentation
- centraliser la structure textuelle, les icônes et le badge pour éviter la duplication
- aligner le typage TypeScript, les variants exposés et les tokens SCSS avec les contraintes du Figma