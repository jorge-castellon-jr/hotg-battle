import { RangerOptionsUI } from './RangerOptionsUI'
import { EnemyOptionsUI } from './EnemyOptionsUI'
import { RangerInfoUI } from './RangerInfoUI'
import { EnergyCounter } from './EnergyCounter'
import { SettingsUI } from './SettingsUI'

export const UiOverlay = () => {
  return (
    <>
      <RangerOptionsUI />
      <RangerInfoUI />
      <EnemyOptionsUI />

      <EnergyCounter />
      <SettingsUI />
    </>
  )
}
