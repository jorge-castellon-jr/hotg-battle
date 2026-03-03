import { getDeck } from '../Card/deckUtils'
import { Ranger } from '../GameTypes'
import type { RangerColorKey } from '../utils/colors'

const DEFAULT_EMPTY_DECK_COLOR: RangerColorKey = 'red'
const DEFAULT_EMPTY_DECK_TEAM = ''

export const createRanger = (ranger: Pick<Ranger, 'id' | 'name' | 'ability'>): Ranger => {
  const cards = getDeck(ranger.id)
  const single = cards[0]
  return {
    ...ranger,
    color: single?.color ?? DEFAULT_EMPTY_DECK_COLOR,
    team: single?.team ?? DEFAULT_EMPTY_DECK_TEAM,
    cards,
    energyUsed: false,
    abilityUsed: false,
    discard: [],
    counters: 0,
  }
}
