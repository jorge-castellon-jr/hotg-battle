import { Enemy, Ranger } from "../game/GameTypes"

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
  onSelect: (rangerId: string, ability: string) => void
}

