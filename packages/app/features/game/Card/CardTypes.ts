import { RangerColorKey } from '../utils/colors'

export type RangerCardType = 'attack' | 'maneuver' | 'reaction'

export type Attack = {
  value: number
  fixed?: boolean
}
export type BaseRangerCard = Omit<RangerCard, 'owner' | 'team' | 'color'> &
  (RangerCardAttack | RangerCardReaction | RangerCardManeuver)
export type RangerCard = {
  name: string // Card name
  shields: number // Shield points
  text: string[] // Description or additional effect text
  owner: string // Ranger who owns the card (e.g., "Red Ranger")
  team: string
  color: RangerColorKey
  subColor?: RangerColorKey
  energy: number
  effects?: CardEffect[]
  symbol?: {
    effect: string
    type: 'star' | 'gold' | 'chroma'
  }
} & (RangerCardColor | RangerCardColorWhite) &
  (RangerCardAttack | RangerCardReaction | RangerCardManeuver)

interface RangerCardColorWhite {
  color: 'white'
  subcolor: string
}
export interface RangerCardColor {
  color: 'red' | 'blue' | 'green' | 'yellow' | 'pink' | 'black' | 'silver' | 'gold' | 'shadow'
}

interface RangerCardAttack {
  type: 'attack'
  attack: Attack[]
}
interface RangerCardReaction {
  type: 'reaction'
}
interface RangerCardManeuver {
  type: 'maneuver'
}

export type RangerEffectType =
  | 'addDice' // Adds extra dice to a Ranger's attack
  | 'fixedDamage' // Deals fixed damage to an enemy
  | 'addEnergy' // Adds energy to the Ranger team
  | 'conditionalBoost' // Provides a bonus if conditions are met (e.g., next Ranger attack)
  | 'allowCardPlay' // Allows another Ranger to play a card immediately
  | 'blockDamage'
  | 'rerollDice'
  | 'addDamge'
  | 'counter'

export interface CardEffect {
  type: RangerEffectType
  value: number // The numeric value for the effect (e.g., number of dice, damage)
  target: number // Target of the effect, how many 0 means none
  condition?: string // Conditional text for when this effect is triggered
  description?: string // User-readable effect description
}

export interface Enemy {
  id: string
  name: string
  health: number
  attack: number // Attack value
}
export type EnemyKeyWordType = 'fast' | 'passive' | 'guard' | 'basic'
export type EnemyType = 'foot' | 'monster' | 'boss'

export type BaseEnemyCard = Omit<
  EnemyCard,
  'owner' | 'enemyType' | 'activated' | 'defeated' | 'currentDamage'
>
export interface EnemyCard {
  name: string
  type: EnemyKeyWordType // Keyword for behavior
  enemyType: EnemyType // Keyword for behavior
  text: string
  owner: string // e.g., "Foot Soldier", "Monster"
  health: number
  attacks?: (Attack & { target?: number | 'lead' | 'notLead' })[] // Optional if attack type varies
  effects?: CardEffect[]
  currentDamage: number
  counters: {
    left: { value: number; id: string }
    middle: { value: number; id: string }
    right: { value: number; id: string }
  }
  activated?: boolean
  defeated?: boolean
}
