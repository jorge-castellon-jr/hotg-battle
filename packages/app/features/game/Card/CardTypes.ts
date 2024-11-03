export type RangerCardType = 'attack' | 'maneuver' | 'reaction'

type Attack = {
  value: number
  fixed?: boolean
}

export interface RangerCard {
  name: string // Card name
  type: RangerCardType // Card type keyword
  shields: number // Shield points
  text: string // Description or additional effect text
  owner: string // Ranger who owns the card (e.g., "Red Ranger")
  team: string
  color: string
  energy: number
  attack?: Attack
  effects?: CardEffect[]
}

export interface Enemy {
  id: string
  name: string
  health: number
  attack: number // Attack value
}

export type RangerEffectType =
  | 'addDice' // Adds extra dice to a Ranger's attack
  | 'fixedDamage' // Deals fixed damage to an enemy
  | 'addEnergy' // Adds energy to the Ranger team
  | 'conditionalBoost' // Provides a bonus if conditions are met (e.g., next Ranger attack)
  | 'allowCardPlay' // Allows another Ranger to play a card immediately
  | 'blockDamage' // Allows another Ranger to play a card immediately
  | 'rerollDice' // Allows another Ranger to play a card immediately
  | 'addDamge' // Allows another Ranger to play a card immediately

export interface CardEffect {
  type: RangerEffectType
  value: number // The numeric value for the effect (e.g., number of dice, damage)
  target: number // Target of the effect, how many 0 means none
  condition?: string // Conditional text for when this effect is triggered
  description: string // User-readable effect description
}

export type EnemyKeyWordType = 'fast' | 'passive' | 'guard' | 'basic'
export type EnemyType = 'foot' | 'monster' | 'boss' | 'basic'

export interface EnemyCard {
  id: string
  name: string
  type: EnemyKeyWordType // Keyword for behavior
  enemyType: EnemyType // Keyword for behavior
  text: string
  owner: string // e.g., "Foot Soldier", "Monster"
  health: number
  attack?: Attack // Optional if attack type varies
}
