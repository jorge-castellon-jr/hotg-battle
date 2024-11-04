import { EnemyCard } from "../../CardTypes"
import Bosses from "./Bosses"
import FootSoldiers from "./FootSoldiers"
import Monsters from "./Monsters"


const cardDatabase: EnemyCard[] = [
  ...FootSoldiers,
  ...Monsters,
  ...Bosses,
]

export default cardDatabase
