export type RangerCardType = 'attack' | 'maneuver' | 'reaction'

export interface RangerCard {
  id: string // Unique identifier for the card
  name: string // Card name
  type: RangerCardType // Card type keyword
  shields: number // Shield points
  text: string // Description or additional effect text
  owner: string // Ranger who owns the card (e.g., "Red Ranger")
  attack?: {
    value: number
    fixed?: boolean
  }
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

export interface CardEffect {
  type: RangerEffectType
  value: number // The numeric value for the effect (e.g., number of dice, damage)
  target: number // Target of the effect, how many 0 means none
  condition?: string // Conditional text for when this effect is triggered
  description: string // User-readable effect description
}

export interface EnemyCard {
  id: string // Unique identifier for the card
  name: string // Card name
  type: 'fast' | 'passive' | 'guard' | 'basic' // Keyword for enemy behavior
  text: string // Description or additional effect text
  owner: string // Ranger who owns the card (e.g., "Red Ranger")
  health: number
}
// src/types.ts
