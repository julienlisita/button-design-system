// src/components/Button/IconButton.tsx

import ButtonBase from "./ButtonBase"
import type { IconButtonProps } from "./types"
import './IconButton.scss'

function IconButton({
  icon,
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
}: IconButtonProps) {
  const iconButtonClassName = [
    'icon-button',
    `icon-button--${variant.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <ButtonBase 
      disabled={disabled} 
      onClick={onClick} 
      className={iconButtonClassName}
    >
      <span className="icon-button__icon" aria-hidden="true">
        {icon}
      </span>
    </ButtonBase>
  )
}

export default IconButton