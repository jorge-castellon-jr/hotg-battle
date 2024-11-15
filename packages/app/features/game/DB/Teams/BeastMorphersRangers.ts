import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const BeastMorphersRangers = [
  createRanger({
    id: 'beast_morphers_red_devon_daniels',
    name: 'Devon Daniels',
    ability: {
      name: 'Quick Wits',
      text: 'Once per battle, when any Ranger suffers damage, you may draw 1 card. If you do, reduce that damage by the number of [b]shields[/b] on that card.',
    },
  }),
  createRanger({
    id: 'beast_morphers_blue_ravi_shaw',
    name: 'Ravi Shaw',
    ability: {
      name: 'Grid Battleforce Training',
      text: 'Once per battle, when any Ranger reveals a card for defense, if that card has a [b]★[/b] ability, that ability resolves twice.',
    },
  }),
  createRanger({
    id: 'beast_morphers_yellow_zoey_reeves',
    name: 'Zoey Reeves',
    ability: {
      name: 'Problem Solver',
      text: 'Once per battle, when any Ranger draws a card after the Preparation Step, gain 1 [b]energy[/b].',
    },
  }),
  createRanger({
    id: 'beast_morphers_gold_nate_silva',
    name: 'Nate Silva',
    ability: {
      name: 'Prodigy',
      text: 'Once per battle, up to 2 different Rangers may each look at the top card of their deck and then may each draw 1 card. You may use this ability during battles in other locations.',
    },
  }),
  createRanger({
    id: 'beast_morphers_silver_steel',
    name: 'Steel',
    ability: {
      name: 'Mr. Fantastic Super Handsome Strong As Steel',
      text: 'Once per battle, when you would draw a card, you may instead discard the top card of your deck. If you do, add 2 dice to the next attack any Ranger performs during this battle.',
    },
  })
] as Ranger[];

export default BeastMorphersRangers;
