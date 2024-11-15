import { Ranger } from '../../GameTypes'
import { createRanger } from '../rangerUtils'

const MightyMorphinRangers = [
  createRanger({
    id: 'mighty_morphin_red_i_jason_lee_scott',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Leadership',
      text: 'Once per battle, a Ranger of your choice may reroll any number of dice during an attack.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_red_i_jason_lee_scott',
    name: 'Jason Lee Scott',
    ability: {
      name: "It's Morphin Time",
      text: 'At the start of each battle, you may initiate a morphing call. If each Ranger in the battle shouts their morphing call, without interrupting each other, the Rangers may ignore the [b]FAST[/b] and [b]GUARD[/b] keywords until the end of the first Ranger turn.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_blue_billy_cranston',
    name: 'Billy Cranston',
    ability: {
      name: 'Strategize',
      text: 'Once per battle, a Ranger of your choice may draw 1 card and then place 1 card from their hand back on top of their deck.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_blue_billy_cranston',
    name: 'Billy Cranston',
    ability: {
      name: 'Brains of the Team',
      text: 'Once per battle, you may point out a canonical weakness of an enemy in this battle. If you do, any Ranger may search their deck or discard pile for 1 card of their choice and add it to their hand. If they searched their deck, they must shuffle it.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_black_i_zack_taylor',
    name: 'Zack Taylor',
    ability: {
      name: 'Hip-Hop Kido',
      text: 'Once per battle, after you defeat an enemy card with an attack, you may deal 1 [b]¤[/b] to another enemy card adjacent to your target.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_black_i_zack_taylor',
    name: 'Zack Taylor',
    ability: {
      name: "Time for my Slamma-Jamma, Double-Whamma, Hip-Hoppit, 'Cause-Ya-Can't-Stop-It, Big-Disgrace, 'Cause-It's-In-Your-Face, Long Shot!",
      text: 'Once per battle, you may say the name of this ability, then toss a hit token onto the table from at least 3 feet away. If it lands in an outer location, deal 2 [b]¤[/b] to an enemy card of your choice. If it lands in the Command Center, deal 3 [b]¤[/b] instead.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_yellow_i_trini_kwan',
    name: 'Trini Kwan',
    ability: {
      name: 'Double Strike',
      text: 'Once per battle, after you play a card, you may immediately play another card with the same name.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_yellow_i_trini_kwan',
    name: 'Trini Kwan',
    ability: {
      name: "I've Seen That Before, I'm Not Afraid of It",
      text: 'Once per battle, after you deal at least 1 [b]¤[/b] to an enemy card, you may deal 2 [b]¤[/b] to another enemy card with the same name.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_pink_i_kimberly_ann_hart',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Quick Shot',
      text: 'At the start of each battle, you may deal 1 [b]¤[/b] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_pink_i_kimberly_ann_hart',
    name: 'Kimberly Ann Hart',
    ability: {
      name: "Gymnast's Balance",
      text: 'Once per battle, you may attempt to stack up to 6 dice within 7 seconds using one hand. After you finish, wait 3 seconds, then gain 1 [b]energy[/b] for every 2 dice in the stack.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_green_i_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Loner',
      text: 'If you are the only player with a Ranger in your location, you may add 1 die to each of your attacks.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_green_i_tommy_oliver_legends_never_die',
    name: 'Tommy Oliver',
    ability: {
      name: 'Legends Never Die',
      text: 'When you discard a card for defense, another Ranger may add that card to their hand. For each Ranger with at least 1 of your cards in their hand, add 1 die to each of your attacks. Return those cards to your discard pile when played or when the battle ends.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_green_i_tommy_oliver_gift_of_the_dragon',
    name: 'Tommy Oliver',
    ability: {
      name: 'Gift of the Dragon',
      text: "Once per battle, you may choose one card in your hand and place it on any other Ranger's character card. That Ranger may then play that card as though it was in their hand. After being played, it goes to the bottom of your deck.",
    },
  }),
  createRanger({
    id: 'mighty_morphin_red_i_dragon_shield_jason_lee_scott',
    name: 'Jason Lee Scott (Dragon Shield)',
    ability: {
      name: 'Legacy of the Dragon',
      text: 'During setup, add the Dragon Shield (Mighty Morphin Red) and Dragon Dagger (Mighty Morphin Red) cards to your starting hand.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_white_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Guardian Light',
      text: 'Once per battle, when any Ranger reveals a card for defense, you may add 1 [b]shield[/b] to that card.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_white_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Rallying Light',
      text: 'Once per battle, if the shared energy pool is empty, you can add 1 [b]energy[/b] to it.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_white_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Live Fearlessly',
      text: 'Once per battle, when any Ranger plays the last card from their hand, you may reduce its energy cost to zero.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_green_ii_matthew_cook',
    name: 'Matthew Cook',
    ability: {
      name: 'Noble Pursuit',
      text: 'Once per battle, you may place up to 2 dice on this card (max 2). Each time you perform an attack during this battle, you may remove 1 die from this card to add 1 die to that attack.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_red_ii_rocky_desantos',
    name: 'Rocky Desantos',
    ability: {
      name: 'Bravery',
      text: 'When you reveal a card for defense, if that card would be placed on the bottom of your deck, you may add it to your hand instead.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_black_ii_adam_park',
    name: 'Adam Park',
    ability: {
      name: 'Adaptable',
      text: 'Once per battle, you may swap a card from your hand with the top card of your discard pile.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_yellow_ii_aisha_campbell',
    name: 'Aisha Campbell',
    ability: {
      name: 'Momentum',
      text: 'Once per battle, after you defeat an enemy card with an attack, gain 1 [b]energy[/b].',
    },
  }),
  createRanger({
    id: 'mighty_morphin_pink_ii_katherine_hillard',
    name: 'Katherine Hillard',
    ability: {
      name: 'Agile',
      text: 'When you suffer damage, before revealing a card for defense, you may look at the top 2 cards of your deck and put them back in any order.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_purple_farkas_bulk_bulkmeier',
    name: 'Farkas "Bulk" Bulkmeier',
    ability: {
      name: 'Big Bully',
      text: 'Once per battle, you may verbally insult 1 enemy card, then discard 1 card from your hand to deal 1 [b]¤[/b] to that enemy card.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_orange_eugene_skull_skullovitch',
    name: 'Eugene "Skull" Skullovitch',
    ability: {
      name: 'Wingman',
      text: 'Once per battle, when another Ranger defeats an enemy card, you may offer them a high five. If they accept, that Ranger may choose 1 card from their discard pile and return it to the bottom of their deck.',
    },
  }),
] as Ranger[]

export default MightyMorphinRangers
