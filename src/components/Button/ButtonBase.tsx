// src/components/Button/ButtonBase.tsx

import type { ButtonBaseProps } from "./types"
import './ButtonBase.scss'

function ButtonBase({
  children,
  disabled = false,
  onClick,
  className = '',
  ariaLabel,
}: ButtonBaseProps) {
  return (
    <button 
      type="button"
      disabled={disabled} 
      onClick={onClick}
      className={`button-base ${className}`.trim()}
      aria-label={ariaLabel}
    >
        {children}
    </button>
  )
}

export default ButtonBase