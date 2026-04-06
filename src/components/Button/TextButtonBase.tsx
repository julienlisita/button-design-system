// src/components/Button/TextButtonBase.tsx

import ButtonBase from "./ButtonBase"
import type { TextButtonBaseProps } from "./types"

function TextButtonBase({
  children,
  leadingIcon,
  trailingIcon,
  badge,
  disabled,
  onClick,
}: TextButtonBaseProps) {
  return (
    <ButtonBase disabled={disabled} onClick={onClick}>
      {leadingIcon && <span>{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span>{trailingIcon}</span>}
      {badge !== undefined && <span>{badge}</span>}
    </ButtonBase>
  )
}

export default TextButtonBase