import { Sheet } from 'tamagui'
import { ReactNode } from 'react'
import { SheetFooter } from './SheetFooter'

interface BaseSheetProps {
  children: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  disableDrag?: boolean
}

export const BaseSheet = ({ children, open, onOpenChange, disableDrag }: BaseSheetProps) => {
  return (
    <Sheet
      modal
      animation="100ms"
      open={open}
      onOpenChange={onOpenChange}
      snapPointsMode="fit"
      dismissOnSnapToBottom
      disableDrag={disableDrag}
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Handle bg="$gray8" />
      <Sheet.Frame jc="space-between" bg="$color2">
        {children}
        <SheetFooter onClose={onOpenChange} />
      </Sheet.Frame>
    </Sheet>
  )
}
