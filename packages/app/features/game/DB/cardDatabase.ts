import MMRedDeck from "./MightyMorphin/mmRed"
import MMBlue from "./MightyMorphin/mmBlue"
import mmBlackZack from "./MightyMorphin/mmBlackZack"
import mmYellowTrini from "./MightyMorphin/mmYellowTrini"
import mmPinkKim from "./MightyMorphin/mmPinkKim"
import MMGreen from "./MightyMorphin/mmGreen"
import { RangerCard } from "../Card/CardTypes"


const cardDatabase: RangerCard[] = [
  ...MMRedDeck,
  ...MMBlue,
  ...MMGreen,
  ...mmBlackZack,
  ...mmYellowTrini,
  ...mmPinkKim,
]

export default cardDatabase
