import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const RangerOperatorSeriesRangers = [
  createRanger({
    id: 'ranger_operator_series_red_scott_truman',
    name: 'Scott Truman',
    ability: {
      name: 'Assault Burst',
      text: 'Once per battle, before rolling dice for an attack, you may add 3 dice to that attack. Skip the next Ranger turn in battle.',
    },
  }),
  createRanger({
    id: 'ranger_operator_series_blue_flynn_mcallistair',
    name: 'Flynn McAllistair',
    ability: {
      name: 'Time Burst',
      text: 'Once per battle, after any Ranger turn in battle when the Rangers played exactly 1 card, they may take an additional turn. During that turn, Rangers may only play maneuver cards.',
    },
  }),
  createRanger({
    id: 'ranger_operator_series_yellow_summer_landsdown',
    name: 'Summer Landsdown',
    ability: {
      name: 'Energy Burst',
      text: 'Once per battle, when any Ranger spends at least 3 [b]energy[/b] to play a card, you may deal 1 [b]¤[/b] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'ranger_operator_series_black_dillon',
    name: 'Dillon',
    ability: {
      name: 'Defiant Defense',
      text: 'Once per battle, when any Ranger reveals a card for defense, you may choose 1 card from your hand and remove it from the game. If you do, add 5 [b]shields[/b] to the revealed card.',
    },
  }),
  createRanger({
    id: 'ranger_operator_series_green_ziggy_grover',
    name: 'Ziggy Grover',
    ability: {
      name: 'Erratic Teleportation',
      text: 'At any time, you may discard 1 card from your hand to move your figure to an outer location of your choice. (You may use this ability in battles you are not participating in.)',
    },
  })
] as Ranger[];

export default RangerOperatorSeriesRangers;
