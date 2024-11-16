import { Ranger } from '../GameTypes'
import MightyMorphinRangers from './Teams/MightyMorphinRangers'
import ZeoRangers from './Teams/ZeoRangers'

import BeastMorphersRangers from './Teams/BeastMorphersRangers'
import DinoChargeRangers from './Teams/DinoChargeRangers'
import DinoFuryRangers from './Teams/DinoFuryRangers'
import DinoThunderRangers from './Teams/DinoThunderRangers'
import HyperforceRangers from './Teams/HyperforceRangers'
import JungleFuryRangers from './Teams/JungleFuryRangers'
import LunarRangers from './Teams/LunarRangers'
import NinjaSteelRangers from './Teams/NinjaSteelRangers'
import OmegaRangers from './Teams/OmegaRangers'
import RangerOperatorSeriesRangers from './Teams/RangerOperatorSeriesRangers'
import Rangers from './Teams/Rangers'
import SpdRangers from './Teams/SpdRangers'
import SuperMegaforceRangers from './Teams/SuperMegaforceRangers'
import SuperSamuraiRangers from './Teams/SuperSamuraiRangers'
import TimeForceRangers from './Teams/TimeForceRangers'
import TurboRangers from './Teams/TurboRangers'

export default [
  // more teams later
  ...BeastMorphersRangers,
  ...DinoChargeRangers,
  ...DinoFuryRangers,
  ...DinoThunderRangers,
  ...HyperforceRangers,
  ...JungleFuryRangers,
  ...LunarRangers,
  ...NinjaSteelRangers,
  ...OmegaRangers,
  ...RangerOperatorSeriesRangers,
  ...Rangers,
  ...SpdRangers,
  ...SuperMegaforceRangers,
  ...SuperSamuraiRangers,
  ...TimeForceRangers,
  ...TurboRangers,

  ...MightyMorphinRangers,
  ...ZeoRangers,
] as Ranger[]
