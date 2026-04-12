import ButtonBase from './ButtonBase'
import type { TextButtonBaseProps } from './types'
import './TextButtonBase.scss'

function TextButtonBase({
  children,
  disabled = false,
  onClick,
  className = '',
  size = 'M',
  leadingIcon,
  trailingIcon,
  badge,
  ariaLabel,
}: TextButtonBaseProps) {
  const textButtonClassName = [
    'text-button',
    `text-button--${size.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <ButtonBase
      disabled={disabled}
      onClick={onClick}
      className={textButtonClassName}
      ariaLabel={ariaLabel}
    >
      {leadingIcon && (
        <span className="text-button__leading-icon" aria-hidden="true">
          {leadingIcon}
        </span>
      )}

      <span className="text-button__label">{children}</span>

      {trailingIcon && (
        <span className="text-button__trailing-icon" aria-hidden="true">
          {trailingIcon}
        </span>
      )}

      {badge !== undefined && (
        <span className="text-button__badge" aria-hidden="true">
          {badge}
        </span>
      )}
    </ButtonBase>
  )
}

export default TextButtonBase