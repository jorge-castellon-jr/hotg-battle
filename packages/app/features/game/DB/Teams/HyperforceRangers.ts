import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const HyperforceRangers = [
  createRanger({
    id: 'hyperforce_black_vesper_vasquez',
    name: 'Vesper Vasquez',
    ability: {
      name: 'Cry Havoc',
      text: 'If there are 3 or more enemy figures in your location, reduce the energy cost of all of your cards by 1.',
    },
  }),
  createRanger({
    id: 'hyperforce_pink_chloe_ashford',
    name: 'Chloe Ashford',
    ability: {
      name: 'Impulsive',
      text: 'You may spend 1 [b]energy[/b] to take the first turn in the battle even if there is an enemy card with the [b]FAST[/b] keyword in play.',
    },
  }),
  createRanger({
    id: 'hyperforce_red_marvin_marv_shih',
    name: 'Marvin "Marv" Shih',
    ability: {
      name: 'Determination',
      text: 'Once per battle, you may either discard 1 card to gain 1 [b]energy[/b] or spend 1 [b]energy[/b] to draw 1 card.',
    },
  }),
  createRanger({
    id: 'hyperforce_blue_eddie_banks_iii',
    name: 'Eddie Banks III',
    ability: {
      name: 'Technician',
      text: 'Once per battle, a Ranger of your choice may place up to 3 cards from their hand on the bottom of their deck, then draw an equal number of cards.',
    },
  }),
  createRanger({
    id: 'hyperforce_yellow_jack_thomas',
    name: 'Jack Thomas',
    ability: {
      name: 'Steadfast',
      text: 'Each time you suffer damage, before revealing any cards for defense, you may choose 1 card from your hand and place it on top of your deck.',
    },
  }),
  createRanger({
    id: 'hyperforce_green_joe_shih',
    name: 'Joe Shih',
    ability: {
      name: 'Enduring Strength',
      text: 'Once per battle, you may spend 1 [b]energy[/b] to choose 1 card from any Ranger\'s discard pile and place it on the bottom of their deck.',
    },
  })
] as Ranger[];

export default HyperforceRangers;
