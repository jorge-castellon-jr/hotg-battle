import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const DinoChargeRangers = [
  createRanger({
    id: 'dino_charge_dark_ranger_heckyl',
    name: 'Heckyl',
    ability: {
      name: 'Dark Pride',
      text: 'When you would play a card from your hand, you may play the top card of your discard pile instead. If you do, you must then discard the top card of your deck.',
    },
  }),
  createRanger({
    id: 'dino_charge_purple_kendall_morgan',
    name: 'Kendall Morgan',
    ability: {
      name: 'Dig Deeper',
      text: 'Once per battle, any Ranger may search their deck for 1 card of their choice, then shuffle their deck and place that card on top of their deck.',
    },
  }),
  createRanger({
    id: 'dino_charge_red_ranger_tyler_navarro',
    name: 'Tyler Navarro',
    ability: {
      name: 'It\'s About To Get Wild!',
      text: 'Once per battle, at the start of any Ranger turn, any Ranger may draw 2 cards. If they do, add 2 dice to the next attack that Ranger performs during that turn.',
    },
  })
] as Ranger[];

export default DinoChargeRangers;
