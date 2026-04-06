// src/components/Button/types.ts

import type { ReactNode } from 'react'

export type BaseVariant = 'primary' | 'secondary'

export type TextVariant = BaseVariant | 'ghost' | 'destructive'

export type GroupVariant = BaseVariant | 'destructive'

export type IconVariant = BaseVariant | 'alphaLight' | 'alphaDark'

export type ButtonSize = 'M' | 'S' | 'XS'

export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled'

export interface ButtonBaseProps {
  disabled?: boolean
  children?: ReactNode
  onClick?: () => void
}

export interface TextButtonBaseProps extends ButtonBaseProps {
  size?: ButtonSize
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  badge?: number
}

export interface ButtonProps extends TextButtonBaseProps {
  variant?: TextVariant
}

export interface GroupButtonProps extends TextButtonBaseProps {
  variant?: GroupVariant
  addonIcon: ReactNode
  onAddonClick?: () => void
}

export interface IconButtonProps extends ButtonBaseProps {
  variant?: IconVariant
  icon: ReactNode
}