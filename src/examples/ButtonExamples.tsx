// src/examples/ButtonExamples.tsx

import Button from '../components/Button/Button'
import GroupButton from '../components/Button/GroupButton'
import IconButton from '../components/Button/IconButton'
import './ButtonExamples.scss'

function ButtonExamples() {
  return (
    <section className="button-examples">
      <header className="button-examples__header">
        <h1 className="button-examples__title">Exemple de boutons</h1>
      </header>
      <div className="button-examples__block">
        <div className="button-examples__row">
          <Button
            variant="primary"
            leadingIcon={<span aria-hidden="true">✓</span>}
          >
            Valider
          </Button>

          <Button
            variant="secondary"
            leadingIcon={<span aria-hidden="true">⎚</span>}
            badge={12}
          >
            Filtrer
          </Button>

          <GroupButton
            variant="destructive"
            leadingIcon={<span aria-hidden="true">🗑</span>}
            addonIcon={<span aria-hidden="true">⚙</span>}
          >
            Supprimer
          </GroupButton>

          <IconButton
            variant="secondary"
            icon={<span aria-hidden="true">🗑</span>}
          />
        </div>
      </div>
    </section>
  )
}

export default ButtonExamples