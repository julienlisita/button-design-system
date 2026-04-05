// src/components/Button/types.ts

export type BaseVariant = 'primary' | 'secondary'

export type TextVariant = BaseVariant | 'ghost' | 'destructive'

export type GroupVariant = BaseVariant | 'destructive'

export type IconVariant =
  | BaseVariant
  | 'alphaLight'
  | 'alphaDark'

export type ButtonSize = 'M' | 'S' | 'XS'

export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled'