// src/components/Button/GroupButton.tsx

import TextButtonBase from "./TextButtonBase"
import type { GroupButtonProps } from "./types"

function GroupButton({
  variant = 'primary',
  addonIcon,
  onAddonClick,
  ...props
}: GroupButtonProps) {
  return (
    <div>
      <TextButtonBase {...props} />
      <button type="button" onClick={onAddonClick}>
        {addonIcon}
      </button>
    </div>
  )
}

export default GroupButton