import { DrawUI } from './DrawUI'
import { RangerOptionsUI } from './RangerOptionsUI'
import { EnemyOptionsUI } from './EnemyOptionsUI'
import { RangerInfoUI } from './RangerInfoUI'

export const UiOverlay = () => {
  return (
    <>
      <RangerOptionsUI />
      <RangerInfoUI />
      <EnemyOptionsUI />

      <DrawUI />
    </>
  )
}
