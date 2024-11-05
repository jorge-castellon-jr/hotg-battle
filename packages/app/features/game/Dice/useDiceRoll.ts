import { useEffect, useRef, useState } from 'react'
import { withSequence, withSpring, withTiming } from 'react-native-reanimated'
import type { SharedValue } from 'react-native-reanimated'
import { generateDiceRolls } from './utils'
import { DiceResult } from './diceTypes'

export const useDiceRoll = (
  numDice: number,
  isRolling: boolean,
  onRollComplete: (results: number[]) => void,
  animation: SharedValue<number>
) => {
  const [diceResults, setDiceResults] = useState<DiceResult[]>([])
  const [finalResults, setFinalResults] = useState<DiceResult[]>([])
  const rollRef = useRef<NodeJS.Timeout>()
  const completeRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isRolling) {
      const finalRolls = generateDiceRolls(numDice)
      setFinalResults(finalRolls)

      animation.value = withSequence(
        withSpring(1, { damping: 10 }),
        withTiming(2, { duration: 500 }),
        withSpring(3, { damping: 15 })
      )

      rollRef.current = setInterval(() => {
        setDiceResults(generateDiceRolls(numDice))
      }, 100)

      completeRef.current = setTimeout(() => {
        if (rollRef.current) clearInterval(rollRef.current)
        setDiceResults(finalRolls)
        onRollComplete(finalRolls.map((r) => r.value))
      }, 750)
    }

    return () => {
      if (rollRef.current) clearInterval(rollRef.current)
      if (completeRef.current) clearTimeout(completeRef.current)
    }
  }, [isRolling, numDice, animation, onRollComplete])

  const totalDamage = (diceResults.length ? diceResults : finalResults).reduce(
    (sum, die) => sum + die.value,
    0
  )

  return {
    diceResults,
    finalResults,
    totalDamage,
  }
}
