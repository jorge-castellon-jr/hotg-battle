import { useState, useEffect, useCallback } from 'react'

export const useBattleState = (initialAttack: number) => {
  const [isRolling, setIsRolling] = useState(false)
  const [rollComplete, setRollComplete] = useState(false)
  const [currentAttack, setCurrentAttack] = useState(Math.max(1, initialAttack))

  useEffect(() => {
    setCurrentAttack(Math.max(1, initialAttack))
    setIsRolling(false)
    setRollComplete(false)
  }, [initialAttack])

  const handleAddDice = useCallback(() => {
    setCurrentAttack((prev) => prev + 1)
  }, [])

  const handleRemoveDice = useCallback(() => {
    setCurrentAttack((prev) => Math.max(1, prev - 1))
  }, [])

  const handleStartRoll = () => {
    setRollComplete(false)
    // Small delay before starting the roll
    requestAnimationFrame(() => {
      setIsRolling(true)
    })
  }

  const handleRollComplete = (results: number[]) => {
    // First set isRolling to false
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
