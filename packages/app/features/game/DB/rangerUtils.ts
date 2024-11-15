import { getDeck } from '../Card/deckUtils'
import { Ranger } from '../GameTypes'

export const createRanger = (ranger: Pick<Ranger, 'id' | 'name' | 'ability'>): Ranger => {
  const cards = getDeck(ranger.id)
  const single = cards[0]
  return {
    ...ranger,
    color: single.color,
    team: cards[0].team,
    cards,
    energyUsed: false,
    abilityUsed: false,
    discard: [],
    counters: 0,
  }
}
