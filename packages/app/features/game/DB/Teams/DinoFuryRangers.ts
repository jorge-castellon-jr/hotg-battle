import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const DinoFuryRangers = [
  createRanger({
    id: 'dino_fury_green_ranger_izzy_garcia',
    name: 'Izzy Garcia',
    ability: {
      name: 'Eye Of The Tiger',
      text: 'Once per battle, during any Ranger turn, you may use this ability instead of playing a card. Perform an attack with a number of dice equal to the number of chromafury ([b]Chromafury[/b]) icons in your hand. Then shuffle your hand into your deck and draw 2 cards.',
    },
  })
] as Ranger[];

export default DinoFuryRangers;
