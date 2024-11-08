import MMRedDeck from "./MightyMorphin/mmRed"
import MMBlue from "./MightyMorphin/mmBlue"
import MMGreen from "./MightyMorphin/mmGreen"
import { RangerCard } from "../Card/CardTypes"


const cardDatabase: RangerCard[] = [
  ...MMRedDeck,
  ...MMBlue,
  ...MMGreen
]

export default cardDatabase
