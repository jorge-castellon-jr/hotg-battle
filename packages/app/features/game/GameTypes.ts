import { EnemyCard, RangerCard } from './Card/CardTypes'

interface RangerAbility {
  name: string
}

export interface Ranger {
  // id: string
  name: string
  abilities: RangerAbility[] // List of abilities or effects
  cards: RangerCard[]
  energyUsed: boolean
  abilityUsed: boolean
  discard: RangerCard[]
  color: string
}

export interface RangerDecks {
  left: Ranger
  middle: Ranger
  right: Ranger
}

export interface Enemy {
  id: string
  name: string
  type: 'foot' | 'monster' | 'boss'
  health: number
  cards: EnemyCard[]
}
