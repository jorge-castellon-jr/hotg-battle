import useGameStore from '../gameState'
import { EnemyCard } from '../Card/CardTypes'

export function performEnemyActions() {
  const gameStore = useGameStore.getState()
  const { enemies, enemyDeck, applyDamage } = gameStore

  enemies.forEach((enemyName) => {
    const enemy = enemyDeck.find((e) => e.name === enemyName)
    if (enemy) {
      switch (enemy.type) {
        case 'fast':
          // Fast enemies act first
          enemyAttack(enemy)
          break
        case 'guard':
          // Guard logic can prevent targeting other enemies
          break
        case 'basic':
          enemyAttack(enemy)
          break
        case 'passive':
          // Passive enemies may apply continuous effects
          break
        default:
          break
      }
    }
  })
}

function enemyAttack(enemy: EnemyCard) {
  // Simple attack logic: deal damage to a random Ranger
  const rangers = useGameStore.getState().rangers
  const randomRanger = rangers[Math.floor(Math.random() * rangers.length)]
  applyDamage(randomRanger, enemy.attack || 1)
}
