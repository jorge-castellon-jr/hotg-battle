import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const ZeoRangers = [
  createRanger({
    id: 'zeo_ranger_iv_green_adam_park',
    name: 'Adam Park',
    ability: {
      name: 'Vanguard',
      text: 'Each time an enemy card deals damage to you, gain 1 hit token and place it on this card (max. 3). You may spend hit tokens from this card to trigger special abilities on your combat cards.',
    },
  }),
  createRanger({
    id: 'zeo_ranger_iii_blue_rocky_desantos',
    name: 'Rocky Desantos',
    ability: {
      name: 'Called Shot',
      text: 'At the start of each battle, you may attach 1 energy token to an enemy card of your choice. When an enemy card is defeated, move all attached energy tokens from that card to the shared pool.',
    },
  }),
  createRanger({
    id: 'zeo_ranger_i_pink_katherine_hillard',
    name: 'Katherine Hillard',
    ability: {
      name: 'One Step Ahead',
      text: 'You may look at the top card of your deck at any time. You may play that card as though it were in your hand.',
    },
  }),
  createRanger({
    id: 'zeo_ranger_ii_yellow_tanya_sloan',
    name: 'Tanya Sloan',
    ability: {
      name: 'Critical Strike',
      text: 'Once during each of your attacks, if you roll any [b]¤¤[/b] die results, add 1 [b]¤[/b] to that attack.',
    },
  }),
  createRanger({
    id: 'zeo_gold_i_trey_of_triforia',
    name: 'Trey of Triforia',
    ability: {
      name: 'Power of Triforia',
      text: 'Each time you play a card, in addition to its normal effects, resolve the [GOLD] ability on that card. You may spend 1 [b]energy[/b] to resolve that ability a second time.',
    },
  }),
  createRanger({
    id: 'zeo_gold_ii_jason_lee_scott',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Heart of Gold',
      text: 'Each time you play a card, in addition to its normal effects, you may reveal 1 card from your hand and resolve the [GOLD] ability on the revealed card. If you do, place the revealed card on the bottom of your deck and draw 1 card.',
    },
  }),
  createRanger({
    id: 'zeo_ranger_v_red_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Shining Star',
      text: 'Once per battle, you may reveal 1 card from your hand and use the [b]★[/b] ability on that card as if it were revealed for defense.',
    },
  })
] as Ranger[];

export default ZeoRangers;
