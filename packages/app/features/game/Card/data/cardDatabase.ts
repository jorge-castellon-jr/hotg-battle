import { RangerCard } from '../CardTypes'
import MMRedDeck from "./MightyMorphin/mmRed"
import MMBlue from "./MightyMorphin/mmBlue"
import MMGreen from "./MightyMorphin/mmGreen"


const cardDatabase: RangerCard[] = [
  ...MMRedDeck,
  ...MMBlue,
  ...MMGreen
]

export default cardDatabase
