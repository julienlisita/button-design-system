// src/components/Button/Button.tsx

import TextButtonBase from "./TextButtonBase"
import type { ButtonProps } from "./types"
import './Button.scss'

function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const buttonClassName = [
    'button',
    `button--${variant.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <TextButtonBase 
      {...props} 
      className={buttonClassName}
    />
  )
}

export default Button