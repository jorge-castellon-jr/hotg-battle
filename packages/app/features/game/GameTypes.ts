import { EnemyCard, RangerCard } from './Card/CardTypes'
import { RangerColorKey } from './utils/colors'

interface RangerAbility {
  name: string
  text: string
}

export interface Ranger {
  id: string
  name: string
  team: string
  ability: RangerAbility // List of abilities or effects
  cards: RangerCard[]
  energyUsed: boolean
  abilityUsed: boolean
  discard: RangerCard[]
  color: RangerColorKey
  counters: number
}

export interface RangerDecks {
  left: Ranger | null
  middle: Ranger | null
  right: Ranger | null
}

export interface Enemy {
  id: string
  name: string
  type: 'foot' | 'monster' | 'boss'
  health: number
  cards: EnemyCard[]
}
