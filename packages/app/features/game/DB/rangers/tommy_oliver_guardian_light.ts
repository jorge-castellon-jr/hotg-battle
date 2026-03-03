import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const feinting_slash0: BaseRangerCard = {
  name: 'FEINTING SLASH',
  type: 'attack',
  text: ['If you roll at least 1 [MISS] result during this attack, return this card to your hand instead of discarding it.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const flying_tiger1: BaseRangerCard = {
  name: 'FLYING TIGER',
  type: 'attack',
  text: ['After you resolve this attack, you may spend 1 [ENERGY] to allow another Ranger to immediately play 1 card with an energy cost of zero.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const flash_kick2: BaseRangerCard = {
  name: 'FLASH KICK',
  type: 'reaction',
  text: ['Play this card before the final turn of a battle to roll 2 dice and deal that much [HIT] to the first enemy card in the combat sequence. (Original: Play this card at the start of a battle to roll 2 dice and deal that much [HIT] to an enemy card of your choice.)'],
  energy: 0,
  shields: 2,
};

const guardian_armor3: BaseRangerCard = {
  name: 'GUARDIAN ARMOR',
  type: 'maneuver',
  text: ['Gain 2 [ENERGY]. Place this card on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 3,
};

const sabas_eye_beams4: BaseRangerCard = {
  name: 'SABA’S EYE BEAMS',
  type: 'maneuver',
  text: ['Deal 1 [HIT] each to up to 4 enemy cards'],
  energy: 2,
  shields: 1,
};

const saba_slash5: BaseRangerCard = {
  name: 'SABA SLASH',
  type: 'attack',
  text: ['You may divide this [HIT] among any number of targets'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [feinting_slash0, 2],
    [flying_tiger1, 2],
    [flash_kick2, 2],
    [guardian_armor3, 2],
    [sabas_eye_beams4, 1],
    [saba_slash5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'tommy_oliver_guardian_light',
    color: 'white'
  }
);

export default deck;