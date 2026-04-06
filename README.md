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
Le système repose sur une architecture en couches :

- `ButtonBase` : socle visuel commun
- `TextButtonBase` : logique commune des boutons textuels
- `Button`, `GroupButton`, `IconButton` : spécialisations métier

Cette approche évite un composant monolithique trop chargé et améliore la maintenabilité.

### Typage TypeScript
Les props sont structurées par niveaux de responsabilité avec :
- des `interface` pour les objets extensibles
- des `type` unions pour les variants, states et sizes

### Design tokens
Les espacements, radius, variantes et styles typographiques suivent les tokens observés dans le design system Figma.

## Architecture

Cette architecture matérialise la séparation des responsabilités décrite dans la section précédente.
BaseButton
├── TextButtonBase
│   ├── Button
│   └── GroupButton
└── IconButton

## Rôles et responsabilités

### 1. ButtonBase

**Rôle :** socle visuel et comportemental minimal commun à toute la
famille.

**Responsabilités :** - variants communs `primary` et `secondary` -
états visuels communs - tokens communs : - `gap` - `corner radius` -
structure de base du conteneur - alignement, transitions, focus,
disabled

**Ne gère pas :** - texte - `size` - padding textuel - `leadingIcon` /
`trailingIcon` - `badge` - logique icon-only spécifique

> `ButtonBase` porte la surface commune, pas la logique spécifique des
> branches textuelles ou icon-only.

### 2. TextButtonBase

**Rôle :** socle commun aux boutons textuels (`Button` et
`GroupButton`).

**Responsabilités :** - tout ce qui vient de `ButtonBase` - variant
`destructive` - prop `size` - logique de contenu textuel -
`leadingIcon` - `trailingIcon` - `badge` - padding textuel - mapping
`size -> typo` - disposition texte + icônes + badge

**Ne gère pas :** - variant `ghost` - logique d'addon / split - logique
icon-only - variants alpha

> `TextButtonBase` porte toute la logique commune des boutons avec
> texte.

### 3. Button

**Rôle :** bouton textuel standard.

**Responsabilités :** - tout ce que fait `TextButtonBase` - variant
`ghost` - rendu du bouton textuel simple

**Ne gère pas :** - addon - action secondaire - logique icon-only

> `Button` est la version standard du bouton textuel simple.

### 4. GroupButton

**Rôle :** bouton textuel composé avec action secondaire.

**Responsabilités :** - tout ce que fait `TextButtonBase` - structure en
deux zones - `addonIcon` - action principale + action secondaire -
séparateur visuel - wrapper du groupe et radius global

**Ne gère pas :** - variant `ghost` - variants alpha - logique icon-only

> `GroupButton` est une spécialisation textuelle pour les usages split.

### 5. IconButton

**Rôle :** bouton icon-only autonome.

**Responsabilités :** - tout ce que fait `ButtonBase` - prop `icon` -
variants : - `primary` - `secondary` - `alphaLight` - `alphaDark` -
padding spécifique - boîte carrée - centrage propre

**Ne gère pas :** - size textuelle - texte - `leadingIcon` -
`trailingIcon` - `badge` - split

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

- séparation claire des responsabilités
- réutilisabilité maximale
- composition React idiomatique
- cohérence avec le design system Figma
- API simple avec variants par défaut
- extensibilité future sans duplication