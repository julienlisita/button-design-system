// src/components/Button/IconButton.tsx

import ButtonBase from "./ButtonBase"
import type { IconButtonProps } from "./types"

function IconButton({
  icon,
  disabled,
  onClick,
}: IconButtonProps) {
  return (
    <ButtonBase disabled={disabled} onClick={onClick}>
      <span>{icon}</span>
    </ButtonBase>
  )
}

export default IconButton