import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const SpdRangers = [
  createRanger({
    id: 'spd_shadow_ranger_anubis_cruger',
    name: 'Anubis Cruger',
    ability: {
      name: 'Squad Commander',
      text: 'Once per battle, during any Ranger turn, you may spend 1 [b]energy[/b] to allow another Ranger to perform an attack with 3 dice instead of playing a card.',
    },
  }),
  createRanger({
    id: 'spd_red_ranger_jack_landors',
    name: 'Jack Landors',
    ability: {
      name: 'Phantom Leader',
      text: 'Once per battle, when any Ranger resolves an attack card with an energy cost of zero, you may spend 1 [b]energy[/b] to immediately play 1 card with an energy cost of zero.',
    },
  }),
  createRanger({
    id: 'spd_blue_ranger_schuyler_sky_tate',
    name: 'Schuyler "Sky" Tate',
    ability: {
      name: 'Barrier Field',
      text: 'Once per battle, when any Ranger suffers damage, you may spend 1 [b]energy[/b] to reduce that damage by 2.',
    },
  }),
  createRanger({
    id: 'spd_green_ranger_bridge_carson',
    name: 'Bridge Carson',
    ability: {
      name: 'Psychometry',
      text: 'Once per battle, you may spend 1 [b]energy[/b] to reduce the energy cost of the next card any Ranger plays by 2.',
    },
  }),
  createRanger({
    id: 'spd_yellow_ranger_elizabeth_z_delgado',
    name: 'Elizabeth "Z" Delgado',
    ability: {
      name: 'Replication',
      text: 'Once per battle, after any Ranger rolls dice for an attack, you may spend 1 [b]energy[/b] to choose 1 die result and add 1 die to the attack with the same result.',
    },
  }),
  createRanger({
    id: 'spd_pink_ranger_sydney_syd_drew',
    name: 'Sydney "Syd" Drew',
    ability: {
      name: 'Transmutation',
      text: 'Once per battle, after any Ranger rolls at least 1 [b]○[/b] result during an attack, you may spend 1 [b]energy[/b] and remove a different die from that attack to convert the [b]○[/b] result to a [b]¤¤[/b] result.',
    },
  })
] as Ranger[];

export default SpdRangers;
