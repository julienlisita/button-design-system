// src/examples/ButtonExamples.tsx

import Button from '../components/Button/Button'
import GroupButton from '../components/Button/GroupButton'
import IconButton from '../components/Button/IconButton'
import './ButtonExamples.scss'
import PlaceholderIcon from '../components/icons/PlaceholderIcon'
import CheckIcon from '../components/icons/CheckIcon'
import GearSixIcon from '../components/icons/GearSixIcon'
import MagnifyingGlassIcon from '../components/icons/MagnifyingGlassIcon'
import SlidersHorizontalIcon from '../components/icons/SlidersHorizontalIcon'
import TrashIcon from '../components/icons/TrashIcon'

const sizes = ['M', 'S', 'XS'] as const

const states = ['default', 'disabled'] as const

const textVariants = [
  { label: 'Primary', value: 'primary' as const },
  { label: 'Secondary', value: 'secondary' as const },
  { label: 'Ghost', value: 'ghost' as const },
  { label: 'Destructive', value: 'destructive' as const },
]

const groupVariants = [
  { label: 'Primary', value: 'primary' as const },
  { label: 'Secondary', value: 'secondary' as const },
  { label: 'Destructive', value: 'destructive' as const },
]

const iconVariants = [
  { label: 'Primary', value: 'primary' as const },
  { label: 'Secondary', value: 'secondary' as const },
  { label: 'Alpha light', value: 'alphaLight' as const },
  { label: 'Alpha dark', value: 'alphaDark' as const },
]

function ButtonExamples() {
  return (
    <section className="button-examples">
      <header className="button-examples__header">
        <h1 className="button-examples__title">Button components</h1>
      </header>

      <div className="button-examples__families">
        <section className="button-examples__family">
          <h2 className="button-examples__family-title">Button</h2>

          {sizes.map((size) => (
            <div
              key={`button-${size}`}
              className="button-examples__size-block"
            >
              <h3 className="button-examples__size-title">Size {size}</h3>

              <div className="button-examples__variants">
                {textVariants.map((variant) => (
                  <div
                    key={`button-${size}-${variant.value}`}
                    className="button-examples__variant-column"
                  >
                    <h4 className="button-examples__variant-title">
                      {variant.label}
                    </h4>

                    <div className="button-examples__states">
                      {states.map((state) => (
                        <div
                          key={`button-${size}-${variant.value}-${state}`}
                          className="button-examples__state"
                        >
                          <span className="button-examples__state-label">
                            {state}
                          </span>

                          <Button
                            variant={variant.value}
                            size={size}
                            disabled={state === 'disabled'}
                            leadingIcon={<CheckIcon />}
                            trailingIcon={<GearSixIcon />}
                            badge={3}
                          >
                            Button
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="button-examples__family">
          <h2 className="button-examples__family-title">Group button</h2>

          {sizes.map((size) => (
            <div
              key={`group-button-${size}`}
              className="button-examples__size-block"
            >
              <h3 className="button-examples__size-title">Size {size}</h3>

              <div className="button-examples__variants">
                {groupVariants.map((variant) => (
                  <div
                    key={`group-button-${size}-${variant.value}`}
                    className="button-examples__variant-column"
                  >
                    <h4 className="button-examples__variant-title">
                      {variant.label}
                    </h4>

                    <div className="button-examples__states">
                      {states.map((state) => (
                        <div
                          key={`group-button-${size}-${variant.value}-${state}`}
                          className="button-examples__state"
                        >
                          <span className="button-examples__state-label">
                            {state}
                          </span>

                          <GroupButton
                            variant={variant.value}
                            size={size}
                            disabled={state === 'disabled'}
                            leadingIcon={<MagnifyingGlassIcon />}
                            trailingIcon={<SlidersHorizontalIcon />}
                            addonIcon={<TrashIcon />}
                            addonAriaLabel="Delete item"
                            badge={3}
                          >
                            Button
                          </GroupButton>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="button-examples__family">
          <h2 className="button-examples__family-title">Icon button</h2>

          <div className="button-examples__size-block">
            <h3 className="button-examples__size-title">Unique size</h3>

            <div className="button-examples__variants">
              {iconVariants.map((variant) => (
                <div
                  key={`icon-button-${variant.value}`}
                  className="button-examples__variant-column"
                >
                  <h4 className="button-examples__variant-title">
                    {variant.label}
                  </h4>

                  <div className="button-examples__states">
                    {states.map((state) => (
                      <div
                        key={`icon-button-${variant.value}-${state}`}
                        className="button-examples__state"
                      >
                        <span className="button-examples__state-label">
                          {state}
                        </span>

                        <IconButton
                          variant={variant.value}
                          disabled={state === 'disabled'}
                          icon={<PlaceholderIcon />}
                          ariaLabel="Open options"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ButtonExamples