// src/components/Button/Button.tsx

import TextButtonBase from "./TextButtonBase"
import type { ButtonProps } from "./types"

function Button({
  variant = 'primary',
  ...props
}: ButtonProps) {
  return <TextButtonBase {...props} />
}

export default Button