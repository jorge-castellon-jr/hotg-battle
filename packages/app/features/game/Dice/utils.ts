import { DiceResult } from "./diceTypes"

export const getDiceValue = (face: number): number => {
  switch (face) {
    case 1:
    case 6:
      return 0
    case 2:
    case 3:
    case 4:
      return 1
    case 5:
      return 2
    default:
      return 0
  }
}

export const generateDiceRolls = (numDice: number): DiceResult[] => {
  return Array(numDice)
    .fill(0)
    .map(() => {
      const face = Math.floor(Math.random() * 6) + 1
      return {
        face,
        value: getDiceValue(face),
      }
    })
}
