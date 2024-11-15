import { Ranger } from '../GameTypes'
import MightyMorphinRangers from './Teams/MightyMorphinRangers'
import ZeoRangers from './Teams/ZeoRangers'

export default [
  ...MightyMorphinRangers,
  ...ZeoRangers,
  // more teams later
] as Ranger[]
