// src/components/Button/ButtonBase.tsx

import type { ButtonBaseProps } from "./types"
import './ButtonBase.scss'

function ButtonBase({
  children,
  disabled = false,
  onClick,
  className = '',
}: ButtonBaseProps) {
  return (
    <button 
      type="button"
      disabled={disabled} 
      onClick={onClick}
      className={`button-base ${className}`.trim()}
    >
        {children}
    </button>
  )
}

export default ButtonBase