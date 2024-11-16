import MightyMorphinTeam from './MightyMorphin'
import ZeoTeam from './Zeo'
import rangers from './rangers'
import { RangerCard } from '../Card/CardTypes'

const cardDatabase: RangerCard[] = [
  ...MightyMorphinTeam,
  ...ZeoTeam,
  ...rangers,
  //
]

export default cardDatabase
