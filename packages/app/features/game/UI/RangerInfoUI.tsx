import useGameStore, { GameState } from '../gameStateStore'
import { useEffect, useState } from 'react'
import RangerSheetContent from '../RangerStatus/RangerSheetContent'
import { BaseSheet } from './BaseSheet'

export const RangerInfoUI = () => {
  const { gameState, hideUI, selectedPosition, selectedRanger } = useGameStore()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (gameState === GameState.rangerInfo) {
      setOpen(true)
    } else setOpen(false)
  }, [gameState])

  function onOpenChange(open: boolean) {
    setOpen(open)
    hideUI()
  }

  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      {selectedPosition && (
        <RangerSheetContent ranger={selectedRanger(selectedPosition)} position={selectedPosition} />
      )}
    </BaseSheet>
  )
}
