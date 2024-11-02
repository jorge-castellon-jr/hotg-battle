import { EnemyCard, RangerCard } from './Card/types'

interface RangerAbility { }

export interface Ranger {
  id: string
  name: string
  abilities: RangerAbility[] // List of abilities or effects
  cards: RangerCard[]
}

export interface Enemy {
  id: string
  name: string
  health: number
  cards: EnemyCard[]
}
