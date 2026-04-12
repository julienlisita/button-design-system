// src/components/Button/GroupButton.tsx

import Button from "./Button"
import type { GroupButtonProps } from "./types"
import './GroupButton.scss'

function GroupButton({
  variant = 'primary',
  addonIcon,
  onAddonClick,
  className = '',
  disabled = false,
  addonAriaLabel,
  ...props
}: GroupButtonProps) {
  const groupButtonClassName = [
    'group-button',
    `group-button--${variant.toLowerCase()}`,
    disabled && 'group-button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={groupButtonClassName}>
      <Button 
        {...props} 
        variant={variant} 
        disabled={disabled} 
        className="group-button__main" 
      />

      <button 
        type="button" 
        className="group-button__addon"
        onClick={onAddonClick}
        disabled={disabled}
        aria-label={addonAriaLabel}
      >
        <span className="group-button__addon-icon" aria-hidden="true">
          {addonIcon}
        </span>
      </button>
    </div>
  )
}

export default GroupButton