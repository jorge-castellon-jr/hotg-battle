import { EnemyCard } from '../../Card/CardTypes'

/**
 * Ensures all enemy cards have required properties with default values
 */
export const normalizeEnemyCard = (card: Partial<EnemyCard>): EnemyCard => {
  return {
    name: card.name || '',
    type: card.type || 'basic',
    enemyType: card.enemyType || 'basic',
    text: card.text || '',
    owner: card.owner || '',
    health: card.health || 0,
    currentDamage: card.currentDamage || 0,
    attacks: card.attacks || [],
    effects: card.effects || [],
    activated: card.activated || false,
    defeated: card.defeated || false,
  }
}

/**
 * Processes an array of enemy cards to ensure they all have required properties
 */
export const normalizeEnemyDatabase = <T extends Partial<EnemyCard>>(cards: T[]): EnemyCard[] => {
  return cards.map((card) => normalizeEnemyCard(card))
}
