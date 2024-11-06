import { RangerCard, CardEffect } from '../../CardTypes'

const soloStrike: RangerCard = {
  name: 'Solo Strike',
  type: 'attack',
  shields: 2,
  text: 'Before rolling, you may remove 1 die from this attack. If you do, return this card to your hand instead of discarding it after this attack resolves.',
  team: 'Mighty Morphin',
  owner: 'Green',
  color: 'green',
  energy: 0,
  attack: { value: 2 },
}

const dragonSolo: RangerCard = {
  name: 'Team Tactics',
  type: 'maneuver',
  shields: 1,
  text: 'For the rest of this battle, the energy cost of all combat cards is reduced by 1.',
  team: 'Mighty Morphin',
  owner: 'Green',
  color: 'green',
  energy: 1,
}

const dragonShield: RangerCard = {
  name: 'Dragon Shield',
  type: 'reaction',
  shields: 3,
  text: "Play this card when any Ranger suffers damage to reduce that damage by 3. jthe next time you perform an attack during this battle, add 1 die to that attack",
  team: 'Mighty Morphin',
  owner: 'Green',
  color: 'green',
  energy: 1,
}

const dragonRush: RangerCard = {
  name: 'Dragon Rush',
  type: 'attack',
  shields: 2,
  text: "After you resolve this attack, you may perform a second attack with 2 dice.",
  team: 'Mighty Morphin',
  owner: 'Green',
  color: 'green',
  energy: 1,
  attack: {
    value: 1,
  },
}

const energyToDamgeEffect: CardEffect = {
  type: 'addDamge',
  value: -1,
  target: -1,
  description:
    'This attack deals an amount of damage equal to the amount of energy spent to play this card. You May divide this damage among any number of targets.',
}
const bladeBlaster: RangerCard = {
  name: 'Blade Blaster',
  type: 'attack',
  shields: 1,
  text: energyToDamgeEffect.description!,
  team: 'Mighty Morphin',
  owner: 'Green',
  color: 'green',
  energy: -1,
  attack: { value: -1 },
  effects: [energyToDamgeEffect],
}

const dragonDagger: RangerCard = {
  name: 'Dragon Dragger',
  type: 'attack',
  shields: 3,
  text: "Perform this attack twice. (You may choose a new target for the second attack. Any effects applied to the first apply to both attacks.)",
  team: 'Mighty Morphin',
  owner: 'Green',
  color: 'green',
  energy: 3,
  attack: {
    value: 3,
  },
}

const deck: RangerCard[] = [
  soloStrike,
  soloStrike,
  dragonSolo,
  dragonSolo,
  dragonShield,
  dragonShield,
  dragonRush,
  dragonRush,
  bladeBlaster,
  dragonDagger,
]

export default deck
