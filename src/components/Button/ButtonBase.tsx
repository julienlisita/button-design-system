// src/components/Button/ButtonBase.tsx

import type { ButtonBaseProps } from "./types"

function ButtonBase({
  children,
  disabled = false,
  onClick,
  }: ButtonBaseProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonBase