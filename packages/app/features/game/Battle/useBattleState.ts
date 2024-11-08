import { useState, useEffect } from 'react'

export const useBattleState = (initialAttack: number) => {
  const [isRolling, setIsRolling] = useState(false)
  const [rollComplete, setRollComplete] = useState(false)
  // Ensure initial attack is at least 1
  const [currentAttack, setCurrentAttack] = useState(Math.max(1, initialAttack))

  useEffect(() => {
    // Ensure we always have at least 1 die
    setCurrentAttack(Math.max(1, initialAttack))
    setIsRolling(false)
    setRollComplete(false)
  }, [initialAttack])

  const handleAddDice = () => {
    setCurrentAttack((prev) => prev + 1)
  }

  const handleRemoveDice = () => {
    setCurrentAttack((prev) => Math.max(1, prev - 1))
  }

  const handleStartRoll = () => {
    setIsRolling(true)
    setRollComplete(false)
  }

  const handleRollComplete = (results: number[]) => {
    setIsRolling(false)
    setRollComplete(true)
    const totalDamage = results.reduce((a, b) => a + b, 0)
    console.log('Total damage:', totalDamage)
  }

  return {
    isRolling,
    rollComplete,
    currentAttack,
    handleAddDice,
    handleRemoveDice,
    handleStartRoll,
    handleRollComplete,
  }
}
