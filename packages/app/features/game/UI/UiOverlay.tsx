import { DrawUI } from './DrawUI'
import { RangerOptionsUI } from './RangerOptionsUI'
import { EnemyOptionsUI } from './EnemyOptionsUI'
import { RangerInfoUI } from './RangerInfoUI'
import { EnergyCounter } from './EnergyCounter'

export const UiOverlay = () => {
  return (
    <>
      <RangerOptionsUI />
      <RangerInfoUI />
      <EnemyOptionsUI />

      {/* <DrawUI /> */}
      <EnergyCounter />
    </>
  )
}
