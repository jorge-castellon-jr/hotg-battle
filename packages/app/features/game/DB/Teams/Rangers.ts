import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const Rangers = [
  createRanger({
    id: 'alpha_5_loyal_robot',
    name: '',
    ability: {
      name: 'Aye-yi-yi!',
      text: 'You cannot move from the Command Center. You cannot perform the [b]BATTLE[/b] action, but you may play cards in every battle, regardless of location. When you perform the [b]RECOVER[/b] action, you may allow another Ranger to recover instead.',
    },
  }),
  createRanger({
    id: 'alpha_5_servant_of_zordon',
    name: '',
    ability: {
      name: 'Mission Control',
      text: 'While your figure is in the Command Center, you may participate in battles taking place in outer locations. If you do, you are not considered to be in the battle for the purposes of enemy card effects.',
    },
  }),
  createRanger({
    id: 'alpha_5_supportive_ai',
    name: '',
    ability: {
      name: 'Recovery Boost',
      text: 'When any Ranger performs the [b]RECOVER[/b] action, they may choose to recover up to 2 fewer [b]shields[/b] in order to draw an equal number of cards from the Alpha 5 I deck. When any Ranger plays an Alpha 5 I card, shuffle it back into the Alpha 5 I deck.',
    },
  }),
  createRanger({
    id: 'alpha_5_autonomous_support',
    name: '',
    ability: {
      name: 'A Friend Indeed',
      text: 'At the start of each round, reveal cards from the Alpha 5 deck to refill the row (max 3). Any Ranger may discard 1 card from their hand to play an Alpha 5 card from the row. After resolving it, place it on the bottom of the Alpha 5 deck.',
    },
  }),
  createRanger({
    id: 'rebel_ranger_slayer_kimberly_ann_hart',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Finishing Shot',
      text: 'After the last enemy card in the combat sequence resolves, deal 1 [b]¤[/b] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'magna_defender_i_nameless_warrior',
    name: 'Nameless Warrior',
    ability: {
      name: 'Old Wounds',
      text: 'Once per battle, if there are 2 cards with the same name in your discard pile, you may add 1 of them to your hand.',
    },
  }),
  createRanger({
    id: 'magna_defender_ii_mike_corbett',
    name: 'Mike Corbett',
    ability: {
      name: 'Avenging Knight',
      text: 'Once per battle, after an enemy card deals damage to you, deal 1 [b]¤[/b] to that enemy card.',
    },
  }),
  createRanger({
    id: 'phantom_ranger_i_morphinaut',
    name: 'Morphinaut',
    ability: {
      name: 'Agent Of The Grid',
      text: 'Once per battle, you may flip 1 unused action token to move your figure to this card and recover up to 6 [b]shields[/b]. Return your figure to that location at the start of any Ranger turn or at the end of the battle.',
    },
  }),
  createRanger({
    id: 'phantom_ranger_ii_mysterious_hero',
    name: 'Mysterious Hero',
    ability: {
      name: 'Cloaking Device',
      text: 'When you perform a [b]MOVE[/b] action, you may move your figure to or from this card. During any battle, if your figure is on this card, you may move it to that location to join the battle.',
    },
  }),
  createRanger({
    id: 'ninjor_creator_of_the_power_coins',
    name: 'Creator of the Power Coins',
    ability: {
      name: 'The Power of Ninja!',
      text: 'Once per battle, each Ranger may look at the bottom card of their deck and may swap that card with a card from their hand.',
    },
  }),
  createRanger({
    id: 'black_space_ranger_carlos_vallerte',
    name: 'Carlos Vallerte',
    ability: {
      name: 'Hot Blooded',
      text: 'Once per attack, if you have 2 or fewer cards in your hand, you may reroll any number of dice during that attack.',
    },
  }),
  createRanger({
    id: 'red_space_ranger_andros',
    name: 'Andros',
    ability: {
      name: 'Covert Tactics',
      text: 'Once per battle, any Ranger may ignore the [b]GUARD[/b] keyword when choosing a target for an attack.',
    },
  }),
  createRanger({
    id: 'blue_space_ranger_tj_johnson',
    name: 'T.J. Johnson',
    ability: {
      name: 'Level Headed',
      text: 'Once per battle, when any Ranger performs an attack, they may remove up to 2 dice before rolling to add that much [b]¤[/b] to that attack.',
    },
  }),
  createRanger({
    id: 'yellow_space_ranger_ashley_hammond',
    name: 'Ashley Hammond',
    ability: {
      name: 'Optimism',
      text: 'Once per battle, when any Ranger rolls any [b]○[/b] results during an attack, gain 1 [b]energy[/b].',
    },
  }),
  createRanger({
    id: 'pink_space_ranger_cassie_chan',
    name: 'Cassie Chan',
    ability: {
      name: 'Ready to Rock',
      text: 'Once per battle, any Ranger may discard the top card of their deck, then choose 1 card from their discard pile and place it on top of their deck.',
    },
  }),
  createRanger({
    id: 'santa_claus_father_christmas',
    name: 'Father Christmas',
    ability: {
      name: 'Bag of Gifts',
      text: 'At the start of each battle, you may give 1 card from your hand to another Ranger as a gift. When another Ranger plays a card, they may reveal 1 gift, resolve its [b]GIFT[/b] effect, and then place it in your discard pile.',
    },
  }),
  createRanger({
    id: 'silver_space_ranger_zhane',
    name: 'Zhane',
    ability: {
      name: 'Silver Charm',
      text: 'Once per battle, when you gain any amount of [b]energy[/b], increase that amount by 1.',
    },
  }),
  createRanger({
    id: 'violet_solar_ranger_ellarien',
    name: 'Ellarien',
    ability: {
      name: 'A Light in the Darkness',
      text: 'Once per battle, when you add [b]energy[/b] from your personal storage to the shared energy pool, gain 1 [b]energy[/b].',
    },
  }),
  createRanger({
    id: 'titanium_ranger_ryan_mitchell',
    name: 'Ryan Mitchell',
    ability: {
      name: 'Unbreakable',
      text: 'Once per battle, if your deck is reduced to zero cards, you are not defeated. Instead, recover cards from your discard pile with a total of up to 3 [b]shields[/b].',
    },
  }),
  createRanger({
    id: 'green_samurai_ranger_cameron_watanabe',
    name: 'Cameron Watanabe',
    ability: {
      name: 'Super Samurai Mode',
      text: 'At the start of each battle, if Samurai Shield is not in your hand, you [b]must[/b] search your deck and discard pile for that card and swap it with a card from your hand. If you searched your deck, shuffle it.',
    },
  }),
  createRanger({
    id: 'quantum_ranger_eric_myers',
    name: 'Eric Myers',
    ability: {
      name: 'Quantum Power',
      text: 'At the start of each battle, roll 2 dice and place 1 of them on this card. This is your quantum die. Once during each of your attacks, you may swap 1 die from the attack with your quantum die. The swapped die becomes your new quantum die.',
    },
  }),
  createRanger({
    id: 'black_lion_warrior_jarrod',
    name: 'Jarrod',
    ability: {
      name: 'Ferocity',
      text: 'Once per Ranger turn, instead of playing a card, you may discard 1 card from your hand to perform an attack with 2 dice.',
    },
  }),
  createRanger({
    id: 'mercury_ranger_tyzonn',
    name: 'Tyzonn',
    ability: {
      name: 'Mercurial Force',
      text: 'Once per battle, before any Ranger rolls any number of dice, you may use this ability. If you do, convert all [b]○[/b] results rolled to [b]¤¤[/b] results and vice versa.',
    },
  }),
  createRanger({
    id: 'wolf_warrior_leanbow',
    name: 'Leanbow',
    ability: {
      name: 'For Honor',
      text: 'Once per battle, when any Ranger reveals a card for defense with no [b]★[/b] ability, you may reveal a card from your hand and use its [b]★[/b] ability as though it were revealed for defense.',
    },
  }),
  createRanger({
    id: 'white_aquitar_ranger_delphine',
    name: 'Delphine',
    ability: {
      name: 'Honor Of Aquitar',
      text: 'Once per battle, when any Ranger rolls a [b]○[/b] result during an attack, deal 1 [b]¤[/b] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'pink_galaxy_ranger_ii_karone',
    name: 'Karone',
    ability: {
      name: 'Know Your Enemy',
      text: 'Once per battle, during any Ranger attack, if an effect allows the [b]GUARD[/b] keyword to be ignored, you may gain 1 [b]energy[/b] or deal 1 [b]¤[/b] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'white_mystic_ranger_udonna',
    name: 'Udonna',
    ability: {
      name: 'Reserved Strength',
      text: 'Once per battle, during any Ranger attack, you may convert 1 [b]¤[/b] or [b]¤¤[/b] result to a [b]○[/b] result. If you do, gain 2 [b]energy[/b].',
    },
  }),
  createRanger({
    id: 'doctor_k_genius_scientist',
    name: 'Genius Scientist',
    ability: {
      name: 'Mission Control',
      text: 'While your figure is in the Command Center, you may participate in battles taking place in outer locations. If you do, you are not considered to be in the battle for the purposes of enemy card effects.',
    },
  }),
  createRanger({
    id: 'dragon_armor_ranger_trini_kwan',
    name: 'Trini Kwan',
    ability: {
      name: 'Black Dragon',
      text: 'At the start of each battle, place the Dragon Claw token on an enemy card of your choice. Rangers may ignore the [b]GUARD[/b] keyword when attacking that card until the end of the battle.',
    },
  }),
  createRanger({
    id: 'navy_thunder_ranger_blake_bradley',
    name: 'Blake Bradley',
    ability: {
      name: 'Crashing Thunder',
      text: 'Once per battle, after any Ranger attacks an enemy card with the [b]GUARD[/b] keyword, you may deal 1 [b]¤[/b] to an enemy card adjacent to the target.',
    },
  }),
  createRanger({
    id: 'crimson_thunder_ranger_hunter_bradley',
    name: 'Hunter Bradley',
    ability: {
      name: 'Roaring Thunder',
      text: 'Once per battle, after any Ranger attacks an enemy card  without the [b]GUARD[/b] keyword, gain 1 [b]energy[/b].',
    },
  }),
  createRanger({
    id: 'blue_senturion_defender_of_intergalactic_law',
    name: 'Defender Of Intergalactic Law',
    ability: {
      name: 'In The Name Of The Law',
      text: 'Once per battle, when any Ranger plays an attack card, if that card\'s effect text refers to a keyword ([b]FAST[/b], [b]GUARD[/b], [b]PASSIVE[/b]), gain 1 [b]energy[/b].',
    },
  })
] as Ranger[];

export default Rangers;
