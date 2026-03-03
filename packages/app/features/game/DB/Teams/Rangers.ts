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
,
  createRanger({
    id: 'jason_lee_scott_leadership',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Leadership',
      text: 'Once per battle, a Ranger of your choice may reroll any number of dice during an attack.',
    },
  }),
  createRanger({
    id: 'jason_lee_scott_it_s_morphin_time',
    name: 'Jason Lee Scott',
    ability: {
      name: 'It’s Morphin Time',
      text: 'At the start of each battle, you may initiate a morphing call. If each Ranger in the battle shouts their morphing call, without interrupting each other, the Rangers may ignore the FAST and GUARD keywords until the end of the first Ranger turn.',
    },
  }),
  createRanger({
    id: 'jason_lee_scott_legacy_of_the_dragon',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Legacy of the Dragon',
      text: 'During setup, add the Dragon Shield (Mighty Morphin Red) and Dragon Dagger (Mighty Morphin Red) cards to your starting hand.',
    },
  }),
  createRanger({
    id: 'grace_sterling_the_greater_good',
    name: 'Grace Sterling',
    ability: {
      name: 'The Greater Good',
      text: 'Once per battle, you may remove 2 dice from any Ranger’s attack after rolling. If you do, remove 1 foot soldier figure from another location and add it to the experience track.',
    },
  }),
  createRanger({
    id: 'rocky_desantos_bravery',
    name: 'Rocky DeSantos',
    ability: {
      name: 'Bravery',
      text: 'When you reveal a card for defense, if that card would be placed on the bottom of your deck, you may add it to your hand instead.',
    },
  }),
  createRanger({
    id: 'trini_kwan_double_strike',
    name: 'Trini Kwan',
    ability: {
      name: 'Double Strike',
      text: 'Once per battle, after you play a card, you may immediately play another card with the same name.',
    },
  }),
  createRanger({
    id: 'trini_kwan_i_ve_seen_that_before_i_m_not_afraid_of_it',
    name: 'Trini Kwan',
    ability: {
      name: 'I’ve Seen That Before, I’m Not Afraid of It',
      text: 'Once per battle, after you deal at least 1 [HIT] to an enemy card, you may deal 2 [HIT] to another enemy card with the same name.',
    },
  }),
  createRanger({
    id: 'mihn_kwan_',
    name: 'Mihn Kwan',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'aisha_campbell_momentum',
    name: 'Aisha Campbell',
    ability: {
      name: 'Momentum',
      text: 'Once per battle, after you defeat an enemy card with an attack, gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'billy_cranston_strategize',
    name: 'Billy Cranston',
    ability: {
      name: 'Strategize',
      text: 'Once per battle, a Ranger of your choice may draw 1 card and then place 1 card from their hand back on top of their deck.',
    },
  }),
  createRanger({
    id: 'billy_cranston_brains_of_the_team',
    name: 'Billy Cranston',
    ability: {
      name: 'Brains of the Team',
      text: 'Once per battle, you may point out a canonical weakness of an enemy in this battle. If you do, any Ranger may search their deck or discard pile for 1 card of their choice and add it to their hand. If they searched their deck, they must shuffle it. Still....',
    },
  }),
  createRanger({
    id: 'billy_cranston_still',
    name: 'Billy Cranston',
    ability: {
      name: 'Still ???',
      text: 'Once per battle,',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_quick_shot',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Quick Shot',
      text: 'At the start of each battle, you may deal 1 [HIT] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_gymnast_s_balance',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Gymnast’s Balance',
      text: 'Once per battle, you may attempt to stack up to 6 dice within 7 seconds using one hand. After you finish, wait 3 seconds, then gain 1 [ENERGY] for every 2 dice in the stack.',
    },
  }),
  createRanger({
    id: 'olivia_hart_heart',
    name: 'Olivia Hart',
    ability: {
      name: 'Heart',
      text: 'At the start',
    },
  }),
  createRanger({
    id: 'kat_hillard_agile',
    name: 'Kat Hillard',
    ability: {
      name: 'Agile',
      text: 'When you suffer damage, before revealing a card for defense, you may look at the top 2 cards of your deck and put them back in any order.',
    },
  }),
  createRanger({
    id: 'zack_taylor_hip_hop_kido',
    name: 'Zack Taylor',
    ability: {
      name: 'Hip-Hop Kido',
      text: 'Once per battle, after you defeat an enemy card with an attack, you may deal 1 [HIT] to another enemy card adjacent to your target.',
    },
  }),
  createRanger({
    id: 'zack_taylor_time_for_my_slamma_jamma_double_whamma_hip_hoppit_cause_ya_can_t_stop_it_big_disgrace_cause_it_s_in_your_face_long_shot',
    name: 'Zack Taylor',
    ability: {
      name: 'Time for my Slamma-Jamma, Double-Whamma, Hip-Hoppit, ‘Cause-Ya-Can’t-Stop-It, Big-Disgrace, ‘Cause-It’s-In-Your-Face, Long-Shot!',
      text: 'Once per battle, you may say the name of this ability, then toss a hit token onto the table from at least 3 feet away. If it lands on the outer location, deal 2 [HIT] to an enemy card of your choice. If it lands in the Command Center, deal 3 [HIT] instead.',
    },
  }),
  createRanger({
    id: 'adam_park_adaptable',
    name: 'Adam Park',
    ability: {
      name: 'Adaptable',
      text: 'Once per battle, you may swap a card from your hand with the top card of your discard pile.',
    },
  }),
  createRanger({
    id: 'adam_park_defender_vest',
    name: 'Adam Park',
    ability: {
      name: 'Defender Vest',
      text: 'Once per battle, when any Ranger suffers damage, you may discard 1 card from your hand. If you do...',
    },
  }),
  createRanger({
    id: 'tommy_oliver_loner',
    name: 'Tommy Oliver',
    ability: {
      name: 'Loner',
      text: 'If you are the only player with a Ranger in your location, you may add 1 die to each of your attacks.',
    },
  }),
  createRanger({
    id: 'tommy_oliver_gift_of_the_dragon',
    name: 'Tommy Oliver',
    ability: {
      name: 'Gift of the Dragon',
      text: 'Once per battle, you may place 1 card from your hand on another Ranger’s character card. That Ranger may play that card as if it were in their hand. Place that card at the bottom of your deck after it resolves.',
    },
  }),
  createRanger({
    id: 'tommy_oliver_legends_never_die',
    name: 'Tommy Oliver',
    ability: {
      name: 'Legends Never Die',
      text: 'When you discard a card for defense, another Ranger may add that card to their hand. For each Ranger with at least 1 of your cards in their hand, add 1 die to each of your attacks. Return those cards to your discard pile when played or when the battle ends.',
    },
  }),
  createRanger({
    id: 'matthew_cook_noble_pursuit',
    name: 'Matthew Cook',
    ability: {
      name: 'Noble Pursuit',
      text: 'Once per battle, you may place up to 2 dice on this card (max 2). Each time you perform an attack during this battle, you may remove 1 die from this card to add 1 die to that attack.',
    },
  }),
  createRanger({
    id: 'olivia_hart_soul',
    name: 'Olivia Hart',
    ability: {
      name: 'Soul...',
      text: 'Each time...',
    },
  }),
  createRanger({
    id: 'tommy_oliver_guardian_light',
    name: 'Tommy Oliver',
    ability: {
      name: 'Guardian Light',
      text: 'Once per battle, when any Ranger reveals a card for defense, you may add 1 [SHIELD] to that card.',
    },
  }),
  createRanger({
    id: 'tommy_oliver_rallying_light',
    name: 'Tommy Oliver',
    ability: {
      name: 'Rallying Light',
      text: 'Once per battle, if there is no [ENERGY] in the shared pool, you may gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'tommy_oliver_live_fearlessly',
    name: 'Tommy Oliver',
    ability: {
      name: 'Live Fearlessly',
      text: 'Once per battle, when any Ranger plays the last card from their hand, you may reduce its energy cost to zero.',
    },
  }),
  createRanger({
    id: 'farkas_bulk_bulkmeier_big_bully',
    name: 'Farkas “Bulk” Bulkmeier',
    ability: {
      name: 'Big Bully',
      text: 'Once per battle, you may verbally insult 1 enemy card, then discard 1 card from your hand to deal 1 [HIT] to that enemy card.',
    },
  }),
  createRanger({
    id: 'eugene_skull_skullovitch_wingman',
    name: 'Eugene “Skull” Skullovitch',
    ability: {
      name: 'Wingman',
      text: 'Once per battle, when another Ranger defeats an enemy card, you may offer then a high five. If they accept, that Ranger may choose 1 card from their discard pile and return it to the bottom of their deck.',
    },
  }),
  createRanger({
    id: 'alpha_5_ai_yi_yi',
    name: 'Alpha 5',
    ability: {
      name: 'Ai Yi Yi',
      text: 'You cannot move from the Command Center. You cannot perform the BATTLE action, but you are considered to be participating in every battle, regardless of location, for the purposes of drawing and playing cards. When you perform the RECOVER action, you may allow another Ranger to recover instead.',
    },
  }),
  createRanger({
    id: 'alpha_5_recovery_boost',
    name: 'Alpha 5',
    ability: {
      name: 'Recovery Boost',
      text: 'Supportive A.I. is not a Ranger. When any Ranger performs the RECOVER action, they may choose to recover up to 2 fewer [SHIELD] in order to draw an equal number of cards from the Alpha 5 deck. When an Alpha 5 card would be discarded, shuffle it back into the Alpha 5 deck instead.',
    },
  }),
  createRanger({
    id: 'alpha_5_mission_control',
    name: 'Alpha 5',
    ability: {
      name: 'Mission Control',
      text: 'While your figure is in the Command Center, you may participate in battles taking place in the outer locations. If you do, you are not considered to be in the battle for the purposes of enemy card effects.',
    },
  }),
  createRanger({
    id: 'alpha_5_a_friend_indeed',
    name: 'Alpha 5',
    ability: {
      name: 'A Friend Indeed',
      text: 'At the start of each round, reveal cards from the Alpha 5 deck to refill the row (max 3). Any Ranger may discard 1 card from their hand to play an Alpha 5 card from the row. After resolving it, place it on the bottom of the Alpha 5 deck.',
    },
  }),
  createRanger({
    id: 'ninjor_the_power_of_ninja',
    name: 'Ninjor',
    ability: {
      name: 'The Power of Ninja!',
      text: 'Once per battle, each Ranger may look at the bottom card of their deck and may swap that card with a card from their hand.',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_finishing_shot',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Finishing Shot',
      text: 'After the Last enemy card in the combat sequence resolves, deal 1  to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'trini_kwan_black_dragon',
    name: 'Trini Kwan',
    ability: {
      name: 'Black Dragon',
      text: 'At the start of each battle, place the Dragon Claw token on an enemy card of your choice. Rangers may ignore the GUARD keyword when attacking that card until the end of the battle.',
    },
  }),
  createRanger({
    id: 'zordon_eltrain_wisdom',
    name: 'Zordon',
    ability: {
      name: 'Eltrain Wisdom',
      text: 'Once per battle, when any Ranger performs an attack, they may divide the  from that attack among any number of targets.',
    },
  }),
  createRanger({
    id: 'nikolai_chukarin_',
    name: 'Nikolai Chukarin',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'jamie_gilmore_',
    name: 'Jamie Gilmore',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'terona_washington_',
    name: 'Terona Washington',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'daniel_o_halloran_',
    name: 'Daniel O\'Halloran',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'adam_park_combo_fighter',
    name: 'Adam Park',
    ability: {
      name: 'Combo Fighter',
      text: 'Each time you defeat an enemy card, place 1 hit token on this card (max 3). You may spend hit tokens from this card to trigger special abilities on your combat cards.',
    },
  }),
  createRanger({
    id: 'tommy_oliver_',
    name: 'Tommy Oliver',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'rocky_desantos_',
    name: 'Rocky DeSantos',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'billy_cranston_',
    name: 'Billy Cranston',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'aisha_campbell_',
    name: 'Aisha Campbell',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_',
    name: 'Kimberly Ann Hart',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kat_hillard_',
    name: 'Kat Hillard',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'jason_lee_scott_omega_fire_power',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Omega Fire Power',
      text: 'Once per battle, when any Ranger performs an attack, you may remove all [MISS] results from that attack. If you do, the next time any Ranger performs an attack in this battle, add that many dice to that attack.',
    },
  }),
  createRanger({
    id: 'trini_kwan_double_fire',
    name: 'Trini Kwan',
    ability: {
      name: 'Double Fire',
      text: 'Once per battle, after any Ranger resolves an attack card, they may discard a card from their hand with the same name to perform an additional attack with the same number of dice.',
    },
  }),
  createRanger({
    id: 'trini_kwan_omega_earth_power',
    name: 'Trini Kwan',
    ability: {
      name: 'Omega Earth Power',
      text: 'Once per battle, when any Ranger plays an attack card, they may discard another card with the same name from their hand. If they do, add 2 dice to that attack.',
    },
  }),
  createRanger({
    id: 'zack_taylor_omega_air_power',
    name: 'Zack Taylor',
    ability: {
      name: 'Omega Air Power',
      text: 'Once per battle, at the start of any Ranger turn, you may remove 1 hit token from an enemy card of your choice. If you do, place 1 hit token each on up to 2 other enemy cards.',
    },
  }),
  createRanger({
    id: 'yale_of_saard_omega_beast_power',
    name: 'Yale of Saard',
    ability: {
      name: 'Omega Beast Power',
      text: 'Each time you roll a [HIT][HIT] result, add 1 die to that roll. If you then roll a [HIT][HIT] result on that die, repeat the process.',
    },
  }),
  createRanger({
    id: 'kiya_kyatyl_omega_water_power',
    name: 'Kiya Kyatyl',
    ability: {
      name: 'Omega Water Power',
      text: '???',
    },
  }),
  createRanger({
    id: 'drakkon_',
    name: 'Drakkon',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'delphine_honor_of_aquitar',
    name: 'Delphine',
    ability: {
      name: 'Honor of Aquitar',
      text: 'Once per battle, When any Ranger rolls a [MISS] result during an attack, deal 1 [HIT] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'kat_hillard_one_step_ahead',
    name: 'Kat Hillard',
    ability: {
      name: 'One Step Ahead',
      text: 'You may look at the top card of your deck at any time. You may play that card as though it were in your hand.',
    },
  }),
  createRanger({
    id: 'tanya_sloan_critical_strike',
    name: 'Tanya Sloan',
    ability: {
      name: 'Critical Strike',
      text: 'Once during each of your attacks, if you roll any [HIT][HIT] die results add 1 [HIT] to that attack.',
    },
  }),
  createRanger({
    id: 'rocky_desantos_called_shot',
    name: 'Rocky DeSantos',
    ability: {
      name: 'Called Shot',
      text: 'At the start of each battle, you may attach 1 energy token to an enemy card of your choice. When an enemy card is defeated, move all attached energy tokens from that card to the shared pool.',
    },
  }),
  createRanger({
    id: 'adam_park_vanguard',
    name: 'Adam Park',
    ability: {
      name: 'Vanguard',
      text: 'Each time an enemy card deals damage to you, gain 1 hit token and place it on this card (max 3). You may spend hit tokens from this card to trigger special abilities on your combat cards.',
    },
  }),
  createRanger({
    id: 'tommy_oliver_shining_star',
    name: 'Tommy Oliver',
    ability: {
      name: 'Shining Star',
      text: 'Once per battle, you may reveal 1 card from your hand and use the ★ ability on that card as if it were revealed for defense.',
    },
  }),
  createRanger({
    id: 'trey_of_triforia_power_of_triforia',
    name: 'Trey of Triforia',
    ability: {
      name: 'Power of Triforia',
      text: 'Each time you play a card, in addition to its normal effects, resolve the 王 ability on that card. You may spend 1 [ENERGY] to resolve that ability a second time.',
    },
  }),
  createRanger({
    id: 'jason_lee_scott_heart_of_gold',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Heart of Gold',
      text: 'Each time you play a card, in addition to its normal effects, you may reveal 1 card from your hand and resolve the 王 ability on the revealed card. If you do, place the revealed card on the bottom of your deck and draw 1 card.',
    },
  }),
  createRanger({
    id: 'tommy_oliver_shift_into_turbo',
    name: 'Tommy Oliver',
    ability: {
      name: 'Shift Into Turbo',
      text: 'Once per battle, when any Ranger plays a card with an energy cost of X, they may resolve it as though they spent +1[ENERGY]',
    },
  }),
  createRanger({
    id: 't_j_johnson_',
    name: 'T.J. Johnson',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'justin_stewart_kid_genius',
    name: 'Justin Stewart',
    ability: {
      name: 'Kid Genius',
      text: 'Your maximum hand size is 3. Once per battle, if you have no cards in your hand, you may gain 1 [ENERGY] and play 1 card from your discard pile. Then, place that card on the bottom of your deck.',
    },
  }),
  createRanger({
    id: 'blue_senturion_in_the_name_of_the_law',
    name: 'Blue Senturion',
    ability: {
      name: 'In the Name of the Law',
      text: 'Once per battle, when any Ranger plays an attack card, if that card’s effect text refers to a keyword (FAST, GUARD, PASSIVE) gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'phantom_ranger_cloaking_device',
    name: 'Phantom Ranger',
    ability: {
      name: 'Cloaking Device',
      text: 'When you perform a MOVE action, you may move your figure to or from this card. During any battle, if your figure is on this card, you may move it to that location to join the battle.',
    },
  }),
  createRanger({
    id: 'morphinaut_agent_of_the_grid',
    name: 'Morphinaut',
    ability: {
      name: 'Agent of the Grid',
      text: 'Once per battle, you may flip 1 unused action token to move your figure to this card and recover up to 6 [SHIELD]. Return your figure to that location at the start of any Ranger turn or at the end of the battle.',
    },
  }),
  createRanger({
    id: 'andros_covert_tactics',
    name: 'Andros',
    ability: {
      name: 'Covert Tactics',
      text: 'Once per battle, any Ranger may ignore the GUARD keyword when choosing a target for an attack.',
    },
  }),
  createRanger({
    id: 'carlos_vallerte_hot_blooded',
    name: 'Carlos Vallerte',
    ability: {
      name: 'Hot Blooded',
      text: 'Once Per attack, if you have 2 or fewer cards in your hand, you may reroll any number of dice during that attack.',
    },
  }),
  createRanger({
    id: 't_j_johnson_level_headed',
    name: 'T.J. Johnson',
    ability: {
      name: 'Level Headed',
      text: 'Once per battle, when any Ranger performs an attack, they may remove up to 2 dice before rolling to add that much [HIT] to that attack.',
    },
  }),
  createRanger({
    id: 'ashley_hammond_optimism',
    name: 'Ashley Hammond',
    ability: {
      name: 'Optimism',
      text: 'Once per battle, when any Ranger rolls any [MISS] results during an attack, gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'cassie_chan_ready_to_rock',
    name: 'Cassie Chan',
    ability: {
      name: 'Ready to Rock',
      text: 'Once per battle, any Ranger may discard the top card of their deck, then choose 1 card from their discard pile and place it on top of their deck.',
    },
  }),
  createRanger({
    id: 'zhane_silver_charm',
    name: 'Zhane',
    ability: {
      name: 'Silver Charm',
      text: 'Once per battle, when you gain any amount of [ENERGY], increase that amount by 1.',
    },
  }),
  createRanger({
    id: 'karone_know_your_enemy',
    name: 'Karone',
    ability: {
      name: 'Know Your Enemy',
      text: 'Once per battle, during any Ranger attack, if an effect allows the GUARD keyword to be ignored, you may gain 1 [ENERGY] or deal 1 [HIT] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'mike_corbett_avenging_knight',
    name: 'Mike Corbett',
    ability: {
      name: 'Avenging Knight',
      text: 'Once per battle, after an enemy card deals damage to you, deal 1 [HIT] to that enemy card.',
    },
  }),
  createRanger({
    id: 'magna_defender_old_wounds',
    name: 'Magna Defender',
    ability: {
      name: 'Old Wounds',
      text: 'Once per battle, if there are 2 cards with the same name in your discard pile, you may add 1 of them to your hand.',
    },
  }),
  createRanger({
    id: 'ryan_mitchell_unbreakable',
    name: 'Ryan Mitchell',
    ability: {
      name: 'Unbreakable',
      text: 'Once per battle, if your deck is reduced to zero cards, you are not defeated. Instead, recover cards from your discard pile with a total of up to 3 [SHIELD].',
    },
  }),
  createRanger({
    id: 'wes_collins_willful_strength',
    name: 'Wes Collins',
    ability: {
      name: 'Willful Strength',
      text: 'Once per battle, when any Ranger plays an attack card, you may reveal an attack card with the same energy cost from your hand. Treat the played card as having the attack value of the revealed card (if neither attack value is special).',
    },
  }),
  createRanger({
    id: 'lucas_kendall_flexibility',
    name: 'Lucas Kendall',
    ability: {
      name: 'Flexibility',
      text: 'Once per battle, when any Ranger reveals a card for defense, you may choose a card from your hand. Treat the revealed card as having the shield value of the chosen card.',
    },
  }),
  createRanger({
    id: 'trip_future_vision',
    name: 'Trip',
    ability: {
      name: 'Future Vision',
      text: 'Once per battle, you may look at the top card of any enemy deck. You may swap that card with a non-PASSIVE enemy card from the same deck that has not yet resolved in the combat sequence. Then shuffle that enemy deck.',
    },
  }),
  createRanger({
    id: 'katie_walker_heavy_force',
    name: 'Katie Walker',
    ability: {
      name: 'Heavy Force',
      text: 'Once per battle, when any Ranger gains [ENERGY], you may reduce the amount gained by up to 2 [ENERGY], then deal an equal amount of [HIT] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'jen_scotts_contingency',
    name: 'Jen Scotts',
    ability: {
      name: 'Contingency',
      text: 'At the start of each battle, you may choose 2 enemy cards of the same type (F, M, B) and swap their positions in the combat sequence.',
    },
  }),
  createRanger({
    id: 'eric_meyers_quantum_power',
    name: 'Eric Meyers',
    ability: {
      name: 'Quantum Power',
      text: 'At the start of each battle, roll 2 dice and place 1 of them on this card. This is your quantum die. Once during each of your attacks, you may swap 1 die from the attack with your quantum die. The swapped die becomes your new quantum die.',
    },
  }),
  createRanger({
    id: 'joe_shih_',
    name: 'Joe Shih',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'jen_drake_',
    name: 'Jen Drake',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'alex_drake_',
    name: 'Alex Drake',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'merrick_baliton_lone_wolf',
    name: 'Merrick Baliton',
    ability: {
      name: 'Lone Wolf',
      text: 'During each battle, until another Ranger’s card is played, reduce the energy cost of all Lunar Wolf Ranger cards by 1.',
    },
  }),
  createRanger({
    id: 'hunter_bradley_roaring_thunder',
    name: 'Hunter Bradley',
    ability: {
      name: 'Roaring Thunder',
      text: 'Once per battle, after any Ranger attacks an enemy card without the GUARD keyword, gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'blake_bradley_crashing_thunder',
    name: 'Blake Bradley',
    ability: {
      name: 'Crashing Thunder',
      text: 'Once per battle, after any Ranger attacks an enemy card with the GUARD keyword, you may deal 1 [HIT] to an enemy card adjacent to the target.',
    },
  }),
  createRanger({
    id: 'cameron_watanabe_super_samurai_mode',
    name: 'Cameron Watanabe',
    ability: {
      name: 'Super Samurai Mode',
      text: 'At the start of each battle, if Samurai Shield is not in your hand, you must search your deck and discard pile for that card and swap it with a card from your hand. If you searched your deck, shuffle it.',
    },
  }),
  createRanger({
    id: 'shane_clarke_',
    name: 'Shane Clarke',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'tori_hanson_',
    name: 'Tori Hanson',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'dustin_brooks_',
    name: 'Dustin Brooks',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'marah_',
    name: 'Marah',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'connor_mcknight_swift_striker',
    name: 'Connor McKnight',
    ability: {
      name: 'Swift Striker',
      text: 'If there is an enemy card in play with the FAST keyword, you may take the first turn of the battle. If you do, remove 1 die before rolling from the first attack you perform during this battle.',
    },
  }),
  createRanger({
    id: 'kira_ford_perfect_pitch',
    name: 'Kira Ford',
    ability: {
      name: 'Perfect Pitch',
      text: 'Once per attack, when you roll a [HIT][HIT] result, gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'ethan_james_clever_solution',
    name: 'Ethan James',
    ability: {
      name: 'Clever Solution',
      text: 'Once per attack, when you roll a BLANK result, any Ranger may draw 1 card.',
    },
  }),
  createRanger({
    id: 'tommy_oliver_legendary_mentor',
    name: 'Tommy Oliver',
    ability: {
      name: 'Legendary Mentor',
      text: 'Once per battle, before a Ranger performs an attack, you may add 1 die to that attack.',
    },
  }),
  createRanger({
    id: 'trent_mercer_fierce_impact',
    name: 'Trent Mercer',
    ability: {
      name: 'Fierce Impact',
      text: 'Once per battle, after you resolve an attack, if the attack dealt at least 3 [HIT], deal 1 [HIT] to an enemy card adjacent to the target.',
    },
  }),
  createRanger({
    id: 'jack_landors_phantom_leader',
    name: 'Jack Landors',
    ability: {
      name: 'Phantom Leader',
      text: 'Once per battle, when any Ranger resolves an attack card with an energy cost of zero, you may spend 1 [ENERGY] to immediately play 1 card with an energy cost of zero.',
    },
  }),
  createRanger({
    id: 'schuyler_sky_tate_barrier_field',
    name: 'Schuyler “Sky” Tate',
    ability: {
      name: 'Barrier Field',
      text: 'Once per battle, when any Ranger suffers damage, you may spend 1 [ENERGY] to reduce that damage by 2.',
    },
  }),
  createRanger({
    id: 'bridge_carson_psychometry',
    name: 'Bridge Carson',
    ability: {
      name: 'Psychometry',
      text: 'Once per battle, you may spend 1 [ENERGY] to reduce the energy cost of the next card any Ranger plays by 2.',
    },
  }),
  createRanger({
    id: 'j_j_oliver_heir_of_the_dragon',
    name: 'J.J. Oliver',
    ability: {
      name: 'Heir of the Dragon',
      text: 'Each time another Ranger performs an attack, place 1 die on this card (max 6). Once per...',
    },
  }),
  createRanger({
    id: 'elizabeth_z_delgado_replication',
    name: 'Elizabeth “Z” Delgado',
    ability: {
      name: 'Replication',
      text: 'Once per battle, after any Ranger rolls dice for an attack, you may spend 1 [ENERGY] to choose 1 die result and add 1 die to the attack with the same result.',
    },
  }),
  createRanger({
    id: 'sydney_syd_drew_transmutation',
    name: 'Sydney “Syd” Drew',
    ability: {
      name: 'Transmutation',
      text: 'Once per battle, after any Ranger rolls at least 1 [MISS] result during an attack, you may spend 1 [ENERGY] and remove a different die from that attack to convert the [MISS] result to a [HIT][HIT] result',
    },
  }),
  createRanger({
    id: 'anubis_doggie_cruger_squad_commander',
    name: 'Anubis “Doggie” Cruger',
    ability: {
      name: 'Squad Commander',
      text: 'Once per battle, during any Ranger turn, you may spend 1 [ENERGY] to allow another Ranger to perform an attack with 3 dice instead of playing a card.',
    },
  }),
  createRanger({
    id: 'schuyler_sky_tate_',
    name: 'Schuyler "Sky" Tate',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'bridge_carson_',
    name: 'Bridge Carson',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'bridge_carson_',
    name: 'Bridge Carson',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'lina_song_',
    name: 'Lina Song',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'lina_song_',
    name: 'Lina Song',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'nova_',
    name: 'Nova',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'boom_',
    name: 'Boom ',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'schuyler_sky_tate_',
    name: 'Schuyler "Sky" Tate',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 's_p_d_gold_ranger_',
    name: 'S.P.D. Gold Ranger',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'nick_russell_fearsome_as_fire',
    name: 'Nick Russell',
    ability: {
      name: 'Fearsome as Fire',
      text: 'Once per battle, after any Ranger rolls a [HIT][HIT] result during an attack, you may remove that die from that attack. If you do, deal 1 [HIT] each to up to 3 enemy cards.',
    },
  }),
  createRanger({
    id: 'chip_thorn_fast_as_lightning',
    name: 'Chip Thorn',
    ability: {
      name: 'Fast as Lightning',
      text: 'Once per battle, after you resolve an attack card, you may discard the top card of your deck to immediately play 1 maneuver card.',
    },
  }),
  createRanger({
    id: 'madison_rocca_fluid_as_the_sea',
    name: 'Madison Rocca',
    ability: {
      name: 'Fluid as the Sea',
      text: 'Once per battle, you may raise or lower the energy cost of an attack card by 1. If you raise its energy cost, add 1 die to the attack. If you lower it, remove 1 die from the attack.',
    },
  }),
  createRanger({
    id: 'vida_rocca_ever_changing_as_the_wind',
    name: 'Vida Rocca',
    ability: {
      name: 'Ever-Changing as the Wind',
      text: 'Once per battle, when you play an attack or maneuver card, another Ranger may discard 1 card from their hand with the same type and energy cost. If they do, your card gains the effect text of that card (in addition to its own).',
    },
  }),
  createRanger({
    id: 'udonna_reserved_strength',
    name: 'Udonna',
    ability: {
      name: 'Reserved Strength',
      text: 'Once per battle, during any Ranger attack, you may convert 1 [HIT] or [HIT][HIT] result to a [MISS] result. If you do, gain 2 [ENERGY].',
    },
  }),
  createRanger({
    id: 'leanbow_for_honor',
    name: 'Leanbow',
    ability: {
      name: 'For Honor',
      text: 'Once per battle, when any Ranger reveals a card for defense with no ★ ability, you may reveal a card from your hand and use it\'s ★  ability as though it were revealed for defense.',
    },
  }),
  createRanger({
    id: 'daggeron_',
    name: 'Daggeron',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'xander_bly_',
    name: 'Xander Bly',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'tyzonn_mercurial_force',
    name: 'Tyzonn',
    ability: {
      name: 'Mercurial Force',
      text: 'Once per battle, before any Ranger rolls any number of dice, you may use this ability. If you do, convert all [MISS] results rolled to [HIT][HIT] results and vice versa.',
    },
  }),
  createRanger({
    id: 'mack_hartford_',
    name: 'Mack Hartford',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'will_aston_',
    name: 'Will Aston',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'dax_lo_',
    name: 'Dax Lo',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'ronny_robinson_',
    name: 'Ronny Robinson',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'rose_ortiz_',
    name: 'Rose Ortiz',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'sentinel_knight_',
    name: 'Sentinel Knight',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'robert_rj_james_unorthodox_master',
    name: 'Robert “RJ” James',
    ability: {
      name: 'Unorthodox Master',
      text: 'Once per battle, after any Ranger performs a maneuver or reaction, gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'jerrod_ferocity',
    name: 'Jerrod',
    ability: {
      name: 'Ferocity',
      text: 'Once per Ranger turn, instead of playing a card, you may discard 1 card from your hand to perform an attack with 2 dice.',
    },
  }),
  createRanger({
    id: 'casey_rhodes_',
    name: 'Casey Rhodes',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'lily_chilman_',
    name: 'Lily Chilman',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'theo_martin_',
    name: 'Theo Martin',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'dominic_hargan_',
    name: 'Dominic Hargan',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'master_phant_',
    name: 'Master Phant',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'master_swoop_',
    name: 'Master Swoop',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'master_finn_',
    name: 'Master Finn',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'camille_',
    name: 'Camille',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'scott_truman_assault_burst',
    name: 'Scott Truman',
    ability: {
      name: 'Assault Burst',
      text: 'Once per battle, before rolling dice for an attack, you may add 3 dice to that attack. Skip the next Ranger turn in that battle.',
    },
  }),
  createRanger({
    id: 'flynn_mcallistair_time_burst',
    name: 'Flynn Mcallistair',
    ability: {
      name: 'Time Burst',
      text: 'Once per battle, after any Ranger turn in battle when the Rangers played exactly 1 card, they may take an additional turn. During that turn, Rangers may only play maneuver cards.',
    },
  }),
  createRanger({
    id: 'summer_landsdown_energy_butst',
    name: 'Summer Landsdown',
    ability: {
      name: 'Energy Butst',
      text: 'Once per battle, when any Ranger spends at least 3 [ENERGY] to play a card, you may deal 1 [HIT] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'ziggy_grover_erratic_teleportation',
    name: 'Ziggy Grover',
    ability: {
      name: 'Erratic Teleportation',
      text: 'At any time, yo umay discard 1 card from your hand to move your figure to an outer location of your choice. (You may use this ability in battles you are not participating in.)',
    },
  }),
  createRanger({
    id: 'dillon_defiant_defense',
    name: 'Dillon',
    ability: {
      name: 'Defiant Defense',
      text: 'Once per battle, when any Ranger reveals a card for defense, you may choose 1 card from your hand and remove it from the game. If you do, add 5 [SHIELD] to the revealed card.',
    },
  }),
  createRanger({
    id: 'doctor_k_mission_control',
    name: 'Doctor K',
    ability: {
      name: 'Mission Control',
      text: 'While your figure is in the Command Center, you may participate in battles taking place in the outer locations. If you do, you are not considered to be in the battle for the purposes of enemy card effects.',
    },
  }),
  createRanger({
    id: 'gem_',
    name: 'Gem',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'gemma_',
    name: 'Gemma',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'agent_jade_',
    name: 'Agent Jade',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'agent_knox_',
    name: 'Agent Knox',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'agent_luna_',
    name: 'Agent Luna',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'orion_legendary_sixth_ranger_mode',
    name: 'Orion',
    ability: {
      name: 'Legendary Sixth Ranger Mode',
      text: '???',
    },
  }),
  createRanger({
    id: 'lauren_shiba_true_focus',
    name: 'Lauren Shiba',
    ability: {
      name: 'True Focus',
      text: 'At the end of each battle, add 1 [ENERGY] to your personal storage (if you do not have 1 already).',
    },
  }),
  createRanger({
    id: 'jayden_shiba_',
    name: 'Jayden Shiba',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kevin_',
    name: 'Kevin',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'mia_watanabe_',
    name: 'Mia Watanabe',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'mike_',
    name: 'Mike',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'emily_',
    name: 'Emily',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'antonio_garcia_',
    name: 'Antonio Garcia',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'troy_burrows_',
    name: 'Troy Burrows',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'emma_goodall_',
    name: 'Emma Goodall',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'jake_holling_',
    name: 'Jake Holling',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'gia_moran_',
    name: 'Gia Moran',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'noah_carver_',
    name: 'Noah Carver',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'robo_knight_',
    name: 'Robo Knight',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'megaforce_green_',
    name: 'Megaforce Green',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'orion_key_of_sixth_rangers',
    name: 'Orion',
    ability: {
      name: 'Key of Sixth Rangers',
      text: 'Construct your key deck with Rangers who are not core team members. Once per Ranger turn in battle, you may discard 1 card from your hand to draw 1 card from your key deck.',
    },
  }),
  createRanger({
    id: 'troy_burrows_keys_of_red_rangers',
    name: 'Troy Burrows',
    ability: {
      name: 'Keys of Red Rangers',
      text: 'Construct your key deck with Rangers who are have a Red Charge. ???',
    },
  }),
  createRanger({
    id: 'noah_carver_keys_of_blue_rangers',
    name: 'Noah Carver',
    ability: {
      name: 'Keys of Blue Rangers',
      text: 'Construct your key deck with Rangers who are have a Blue Charge. ???',
    },
  }),
  createRanger({
    id: 'gia_moran_keys_of_yellow_rangers',
    name: 'Gia Moran',
    ability: {
      name: 'Keys of Yellow Rangers',
      text: 'Construct your key deck with Rangers who are have a Yellow Charge. ???',
    },
  }),
  createRanger({
    id: 'jake_holling_keys_of_green_rangers',
    name: 'Jake Holling',
    ability: {
      name: 'Keys of Green Rangers',
      text: 'Construct your key deck with Rangers who are have a Green Charge. ???',
    },
  }),
  createRanger({
    id: 'emma_goodall_keys_of_pink_rangers',
    name: 'Emma Goodall',
    ability: {
      name: 'Keys of Pink Rangers',
      text: 'Construct your key deck with Rangers who are have a Pink Charge. ???',
    },
  }),
  createRanger({
    id: 'orion_merry_christmas',
    name: 'Orion',
    ability: {
      name: 'Merry Christmas!',
      text: '???',
    },
  }),
  createRanger({
    id: 'tyler_navarro_it_s_about_to_get_wild',
    name: 'Tyler Navarro',
    ability: {
      name: 'It’s About to Get Wild!',
      text: 'Once per battle, at the start of any Ranger turn, any Ranger may draw 2 cards. If they do, add 2 dice to the next attack that Ranger performs during that turn.',
    },
  }),
  createRanger({
    id: 'kendall_morgan_dig_deeper',
    name: 'Kendall Morgan',
    ability: {
      name: 'Dig Deeper',
      text: 'Once per battle, any Ranger may search their deck for 1 card of their choice, then shuffle their deck and place that card on top of their deck.',
    },
  }),
  createRanger({
    id: 'heckyl_dark_price',
    name: 'Heckyl',
    ability: {
      name: 'Dark Price',
      text: 'When you would play a card from your hand, you may play the top card of your discard pile instead. If you do, you must then discard the top card of your deck.',
    },
  }),
  createRanger({
    id: 'chase_randall_',
    name: 'Chase Randall',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'koda_',
    name: 'Koda',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'riley_griffin_',
    name: 'Riley Griffin',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'shelby_watkins_',
    name: 'Shelby Watkins',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'sir_ivan_of_zandar_',
    name: 'Sir Ivan of Zandar',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'prince_phillip_iii_',
    name: 'Prince Phillip III',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'albert_smith_',
    name: 'Albert Smith',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'james_navarro_',
    name: 'James Navarro',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'zenowing_',
    name: 'Zenowing',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'hocux_pocux_',
    name: 'Hocux Pocux',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'dino_charge_navy_',
    name: 'Dino Charge Navy',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'levi_weston_rhythm_star',
    name: 'Levi Weston',
    ability: {
      name: 'Rhythm Star',
      text: 'Once per battle, after any Ranger resolves an attack or maneuver card, another Ranger may immediately play 1 card with an energy cost exactly 1 [ENERGY] higher.',
    },
  }),
  createRanger({
    id: 'brody_romero_',
    name: 'Brody Romero',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'preston_tien_',
    name: 'Preston Tien',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'calvin_maxwell_',
    name: 'Calvin Maxwell',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'hayley_foster_',
    name: 'Hayley Foster',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'sarah_thompson_',
    name: 'Sarah Thompson',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'dane_romero_',
    name: 'Dane Romero',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'mick_kanic_',
    name: 'Mick Kanic',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'ninja_steel_green_',
    name: 'Ninja Steel Green',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'devon_daniels_quick_wits',
    name: 'Devon Daniels',
    ability: {
      name: 'Quick Wits',
      text: 'Once per battle, when any Ranger suffers damage, you may draw 1 card. If you do, reduce that damage by the number of [SHIELD] on that card.',
    },
  }),
  createRanger({
    id: 'zoey_reeves_problem_solver',
    name: 'Zoey Reeves',
    ability: {
      name: 'Problem Solver',
      text: 'Once per battle, when any Ranger draws a card after the Preparation Step, gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'ravi_shaw_grid_battleforce_training',
    name: 'Ravi Shaw',
    ability: {
      name: 'Grid Battleforce Training',
      text: 'Once per battle, when any Ranger reveals a card for defense, if that card has a ★  ability, that ability resolves twice.',
    },
  }),
  createRanger({
    id: 'nate_silva_prodigy',
    name: 'Nate Silva',
    ability: {
      name: 'Prodigy',
      text: 'Once per battle, up to 2 different Rangers may each look at the top card of their deck and then may draw 1 card. You may use this ability during battles in other locations.',
    },
  }),
  createRanger({
    id: 'steel_mr_fantastic_super_handsome_strong_as_steel',
    name: 'Steel',
    ability: {
      name: 'Mr. Fantastic Super Handsome Strong as Steel',
      text: 'Once per battle, when you would draw a card, you may instead discard the top card of your deck. If you do, add 2 dice to the next attack any Ranger performs during this battle.',
    },
  }),
  createRanger({
    id: 'tyler_rinker_',
    name: 'Tyler Rinker',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'beast_morphers_black_',
    name: 'Beast Morphers Black',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'beast_morphers_green_',
    name: 'Beast Morphers Green',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'izzy_garcia_eye_of_the_tiger',
    name: 'Izzy Garcia',
    ability: {
      name: 'Eye of the Tiger',
      text: 'Once per battle, during any Ranger turn, you may use this ability instead of playing a card. Perform an attack with a number of dice equal to the number of chromafury ( [CHROMAFURY] ) icons in your hand. Then shuffle your hand into your deck and draw 2 cards.\n[CHROMAFURY] [CHROMAFURY]',
    },
  }),
  createRanger({
    id: 'zayto_',
    name: 'Zayto',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'ollie_akana_',
    name: 'Ollie Akana',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'amelia_jones_',
    name: 'Amelia Jones',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'javi_garcia_',
    name: 'Javi Garcia',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'aiyon_',
    name: 'Aiyon',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'zayto_',
    name: 'Zayto',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'tarrick_',
    name: 'Tarrick',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'dino_fury_copper_',
    name: 'Dino Fury Copper',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'zayto_',
    name: 'Zayto',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'amelia_jones_',
    name: 'Amelia Jones',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'ollie_akana_',
    name: 'Ollie Akana',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'izzy_garcia_',
    name: 'Izzy Garcia',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'javi_garcia_',
    name: 'Javi Garcia',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'aiyon_',
    name: 'Aiyon',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'fern_',
    name: 'Fern',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'ellarien_a_light_in_the_darkness',
    name: 'Ellarien',
    ability: {
      name: 'A Light in the darkness',
      text: 'Once per battle, when you add [ENERGY] from your personal storage to the shared energy pool, gain 1 [ENERGY].',
    },
  }),
  createRanger({
    id: 'andros_red_dawn',
    name: 'Andros',
    ability: {
      name: 'Red Dawn',
      text: 'Once per battle, during any Ranger turn, you may discard a card instead of playing a card. If you then have no attack cards in your hand, you may perform an attack with 3 dice.',
    },
  }),
  createRanger({
    id: 'tanya_sloan_yellow_flare',
    name: 'Tanya Sloan',
    ability: {
      name: 'Yellow Flare',
      text: 'Once per battle, when you remove any number of dice from an attack after rolling, you may deal an amount of [HIT] to an enemy card of your choice equal to the results of those dice.',
    },
  }),
  createRanger({
    id: 'heckyl_dark_of_night',
    name: 'Heckyl',
    ability: {
      name: 'Dark of Night',
      text: 'Once per battle, choose a card type: attack or maneuver. If you have no cards of that type in your hand, you may discard your entire hand, then play 2 cards of that type from your discard pile, one at a time.',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_rebel_twilight',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Rebel Twilight',
      text: 'Once per battle, after you resolve an attack, if that attack did not defeat the target, deal 1 [HIT] to the target.',
    },
  }),
  createRanger({
    id: 'mike_corbett_cold_eclipse',
    name: 'Mike Corbett',
    ability: {
      name: 'Cold Eclipse',
      text: 'Once per battle, when you discard a card for defense, you may return that card from your discard pile to your hand. If you do, discard 1 card from your hand or the bottom of your deck.',
    },
  }),
  createRanger({
    id: 'cameron_watanabe_green_zenith',
    name: 'Cameron Watanabe',
    ability: {
      name: 'Green Zenith',
      text: 'Once per battle, if Samurai Shield is in your discard pile, you may add that card to your hand.',
    },
  }),
  createRanger({
    id: 'remi_',
    name: 'Remi',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'santa_claus_bag_of_gifts',
    name: 'Santa Claus',
    ability: {
      name: 'Bag of Gifts',
      text: 'At the start of each battle, you may give 1 card from your hand to another Ranger as a gift. When another Ranger plays a card, they may reveal 1 gift, resolve it\'s [GIFT] effect, and then place it in your discard pile.',
    },
  }),
  createRanger({
    id: 'marvin_shih_determination',
    name: 'Marvin Shih',
    ability: {
      name: 'Determination',
      text: 'Once per battle, you may either discard 1 card to gain 1 [ENERGY] or spend 1 [ENERGY] to draw 1 card.',
    },
  }),
  createRanger({
    id: 'chloe_ashford_impulsive',
    name: 'Chloe Ashford',
    ability: {
      name: 'Impulsive',
      text: 'You may spend 1 [ENERGY] to take the first turn in the battle, even if there is an enemy card with the fast keyword in play.',
    },
  }),
  createRanger({
    id: 'jack_thomas_steadfast',
    name: 'Jack Thomas',
    ability: {
      name: 'Steadfast',
      text: 'Each time you suffer damage, before revealing any cards for defense, you may choose 1 card from your hand and place it on top of your deck.',
    },
  }),
  createRanger({
    id: 'eddie_banks_technician',
    name: 'Eddie Banks',
    ability: {
      name: 'Technician',
      text: 'Once per battle, a Ranger of your choice may place up to 3 cards from their hand on the bottom of their deck, then draw an equal number of cards.',
    },
  }),
  createRanger({
    id: 'vesper_vasquez_cry_havoc',
    name: 'Vesper Vasquez',
    ability: {
      name: 'Cry Havoc',
      text: 'If there are 4 or more enemy figures in your location, reduce the energy cost of all your cards by 1. (Originally - “If there are 3 or more enemy figures in your location”)',
    },
  }),
  createRanger({
    id: 'joe_shih_enduring_strength',
    name: 'Joe Shih',
    ability: {
      name: 'Enduring Strength',
      text: 'Once per battle, you may spend 1 [ENERGY] to choose 1 card from any Ranger’s discard pile and place it on the bottom of their deck.',
    },
  }),
  createRanger({
    id: 'casey_jones_',
    name: 'Casey Jones',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'leonardo_',
    name: 'Leonardo',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'raphael_',
    name: 'Raphael',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'donatello_',
    name: 'Donatello',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'michelangelo_',
    name: 'Michelangelo',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'april_o_neil_',
    name: 'April O\'Neil',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'farkas_bulk_bulkmeier_',
    name: 'Farkas "Bulk" Bulkmeier',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kiya_kyatyl_',
    name: 'Kiya Kyatyl',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'trini_kwan_',
    name: 'Trini Kwan',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'scorpina_',
    name: 'Scorpina',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_',
    name: 'Kimberly Ann Hart',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'lord_drakkon_',
    name: 'Lord Drakkon',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'lauren_shiba_',
    name: 'Lauren Shiba',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'junmor_',
    name: 'Junmor',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'markon_zhao_',
    name: 'Markon Zhao',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'valentina_',
    name: 'Valentina',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'orion_',
    name: 'Orion',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'coach_kumo_sk_gaard_',
    name: 'Coach Kumo Skøgaard',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'peggy_',
    name: 'Peggy',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'captain_magnus_storm_',
    name: 'Captain Magnus Storm',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'braylee_blackthorn_',
    name: 'Braylee Blackthorn',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'lady_penelope_prescott_',
    name: 'Lady Penelope Prescott',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'lola_navarro_',
    name: 'Lola Navarro',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'ryu_',
    name: 'Ryu',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'chun_li_',
    name: 'Chun-Li',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'ken_masters_',
    name: 'Ken Masters',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'cammy_white_',
    name: 'Cammy White',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'william_guile_',
    name: 'William Guile',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'leonardo_',
    name: 'Leonardo',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'raphael_',
    name: 'Raphael',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'donatello_',
    name: 'Donatello',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'michelangelo_',
    name: 'Michelangelo',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'april_o_neil_',
    name: 'April O\'Neil',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'daniel_larusso_',
    name: 'Daniel LaRusso',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'samantha_larusso_',
    name: 'Samantha LaRusso',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'johnny_lawrence_',
    name: 'Johnny Lawrence',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'miguel_diaz_',
    name: 'Miguel Diaz',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_',
    name: 'Kimberly Ann Hart',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'zack_taylor_',
    name: 'Zack Taylor',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'trini_kwan_',
    name: 'Trini Kwan',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'britt_',
    name: 'Britt',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'serge_',
    name: 'Serge',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'virgil_',
    name: 'Virgil',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'photon_',
    name: 'Photon',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'axe_',
    name: 'Axe',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'yellow_',
    name: 'Yellow',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'nokrea_',
    name: 'Nokrea',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'rhian_',
    name: 'Rhian',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'orisonth_',
    name: 'Orisonth',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'phiro_',
    name: 'Phiro',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'aleia_',
    name: 'Aleia',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'telosi_',
    name: 'Telosi',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'xev_',
    name: '	Xev',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'jason_lee_scott_',
    name: 'Jason Lee Scott',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'zordon_',
    name: 'Zordon',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'zack_taylor_',
    name: 'Zack Taylor',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'william_billy_cranston_',
    name: 'William "Billy" Cranston',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'cenozoic_blue_',
    name: 'Cenozoic Blue',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'trini_kwan_',
    name: 'Trini Kwan',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kimberly_hart_',
    name: 'Kimberly Hart',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'rocky_desantos_',
    name: 'Rocky DeSantos',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'aisha_campbell_',
    name: 'Aisha Campbell',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'billy_cranston_',
    name: 'Billy Cranston',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'adam_park_',
    name: 'Adam Park',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'kimberly_ann_hart_',
    name: 'Kimberly Ann Hart',
    ability: {
      name: '???',
      text: '???',
    },
  }),
  createRanger({
    id: 'tommy_oliver_',
    name: 'Tommy Oliver',
    ability: {
      name: '???',
      text: '???',
    },
  })
] as Ranger[];

export default Rangers;
