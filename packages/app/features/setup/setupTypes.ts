import { Ranger } from "../game/GameTypes"

export type RangerPosition = 'left' | 'middle' | 'right'

export interface SetupConfig {
  rangers: {
    [key in RangerPosition]: string | null
  }
  enemies: {
    footSoldiers: string
    monster: string
  }
}

export interface RangerSelectorProps {
  position: string
  selected: Ranger | null
  onSelect: (rangerId: string) => void
}

export interface EnemySelectorProps {
  type: 'foot' | 'monster'
  selected: string
  onSelect: (enemy: string) => void
}
