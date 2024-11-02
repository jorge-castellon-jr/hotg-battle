import { CardEffect } from '../CardTypes'
import useGameStore from '../../gameState'

export function applyEffect(effect: CardEffect) {
  const gameStore = useGameStore.getState()

  switch (effect.type) {
    case 'addDice':
      if (effect.condition === 'nextAttack') {
        gameStore.setBonusDice(effect.value)
      }
      break
    case 'fixedDamage':
      gameStore.applyDamage(effect.value)
      break
    case 'addEnergy':
      gameStore.setEnergy(gameStore.energy + effect.value)
      break
    case 'allowCardPlay':
      // Logic for prompting a different Ranger to play a card
      gameStore.promptRangerCardPlay()
      break
    default:
      break
  }
}
